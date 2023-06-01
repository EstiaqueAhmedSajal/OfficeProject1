document.addEventListener("DOMContentLoaded", function () {
  var userId = localStorage.getItem("loggedInUser");
  var registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];

  var user = registrationData.find(function (userData) {
    return userData.id === userId;
  });

  if (user) {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var dobInput = document.getElementById("dob");
    var genderInputs = document.querySelectorAll("input[name=gender]");
    var countryInput = document.getElementById("country");
    var aboutInput = document.getElementById("about");

    // Pre-fill the form fields with the user's existing data
    firstNameInput.value = user.firstName;
    lastNameInput.value = user.lastName;
    usernameInput.value = user.username;
    emailInput.value = user.email;
    dobInput.value = user.dob;
    countryInput.value = user.country;
    aboutInput.value = user.about;

    // Set the selected gender
    for (var i = 0; i < genderInputs.length; i++) {
      if (genderInputs[i].value === user.gender) {
        genderInputs[i].checked = true;
        break;
      }
    }

    var editForm = document.getElementById("editForm");

    editForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Update the user's information in the registrationData array
      user.firstName = firstNameInput.value;
      user.lastName = lastNameInput.value;
      user.username = usernameInput.value;
      user.email = emailInput.value;
      user.dob = dobInput.value;
      user.gender = document.querySelector("input[name=gender]:checked").value || "";
      user.country = countryInput.value;
      user.about = aboutInput.value;

      // Update the local storage with the modified registrationData array
      localStorage.setItem("registrationData", JSON.stringify(registrationData));

      // Redirect to the profile page after saving the changes
      window.location.href = "profile.html";
    });
  } else {
    window.location.href = "homepage.html";
  }
});
