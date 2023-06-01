// document.addEventListener("DOMContentLoaded", function () {
//     var userId = localStorage.getItem("loggedInUser");
//     var registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];
  
//     var user = registrationData.find(function (userData) {
//       return userData.id === userId;
//     });
  
//     if (user) {
//       var profileData = document.getElementById("profileData");
//       var userHtml = `
//         <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
//         <p><strong>Username:</strong> ${user.username}</p>
//         <p><strong>Email:</strong> ${user.email}</p>
//         <p><strong>Date of Birth:</strong> ${user.dob}</p>
//         <p><strong>Gender:</strong> ${user.gender}</p>
//         <p><strong>Country:</strong> ${user.country}</p>
//         <p><strong>About:</strong> ${user.about}</p>
//       `;
//       profileData.innerHTML = userHtml;
  
//       var editButton = document.getElementById("editButton");
//       editButton.addEventListener("click", function () {
//         // Redirect to the edit page with the user ID as a query parameter
//         window.location.href = "edit.html?id=" + user.id;
//       });
  
//       var deleteButton = document.getElementById("deleteButton");
//       deleteButton.addEventListener("click", function () {
//         // Prompt user for confirmation before deleting the data
//         var confirmDelete = confirm("Are you sure you want to delete your data?");
//         if (confirmDelete) {
//           // Find the index of the user in the registrationData array
//           var userIndex = registrationData.findIndex(function (userData) {
//             return userData.id === user.id;
//           });
  
//           // Remove the user from the registrationData array
//           registrationData.splice(userIndex, 1);
  
//           // Update the local storage with the modified registrationData array
//           localStorage.setItem("registrationData", JSON.stringify(registrationData));
  
//           // Redirect to the login page after deleting the data
//           window.location.href = "homepage.html";
//         }
//       });
//     } else {
//       window.location.href = "homepage.html";
//     }
//   });
  


document.addEventListener("DOMContentLoaded", function () {
  var userId = localStorage.getItem("loggedInUser");
  var registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];

  var user = registrationData.find(function (userData) {
    return userData.id === userId;
  });

  if (user) {
    var firstNameElement = document.getElementById("firstName");
    var lastNameElement = document.getElementById("lastName");
    var usernameElement = document.getElementById("username");
    var emailElement = document.getElementById("email");
    var dobElement = document.getElementById("dob");
    var genderElement = document.getElementById("gender");
    var countryElement = document.getElementById("country");
    var aboutElement = document.getElementById("about");
    var editButton = document.getElementById("editButton");
    var editForm = document.getElementById("editForm");

    // Display user data on the profile page
    firstNameElement.textContent = user.firstName;
    lastNameElement.textContent = user.lastName;
    usernameElement.textContent = user.username;
    emailElement.textContent = user.email;
    dobElement.textContent = user.dob;
    genderElement.textContent = user.gender;
    countryElement.textContent = user.country;
    aboutElement.textContent = user.about;

    // Function to toggle between view and edit mode
    function toggleEditMode() {
      if (editForm.style.display === "none") {
        // Switch to edit mode
        editForm.style.display = "block";
        editButton.textContent = "Cancel";
      } else {
        // Switch to view mode
        editForm.style.display = "none";
        editButton.textContent = "Edit";
      }
    }

    // Event listener for the edit button
    editButton.addEventListener("click", toggleEditMode);

    // Event listener for the form submission
    editForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Update user data with the edited values
      user.firstName = document.getElementById("firstNameInput").value;
      user.lastName = document.getElementById("lastNameInput").value;
      user.username = document.getElementById("usernameInput").value;
      user.email = document.getElementById("emailInput").value;
      user.dob = document.getElementById("dobInput").value;
      user.gender = document.querySelector("input[name=gender]:checked").value;
      user.country = document.getElementById("countryInput").value;
      user.about = document.getElementById("aboutInput").value;

      // Update the registrationData array in local storage
      localStorage.setItem("registrationData", JSON.stringify(registrationData));

      // Display the updated user data on the profile page
      firstNameElement.textContent = user.firstName;
      lastNameElement.textContent = user.lastName;
      usernameElement.textContent = user.username;
      emailElement.textContent = user.email;
      dobElement.textContent = user.dob;
      genderElement.textContent = user.gender;
      countryElement.textContent = user.country;
      aboutElement.textContent = user.about;

      // Switch back to view mode
      toggleEditMode();
    });
  } else {
    window.location.href = "homepage.html";
  }
});
