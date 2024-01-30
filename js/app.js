document.addEventListener("DOMContentLoaded", function() {
    var signupForm = document.getElementById("signup-form");
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Saqlanishni to'xtatish
  
      var name = document.getElementById("name").value;
      var email = document.getElementById("number").value;
      var password = document.getElementById("email").value;
  
      // Foydalanuvchi ma'lumotlarini console-da chiqarish
      console.log("Ism:", name);
      console.log("raqam:", email);
      console.log("email:", password);
  
      // Ma'lumotlar to'g'ri ko'rsatilsa, ro'yhatdan o'tilgan deb tasdiqlang
      alert("Ro'yhatdan o'tildi!");
    });
  });
  