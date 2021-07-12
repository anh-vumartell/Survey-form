"use strict";
//Select DOM elements
const submitBtn = document.querySelector(".submitBtn");
const closeBtn = document.querySelector(".modal-close");
const msgModal = document.querySelector(".msg-modal");
const overlay = document.querySelector(".overlay");
const msgContainer = document.querySelector(".message-container");

//Function to print error message
const printMsg = function (msg) {
  msgContainer.insertAdjacentText("beforeend", msg);
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

//Function to open the modal
const openModal = function () {
  overlay.classList.remove("hidden");
  msgModal.classList.remove("hidden");
};
//Function to close the modal
const closeModal = function () {
  overlay.classList.add("hidden");
  msgModal.classList.add("hidden");
};
//Add event listener to button to show modal message
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateForm();
  openModal();
});
//Function to close & clear modal message
const clearMsg = function () {
  closeModal();
  msgContainer.innerHTML = "";
};
//Add event listener to the close button in the modal
closeBtn.addEventListener("click", clearMsg);

//Close modal onlick the overlay
overlay.addEventListener("click", clearMsg);
//Close modal onpress Esc-key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    clearMsg();
  }
});
