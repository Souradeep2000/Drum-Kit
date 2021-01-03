// detecting button press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}
//this gives all the buttons    i=0, <button class="w drum">w</button>
//                              i=1, <button class="a drum">a</button>
//                              i=2 <button class="s drum">s</button>
//                              i=3 <button class="d drum">d</button>
//                              i=4 <button class="j drum">j</button>
//                              i=5 <button class="k drum">k</button>
//                              i=6 <button class="l drum">l</button>

// function  handleclick()
// {
//   this.style.color="white";   // "this"  keyword select the content of the selected ".drum" class which means the content of document.querySelectorAll("drum")[i]
//                              //   is  'W'  character
//                              //so it changes the  style  of the   w text of the  button    to     white
//                              //when it is   clicked    and called the    handleclick function.
//
// }
// inside Audio object this happens:(inbuild)
//function Audio(filelocation)
// {
//   this.filelocation=filelocation;
// this.play=function(){
//tap the hardware;
//play the audio;
//}
// }

function handleclick() {
  var contentCharacter = this.innerHTML;
  animation(contentCharacter); //whenever a button is clicked we pass the argument of content character to the animation function so that animation can happen
  switch (contentCharacter) {
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
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(contentCharacter);
  }
}


// detecting keyboard press
document.addEventListener("keypress", makesound);

function makesound() {
  var contentkey = event.key;
  animation(contentkey); ////whenever a button is clicked we pass the argument of content character to the animation function so that animation can happen
  switch (contentkey) {
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
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

      // default:
      //   console.log(contentCharacter);
  }
}
//making animation
function animation(currentKey) //got the character like "w"
{
  var activebutton = document.querySelector("." + currentKey); //concatanation of strings so that it selects the class like document.querySelector(".w")
  //adding  ".pressed" present in styles.css class invisibly
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");//function called by default setTimeout which removed animation from the button after 100
  }, 100);
}
