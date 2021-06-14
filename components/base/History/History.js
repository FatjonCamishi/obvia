//persist in cache :) 
import { ArrayEx } from "/flowerui/lib/ArrayEx.js";
import { StringUtils } from "/flowerui/lib/StringUtils.js";
import { EventDispatcher } from "/flowerui/lib/EventDispatcher.js";
import { ObjectUtils } from "/flowerui/lib/ObjectUtils.js";
import { ChangeWatcher } from "/flowerui/lib/binding/ChangeWatcher.js";

var History = function(_props)
{ 
    this.$el = $(this);
    let _defaultParams = {
        cacheProps: {enabled:false, cachedVariableName: null}
    };
    _props = ObjectUtils.fromDefault(_defaultParams, _props);
    //_props = ObjectUtils.extend(false, false, _defaultParams, _props);
    let _cacheProps = _props.cacheProps;
    if(_cacheProps.enabled)
	{
        _cache = Cache.getInstance();
    }
    
    let _steps = new ArrayEx();
    let _currentIndex = -1;
    let _id = StringUtils.guid();
    Object.defineProperty(this, "id", {
        get: function id()
        {
            return _id;
        }
    });

    let w = ChangeWatcher.getInstance(_steps);
    w.watch(_steps, "length", function(e){
        //e.oldValue e.newValue
        console.log("qweeqweqw");
    });

    Object.defineProperty(this, "currentIndex", {
        get: function currentIndex()
        {
            return _currentIndex;
        }
    });

    Object.defineProperty(this, "steps", {
        get: function steps()
        {
            return _steps;
        }
    });

    this.track = function(behavior, behaviorName, ret, thisObj, args){
        if(behavior.undo && typeof behavior.undo == 'function' && ((ObjectUtils.isObject(ret) && ret.track) || ret===true)){
            let step = new HistoryStep();
            step.behaviorName = behaviorName; 
            step.behavior = behavior;
            if(ObjectUtils.isObject(ret)){
                step.description = ret.description || behavior.description;
                step.stepType = ret.stepType || behavior.stepType;
            }
            step.thisObj = thisObj;
            step.args = args;
            if(_steps.length>0 && _currentIndex<_steps.length-1)
            {
                //ketu ne currentIndex < length beji splice nga currentIndex e deri ne length
                _steps.splice(Math.max(_currentIndex+1,0), _steps.length - Math.max(_currentIndex,0)- 1 );
            }
            step.retObj = ret;
            _steps.push(step);
            ++_currentIndex;

            let eventObject = $.Event(HistoryEventType.HISTORY_STEP_ADDED);
            eventObject.current = step;
            this.trigger(eventObject);

            eventObject = $.Event(HistoryEventType.HISTORY_CAN_UNDO);
            this.trigger(eventObject);
        }
    }

    this.clear = function(){
        _steps.splice(0, _steps.length);
        let eventObject = $.Event(HistoryEventType.HISTORY_NO_MORE_UNDO);
        this.trigger(eventObject);
        eventObject = $.Event(HistoryEventType.HISTORY_NO_MORE_REDO);
        this.trigger(eventObject);
    }
    
    this.redo = function(){
        if(_steps.length > 0 && _currentIndex+1 >= 0 && _currentIndex < _steps.length-1)
        {
            ++_currentIndex;
            let step = _steps[_currentIndex];
            let behavior = step.behavior;
            if(behavior.do && typeof behavior.do == 'function'){
                _steps[_currentIndex].retObj = behavior.do.apply(step.thisObj, step.args.concat(step.retObj));

                let redoEventObject = $.Event(HistoryEventType.HISTORY_REDONE);
                redoEventObject.redone = step;
                redoEventObject.next = ((_currentIndex+1 >= 0 && _currentIndex < _steps.length-1)?_steps[_currentIndex+1]:null);
                this.trigger(redoEventObject);

                let eventObject = $.Event(HistoryEventType.HISTORY_CAN_UNDO);
                this.trigger(eventObject);
            }
        }else{
            console.log("Nothing to redo.");
            let eventObject = $.Event(HistoryEventType.HISTORY_NO_MORE_REDO);
            this.trigger(eventObject);
        }
    }

    this.undo = function(){
        if(_steps.length > 0 && _currentIndex>=0 && _currentIndex <= _steps.length-1)
        {
            let step = _steps[_currentIndex];
            let behavior = step.behavior;
            if(behavior.undo && typeof behavior.undo == 'function'){
                behavior.undo.apply(step.thisObj, step.args.concat(step.retObj));
            }
            --_currentIndex;
            let undoEventObject = $.Event(HistoryEventType.HISTORY_UNDONE);
            undoEventObject.undone = step;
            undoEventObject.previous = (_currentIndex>=0?_steps[_currentIndex]:null);
            this.trigger(undoEventObject);

            let eventObject = $.Event(HistoryEventType.HISTORY_CAN_REDO);
            this.trigger(eventObject);
        }else{
            console.log("Nothing to undo.");
            let eventObject = $.Event(HistoryEventType.HISTORY_NO_MORE_UNDO);
            this.trigger(eventObject);
        }
    }
}

History.instances = {};
History.getInstance = function(instName)
{
    let instance = History.instances[instName];
    if(!instance)
        instance = History.instances[instName] = new History();
    return instance;
}     
History.prototype = Object.create(EventDispatcher.prototype);
let HistoryEventType =
{
    "HISTORY_STEP_ADDED": "HISTORY_STEP_ADDED",
    "HISTORY_NO_MORE_UNDO": "HISTORY_NO_MORE_UNDO",
    "HISTORY_NO_MORE_REDO": "HISTORY_NO_MORE_REDO",
    "HISTORY_CAN_REDO": "HISTORY_CAN_REDO",
    "HISTORY_CAN_UNDO": "HISTORY_CAN_UNDO",
    "HISTORY_REDONE": "HISTORY_REDONE",
    "HISTORY_UNDONE": "HISTORY_UNDONE"
};
let HistoryStep = function (_props) {
    let _id = StringUtils.guid();
    this.behaviorName = "";
    this.description = "";
    this.stepType = 1; //2 type of change Minor/Major
    this.date = new Date();
    this.args;
    this.thisObj;
    this.retObj;

    Object.defineProperty(this, "id", {
        get: function id() {
            return _id;
        }
    });
};
export {
    History, HistoryStep, HistoryEventType
};