document.addEventListener("DOMContentLoaded", function () {
    var userId = localStorage.getItem("loggedInUser");
    var registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];
  
    var userIndex = registrationData.findIndex(function (userData) {
      return userData.id === userId;
    });
  
    if (userIndex !== -1) {
      var deleteButton = document.getElementById("deleteButton");
  
      deleteButton.addEventListener("click", function () {
        // Remove the user's data from the registrationData array
        registrationData.splice(userIndex, 1);
  
        // Update the local storage with the modified registrationData array
        localStorage.setItem("registrationData", JSON.stringify(registrationData));
  
        // Redirect to the index page after deleting the profile
        window.location.href = "homepage.html";
      });
    } else {
      window.location.href = "index.html";
    }
  });
  