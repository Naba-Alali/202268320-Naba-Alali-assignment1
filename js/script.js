// ===== Helpers =====
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning 👋";
  if (hour < 18) return "Good afternoon 👋";
  return "Good evening 👋";
}

// ===== On load =====
const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("greeting").textContent = getGreeting();

// Theme toggle button
document.getElementById("themeBtn").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "light" ? "dark" : "light");
});

// Project details demo
function showProject(name) {
  alert(`${name}: You can replace this with real project details later.`);
}
window.showProject = showProject;

// ===== Contact form validation (no backend) =====
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

function showError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function clearErrors() {
  showError("nameErr", "");
  showError("emailErr", "");
  showError("msgErr", "");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();
  statusEl.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let ok = true;

  if (name.length < 2) {
    showError("nameErr", "Name must be at least 2 characters.");
    ok = false;
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    showError("emailErr", "Please enter a valid email address.");
    ok = false;
  }

  if (message.length < 5) {
    showError("msgErr", "Message must be at least 5 characters.");
    ok = false;
  }

  if (ok) {
    statusEl.textContent = "✅ Message ready (no backend). Thanks for contacting me!";
    form.reset();
  } else {
    statusEl.textContent = "⚠️ Please fix the errors above.";
  }
});
