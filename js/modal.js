// verfier la croix apres validation

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
const nameRegex = /^[a-zA-Z]+$/; //nom
const mailRegex = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/; //mail

const errorTexts = [
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "Merci de renseigner une adresse email valide",
  "Vous devez entrer votre date de naissance.",
  "Vous devez choisir une option.",
  "Vous devez vérifier que vous acceptez les termes et conditions.",
];

// 1er CHAMP : LE PRENOM
const nameInput = document.getElementById("first"); // name field
const lastNameInput = document.getElementById("last"); // name field
const emailInput = document.getElementById("email"); // name field
const birthdateInput = document.getElementById("birthdate"); // name field
const quantityInput = document.getElementById("quantity"); // name field
// const nameInput = document.getElementById("location1"); // name field
// const nameInput = document.getElementById("location1"); // name field

const errorText = [
  "texterrorfirstname",
  "texterrorlastname",
  "texterroremail",
  "texterrorbirthdate",
  "texterrorquantity",
  "texterrorlocation",
  "texterrorconditions",
];

//
const validateForm = (event) => {
  let valueFirstNameInput = nameInput.value; //value field
  let valueLastNameInput = lastNameInput.value; //value field
  if (
    nameRegex.test(valueFirstNameInput) &&
    valueFirstNameInput.length >= 2 &&
    nameRegex.test(valueLastNameInput) &&
    valueLastNameInput.length >= 2
  ) {
    return true;
  } else {
    // errorText.classList.add("color-error");
    document.getElementById(errorText[0]).innerHTML = errorTexts[0];
    document.getElementById(errorText[1]).innerHTML = errorTexts[1];
    return false;
  }
};

// const validateLast = (event) => {
//   let valueLastNameInput = nameInput.value; //value field
//   if (nameRegex.test(valueLastNameInput) && valueLastNameInput.length >= 2) {
//     return true;
//   } else {
//     // errorText.classList.add("color-error");
//     document.getElementById(errorText[1]).innerHTML = errorTexts[1];
//     return false;
//   }
// };

//
// FONCTION DE VALIDATION

const validate = () => {
  const validateForms = validateForm();

  return validateForms;
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
