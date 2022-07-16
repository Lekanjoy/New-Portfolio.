// Preloader
  const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});

const hamburgerMenu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
let navItem = document.querySelectorAll("li");
let header = document.getElementById("header");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (e.target.id != "menu" /*  && e.target.localName != 'li' */) {
    navLinks.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight + 400) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Download CV
const downloadBtn = document.getElementById("download");

downloadBtn.addEventListener("click", () => {
  downloadBtn.innerText = "Downloading . . .";

  setTimeout(() => {
    downloadBtn.textContent = "Download CV";
  }, 3000);
});

