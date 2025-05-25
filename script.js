// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the form using its ID
  const form = document.getElementById("feedbackForm");

  // Add a submit event listener
  form.addEventListener("submit", function (e) {
    // Get values from input fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      e.preventDefault(); // Stop form from submitting
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    // Optionally: Confirm submission
    alert("Thank you for your feedback!");
  });

  // Simple email format validation using regex
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
       toggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
