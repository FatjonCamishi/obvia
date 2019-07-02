
//Template literal for global App style
const appStyle = `
/* Style the buttons */

/* Style the active class (and buttons on mouse-over) */
.active, .hovered {
  background-color: #D6EAF8  ;
  color: white; 
  cursor: pointer;
}
.ew-resize {cursor: ew-resize !important;}
.ns-resize {cursor: ns-resize !important;}

.h-1 {height:1% !important}.h-2 {height:2% !important}.h-3 {height:3% !important}.h-4 {height:4% !important}.h-5 {height:5% !important}.h-6 {height:6% !important}.h-7 {height:7% !important}.h-8 {height:8% !important}.h-9 {height:9% !important}.h-10 {height:10% !important}.h-11 {height:11% !important}.h-12 {height:12% !important}.h-13 {height:13% !important}.h-14 {height:14% !important}.h-15 {height:15% !important}.h-16 {height:16% !important}.h-17 {height:17% !important}.h-18 {height:18% !important}.h-19 {height:19% !important}.h-20 {height:20% !important}.h-21 {height:21% !important}.h-22 {height:22% !important}.h-23 {height:23% !important}.h-24 {height:24% !important}.h-25 {height:25% !important}.h-26 {height:26% !important}.h-27 {height:27% !important}.h-28 {height:28% !important}.h-29 {height:29% !important}.h-30 {height:30% !important}.h-31 {height:31% !important}.h-32 {height:32% !important}.h-33 {height:33% !important}.h-34 {height:34% !important}.h-35 {height:35% !important}.h-36 {height:36% !important}.h-37 {height:37% !important}.h-38 {height:38% !important}.h-39 {height:39% !important}.h-40 {height:40% !important}.h-41 {height:41% !important}.h-42 {height:42% !important}.h-43 {height:43% !important}.h-44 {height:44% !important}.h-45 {height:45% !important}.h-46 {height:46% !important}.h-47 {height:47% !important}.h-48 {height:48% !important}.h-49 {height:49% !important}.h-50 {height:50% !important}.h-51 {height:51% !important}.h-52 {height:52% !important}.h-53 {height:53% !important}.h-54 {height:54% !important}.h-55 {height:55% !important}.h-56 {height:56% !important}.h-57 {height:57% !important}.h-58 {height:58% !important}.h-59 {height:59% !important}.h-60 {height:60% !important}.h-61 {height:61% !important}.h-62 {height:62% !important}.h-63 {height:63% !important}.h-64 {height:64% !important}.h-65 {height:65% !important}.h-66 {height:66% !important}.h-67 {height:67% !important}.h-68 {height:68% !important}.h-69 {height:69% !important}.h-70 {height:70% !important}.h-71 {height:71% !important}.h-72 {height:72% !important}.h-73 {height:73% !important}.h-74 {height:74% !important}.h-75 {height:75% !important}.h-76 {height:76% !important}.h-77 {height:77% !important}.h-78 {height:78% !important}.h-79 {height:79% !important}.h-80 {height:80% !important}.h-81 {height:81% !important}.h-82 {height:82% !important}.h-83 {height:83% !important}.h-84 {height:84% !important}.h-85 {height:85% !important}.h-86 {height:86% !important}.h-87 {height:87% !important}.h-88 {height:88% !important}.h-89 {height:89% !important}.h-90 {height:90% !important}.h-91 {height:91% !important}.h-92 {height:92% !important}.h-93 {height:93% !important}.h-94 {height:94% !important}.h-95 {height:95% !important}.h-96 {height:96% !important}.h-97 {height:97% !important}.h-98 {height:98% !important}.h-99 {height:99% !important}.h-100 {height:100% !important}
.mh-1 {max-height:1% !important}.mh-2 {max-height:2% !important}.mh-3 {max-height:3% !important}.mh-4 {max-height:4% !important}.mh-5 {max-height:5% !important}.mh-6 {max-height:6% !important}.mh-7 {max-height:7% !important}.mh-8 {max-height:8% !important}.mh-9 {max-height:9% !important}.mh-10 {max-height:10% !important}.mh-11 {max-height:11% !important}.mh-12 {max-height:12% !important}.mh-13 {max-height:13% !important}.mh-14 {max-height:14% !important}.mh-15 {max-height:15% !important}.mh-16 {max-height:16% !important}.mh-17 {max-height:17% !important}.mh-18 {max-height:18% !important}.mh-19 {max-height:19% !important}.mh-20 {max-height:20% !important}.mh-21 {max-height:21% !important}.mh-22 {max-height:22% !important}.mh-23 {max-height:23% !important}.mh-24 {max-height:24% !important}.mh-25 {max-height:25% !important}.mh-26 {max-height:26% !important}.mh-27 {max-height:27% !important}.mh-28 {max-height:28% !important}.mh-29 {max-height:29% !important}.mh-30 {max-height:30% !important}.mh-31 {max-height:31% !important}.mh-32 {max-height:32% !important}.mh-33 {max-height:33% !important}.mh-34 {max-height:34% !important}.mh-35 {max-height:35% !important}.mh-36 {max-height:36% !important}.mh-37 {max-height:37% !important}.mh-38 {max-height:38% !important}.mh-39 {max-height:39% !important}.mh-40 {max-height:40% !important}.mh-41 {max-height:41% !important}.mh-42 {max-height:42% !important}.mh-43 {max-height:43% !important}.mh-44 {max-height:44% !important}.mh-45 {max-height:45% !important}.mh-46 {max-height:46% !important}.mh-47 {max-height:47% !important}.mh-48 {max-height:48% !important}.mh-49 {max-height:49% !important}.mh-50 {max-height:50% !important}.mh-51 {max-height:51% !important}.mh-52 {max-height:52% !important}.mh-53 {max-height:53% !important}.mh-54 {max-height:54% !important}.mh-55 {max-height:55% !important}.mh-56 {max-height:56% !important}.mh-57 {max-height:57% !important}.mh-58 {max-height:58% !important}.mh-59 {max-height:59% !important}.mh-60 {max-height:60% !important}.mh-61 {max-height:61% !important}.mh-62 {max-height:62% !important}.mh-63 {max-height:63% !important}.mh-64 {max-height:64% !important}.mh-65 {max-height:65% !important}.mh-66 {max-height:66% !important}.mh-67 {max-height:67% !important}.mh-68 {max-height:68% !important}.mh-69 {max-height:69% !important}.mh-70 {max-height:70% !important}.mh-71 {max-height:71% !important}.mh-72 {max-height:72% !important}.mh-73 {max-height:73% !important}.mh-74 {max-height:74% !important}.mh-75 {max-height:75% !important}.mh-76 {max-height:76% !important}.mh-77 {max-height:77% !important}.mh-78 {max-height:78% !important}.mh-79 {max-height:79% !important}.mh-80 {max-height:80% !important}.mh-81 {max-height:81% !important}.mh-82 {max-height:82% !important}.mh-83 {max-height:83% !important}.mh-84 {max-height:84% !important}.mh-85 {max-height:85% !important}.mh-86 {max-height:86% !important}.mh-87 {max-height:87% !important}.mh-88 {max-height:88% !important}.mh-89 {max-height:89% !important}.mh-90 {max-height:90% !important}.mh-91 {max-height:91% !important}.mh-92 {max-height:92% !important}.mh-93 {max-height:93% !important}.mh-94 {max-height:94% !important}.mh-95 {max-height:95% !important}.mh-96 {max-height:96% !important}.mh-97 {max-height:97% !important}.mh-98 {max-height:98% !important}.mh-99 {max-height:99% !important}.mh-100 {max-height:100% !important}
.w-1 {width:1% !important}.w-2 {width:2% !important}.w-3 {width:3% !important}.w-4 {width:4% !important}.w-5 {width:5% !important}.w-6 {width:6% !important}.w-7 {width:7% !important}.w-8 {width:8% !important}.w-9 {width:9% !important}.w-10 {width:10% !important}.w-11 {width:11% !important}.w-12 {width:12% !important}.w-13 {width:13% !important}.w-14 {width:14% !important}.w-15 {width:15% !important}.w-16 {width:16% !important}.w-17 {width:17% !important}.w-18 {width:18% !important}.w-19 {width:19% !important}.w-20 {width:20% !important}.w-21 {width:21% !important}.w-22 {width:22% !important}.w-23 {width:23% !important}.w-24 {width:24% !important}.w-25 {width:25% !important}.w-26 {width:26% !important}.w-27 {width:27% !important}.w-28 {width:28% !important}.w-29 {width:29% !important}.w-30 {width:30% !important}.w-31 {width:31% !important}.w-32 {width:32% !important}.w-33 {width:33% !important}.w-34 {width:34% !important}.w-35 {width:35% !important}.w-36 {width:36% !important}.w-37 {width:37% !important}.w-38 {width:38% !important}.w-39 {width:39% !important}.w-40 {width:40% !important}.w-41 {width:41% !important}.w-42 {width:42% !important}.w-43 {width:43% !important}.w-44 {width:44% !important}.w-45 {width:45% !important}.w-46 {width:46% !important}.w-47 {width:47% !important}.w-48 {width:48% !important}.w-49 {width:49% !important}.w-50 {width:50% !important}.w-51 {width:51% !important}.w-52 {width:52% !important}.w-53 {width:53% !important}.w-54 {width:54% !important}.w-55 {width:55% !important}.w-56 {width:56% !important}.w-57 {width:57% !important}.w-58 {width:58% !important}.w-59 {width:59% !important}.w-60 {width:60% !important}.w-61 {width:61% !important}.w-62 {width:62% !important}.w-63 {width:63% !important}.w-64 {width:64% !important}.w-65 {width:65% !important}.w-66 {width:66% !important}.w-67 {width:67% !important}.w-68 {width:68% !important}.w-69 {width:69% !important}.w-70 {width:70% !important}.w-71 {width:71% !important}.w-72 {width:72% !important}.w-73 {width:73% !important}.w-74 {width:74% !important}.w-75 {width:75% !important}.w-76 {width:76% !important}.w-77 {width:77% !important}.w-78 {width:78% !important}.w-79 {width:79% !important}.w-80 {width:80% !important}.w-81 {width:81% !important}.w-82 {width:82% !important}.w-83 {width:83% !important}.w-84 {width:84% !important}.w-85 {width:85% !important}.w-86 {width:86% !important}.w-87 {width:87% !important}.w-88 {width:88% !important}.w-89 {width:89% !important}.w-90 {width:90% !important}.w-91 {width:91% !important}.w-92 {width:92% !important}.w-93 {width:93% !important}.w-94 {width:94% !important}.w-95 {width:95% !important}.w-96 {width:96% !important}.w-97 {width:97% !important}.w-98 {width:98% !important}.w-99 {width:99% !important}.w-100 {width:100% !important}
.mw-1 {max-width:1% !important}.mw-2 {max-width:2% !important}.mw-3 {max-width:3% !important}.mw-4 {max-width:4% !important}.mw-5 {max-width:5% !important}.mw-6 {max-width:6% !important}.mw-7 {max-width:7% !important}.mw-8 {max-width:8% !important}.mw-9 {max-width:9% !important}.mw-10 {max-width:10% !important}.mw-11 {max-width:11% !important}.mw-12 {max-width:12% !important}.mw-13 {max-width:13% !important}.mw-14 {max-width:14% !important}.mw-15 {max-width:15% !important}.mw-16 {max-width:16% !important}.mw-17 {max-width:17% !important}.mw-18 {max-width:18% !important}.mw-19 {max-width:19% !important}.mw-20 {max-width:20% !important}.mw-21 {max-width:21% !important}.mw-22 {max-width:22% !important}.mw-23 {max-width:23% !important}.mw-24 {max-width:24% !important}.mw-25 {max-width:25% !important}.mw-26 {max-width:26% !important}.mw-27 {max-width:27% !important}.mw-28 {max-width:28% !important}.mw-29 {max-width:29% !important}.mw-30 {max-width:30% !important}.mw-31 {max-width:31% !important}.mw-32 {max-width:32% !important}.mw-33 {max-width:33% !important}.mw-34 {max-width:34% !important}.mw-35 {max-width:35% !important}.mw-36 {max-width:36% !important}.mw-37 {max-width:37% !important}.mw-38 {max-width:38% !important}.mw-39 {max-width:39% !important}.mw-40 {max-width:40% !important}.mw-41 {max-width:41% !important}.mw-42 {max-width:42% !important}.mw-43 {max-width:43% !important}.mw-44 {max-width:44% !important}.mw-45 {max-width:45% !important}.mw-46 {max-width:46% !important}.mw-47 {max-width:47% !important}.mw-48 {max-width:48% !important}.mw-49 {max-width:49% !important}.mw-50 {max-width:50% !important}.mw-51 {max-width:51% !important}.mw-52 {max-width:52% !important}.mw-53 {max-width:53% !important}.mw-54 {max-width:54% !important}.mw-55 {max-width:55% !important}.mw-56 {max-width:56% !important}.mw-57 {max-width:57% !important}.mw-58 {max-width:58% !important}.mw-59 {max-width:59% !important}.mw-60 {max-width:60% !important}.mw-61 {max-width:61% !important}.mw-62 {max-width:62% !important}.mw-63 {max-width:63% !important}.mw-64 {max-width:64% !important}.mw-65 {max-width:65% !important}.mw-66 {max-width:66% !important}.mw-67 {max-width:67% !important}.mw-68 {max-width:68% !important}.mw-69 {max-width:69% !important}.mw-70 {max-width:70% !important}.mw-71 {max-width:71% !important}.mw-72 {max-width:72% !important}.mw-73 {max-width:73% !important}.mw-74 {max-width:74% !important}.mw-75 {max-width:75% !important}.mw-76 {max-width:76% !important}.mw-77 {max-width:77% !important}.mw-78 {max-width:78% !important}.mw-79 {max-width:79% !important}.mw-80 {max-width:80% !important}.mw-81 {max-width:81% !important}.mw-82 {max-width:82% !important}.mw-83 {max-width:83% !important}.mw-84 {max-width:84% !important}.mw-85 {max-width:85% !important}.mw-86 {max-width:86% !important}.mw-87 {max-width:87% !important}.mw-88 {max-width:88% !important}.mw-89 {max-width:89% !important}.mw-90 {max-width:90% !important}.mw-91 {max-width:91% !important}.mw-92 {max-width:92% !important}.mw-93 {max-width:93% !important}.mw-94 {max-width:94% !important}.mw-95 {max-width:95% !important}.mw-96 {max-width:96% !important}.mw-97 {max-width:97% !important}.mw-98 {max-width:98% !important}.mw-99 {max-width:99% !important}.mw-100 {max-width:100% !important}
`;
var oxana = new App({
    style:appStyle
}); 

