// ✅ Toggle visibility of a message
document.getElementById("toggleBtn").addEventListener("click", () => {
  const text = document.getElementById("toggleText");
  text.style.display = text.style.display === "none" ? "block" : "none";
});

// ✅ Update slider value dynamically
document.getElementById("slider").addEventListener("input", (event) => {
  document.getElementById("sliderValue").textContent = event.target.value;
});

// ✅ Custom form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.textContent = "All fields are required.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});