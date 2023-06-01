function saveRegistration(event) {
  event.preventDefault();

  // Retrieve the existing registration data from local storage
  var existingData = localStorage.getItem("registrationData");
  var registrationData = [];

  if (existingData) {
    registrationData = JSON.parse(existingData);
  }

  // Retrieve the form values
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var username = document.getElementById("username").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var dob = document.getElementById("dob").value;
var genderInputs = document.querySelectorAll('input[name="gender"]');
var gender = null;
for (var i = 0; i < genderInputs.length; i++) {
  if (genderInputs[i].checked) {
    gender = genderInputs[i].value;
    break;
  }
}
var country = document.getElementById("country").value;
var about = document.getElementById("about").value;
var agreeTerms = document.getElementById("agreeTerms").checked;


  // Validate the form fields
  if (!firstName || !lastName || !username || !email || !password || !confirmPassword || !dob || !gender || !country || !agreeTerms) {
    alert("Please fill in all the required fields.");
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Generate a unique ID for the user
  var userId = generateUniqueId();

  // Create a new user object
  var newUser = {
    id: userId,
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    dob: dob,
    gender: gender,
    country: country,
    about: about
  };

  // Add the new user to the registration data array
  registrationData.push(newUser);

  // Save the updated registration data in local storage as JSON
  localStorage.setItem("registrationData", JSON.stringify(registrationData));

  // Redirect or show a success message to the user
  // Replace the following line with your desired action
  alert("Registration successful!");
}

// Function to generate a unique ID
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

var registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", saveRegistration);
