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
  