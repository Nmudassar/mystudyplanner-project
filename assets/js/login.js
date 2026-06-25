/* ==========================================================
   StudySmart Planner
   Login and Sign Up JavaScript
========================================================== */

/* =========================
   Get HTML Elements
========================= */

/* Get the Sign Up button */
const signupBtn = document.getElementById("signupBtn");

/* Get the Log In button */
const signinBtn = document.getElementById("loginBtn");

/* Get the Name input field container */
const nameField = document.getElementById("nameField");

/* Get the page heading (Sign Up / Log In) */
const title = document.getElementById("title");


/* =========================
   Get Form Input Fields
========================= */

/* Get the Name input */
const nameInput = document.getElementById("name");

/* Get the Email input */
const emailInput = document.getElementById("email");

/* Get the Password input */
const passwordInput = document.getElementById("password");


/* =========================
   Track Current Form Mode
========================= */

/* Store whether the page is currently in Sign Up or Login mode */
let currentMode = "signup";


/* ==========================================================
   Log In Button Function
========================================================== */

signinBtn.onclick = function () {

    /* Check whether the form is currently in Sign Up mode */
    if (currentMode === "signup") {

        /* Hide the Name input field */
        nameField.style.maxHeight = "0";

        /* Remove extra margin from hidden field */
        nameField.style.margin = "0";

        /* Change page title to Log In */
        title.innerHTML = "Log In";

        /* Make Sign Up button grey (inactive) */
        signupBtn.classList.add("disable");

        /* Highlight Log In button */
        signinBtn.classList.remove("disable");

        /* Update current mode */
        currentMode = "login";

        /* Stop the function until the user clicks Log In again */
        return;
    }

    /* Get the email entered by the user */
    let email = emailInput.value.trim();

    /* Get the password entered by the user */
    let password = passwordInput.value.trim();

    /* Check whether email or password is empty */
    if (email === "" || password === "") {

        /* Display an error message */
        alert("Please enter your email and password.");

        /* Stop the function */
        return;
    }

    /* Display success message */
    alert("Login Successful!");

    /* Redirect the user to the Dashboard page */
    window.location.href = "02-index.html";
};


/* ==========================================================
   Sign Up Button Function
========================================================== */

signupBtn.onclick = function () {

    /* Check whether the page is currently in Login mode */
    if (currentMode === "login") {

        /* Show the Name input field again */
        nameField.style.maxHeight = "60px";

        /* Restore the margin around the Name field */
        nameField.style.margin = "15px 0";

        /* Change the page heading */
        title.innerHTML = "Sign Up";

        /* Highlight the Sign Up button */
        signupBtn.classList.remove("disable");

        /* Grey out the Login button */
        signinBtn.classList.add("disable");

        /* Change the current mode back to Sign Up */
        currentMode = "signup";

        /* Stop the function until the user clicks Sign Up again */
        return;
    }

    /* Get the user's name */
    let name = nameInput.value.trim();

    /* Get the user's email */
    let email = emailInput.value.trim();

    /* Get the user's password */
    let password = passwordInput.value.trim();

    /* Check whether any field is empty */
    if (name === "" || email === "" || password === "") {

        /* Display an error message */
        alert("Please fill in all fields.");

        /* Stop the function */
        return;
    }

    /* Display a success message */
    alert("Account Created Successfully!");

    /* Redirect the user to the Dashboard page */
    window.location.href = "02-index.html";
};