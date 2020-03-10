var ApiClientGen = function (_props) {
    let _defaultParams = {
        url: "yaml_url",
        requestBodyParamMode:1
    };
    _props = extend(false, false, _defaultParams, _props);
    /**
     * When request contains more than one body parameter, we have two options:
     * 1- generated method will have only one parameter wrapping all params as type members and the type name for this object will be following method+RequestBody+path naming convention
     * 2- generated method will have as many params as the request specifies, they will be wrapped in an object before the request is sent
     */
    let requestBodyParamMode = _props.requestBodyParamMode;
    
    get(_props.url).then(function (r) {
        let oas = YAML.parse(r.response);
        _generate(oas);
    });
    let apiTemplate = `var {apiTitle} = function(){
        let _server = "{server}";
        Object.defineProperty(this, "server", {
            get: function server() {
                return _server;
            },
            set: function server(x) {
                if (_server != x) {
                    _server = x;
                }
            }
        });
{paths}
{pathInstances}
    }`;
    let pathTemplate = `\tvar {path} = function(apiClient) { 
        apiClient = apiClient || new ApiClient();
        /*{typeMap}*/
        {methods}
        
        OAMethod.call(this, apiClient);
        this.basePath = _server + "{basePath}";
    };`;
    
    let methodTemplate = `
    {methodDoc}
    \tthis.{methodName} = function({params}){
        let objQuery = {};
{strObjQuery}
        let objPath = {};
{strObjPath}
        let objBody = {objBody};
        let requestContentType = "{requestContentType}";
        let responses = {responses};
        return new Promise((resolve, reject) =>
        {
            \tthis.apiCall(objQuery, objBody, objPath, requestContentType, "{methodName}").then(function(resp){
                if(responses[resp.status]){
                    let responseType = responses[resp.status].responseType.toLowerCase();
                    let ret;
                    switch(responseType)
                    {
                        case "json":
                            ret = JSON.parse(resp.response);
                            break;
                    }
                    //TODO: convert to specified type
                    resolve(ret);
                }else//unspecified http response code returned
                    reject();
            }).catch(function(error){
                reject(error);
            });
        });
    \t};\r`;
    //({})
    //getChainValue per marjen e $ref
    let typeNames = [];
    let types = "";
    let _generate = function (oas) {
        let strClosures = "", pathInstances = "";
        let typeMap = {};
        let url = oas.servers[0].url;
        let apiTitle = oas.info.title;
        for (let path in oas.paths) {
            let strMethods = "";
            typeMap[path] = {};
            let responses = {};
            for (let method in oas.paths[path]) {
                typeMap[path][method] = {};
                let strObjQuery = "";
                let objBody = null;
                let strObjPath = "";
                let params = [];
                    
                let methodDoc = "\t/**\r\n\t\t*" + oas.paths[path][method].summary + "\r\n";
                if (oas.paths[path][method].parameters) {
                    let pLen = oas.paths[path][method].parameters.length;
                    for (let i = 0; i < pLen; i++) {
                        let param = oas.paths[path][method].parameters[i];
                        params.push(param.name);
                        typeMap[path][method][param.name] = {};
                        if (param.in == "query") {
                            strObjQuery += `\t\tobjQuery["${param.name}"] = ${param.name};\r\n`;
                        } else if (param.in == "path") {
                            strObjPath += `\t\tobjPath["${param.name}"] = ${param.name};\r\n`;
                        } else
                            console.log("unsupported parameter.in: value");
                        methodDoc += "\t\t* @param {" + param.schema.type + "} " + param.name + " " + param.description + "\r\n";
                    }
                }
                let requestContentType = "application/json";
                if (oas.paths[path][method].requestBody && oas.paths[path][method].requestBody.content) {
                    for (let ct in oas.paths[path][method].requestBody.content) {
                        requestContentType = ct.toLowerCase();
                        let typeInfo;
                        //TODO: emer me intuitive per parametrin, rastin me $ref
                        if (oas.paths[path][method].requestBody.content[ct].schema) {
                            typeInfo = oas.paths[path][method].requestBody.content[ct].schema;
                        } else if (oas.paths[path][method].requestBody.content[ct].$ref) {
                            let typePath = oas.paths[path][method].requestBody.content[ct].$ref;
                            let typeChain = typePath.split('/');
                            typeChain.shift();
                            typeInfo = getChainValue(oas, typeChain);
                            typeInfo.title = typeInfo.title || typeChain.last();
                        }
                        let typeDefined = typeInfo.title != null;
                        typeInfo.title = typeInfo.title || convertToCamelCase(method + "RequestBody" + "_" + path.split("/").last());
                        typeInfo.type = typeInfo.type || "object";
                        if ((requestBodyParamMode == 2 || !typeDefined) && typeInfo.type == "object") { 
                            let wrapParams = "";
                            for (let prop in typeInfo.properties) { 
                                wrapParams = wrapParams == "" ? wrapParams : wrapParams + ",";
                                params.push(prop);
                                if (typeInfo.properties[prop].type == "object") { 
                                    let memberTypeInfo = typeInfo.properties[prop];
                                    if (typeNames.indexOf(memberTypeInfo.title) < 0) {
                                        let t = _parseType(oas, memberTypeInfo);
                                        if (t.typeNames.length > 0)
                                            typeNames.splicea(typeNames.length, 0, t.typeNames);
                                        types += t.types;
                                    }
                                    methodDoc += "\t\t* @param {" + memberTypeInfo.title + "} " + prop + " " + typeInfo.properties[prop].description + "\r\n";                              
                                } else if (typeInfo.properties[prop].$ref) {
                                    let typePath = typeInfo.properties[prop].$ref;
                                    let typeChain = typePath.split('/');
                                    typeChain.shift();
                                    let memberTypeInfo = getChainValue(oas, typeChain);
                                    memberTypeInfo.title = memberTypeInfo.title || typeChain.last();    
                                    if (typeNames.indexOf(memberTypeInfo.title) < 0) {
                                        let t = _parseType(oas, memberTypeInfo);
                                        if (t.typeNames.length > 0)
                                            typeNames.splicea(typeNames.length, 0, t.typeNames);
                                        types += t.types;
                                    }
                                    methodDoc += "\t\t* @param {" + memberTypeInfo.title + "} " + prop + " " + typeInfo.properties[prop].description || memberTypeInfo.description + "\r\n";                                                    
                                } else
                                    methodDoc += "\t\t* @param {" + typeInfo.properties[prop].type + "} " + prop + " " + typeInfo.properties[prop].description + "\r\n";
                                wrapParams += "\"" + prop + "\":" + prop;
                            }
                            objBody = wrapParams = "{" + wrapParams + "}";
                        } else if (requestBodyParamMode == 1) {
                            let props = Object.keys(typeInfo.properties);
                            if (props.length == 1) {
                                typeInfo = typeInfo.properties[props[0]];
                                typeInfo.title = typeInfo.title || props[0];
                                objBody = '{"'+typeInfo.title+'":'+ typeInfo.title +'}';
                            } else if ((typeInfo.type == "object" && typeDefined) || typeInfo.type == "array") {
                                objBody = '{"'+typeInfo.title+'":'+ typeInfo.title +'}';
                            }
                            else { 
                                objBody = typeInfo.title;
                            }
                            if (typeNames.indexOf(typeInfo.title) < 0) {
                                let t = _parseType(oas, typeInfo);
                                if (t.typeNames.length > 0)
                                    typeNames.splicea(typeNames.length, 0, t.typeNames);
                                types += t.types;
                            }
                            methodDoc += "\t\t* @param {" + typeInfo.title + "} " + typeInfo.title + " The request body for " + method + " " + path + " \r\n";
                            params.push(typeInfo.title);
                           
                        }
                    }
                }
                if (oas.paths[path][method].responses) {
                    for (let r in oas.paths[path][method].responses) {
                        for (let ct in oas.paths[path][method].responses[r].content) {
                            let typeInfo;
                            if (oas.paths[path][method].responses[r].content[ct].schema) {
                                typeInfo = oas.paths[path][method].responses[r].content[ct].schema;
                            } else if (oas.paths[path][method].responses[r].content[ct].$ref) {
                                let typePath = oas.paths[path][method].responses[r].content[ct].$ref;
                                let typeChain = typePath.split('/');
                                typeChain.shift();
                                typeInfo = getChainValue(oas, typeChain);
                                typeInfo.title = typeInfo.title || typeChain.last();
                            }
                            responses[r] = { "responseType": ct, "type": typeInfo.title };
                            if (typeNames.indexOf(typeInfo.title) < 0) {
                                let t = _parseType(oas, typeInfo);
                                if (t.typeNames.length > 0)
                                    typeNames.splicea(typeNames.length, 0, t.typeNames);
                                types += t.types;
                            }
                        }
                    }
                }
                //FixMe
                methodDoc += "\t\t* @returns {Promise} ";
                methodDoc += "\r\n\t\t*/";
                let arrMethod = method.split("/");
                let methodName = arrMethod.last();
                
                strMethods += methodTemplate.formatUnicorn({ "methodName": methodName, "methodDoc": methodDoc, "params": params.join(","), "requestContentType": requestContentType, "strObjQuery": strObjQuery, "objBody": objBody, "strObjPath": strObjPath, "responses": JSON.stringify(responses) });
            }
            let arrPath = path.split("/");
            let pathName = arrPath.last();
            let basePath = (url[url.length - 1] != '/' && path[0] != '/' ? '/' : '') + path;
            strClosures += pathTemplate.formatUnicorn({ "path": pathName, "methods": strMethods, "basePath": basePath }) + "\r\n";
            pathInstances += `\t this.${pathName}Client = new ${pathName}();\r\n`;
        }
        let apiSrc = types +"\r\n" + apiTemplate.formatUnicorn({ "apiTitle": apiTitle.replace(/ /g, ''), "paths": strClosures, "pathInstances": pathInstances, "server": url});
        
        console.log(apiSrc);
        //download(apiTitle.replace(/ /g, '') + ".js", apiSrc); 
        eval(apiSrc);
        var api = new GaiaAPI();
        // var u = api.usersClient.get(1);
        // var l = api.loginClient.post("admin", "admin");
        // var l2 = api.loginClient.post("test", "test");
        let inst = new user();
        //inst.user_id = ;
		inst.username = "apiUser";
		inst.password = "apiUser";
		inst.id_role = 1;
		inst.name = "Anony";
		inst.surname = "Mous";
		inst.avatar = "pic.png";
		inst.email = "anony@mous.com";
        var u = api.usersClient.post(inst);
    };
    let _oasjsMap = { "integer": "Number", "string": "String" };
    let _typeTemplate = `
    /**
{jsDoc}
    */
    var {typeName} = function(_props){
{properties}
    };`;
    let _propDocTemplate = "\t* @property {{jsType}}  {prop}               - {description}\r\n";
    let _propTemplate = "\t\tthis.{prop} = _props.{prop};\r\n";
    let _arrTypeTemplate = `var {typeName} = function()
{
    let r = ArrayEx.apply(this, arguments);
    r.memberType = {allowedTypes}; 
    return r;
}`;
    //TODO: Add Validation Ex:minimum, maximum for number & pattern for string
    /**
     * 
     * @param {*} oas 
     * @param {*} typeInfo 
     */
    let _parseType = function (oas, typeInfo, propName) {
        let jsDoc = "";
        let properties = "";
        
        let jsType = _oasjsMap[typeInfo.type];
        if (!jsType)
            jsType = typeInfo.type;
        let description = typeInfo.description ? typeInfo.description : "";
        let myTypeNames = [];
        let types = "";
        propName = propName || typeInfo.title;
        if (typeInfo.type == "object") {
            if (typeNames.indexOf(propName) < 0) {
                jsType = propName;
                myTypeNames.push(propName);
                for (let prop in typeInfo.properties) {
                    let r = _parseType(oas, typeInfo.properties[prop], prop);
                    jsDoc += r.jsDoc;
                    properties += r.properties;
                    types += r.types.length > 0 ? r.types + "\r\n" : "";
                    if (r.typeNames.length > 0) {
                        myTypeNames.splicea(myTypeNames.length, 0, r.typeNames);
                    }
                }
                types += _typeTemplate.formatUnicorn({ "jsDoc": jsDoc, "typeName": propName, "properties": properties }) + "\r\n";
            }
        } else if (typeInfo.type == "array") {
            let allowedTypes = [];
            if (typeInfo.items.oneOf) {
                for (let i = 0; i < typeInfo.items.oneOf.length; i++) { 
                    for (let prop in typeInfo.items.oneOf[i]) { 
                        if (prop == "$ref" || typeInfo.items.oneOf[i][prop] == "object") {
                            let r = _parseType(oas, typeInfo.items.oneOf[i]);
                            types += r.types.length > 0 ? r.types + "\r\n" : "";
                            if (r.typeNames.length > 0) {
                                myTypeNames.splicea(myTypeNames.length, 0, r.typeNames);
                            }
                        } else { 
                            allowedTypes.push(_oasjsMap[typeInfo.items.oneOf[i][prop]]);
                        }
                    }
                }
            } else {
                let r = _parseType(oas, typeInfo.items);
                types += r.types.length > 0 ? r.types + "\r\n" : "";
                if (r.typeNames.length > 0) {
                    myTypeNames.splicea(myTypeNames.length, 0, r.typeNames);
                }
            }
            allowedTypes.splicea(allowedTypes.length, 0, myTypeNames);
            types += _arrTypeTemplate.formatUnicorn({"typeName":propName, "allowedTypes": JSON.stringify(allowedTypes)}) + "\r\n";
        }
        else if (typeInfo.$ref) {
            let typePath = typeInfo.$ref;
            let typeChain = typePath.split('/');
            typeChain.shift();
            typeInfo = getChainValue(oas, typeChain);
            description = typeInfo.description;
            jsType = typeChain.last();
            if (typeNames.indexOf(propName) < 0) {
                let r = _parseType(oas, typeInfo, propName);
                types += r.types.length > 0 ? r.types + "\r\n" : "";
                //+ _typeTemplate.formatUnicorn({"jsDoc":r.jsDoc, "typeName": propName, "properties":r.properties});
                if (r.typeNames.length > 0) {
                    myTypeNames.splicea(myTypeNames.length, 0, r.typeNames);
                }
            }
        }
        properties = _propTemplate.formatUnicorn({ "prop": propName });
        jsDoc = _propDocTemplate.formatUnicorn({ "jsType": jsType, "prop": propName, "description": description });
        return { "properties": properties, "jsDoc": jsDoc, "types": types, "typeNames": myTypeNames };
    };
};
