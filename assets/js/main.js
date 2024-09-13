/*=============== Mixitup Filter =============== */
let mixerProject = mixitup(".projects__container", {
  selectors: {
    target: ".project__item",
  },
  animation: {
    duration: 300,
  },
});
/*=============== Active Work =============== */

const linkWork = document.querySelectorAll(".category__btn");

function activeWork() {
  linkWork.forEach((a) => a.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper(".testimonial__container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

/*=============== Contact Form =============== */

const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const Message = document.getElementById("message");
const contactMessge = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // check if the field has a value

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    Message.value === ""
  ) {
    // add and remove color

    contactMessge.classList.remove("color-light");
    contactMessge.classList.add("color-dark");

    // show Message

    contactMessge.textContent = "Write all the input fields";
  } else {
    // serviceID - templateID - #form - publicKey

    emailjs
      .sendForm(
        "service_kbdijm7",
        "template_re1v1ow",
        "#contact-form",
        "X4GvwasnZk0vC6K2f"
      )
      .then(() => {
        // show messge and add color, window + dot to open emoji
        contactMessge.classList.add("color-light");
        contactMessge.textContent = "Message Sent ✅";

        // remove message after 5 sec

        setTimeout(() => {
          contactMessge.textContent = "";
        }, 5000);
      },(error) =>{
        alert("OOPs! SOMTHING WENT WRONG...", error);
      });
  }
};

contactForm.addEventListener("submit", sendEmail);
