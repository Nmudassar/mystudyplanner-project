/* =====================================
   StudySmart Planner Sign In/ Sign Up Script
===================================== */

/* Get page elements */
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("loginBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

/* Form fields */
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

/* Track current mode */
let currentMode = "signup";

/* Sign In Button */
signinBtn.onclick = function () {

    if (currentMode !== "signin") {
        /* Switch to Log In mode first */
        nameField.style.maxHeight = "0";
        nameField.style.margin = "0";
        title.innerHTML = "Log In";

        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");

        currentMode = "login";
        return;
    }

    /* Login after user enters details */
    let email = emailInput.value;
    let password = passwordInput.value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    alert("Login Successful!");
    window.location.href = "02-index.html";
};

/* Sign Up Button */
signupBtn.onclick = function () {

    if (currentMode !== "signup") {
        /* Switch to Sign Up mode first */
        nameField.style.maxHeight = "60px";
        nameField.style.margin = "15px 0";
        title.innerHTML = "Sign Up";

        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");

        currentMode = "signup";
        return;
    }

    /* Create account after user enters details */
    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    alert("Account Created Successfully!");
    window.location.href = "02-index.html";
};