document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting automatically

    // Get values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let errorMessage = document.getElementById("error-message");
    let successMessage = document.getElementById("success-message");

    errorMessage.textContent = "";
    successMessage.textContent = "";

    // Validate Name
    if (name === "") {
        errorMessage.textContent = "Please enter your name.";
        return;
    }

    // Validate Email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Validate Message
    if (message.length < 10) {
        errorMessage.textContent = "Message must be at least 10 characters.";
        return;
    }

    // If all validations pass
    successMessage.textContent = "Form submitted successfully!";
    
    // Clear form fields
    document.getElementById("contactForm").reset();
});
