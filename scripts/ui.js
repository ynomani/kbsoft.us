// Toggle Mobile Menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Shrink navbar on scroll
window.onscroll = function() { shrinkNavbar(); };

function shrinkNavbar() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrunk");
  } else {
    navbar.classList.remove("shrunk");
  }
}

// Equalize section heights
function equalizeSectionHeights(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const text = section.querySelector('.text');
  const image = section.querySelector('.image');
  if (!text || !image) return;

  text.style.height = 'auto';
  image.style.height = 'auto';

  const maxHeight = Math.max(text.offsetHeight, image.offsetHeight);
  text.style.height = `${maxHeight}px`;
  image.style.height = `${maxHeight}px`;
}

function equalizeAllSections() {
  equalizeSectionHeights('solutions');
  equalizeSectionHeights('about');
}

window.addEventListener('load', equalizeAllSections);
window.addEventListener('resize', equalizeAllSections);

// Footer year update
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.getElementById('message');
  const phoneInput = document.querySelector('input[name="phone"]');
  const submitBtn = document.querySelector('form button[type="submit"]');

  if (!emailInput || !messageInput || !submitBtn) return;

  // Initial disable + gray styling
  submitBtn.disabled = true;
  submitBtn.style.backgroundColor = "#ccc";
  submitBtn.style.color = "#666";
  submitBtn.style.cursor = "not-allowed";

  const emailMsg = document.createElement('small');
  emailMsg.style.display = 'none';
  emailInput.parentNode.insertBefore(emailMsg, emailInput.nextSibling);

  const phoneMsg = document.createElement('small');
  phoneMsg.style.display = 'none';
  phoneInput.parentNode.insertBefore(phoneMsg, phoneInput.nextSibling);

  const msgCounter = document.getElementById('charCount');

  function validateFormFields() {
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    const phone = phoneInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

    const isEmailValid = emailRegex.test(email);
    const isMessageValid = message.length >= 50;
    const isPhoneValid = phone === "" || phoneRegex.test(phone);

    // Email message
    if (email === "") {
      emailMsg.style.display = 'none';
      emailInput.style.borderColor = "";
    } else if (!isEmailValid) {
      emailMsg.textContent = "❌ Invalid email address";
      emailMsg.style.color = "red";
      emailMsg.style.display = 'block';
      emailInput.style.borderColor = "red";
    } else {
      emailMsg.textContent = "✅ Looks good";
      emailMsg.style.color = "green";
      emailMsg.style.display = 'block';
      emailInput.style.borderColor = "green";
    }

    // Phone message
    if (phone === "") {
      phoneMsg.style.display = 'none';
      phoneInput.style.borderColor = "";
    } else if (!isPhoneValid) {
      phoneMsg.textContent = "❌ Invalid phone number";
      phoneMsg.style.color = "red";
      phoneMsg.style.display = 'block';
      phoneInput.style.borderColor = "red";
    } else {
      phoneMsg.textContent = "✅ Valid";
      phoneMsg.style.color = "green";
      phoneMsg.style.display = 'block';
      phoneInput.style.borderColor = "green";
    }

    // Message counter
    msgCounter.textContent = `${message.length} / 500`;
    msgCounter.style.color = isMessageValid ? "green" : "red";

    const isFormValid = isEmailValid && isMessageValid && isPhoneValid;

    // Toggle Submit Button
    submitBtn.disabled = !isFormValid;
    if (isFormValid) {
      submitBtn.style.backgroundColor = "#004080"; // Blue
      submitBtn.style.color = "#fff";
      submitBtn.style.cursor = "pointer";
    } else {
      submitBtn.style.backgroundColor = "#ccc"; // Gray
      submitBtn.style.color = "#666";
      submitBtn.style.cursor = "not-allowed";
    }
  }

  // Attach input listeners
  emailInput.addEventListener('input', validateFormFields);
  messageInput.addEventListener('input', validateFormFields);
  phoneInput.addEventListener('input', validateFormFields);
});
