// Dark mode toggle
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "Light Mode";
    } else {
      toggle.textContent = "Dark Mode";
    }
  });
}

// Contact form validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const msg = document.getElementById("formMsg");

    if (!name || !email || !message) {
      msg.textContent = "Please fill all fields.";
      msg.style.color = "red";
    } else {
      msg.textContent = "Message sent successfully.";
      msg.style.color = "green";
    }
  });
}