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
  const message = document.getElementById("msg");

  validateLabels();
  validateFields();

  function validateFields() {
    let successPage = document.getElementById("success");
    if (userName.value !== "" && userEmail.value !== "") {
      // Function to send email
        function sendEmail() {
          let params = {
            from_name: userName.value,
            message: message.value,
            email_id: userEmail.value,
          };

          emailjs.send("service_bq8azlf", "template_kcuidoi", params)
            .then(() => {
              successPage.classList.add("success"); //Open Success PopUp
              userName.disabled = true;
              userEmail.disabled = true;
              message.disabled = true;
              document.getElementById("submit").disabled = true;
            })
            .catch(() => {
              document.getElementById("status-img").src = '/images/failed.gif';
              document.getElementById("status-msg").textContent = 'Email Sending Unsuccessful!!';
              successPage.classList.add("success"); //Open Failed PopUp
            })
        };
        sendEmail();

      // Close PopUp
      const successCard = document.getElementById("success");
      const cancel = document.getElementById("cancel");

      cancel.addEventListener("click", () => {
        successCard.style.display = "none";
        setTimeout(() => {
          location.reload();
        }, 1000);
      });
    }
  }

  function validateLabels() {
    let label = document.querySelectorAll("label");
    for (let i = 0; i < label.length; i++) {
      if (label[i].htmlFor === "name" && userName.value === "") {
        label[i].textContent = "Field is Required.";
        setTimeout(() => {
          label[i].textContent = "*";
        }, 5000);
      }
      if (label[i].htmlFor === "email" && userEmail.value === "") {
        label[i].textContent = "Field is Required.";

        setTimeout(() => {
          label[i].textContent = "*";
        }, 5000);
      }
    }
  }
}
