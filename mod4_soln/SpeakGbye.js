(function(window){
    var speakbye= {};
    var greeting = "goodbye";
    speakbye.wave=function(name){
        console.log(greeting+" " + name);
    }
    window.speakbye=speakbye;
})(window);