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