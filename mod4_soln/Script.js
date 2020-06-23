(function(){
var names = ["jason","neha","ashi","kriti","jack","jill","jaspreet"];
for(var i=0;i<names.length;i++){
    var firstletter = names[i].charAt(0).toLowerCase();
    if(firstletter === 'j'){
        speakbye.speak(names[i]);
    }else{
        speakhello.speak(names[i]);
    }

}
})();
