// Placeholder for future enhancements or functionality
console.log("MD EMROL KAYES CV loaded.");

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Gather form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
        document.getElementById("form-feedback").textContent = "Message Sent Successfully!";
        document.getElementById("form-feedback").style.color = "green";
    } else {
        document.getElementById("form-feedback").textContent = "Please fill out all fields.";
        document.getElementById("form-feedback").style.color = "red";
    }

    // Reset the form
    document.getElementById("contact-form").reset();
});
