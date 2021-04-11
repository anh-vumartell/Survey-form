"use strict";
//Select DOM elements
const button = document.querySelector(".submitBtn");

const validateForm = function () {
  const age = document.querySelector(".age");
  const name = document.querySelector(".name");
  const roles = document.querySelector(".roles");
  const email = document.querySelector(".email");
  const activities = document.querySelector(".activities");
  const form_data = new FormData(document.querySelector("form"));
  let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (name.value === "") {
    alert("Please enter your name!");
    return false;
  } else if (email.value === "" || !email.value.match(emailFormat)) {
    alert("Please enter valid email!");
    return false;
  } else if (age.value === "" || age < 18 || age > 70) {
    alert("Please select age in range 18 -70!");
    return false;
  } else if (roles.value === "") {
    alert("Please select your role!");
    return false;
  } else if (activities.value === "") {
    alert("Please select one favorite activity!");
    return false;
  } else if (!form_data.has("experience")) {
    alert("Please select at least one experience");
    return false;
  }
  alert("Form is successfully submitted! Thank you!");
};

//Add event listener to button
button.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
});
