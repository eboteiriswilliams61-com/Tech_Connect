const registerForm = document.querySelector("#register-form");
const accountTypeInputs = document.querySelectorAll('input[name="account-type"]');
const technicianField = document.querySelector("#technician-field");
const specialtyInput = document.querySelector("#specialty");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const formMessage = document.querySelector("#form-message");

function updateAccountType() {
    const isTechnician = document.querySelector('input[name="account-type"]:checked').value === "technician";

    technicianField.hidden = !isTechnician;
    specialtyInput.disabled = !isTechnician;
    specialtyInput.required = isTechnician;
}

accountTypeInputs.forEach((input) => {
    input.addEventListener("change", updateAccountType);
});

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.classList.remove("visible");

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
        confirmPasswordInput.reportValidity();
        confirmPasswordInput.addEventListener("input", () => confirmPasswordInput.setCustomValidity(), { once: true });
        return;
    }

    confirmPasswordInput.setCustomValidity("");
    formMessage.textContent = "Account creation is not connected yet. Please contact support for help setting up your account.";
    formMessage.classList.add("visible");
});

updateAccountType();
