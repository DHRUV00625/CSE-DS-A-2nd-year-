const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    document.getElementById("displayName").textContent = "Name: " + name;
    document.getElementById("displayEmail").textContent = "Email: " + email;
    document.getElementById("displayPhone").textContent = "Phone Number: " + phone;
    document.getElementById("displayMessage").textContent = "Message: " + message;
});