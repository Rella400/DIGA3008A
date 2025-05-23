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

function setYear() {
  const yearSpan = document.getElementById("currentYear");
  yearSpan.textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.watch-btn');
  const videos = document.querySelectorAll('video');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Pause all other videos
      videos.forEach(video => video.pause());

      // Get associated video by ID
      const videoId = btn.getAttribute('data-video');
      const video = document.getElementById(videoId);

      // Scroll to video
      video.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Try to enter fullscreen
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }

      // Start playing
      video.play();
    });
  });

  // Stop all other videos when one plays
  videos.forEach(video => {
    video.addEventListener('play', () => {
      videos.forEach(v => {
        if (v !== video) v.pause();
      });
    });
  });
});