function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector("#closebtn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// // bouton fermeture croix x
btnClose.addEventListener("click", function (event) {
  modalbg.style.display = "none";
});

// VARIABLES :

// Regex name
const nameRegex = /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛa-zçéèêëàâîïôùû_\-\.\ ]+$/; //nom
const errorTexts = [
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "Merci de renseigner une adresse email valide",
  "Vous devez entrer votre date de naissance.",
  "Vous devez choisir une option.",
  "Vous devez vérifier que vous acceptez les termes et conditions.",
];

// 1er CHAMP : LE PRENOM
const nameInput = document.getElementById("first"); // name field
const errorText = document.getElementById("texterrorfirstname");
//
const validateFirst = (event) => {
  const valueNameInput = nameInput.value; //value field

  if (nameRegex.test(valueNameInput) && valueNameInput.length >= 2) {
    return true;
  } else {
    errorText.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    errorText.innerHTML = errorTexts[0];
    return false;
  }
};

//
// FONCTION DE VALIDATION

const validate = () => {
  const isFirstNameValid = validateFirst();

  return isFirstNameValid;
};

//
// FONCTIONS ENVOI DU FORMULAIRE ET MESSAGE DE REMERCIEMENT
//
document
  .getElementById("inscription")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // on le met si erreur afin de ne pas envoyé le formulaire

    if (validate(event)) {
      const messageValidation = document.getElementById("submitMessage");
      messageValidation.style.display = "block";
      const form = document.getElementById("inscription");
      form.style.display = "none";
    }
  });
//
document
  .getElementById("inscription")
  .addEventListener("dblclick", function (event) {
    event.preventDefault();
    validate(event);
  });

//
// // BOUTON FERMETURE APRES INSCRIPTION
const btnValidation = document.getElementById("btn-validation");
btnValidation.addEventListener("click", function (event) {
  modalbg.style.display = "none";
});
