(function(window){
    var speakbye= {};
    var greeting = "goodbye";
    speakbye.speak=function(name){
        console.log(greeting+" " + name);
    }
    window.speakbye=speakbye;
})(window);
