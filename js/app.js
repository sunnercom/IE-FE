"use strict"
//Ro'yhatdan o'tish qismi
document.addEventListener("DOMContentLoaded", function() {
    let signupForm = document.getElementById("signup-form");
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let name = document.getElementById("name").value;
      let number = document.getElementById("number").value;
      let email = document.getElementById("email").value;

      console.log("Ism:", name);
      console.log("raqam:", number);
      console.log("email:", email);
  
      alert("Ro'yhatdan o'tildi!");
    });
  });
  


// Timer chegirma
var startTime = Date.now();

var startHours = 10;
var startMinutes = 10;
var startSeconds = 10;

var hours = startHours;
var minutes = startMinutes;
var seconds = startSeconds;


var hoursDisplay = document.getElementById('hours');
var minutesDisplay = document.getElementById('minutes');
var secondsDisplay = document.getElementById('seconds');


var timer = setInterval(function() {

  var currentTime = Date.now();

  var elapsedTime = currentTime - startTime;

  var reverseTime = (startHours * 3600 + startMinutes * 60 + startSeconds) * 1000 - elapsedTime;

  hours = Math.floor(reverseTime / (1000 * 60 * 60));
  minutes = Math.floor((reverseTime % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((reverseTime % (1000 * 60)) / 1000);

  hoursDisplay.textContent = pad(hours);
  minutesDisplay.textContent = pad(minutes);
  secondsDisplay.textContent = pad(seconds);

  if (reverseTime <= 0) {
    clearInterval(timer);
  }
}, 1000);

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

