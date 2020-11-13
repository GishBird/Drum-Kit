//button section
let drumsArray = document.querySelectorAll("button");

drumsArray.forEach(function (button) {

  button.addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  })
});
//keydown section

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);


});
// drum sound function

function makeSound(key) {

  switch (key) {
    case "w":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;
    case "d":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "j":
      var tomone = new Audio('sounds/tom-1.mp3');
      tomone.play();
      break;
    case "k":
      var tomtwo = new Audio('sounds/tom-2.mp3');
      tomtwo.play();
      break;
    case "l":
      var tomthree = new Audio('sounds/tom-3.mp3');
      tomthree.play();
      break;
    case "a":
      var tomfour = new Audio('sounds/tom-4.mp3');
      tomfour.play();
      break;
    case "s":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

  }
}

//animation section

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
