// Preloader
const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  preloader.style.display = "none";
});

const hamburgerMenu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
let navItem = document.querySelectorAll("li");
let header = document.getElementById("header");

// Hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (e.target.id != "menu" /*  && e.target.localName != 'li' */) {
    navLinks.classList.remove("show");
  }
});

// Scroll Header
window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight + 400) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Form Validation
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", validateForm);


function validateForm(e) {
  e.preventDefault();

  const userName = document.getElementById("name");
  const userEmail = document.getElementById("email");
  const userSubject = document.getElementById("subject");
  const message = document.getElementById("msg");

  validateLabels();
  validateFields();

  function validateFields() {
    let successPage = document.getElementById("success");

    if (  userName.value !== "" && userEmail.value !== "" && userSubject.value !== "" ) {
        // Function to send email
      function sendEmail() {
        let params = {
          from_name: userName.value,
          message: message.value,
          email_id: userEmail.value,
        };
        emailjs.send("service_bq8azlf", "template_kcuidoi", params);
      }

      sendEmail();
      successPage.classList.add("success"); //Open PopUp

      // Close PopUp
      const successCard = document.getElementById("success");
      const cancel = document.getElementById("cancel");

      cancel.addEventListener("click", () => {
        successCard.style.display = "none";

        setTimeout(() => {
          location.reload();
        }, 1000);
      });

      userName.disabled = true;
      userEmail.disabled = true;
      userSubject.disabled = true;
      message.disabled = true;
    }
  }

  function validateLabels() {
    let label = document.querySelectorAll("label");
    for (let i = 0; i < label.length; i++) {
      if (label[i].htmlFor === "name" && userName.value === "") {
        label[i].textContent = "Field is Required.";
        label[i].style.fontSize = "14px";
        setTimeout(() => {
          label[i].textContent = "*";
        }, 5000);
      }
      if (label[i].htmlFor === "email" && userEmail.value === "") {
        label[i].textContent = "Field is Required.";
        label[i].style.fontSize = "14px";

        setTimeout(() => {
          label[i].textContent = "*";
        }, 5000);
      }
      /*       if (label[i].htmlFor === "subject" && userSubject.value === "") {
        label[i].textContent = "Field is Required.";
        setTimeout(() => {
          label[i].textContent = "*";
        }, 5000);
      } */
    }
  }
}
