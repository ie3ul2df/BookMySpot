// Function to get query parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        formType: params.get("formType"),
        name: params.get("name"),
        email: params.get("email"),
        phone: params.get("phone"),
        message: params.get("message"),
        password: params.get("password"),
        address: params.get("address"),
        city: params.get("city"),
        zip: params.get("zip")
    };
}

// Populate form details based on form type
function displayFormData() {
    const { formType, name, email, phone, message, password, address, city, zip } = getQueryParams();

    // Elements
    const titleElement = document.getElementById("formTitle");
    const messageElement = document.getElementById("formMessage");
    const detailsList = document.getElementById("formDetails");

    // Clear existing list items
    detailsList.innerHTML = "";

    // Check the formType and update content accordingly
    if (formType === "login") {
        titleElement.textContent = "Welcome Back!";
        messageElement.textContent = "You have successfully logged in.";
        detailsList.innerHTML += `<li class="list-group-item"><strong>Email:</strong> ${email}</li>`;
    } else if (formType === "register") {
        titleElement.textContent = "Registration Successful!";
        messageElement.textContent = "Thank you for registering. Your details:";
        detailsList.innerHTML += `
            <li class="list-group-item"><strong>Name:</strong> ${name || "Not provided"}</li>
            <li class="list-group-item"><strong>Email:</strong> ${email}</li>
            <li class="list-group-item"><strong>Address:</strong> ${address || "Not provided"}</li>
            <li class="list-group-item"><strong>City:</strong> ${city || "Not provided"}</li>
            <li class="list-group-item"><strong>ZIP:</strong> ${zip || "Not provided"}</li>`;
    } else if (formType === "forgotPassword") {
        titleElement.textContent = "Reset Password Request Sent!";
        messageElement.textContent = "A password reset link has been sent to your email.";
        detailsList.innerHTML += `<li class="list-group-item"><strong>Email:</strong> ${email}</li>`;
    } else {
        // Default case (contact form)
        titleElement.textContent = "Thank You, " + (name || "Guest") + "!";
        messageElement.textContent = "Your submission has been received with the following details:";
        detailsList.innerHTML += `
            <li class="list-group-item"><strong>Email:</strong> ${email || "No email provided"}</li>
            <li class="list-group-item"><strong>Phone:</strong> ${phone || "No phone provided"}</li>
            <li class="list-group-item"><strong>Message:</strong> ${message || "No message provided"}</li>`;
    }
}

// Run the function after the page loads
document.addEventListener("DOMContentLoaded", displayFormData);
