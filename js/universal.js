//Scroll to top button to get back to the top from wherever you are

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}



//Add your email at the footer (Actually enter an email to see response)

function checkEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        alert("Thanks for subscribing!");
        emailInput.style.border = "2px solid green";
    } else {
        alert("Please enter a valid email address.");
        emailInput.style.border = "2px solid red";
    }
}


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.querySelector("button[onclick='toggleDarkMode()']");
  btn.textContent = document.body.classList.contains("dark-mode") ? "Switch to Light Mode" : "Switch to Dark Mode";
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

/* KEEPING ACTIVE PAGE HIGHLIGHTED IN NAVIGATION BAR*/

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      navLinks.forEach(link => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  });
});


/* 
        NOTE FOR THE MARKER

CAR ANIMATION (ATTEMPT AT LEAST) I HAVE ADDED A START JOURNEY BUTTON AT THE BOTTOM OF THE INDEX PAGE BEFORE THE FOOTER. i DID NOT GET TIME TO
PLACE IT CREATIVELY ON THE PAGE BUT PLEASE CLICK ON IT TO SEE WHAT IT DOES. I WILL INCLUDE THIS ANIMATION IN ALL PAGES FOR EVERY BUTTON THAT 
SENDS THE USER TO ANOTHER PAGE*/

function startJourney() {
    const car = document.getElementById("car");
    car.classList.add("move");

    setTimeout(() => {
        window.location.href = "pages/learn.html";
    }, 2000); 
}


//Scroll progress

window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});


function filterBlogs() {
  const input = document.getElementById("blogSearch").value.toLowerCase();
  const blogs = document.querySelectorAll(".allBlogs section");

  blogs.forEach(blog => {
    const title = blog.querySelector("h2").textContent.toLowerCase();
    if (title.includes(input)) {
      blog.style.display = "block";
    } else {
      blog.style.display = "none";
    }
  });
}