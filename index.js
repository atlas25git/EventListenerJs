var ndb = document.querySelectorAll(".drum").length;

for(var i=0;i<ndb;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
   
         var btn = this.innerHTML;
         makesound(btn);ba(btn);

        

});//if we'd have pased fn with () it'd have outrightly run

}
document.addEventListener("keypress",function(event){
    makesound(event.key);ba(event.key);
})

function makesound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

                case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                
                case "k":
                    var tom5 = new Audio("sounds/crash.mp3");
                    tom5.play();
                    break;
                
                case "l":
                        var tom6 = new Audio("sounds/kick-bass.mp3");
                        tom6.play();
                        break
                default:
                    console.log(btn);
     }
}

function ba(ck){
    var ab =document.querySelector("."+ ck);
    ab.classList.add("pressed");

    setTimeout(function() {
        ab.classList.remove("pressed");
    },100);
}
// var audio = new Audio("sounds/tom-2.mp3");
// audio.play();