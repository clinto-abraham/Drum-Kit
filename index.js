var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {          // loop continous through buttons
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    animation(buttonClicked);
    changeh1Orange(buttonClicked);

  });

  const card = document.querySelectorAll('.drum')[i];
      card.addEventListener('dblclick', function (e) {
        card.classList.toggle('large');
           // setTimeout(function(){              // not able to switch off toggle with respect to setTimeout
              // card.toggle("large");
           // }, 6000);
    });
}
function makeSound(keySound) {

  switch (keySound) {
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
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    break;
    case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;

    default:
        console.log("buttonClicked");
  }
}

function changeh1Orange(buttonClicked){
   $("h1").css("color", "orange"); // it tiggers the change in h1 element color on clicks. Have used jQuery
   setTimeout(function() {
        $("h1").css("color", "#DBEDF3");
      //  $("h1").addClass("h1PressedReturn");     // not able to addclass here
   }, 1000);
}

  $(document).keydown(function(event){     // it changes takes keyboards inputs on the h1 element.
      makeSound(event.key);
      $("h1").text(event.key);
      setTimeout(function(){
          var h1title = $("#title");
          h1title.text('Drum 🥁 Kit');
          // h1title.addClass("h1PressedReturn");   //toggleClass
      }, 1000);
      console.log($("h1").text(event.key));
   });

 // double click on buttons to enlarge it
  // toggle - switch between classes.

function animation(buttonClicked){   // animation done with respect to css change of class & function keyword setTimeout
   var activeButton = document.querySelector("." + buttonClicked);
   activeButton.classList.add("pressed");
       setTimeout(function(){
       document.querySelector("." + buttonClicked).classList.remove("pressed");
   },200);
 }                                   // setTimeout comes handy with miliseconds to remove or do other function
