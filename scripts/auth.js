// Modal toggle
const authModal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeAuthModal = document.getElementById('closeAuthModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginBtn.onclick = () => {
  authModal.style.display = 'block';
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
};

registerBtn.onclick = () => {
  authModal.style.display = 'block';
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
};

closeAuthModal.onclick = () => {
  authModal.style.display = 'none';
};

document.getElementById('switchToRegister').onclick = () => {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
};

document.getElementById('switchToLogin').onclick = () => {
  registerForm.style.display = 'none';
  loginForm.style.display = 'block';
};

window.onclick = function(event) {
  if (event.target === authModal) {
    authModal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const regBtn = document.getElementById("registerSubmit");
  const errorMsg = document.getElementById("regError");

  if (regBtn) {
    regBtn.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form submission
      errorMsg.style.display = "block"; // Always show message
    });
  }
});
