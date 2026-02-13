import { showNotification } from "./notification";

export function initRequestValidation() {
  const form = document.querySelector(".request__form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    let errorMessages = [];

    // Inputs
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const checkbox = form.querySelector('input[name="agreement"]');

    // Reset errors
    [nameInput, emailInput, checkbox].forEach((el) => {
      if (el) el.classList.remove("is-invalid");
    });

    // Name Validation
    if (nameInput && !nameInput.value.trim()) {
      nameInput.classList.add("is-invalid");
      isValid = false;
      errorMessages.push("Введите имя");
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      emailInput &&
      (!emailInput.value.trim() || !emailPattern.test(emailInput.value))
    ) {
      emailInput.classList.add("is-invalid");
      isValid = false;
      errorMessages.push("Введите корректный email");
    }

    // Checkbox Validation
    if (checkbox && !checkbox.checked) {
      checkbox.classList.add("is-invalid");
      isValid = false;
      errorMessages.push("Примите соглашение");
    }

    if (isValid) {
      // Here you would typically send the data
      showNotification("Форма успешно отправлена!", "success");
      form.reset();
    } else {
      // Show all errors with a stagger effect
      errorMessages.forEach((msg, index) => {
        setTimeout(() => {
          showNotification(msg, "error");
        }, index * 100); // 300ms staggering
      });
    }
  });
}
