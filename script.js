document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      e.preventDefault();
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    // Submit with Formspree
    const formData = new FormData(form);
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert("Thank you for your feedback!");
        form.reset();
      } else {
        alert("There was a problem submitting your feedback. Please try again.");
      }
    })
    .catch(error => {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    });

    e.preventDefault(); // Prevent default submission
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
