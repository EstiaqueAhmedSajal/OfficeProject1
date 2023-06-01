
function login(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];

  var user = registrationData.find(function (userData) {
    return userData.username === username && userData.password === password;
  });

  if (user) {
    localStorage.setItem("loggedInUser", user.id);
    window.location.href = "profile.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

var loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", login);
