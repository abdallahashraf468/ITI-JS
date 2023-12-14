var form = document.getElementById("login-form");
var username = document.getElementById("username");
var password = document.getElementById("password");

var getUser = localStorage.getItem("name");
console.log(getUser);
var getPass = localStorage.getItem("password");
console.log(getPass);


form.addEventListener("submit", function (event) {
    if (!getUser || !getPass) {
        alert("No user is registered.. Please sign up first");
        event.preventDefault();
        return;
    } else if (username.value !== getUser && password.value == getPass) {
        alert("Invalid Username");
        username.setAttribute("placeholder", "Please enter a valid username");
        username.style.border = "1px solid red";
        username.focus();
        event.preventDefault();
    } else if (username.value == getUser && password.value !== getPass) {
        alert("Invalid Password");
        password.setAttribute("placeholder", "Please enter a valid password");
        password.style.border = "1px solid red";
        password.focus();
        event.preventDefault();
    } else if (username.value !== getUser || password.value !== getPass) {
        username.value = "";
        password.value = "";
        event.preventDefault();
        alert("Please check your username and password.");
    } else {
        alert("Login Successful! Welcome " + getUser.split(' ')[0]);
    }
});



