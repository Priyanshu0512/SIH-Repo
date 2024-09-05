document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userType = document.querySelector(
    'input[name="userType"]:checked'
  ).value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (userType === "patient") {
    alert("Logging in as Patient");
    // Handle Patient login logic
  } else if (userType === "doctor") {
    alert("Logging in as Doctor");
    // Handle Doctor login logic    
  } else if (userType === "admin") {
    alert("Logging in as Admin");
    // Handle Admin login logic
  }

  // You can add AJAX requests here to connect to a backend API
});

document.getElementById("signup").addEventListener("click", function () {
  alert("Redirecting to Signup Page");
  // Handle signup logic
});

document
  .getElementById("emergencySignup")
  .addEventListener("click", function () {
    alert("Redirecting to Emergency Signup Page");
    // Handle emergency signup logic
  });
<script>
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userType = document.querySelector(
    'input[name="userType"]:checked'
  ).value;

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (userType === "patient") {
    // Redirect to patient dashboard when user is a patient
    window.location.href = "patient-dashboard.html";
  } else if (userType === "doctor") {
    alert("Logging in as Doctor");
    // You can redirect to a doctor page here
  } else if (userType === "admin") {
    alert("Logging in as Admin");
    // You can redirect to an admin page here
  }
});
</script>
