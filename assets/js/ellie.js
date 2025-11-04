// ellie.js – custom interactivity 

document.addEventListener("DOMContentLoaded", () => {
  // === Random teaching quote (Teaching page) ===
  const quoteOut = document.querySelector("[data-quote-out]");
  const quoteBtn = document.querySelector("[data-quote-btn]");

  if (quoteOut && quoteBtn) {
    const quotes = [
      "Teachers who love teaching, teach children to love learning.",
      "Education is the kindling of a flame, not the filling of a vessel. – Plutarch",
      "Tell me and I forget. Teach me and I remember. Involve me and I learn. – Benjamin Franklin",
      "The art of teaching is the art of assisting discovery. – Mark Van Doren",
      "What we learn with pleasure we never forget. – Alfred Mercier"
    ];

    function setRandomQuote() {
      const index = Math.floor(Math.random() * quotes.length);
      quoteOut.textContent = quotes[index];
    }

    quoteBtn.addEventListener("click", setRandomQuote);
  }

  // === Show/Hide details (Resume page) ===
  document.querySelectorAll("[data-toggle-target]").forEach((btn) => {
    const selector = btn.getAttribute("data-toggle-target");
    const target = document.querySelector(selector);
    if (!target) return;

    btn.addEventListener("click", () => {
      const hidden = target.hasAttribute("hidden");
      if (hidden) {
        target.removeAttribute("hidden");
      } else {
        target.setAttribute("hidden", "");
      }
      btn.setAttribute("aria-expanded", String(hidden));
    });
  });

  // === Contact form validation (Contact page) ===
  const form = document.getElementById("contactForm");
  const errorBox = document.getElementById("formError");
  const successBox = document.getElementById("formSuccess");

  if (form && errorBox && successBox) {
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");

    function clearErrors() {
      errorBox.textContent = "";
      successBox.textContent = "";
      [nameInput, emailInput, messageInput].forEach(el => {
        if (el) el.classList.remove("input-error");
      });
    }

    form.addEventListener("submit", (event) => {
      clearErrors();

      const errors = [];

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name) {
        errors.push("Please enter your name.");
        nameInput.classList.add("input-error");
      }

      if (!email) {
        errors.push("Please enter your email address.");
        emailInput.classList.add("input-error");
      } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        errors.push("Please enter a valid email address.");
        emailInput.classList.add("input-error");
      }

      if (!message) {
        errors.push("Please enter a message.");
        messageInput.classList.add("input-error");
      } else if (message.length < 20) {
        errors.push("Please provide a little more detail in your message (at least 20 characters).");
        messageInput.classList.add("input-error");
      }

      if (errors.length > 0) {
        event.preventDefault(); // block submission
        errorBox.textContent = errors.join(" ");
      } else {
        successBox.textContent = "Thank you! Your message is being sent.";
        // allow the form to submit to FormSubmit
      }
    });

    const resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        clearErrors();
      });
    }
  }
});
// === Theme toggle (dark/light mode) ===
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;

  const body = document.body;
  const current = localStorage.getItem('theme');
  if (current) body.dataset.theme = current;

  btn.addEventListener('click', () => {
    const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    btn.setAttribute('aria-pressed', newTheme === 'dark');
  });
});
