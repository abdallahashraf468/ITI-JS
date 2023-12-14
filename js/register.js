var form = document.getElementById("Register-form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("pass");
var confirmPass = document.getElementById("confirmPass");

var regExpName = new RegExp(/^[a-zA-Z]{3,}\w*/i);
var regExpEmail = new RegExp("^[a-z|.]+.*@(gmail|yahoo|).(com)$");
var regExpPass = new RegExp(/(.{5,})/);

form.addEventListener("submit", function (event) {
  if (
    !isNaN(username.value) ||
    !regExpName.test(username.value) ||
    username.value.length < 6 ||
    username.value == ""
  ) {
    event.preventDefault();
    username.value = "";
    username.setAttribute("placeholder", "Please enter a valid username");
    username.style.border = "1px solid red";
    username.focus();
    alert("Please enter a valid username");
  } else if (email.value == "" || !regExpEmail.test(email.value)) {
    event.preventDefault();
    email.value = "";
    email.setAttribute("placeholder", "Please enter a valid email");
    email.style.border = "1px solid red";
    email.focus();
    alert("Please enter a valid email");
  } else if (!regExpPass.test(password.value)) {
    event.preventDefault();
    password.value = "";
    password.setAttribute("placeholder", "Please enter a valid password");
    password.style.border = "1px solid red";
    password.focus();
    alert("Please enter a valid password");
  } else if (confirmPass.value !== password.value) {
    event.preventDefault();
    confirmPass.value = "";
    confirmPass.setAttribute("placeholder", "Password does not match.");
    confirmPass.style.border = "1px solid red";
    confirmPass.focus();
    alert("Password does not match.");
  } else {
    localStorage.setItem("name", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("confirmPassword", confirmPass.value);
  }
});
