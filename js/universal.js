function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


function checkEmail() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
  } else {
    alert("Thank you!");
  }
}


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function highlightPin(id) {
  document.getElementById(id).style.transform = 'scale(1.2)';
  document.getElementById(id).style.transition = 'transform 0.3s';
}

function unhighlightPin(id) {
  document.getElementById(id).style.transform = 'scale(1)';
}