const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Sign-in is not connected yet. Please contact support for help accessing your account.";
    formMessage.classList.add("visible");
});
