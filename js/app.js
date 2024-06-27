document
  .getElementById("subsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Save the email (you can use localStorage, a backend API, or any other method)
    // For demonstration purposes, I'll just log it here:
    console.log("Email:", email);
    console.log("Message:", message);
  });
