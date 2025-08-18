// email.js
(function () {
  emailjs.init("rA8UKTE24F-SWWTHx"); 
})();

const result = document.getElementById('result');
const resultParagraph = document.querySelector('#result > p');
const successMessage = () => {
   resultParagraph.textContent = "Message envoyé avec succès ✔";
    result.style.display = "block";
    setTimeout(() => {
      result.style.display = "none";
    }, 3000);
}

const failMessage = () => {
  resultParagraph.textContent = "Erreur lors de l'envoi du message ❌";
  result.classList.add('bg-red-700');
  result.style.display = "block";
  setTimeout(() => {
    result.style.display = "none";
  }, 3000);
};

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.sendForm('service_iytj9lp', 'template_11rytxe', this)
    .then(function (response) {
      successMessage()
    }, function (error) {
      failMessage()
    });
  this.reset();
});