var zeroCool = {
        constructor: Container,
        props: {
            id: 'zeroCool',
            components:[
                {
                    constructor: Container,
                    props: {
                        id: '',
                        type: ContainerType.ROW,
                        height: 800,
                        components:[
                            {
                                constructor: Container,
                                props: {
                                    id: '',
                                    type: ContainerType.COLUMN,
                                    spacing: {colSpan:3},
                                    classes:["border"],
                                    components:[
                                        {
                                            constructor: Container,
                                            props: {
                                                spacing: {h:100},
                                                components:[
                                                    {
                                                        constructor: Container,
                                                        props: {
                                                            id: '',
                                                            type: ContainerType.ROW,
                                                            spacing: {h:10},
                                                            components:[
                                                                {
                                                                    constructor: Container,
                                                                    props: {
                                                                        type: ContainerType.COLUMN,
                                                                        spacing: {colSpan:12, h:100},
                                                                        id: 'toolBar',
                                                                        classes:["border"],
                                                                        components:[
                                                                            {
                                                                                constructor: Button,
                                                                                props: {
                                                                                    id: 'splitHorizontal',
                                                                                    type: "button",
                                                                                    components: [{
                                                                                        constructor: Label,
                                                                                        props: {
                                                                                            id: 'fa',
                                                                                            labelType: LabelType.i,
                                                                                            classes: ["fas","fa-columns","fa-rotate-270"]
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            },
                                                                            {
                                                                                constructor: Button,
                                                                                props: {
                                                                                    id: 'splitVertical',
                                                                                    type: "button",
                                                                                    components: [{
                                                                                        constructor: Label,
                                                                                        props: {
                                                                                            id: 'fa',
                                                                                            labelType: LabelType.i,
                                                                                            classes: ["fas","fa-columns"]
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            },
                                                                            {
                                                                                constructor: Button,
                                                                                props: {
                                                                                    id: 'saveLayout',
                                                                                    type: "button",
                                                                                    components: [{
                                                                                        constructor: Label,
                                                                                        props: {
                                                                                            id: 'fa',
                                                                                            labelType: LabelType.i,
                                                                                            classes: ["fas","fa-save"]
                                                                                        }
                                                                                    }]
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    },
                                                    {
                                                        constructor: Container,
                                                        props: {
                                                            id: '',
                                                            type: ContainerType.ROW,
                                                            spacing: {h:90},
                                                            components:[
                                                                {
                                                                    constructor: Container,
                                                                    props: {
                                                                        type: ContainerType.COLUMN,
                                                                        spacing: {colSpan:12, h:100},
                                                                        id: 'historySteps',
                                                                        classes:["border"],
                                                                        components:[
                                                                            {
                                                                                constructor: List,
                                                                                props: {
                                                                                    id: 'listHistorySteps',
                                                                                    direction: 'vertical',
                                                                                    multiselect: false,
                                                                                    dataProvider: oxana.history.steps,
                                                                                    valueField: "id",
                                                                                    classesField: "listItemClass",
                                                                                    defaultClasses: [],
                                                                                    selectedClasses: ["active"],    
                                                                                    component: {
                                                                                        constructor: Label,
                                                                                        props: {
                                                                                            id: 'labelHistoryStep',
                                                                                            value: "{id}",
                                                                                            label: "{description}",
                                                                                            classes: "{?listItemClass}"
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]    
                                }
                            },
                            {
                                constructor: Container,
                                props: {
                                    type: ContainerType.COLUMN,
                                    spacing: {colSpan:9},    
                                    id: "snowCrash",
                                    components:[
                                        {
                                            constructor: Container,
                                            props: {
                                                spacing: {h:100},
                                                components:[
                                                    {
                                                        constructor: Container,
                                                        props: {
                                                            id: '',
                                                            type: ContainerType.ROW,
                                                            spacing: {h:100},
                                                            components:[
                                                                {
                                                                    constructor: Container,
                                                                    props: {
                                                                        type: ContainerType.COLUMN,
                                                                        spacing: {colSpan:12, h:100},
                                                                        id: 'workArea',
                                                                        classes:["border"]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }                        
                }
            ]
        }
    };

oxana.components = [
        {
            constructor: ViewStack,
            props: {
                components: [zeroCool]
            }
        }        
    ];

var waBehaviors = {
    "click": "BECOME_ACTIVE",
    "mouseover": "WA_HOVER",
    "mouseout": "WA_HOVER",
    "mousemove": {
        "WA_RESIZE_NS": isMouseMoveNS
    },
    "contextmenu": "WA_REMOVE"
};

oxana.behaviors["splitHorizontal"] = {};
oxana.behaviors["splitHorizontal"]["click"] = "SPLIT_HOR";

oxana.behaviors["splitVertical"] = {};
oxana.behaviors["splitVertical"]["click"] = "SPLIT_VERT";

oxana.behaviors["saveLayout"] = {};
oxana.behaviors["saveLayout"]["click"] = "SAVE_LAYOUT";

oxana.behaviors["listHistorySteps"] = {};
oxana.behaviors["listHistorySteps"]["change"] = "HISTORY_STEP_DETAILS";

oxana.behaviors["workArea"] = waBehaviors;

oxana.behaviors[oxana.rootID]["keydown"] = {
    "WA_UNDO":isKeyCombUndo,
    "WA_REDO":isKeyCombRedo,
};

oxana.behaviorimplementations["HISTORY_STEP_DETAILS"] = function(e){
    console.log("called HISTORY_STEP_DETAILS.");
};

oxana.behaviorimplementations["HISTORY_STEP_ADDED"] = function(e){
    console.log("called HISTORY_STEP_ADDED.", e.current);
    Component.instances["listHistorySteps"].value = e.current;

};
oxana.behaviorimplementations["HISTORY_UNDONE"] = function(e){
    console.log("called HISTORY_UNDONE.");
    Component.instances["listHistorySteps"].value = e.previous;

};

oxana.behaviorimplementations["HISTORY_REDONE"] = function(e){
    console.log("called HISTORY_REDONE.");
    Component.instances["listHistorySteps"].value = e.next;
};

oxana.behaviorimplementations["SPLIT_HOR"] = {
    description: "Split selected container horizontally",
    do:function(e) {
        var retFromRedoMaybe = arguments[arguments.length-1];
        if(retFromRedoMaybe.container){
            activeContainer = retFromRedoMaybe.container;
            console.log("called SPLIT_HOR from History(REDO).");
        }
        console.log("Split Selected Container Horizontally");
        var ret = {track:false};
        var newRow = {
                constructor: Container,
                props: {
                    id: '',
                    type: ContainerType.ROW,
                    spacing: {h:100, m:"auto"},
                    components:[
                        {
                            constructor: Container,
                            props: {
                                type: ContainerType.COLUMN,
                                spacing: {colSpan:12, h:100}, 
                                id: 'workArea',
                                classes:["border"]
                            }
                        }
                    ]
                }
            };
        var newRow2;
        if(activeContainer.components.length==0)
        {
            newRow2 = extend(true, newRow);
        }
        var newRowInstance = activeContainer.addComponent(newRow);
        var newWorkArea = newRowInstance.children[newRowInstance.components[0].props.id];
        oxana.behaviors[newWorkArea.id] = waBehaviors;
    // oxana.behaviors[newWorkArea.id]["mousemove"]["WA_RESIZE_EW"] = isMouseMoveEW;
        //{filter: isMouseMoveEw, otherProperties...}

        if(activeContainer.components.length==1)
        {
            var newRowInstance2 = activeContainer.addComponent(newRow2);
            var newWorkArea2 = newRowInstance2.children[newRowInstance2.components[0].props.id];
            oxana.behaviors[newWorkArea2.id] = waBehaviors;
            ret.child2 = newRowInstance2;
        }

        ret.child = newRowInstance;
        ret.parent = activeContainer;
        ret.container = activeContainer;
        childrenAutoHeight(activeContainer);
        return ret;
    },
    undo:function(){
        console.log("Undo SPLIT_HOR ", arguments);
        /**
         *  Params that we get here:
         *  p.event original parameters of the event that caused this behavior
         *  p.filterReturn optional: return value of filter function
         *  p.behaviorReturn return value of the behavior implementation function
         * */
        /** 
         * what if every component generates its undo action for every action called on its instance
        */
        /**
         * ret.container = container;
                    ret.child = this.parent; */
        var ret = arguments[arguments.length-1];
        ret.parent.removeChild(ret.child);
        if(ret.child2){
            ret.parent.removeChild(ret.child2);
        }
        childrenAutoHeight(ret.parent);
    }
};

oxana.behaviorimplementations["SPLIT_VERT"] = {
    description: "Split selected container vertically",
    do:function(e) {
        var retFromRedoMaybe = arguments[arguments.length-1];
        if(retFromRedoMaybe.container){
            activeContainer = retFromRedoMaybe.container;
            console.log("called SPLIT_VERT from History(REDO).");
        }
        console.log("Split Selected Container Vertically");
        var ret = {track:false};
        var newCell = {
            constructor: Container,
            props: {
                type: ContainerType.COLUMN,
                spacing: {colSpan:12, h:100}, 
                id: 'workArea',
                classes:["border"]
            }
        };
        var row_len = activeContainer.components.length;
        var toAdd = newCell;
        var parent;
        var children_len = 2;
        
        if(row_len == 0)
        {
            var newCell2 = extend(true, newCell);
            
            //.spacing.colSpan count children and distribute 12 units of space to them. the last child gets the reminder
            var toAdd = {
                constructor: Container,
                props: {
                    id: '',
                    type: ContainerType.ROW,
                    spacing: {h:100, m:"auto"},
                    components:[newCell, newCell2]
                }
            };
            parent =  activeContainer;
        }else
        {
            parent =  activeContainer.children[activeContainer.components[0].props.id];
            children_len = parent.components.length;
        } 
        if(children_len<12)
        {    
            var newInstance = parent.addComponent(toAdd);
            var row =  activeContainer.children[activeContainer.components[0].props.id];
            children_len = row.components.length;

            var colSpan = Math.floor(12/children_len);  
            var delta = 12 - colSpan*children_len;
            var i = 0;    
            for(var childID in row.children){
                ++i;
                if(i==children_len-1)
                    row.children[childID].spacing.colSpan = colSpan+delta;
                else
                    row.children[childID].spacing.colSpan = colSpan;
                var workArea = row.children[childID];    
                //var workArea = cell.children[cell.components[0].props.id];
                oxana.behaviors[workArea.id] = waBehaviors;
            } 
            ret.parent = parent;
            ret.child = newInstance;
            ret.container = activeContainer;
            ret.track = true;
        }else
        {
            alert("You may have up to 12 columns for each row.");
        }
        return ret;
    },
    undo:function(){
        console.log("Undo SPLIT_VERT ", arguments);
        /**
         *  Params that we get here:
         *  p.event original parameters of the event that caused this behavior
         *  p.filterReturn optional: return value of filter function
         *  p.behaviorReturn return value of the behavior implementation function
         * */
        /** 
         * what if every component generates its undo action for every action called on its instance
        */
        /**
         * ret.container = container;
                    ret.child = this.parent; */
        var ret = arguments[arguments.length-1];
        ret.parent.removeChild(ret.child);
        childrenAutoWidth(ret.parent);
    }
};

var activeContainer;
oxana.behaviorimplementations["BECOME_ACTIVE"] = {
    do:function(e) {
            console.log("Container Became active");
            //this will holde the instance of the component who manifested this behavior (the manifestor)
            if(activeContainer && activeContainer!=this && activeContainer.classes.indexOf("active")>-1){
                activeContainer.toggle = false;
                var classes = activeContainer.classes.slice(0);
                classes.toggle("active");
                activeContainer.classes = classes;
            }
            this.toggle = false;
            var classes = this.classes.slice(0);
            classes.pushUnique("active");
            this.classes = classes;
            activeContainer = this;
        },
        stopPropagation:true
    };

oxana.behaviorimplementations["WA_HOVER"] = {
    do:function(e) {
            console.log("Container hovered "+this.id);
            //this will holde the instance of the component who manifested this behavior (the manifestor)
            this.toggle = false;
            var classes = this.classes.slice(0);
            classes.toggle("hovered");
            this.classes = classes;
        },
        stopPropagation:true
    };

oxana.behaviorimplementations["WA_RESIZE_NS"] = {
    do:function(e) {
        console.log("Container Resize NS");
      
    },
    stopPropagation:true
};
oxana.behaviorimplementations["WA_RESIZE_EW"] = {
    do:function(e) {
        console.log("Container Resize EW");
      
    },
    stopPropagation:true
};
oxana.behaviorimplementations["WA_REMOVE"] = {
    do:function(e) {
        var retFromRedoMaybe = arguments[arguments.length-1];
        if(retFromRedoMaybe.container){
            console.log("called WA_REMOVE from History(REDO).");
        }
        var ret = {track:false};
        console.log("Container REMOVE ", arguments);
        var c = true;
        if(this.components.length>0){
            c = confirm("Container has children, still want to remove ?");
        }
        if(c){
            if(this.parent.parent.components.length==1)
            {
                if(this.parent.components.length>2){
                    var row = this.parent;
                    row.removeChild(this);
                    childrenAutoWidth(row);
                    ret.track = true;
                    ret.container = row;
                    ret.child = this;
                    ret.removeType = "COLUMN"; 
                }else{

                }
                console.log("column ", this.parent.components.length);
                //this.parent.components
            }else{
                if(this.parent.parent.components.length>2){
                    var container = this.parent.parent;
                    container.removeChild(this.parent);
                    childrenAutoHeight(container);
                    ret.track = true;
                    ret.container = container;
                    ret.child = this.parent;
                    ret.removeType = "ROW"; 
                }else{

                }
                console.log("row ", this.parent.parent.components.length);
            }
            
        }
        e.preventDefault();
        return ret;
    },
    undo:function(){
        console.log("Undo WA_REMOVE ", arguments);
        /**
         *  Params that we get here:
         *  p.event original parameters of the event that caused this behavior
         *  p.filterReturn optional: return value of filter function
         *  p.behaviorReturn return value of the behavior implementation function
         * */
        /** 
         * what if every component generates its undo action for every action called on its instance
        */
         /**
          * ret.container = container;
                    ret.child = this.parent; */
        var ret = arguments[arguments.length-1];
        ret.container.addChild(ret.child);
        if(ret.removeType=="COLUMN"){
            childrenAutoWidth(ret.container);
        }else{
            childrenAutoHeight(ret.container);
        }
    },
    stopPropagation:true
};

oxana.behaviorimplementations["SAVE_LAYOUT"] = {
    do:function(e) {
        var snowCrash = Component.instances["snowCrash"];
        var jsonLayout = JSON.stringify(snowCrash.literal, null, "\t");
        download("snowCrash.json.txt", jsonLayout); 
    },
    stopPropagation:true
};

oxana.behaviorimplementations["WA_UNDO"] = {
    do:function(e) {
        console.log("UNDO");
        oxana.history.undo();
    },
    stopPropagation:false
};
oxana.behaviorimplementations["WA_REDO"] = {
    do:function(e) {
        console.log("REDO");
        oxana.history.redo();
    },
    stopPropagation:false
};
oxana.registerBehaviors();
oxana.init();


//filter to determine if mousemove is an "WA_RESIZE_NS" behavior
var debouncedDragNS;
var d0;
function isMouseMoveNS(e){
    if(((e.which && e.which==1) || (e.buttons && e.buttons==1)) && (this.parent.parent.components.length>=2 || this.parent.components.length>=2))
    {
        var manifestor = this;
        var classes = manifestor.classes.slice(0);
        classes = classes.difference(["ns-resize", "ew-resize"]);
            
        if(d0 && !debouncedDragNS)
        {    
            if(Math.abs(d0.y-e.pageY) > Math.abs(d0.x-e.pageX)) 
            {
                classes.pushUnique("ns-resize");
            }else
            {
                classes.pushUnique("ew-resize");
            }
            manifestor.classes = classes;
        }
        d0 = { x: e.pageX, y: e.pageY };
        
        if(!debouncedDragNS){
            var p0 = { x: e.pageX, y: e.pageY };
            console.log("prior of debounced");
            console.log(p0);
            debouncedDragNS = debounce(function(evt){
                console.log("debounced");
                var p1 = { x: evt.pageX, y: evt.pageY};
                console.log(p0);
                console.log(p1);
                var dy = p1.y - p0.y;
                var dx = p1.x - p0.x;
                if(dy!=0 && manifestor.parent.parent.components.length>=2){
                    dy = -dy;
                    var mpi = indexOfObject(manifestor.parent.parent.components, "props.id",  manifestor.parent.id);
                    if(mpi==manifestor.parent.parent.components.length-1)
                    {
                        dy = -dy;
                        --mpi;
                    }
                    else
                        ++mpi; 
                    
                    var ha = manifestor.parent.$el.height();
                    var ha_rel = Math.floor(manifestor.parent.spacing.h * dy / ha);
                    manifestor.parent.spacing.h = manifestor.parent.spacing.h - ha_rel;
                    
                    var sibling_id = manifestor.parent.parent.components[mpi].props.id;
                    manifestor.parent.parent.children[sibling_id].spacing.h += ha_rel;
                }
                if(dx!=0 && manifestor.parent.components.length>=2){
                    dx = -dx;
                    var mpi = indexOfObject(manifestor.parent.components, "props.id",  manifestor.id);
                    if(mpi==manifestor.parent.components.length-1)
                    {
                        dx = -dx;
                        --mpi;
                    }
                    else
                        ++mpi; 

                    var wa = manifestor.$el.width();
                    var wa_rel = Math.floor(manifestor.spacing.colSpan * dx / wa);
                    manifestor.spacing.colSpan = manifestor.spacing.colSpan - wa_rel;
                    
                    var sibling_id = manifestor.parent.components[mpi].props.id;
                    manifestor.parent.children[sibling_id].spacing.colSpan += wa_rel;
                }
                console.log("Vertical drag of :", dy, manifestor.$el.height());
                
                debouncedDragNS = null;

                var classes = manifestor.classes.slice(0);
                classes = classes.difference(["ns-resize", "ew-resize"]);
                //classes.splice(i, 1);
                manifestor.classes = classes;
            }, 500);
        }
        debouncedDragNS(e);
        return true;
        //{qualifies, extraArgs}
        // extraArgs array with additional arguments to be passed to the behavior implementation/do
    }else
    {
       // var i = this.classes.indexOf("ns-resize")
       // if(i>0){
            var classes = this.classes.slice(0);
            classes = classes.difference(["ns-resize", "ew-resize"]);
            //classes.splice(i, 1);
            this.classes = classes;
        //}

    }
}

//behavior can cause another behavior (throws custom event, so we may avoid filter functions...)

function isKeyCombUndo(e){
    if ((e.keyCode == 90 || e.keyCode == 122) && ((Env.getInstance().current == EnvType.MAC && e.metaKey && !e.shiftKey) || e.ctrlKey)) {
        console.log("KeyCombination CTR+Z Here");
        e.preventDefault();
        e.stopPropagation();
        return true;
    }
}

function isKeyCombRedo(e){
    if (((e.keyCode == 89 || e.keyCode == 121) && e.ctrlKey) || ((Env.getInstance().current == EnvType.MAC && e.metaKey && e.shiftKey) && (e.keyCode == 90 || e.keyCode == 122))) {
        console.log("KeyCombination CTR+Y Here");
        e.preventDefault();
        e.stopPropagation();
        return true;
    }
}

//utility functions
function childrenAutoWidth(container){
    var children_len = container.components.length;
    var colSpan = Math.floor(12/children_len);  
    var delta = 12 - colSpan*children_len;
    var i = 0;    
    for(var childID in container.children){
        ++i;
        if(i==children_len-1)
            container.children[childID].spacing.colSpan = colSpan+delta;
        else
            container.children[childID].spacing.colSpan = colSpan;
    }
}
function childrenAutoHeight(container){
    var children_len = container.components.length;
    var height = Math.floor(100/children_len);  
    var delta = 100 - height*children_len;
    var i = 0;
    for(var childID in container.children){
        ++i;
        if(i==children_len-1)
            container.children[childID].spacing.h = height+delta;
        else
            container.children[childID].spacing.h = height;
    } 
}