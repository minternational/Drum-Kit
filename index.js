var soundCrash = new Audio("/sounds/crash.mp3");
var soundKickBass = new Audio("sounds/kick-bass.mp3");
var soundSnare = new Audio("sounds/snare.mp3");
var soundTom1 = new Audio("sounds/tom-1.mp3");
var soundTom2 = new Audio("sounds/tom-2.mp3");
var soundTom3 = new Audio("sounds/tom-3.mp3");
var soundTom4 = new Audio("sounds/tom-4.mp3");

var selectDrumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < selectDrumButtons.length; i++) {

  selectDrumButtons[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
};


document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key)

});


function makeSound(key) {
  
  switch (key) {
    case "w":
      soundTom1.play();
      break;
    case "a":
      soundTom2.play();
      break;
    case "s":
      soundTom3.play();
      break;
    case "d":
      soundTom4.play();
      break;
    case "j":
      soundCrash.play();
      break;
    case "k":
      soundKickBass.play();
      break;
    case "l":
      soundSnare.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  };
}


function buttonAnimation(currentKey) {
  
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}