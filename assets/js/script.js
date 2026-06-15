/* =====================================
   StudySmart Planner Login Script
===================================== */

/* Get page elements */
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const title = document.getElementById("title");

/* Switch to Sign In Mode */
signinBtn.onclick = function () {

    /* Hide Name Field */
    nameField.style.maxHeight = "0";
    nameField.style.margin = "0";

    /* Change Page Title */
    title.innerHTML = "Sign In";

    /* Change Button Styles */
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};

/* Switch to Sign Up Mode */
signupBtn.onclick = function () {

    /* Show Name Field */
    nameField.style.maxHeight = "60px";
    nameField.style.margin = "15px 0";

    /* Change Page Title */
    title.innerHTML = "Sign Up";

    /* Change Button Styles */
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};