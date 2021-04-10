function validate() {
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;
  let error = document.getElementById("error-msg");
  if (age < 18 || age > 70) {
    error.innerHTML = "Age must in range 18 -70!";
    return false;
  } else if (name == "") {
    error.innerHTML = "Please enter your name!";
    return false;
  }
}
