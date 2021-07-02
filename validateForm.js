"use strict";
//Select DOM elements
const button = document.querySelector(".submitBtn");

//Print error function
const printMsg = function (msg) {
  alert(msg);
};
const validateForm = function () {
  const age = document.querySelector(".age").value;
  const name = document.querySelector(".name").value;
  const roles = document.querySelector(".roles").value;
  const email = document.querySelector(".email").value;
  const activities = document.querySelector(".activities").value;
  const form_data = new FormData(document.querySelector("form"));
  let emailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let validField = false;
  //Validate name
  if (name == "") {
    printMsg("Please give your full name");
    return validField;
  }
  //Validate email
  if (email === "" || !email.match(emailFormat)) {
    printMsg("Please enter valid email");
    return validField;
  }

  //Validate age
  if (age === "" || age < 18 || age > 70) {
    printMsg("Please select age in range 18-70");
    return validField;
  }

  //Validate roles
  if (roles === "") {
    printMsg("Please select your role!");
    return validField;
  }
  // Validate activities field
  if (activities === "") {
    printMsg("Please select one favorite activity!");
    return validField;
  }
  //Validate experience field
  if (!form_data.has("experience")) {
    printMsg("Please select at least one experience");
    return validField;
  }

  if (!validField) {
    printMsg("Form has been successfully submitted!");
  }
};
//Add event listener to button
button.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});
