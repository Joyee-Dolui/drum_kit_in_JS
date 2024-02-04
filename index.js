//buttonpress
var no_of_drums=document.querySelectorAll(".drum").length;
for(var i=0;i<no_of_drums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        
        // this.style.color="white";
        var buttonInnerhtml=this.innerHTML;
        makeSound(buttonInnerhtml);
        buttonAnimation(buttonInnerhtml);
    });

}
//keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("Sound/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("Sound/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("Sound/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("Sound/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("Sound/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("Sound/kick.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("Sound/snare.mp3");
            snare.play();
            break;
    
        default:
            console.log(buttonInnerhtml);
            break;
    }

}

function buttonAnimation(currKey){
    var activeButton=document.querySelector("."+currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed"); 
    },100);
}
