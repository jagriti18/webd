(function(window){
    var speakhello = {};
    var greeting = "hello";
    speakhello.speak=function(name){
        console.log(greeting+" " + name);
    }
    window.speakhello=speakhello;
})(window);

