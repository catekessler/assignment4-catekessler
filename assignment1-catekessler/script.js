// Form Validation 

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");

// Select HTML elements
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const validationMessage = document.getElementById("validationMessage");

    form.addEventListener("submit", function (event) {
        console.log("User pressed submit button");

        event.preventDefault();

        validationMessage.textContent = "";

        // Check for name value
        if (name.value === "") {
            validationMessage.textContent = "Please enter your name.";
            return;
        }

        // Check for correct email
        if (email.value === "" || !email.value.includes("@") || !email.value.includes(".")) {
            validationMessage.textContent = "Please enter a valid email.";
            return;
        }

        // Check for message value
        if (message.value === "") {
            validationMessage.textContent = "Please enter a message.";
            return;
        }

        // Message when form is successfully submitted
        validationMessage.textContent = "Thanks for reaching out! We'll get back to you soon.";
        console.log("Form validation passed");
    });

});

//Toggle to mobile menu

const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
