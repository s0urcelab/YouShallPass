// debounce
var delay = {
    execute: function(cb, arg) {
        cb(arg);
        delete this.timeoutID;
    },
    start: function(cb, arg, delay) {
        this.cancel();
        var self = this;
        this.timeoutID = window.setTimeout(function() { self.execute(cb, arg); }, delay);
    },
    cancel: function() {
        if (typeof this.timeoutID == "number") {
            window.clearTimeout(this.timeoutID);
            delete this.timeoutID;
        }
    }
};

/**
 * YouShallPass constructor;
 * @param {String} pattern [pattern string]
 * @param {int} delay [delay time (ms)]
 */
function YouShallPass(pattern, delay) {
    // set pattern
    if(typeof pattern === "string"){
        this.pattern = pattern;
    }else{
        console.warn("pattern is not string");
    }

    // set delay
    if(typeof delay === "number" && delay > 0){
        this.delay = delay;
    }else if(delay ){
        console.warn("delay is not positive number");
    }
}

YouShallPass.prototype = {
    // password input real value
    realText: "",
    // fix ie9 oninput 'delete' key fire bug
    fixIE9: function() {
        (function(d) {
            if (navigator.userAgent.indexOf('MSIE 9') === -1) return;

            d.addEventListener('selectionchange', function() {
                var el = d.activeElement;

                if (el.tagName === 'TEXTAREA' || (el.tagName === 'INPUT' && el.type === 'text')) {
                    var ev = d.createEvent('CustomEvent');
                    ev.initCustomEvent('input', true, true, {});
                    el.dispatchEvent(ev);
                }
            });
        })(document);
    },
    // password mask pattern generator
    pointGen: function(pattern, num) {
        return Array.apply(null, Array(num)).map(function() { return pattern }).join("")
    },

    delayEffect: function(arg) {
        arg.value = this.pointGen(this.pattern, arg.value.length);
    },
    // oninput handle
    keyboardInputHandle: function(e) {
        var preVal = this.realText;
        // insert cursor location
        var index = e.target.selectionStart;
        var nowVal = e.target.value;
        // increase length of input's value
        var incre = nowVal.length - preVal.length;  
        
        // increase text
        if (incre > 0) {
            var newStr = nowVal.slice(index - incre, index);
            this.realText = preVal.slice(0, index - incre) + newStr + preVal.slice(index - incre)
        // delete text
        } else if (incre < 0) {
            this.realText = preVal.slice(0, index) + preVal.slice(index - incre);
        }

        // render mask effect
        if (nowVal.length > 0) {
            e.target.value = this.pointGen(this.pattern, nowVal.length - 1) + nowVal.charAt(nowVal.length - 1);
            delay.start(this.delayEffect.bind(this), e.target, this.delay);
        }
        // reset insert cursor location
        e.target.setSelectionRange(index, index);
        // console.log(this.realText);
    }
}
