function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// bouton je m'inscris
const modalBtn = document.querySelectorAll(".modal-btn");
//lauch modal
// launch modal (bouton je m'inscris) évenement du formulaire au click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// apparition de la launchModal formulaire d'inscription
function launchModal() {
  modalbg.style.display = "block";
}
// bouton fermeture croix x
const btnClose = document.querySelector("#closebtn");
const modalbg = document.querySelector(".bground");
btnClose.addEventListener("click", function (event) {
  modalbg.style.display = "none";
});

//
// 1er CHAMP : LE PRENOM
//
const validateFirst = (event) => {
  // event.preventDefault();
  const nameInput = document.getElementById("first"); // name field
  const valueNameInput = nameInput.value; //value field
  const nameRegex = /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛa-zçéèêëàâîïôùû_\-\.\ ]+$/;
  let errorText = document.getElementById("texterrorfirstname");

  if (valueNameInput.length < 2) {
    errorText.innerHTML =
      "Merci d'entrer au minimum 2 caractères pour le champ du prénom";
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return false;
  } else if (
    nameRegex.test(nameInput.value) === true && ///erreur si valueNameInput!!!!!!!
    valueNameInput.length >= 2
  ) {
    errorText.innerHTML = "";
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return true;
  } else {
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Les caractères spéciaux ne sont pas accepté";
    return false;
  }
};
//
//2ème CHAMP : NOM DE FAMILLE
//
const validateLast = (event) => {
  //  event.preventDefault();
  const lastNameInput = document.getElementById("last");
  const valueLastNameInput = lastNameInput.value;
  const lastNameRegex = /^[A-ZÇÉÈÊËÀÂÎÏÔÙÛa-zçéèêëàâîïôùû_\-\.\ ]+$/;
  let errorText = document.getElementById("texterrorlastname");

  if (valueLastNameInput.length < 2) {
    errorText.innerHTML =
      "Merci d'entrer au minimum 2 caractères pour le champ du nom";
    changeStyleLastName = document.getElementById("texterrorlastname");
    changeStyleLastName.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return false;
  } else if (
    lastNameRegex.test(lastNameInput.value) == true && ///erreur si valueNameInput!!!!!!!
    valueLastNameInput.length >= 2
  ) {
    errorText.innerHTML = "";
    changeStyleLastName = document.getElementById("texterrorlastname");
    changeStyleLastName.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return true;
  } else {
    changeStyleFirstName = document.getElementById("texterrorfirstname");
    changeStyleFirstName.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Les caractères spéciaux ne sont pas accepté";
    return false;
  }
};

//
//3ème CHAMP : EMAIL
//
const validateEmail = (event) => {
  // event.preventDefault();
  const nameInputEmail = document.getElementById("email");
  const valueNameInputEmail = nameInputEmail.value;
  const emailFormat = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  // /^\A(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])\z$/;

  if (valueNameInputEmail == "") {
    textEmail = document.getElementById("texterroremail").textContent;
    document.getElementById("texterroremail").textContent =
      "Merci de renseigner une adresse email valide";
    changeStyleEmail = document.getElementById("texterroremail");
    changeStyleEmail.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return false;
  } else if (!emailFormat.test(valueNameInputEmail)) {
    document.getElementById("texterroremail").textContent =
      "Adresse email incorrect. ";
    changeStyleEmail = document.getElementById("texterroremail");
    changeStyleEmail.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return false;
  } else {
    document.getElementById("texterroremail").textContent = "";
    return true;
  }
};
//
// 4ème CHAMP : BIRTHDATE
//
const validateBirthdate = (event) => {
  const nameInputBirthdate = document.getElementById("birthdate");
  const valueNameInputBirthdate = nameInputBirthdate.value;
  let errorText = document.getElementById("texterrorbirthdate");

  if (valueNameInputBirthdate === "") {
    document.getElementById("texterrorbirthdate").textContent =
      "Merci d'entrez une date de naissance valide";
    changeStyleBirthdate = document.getElementById("texterrorbirthdate");
    changeStyleBirthdate.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return false;
  } else {
    document.getElementById("texterrorbirthdate").textContent = "";
    return true;
  }
};
//
//5ème CHAMP : QUANTITY
//
const validateQuantity = (event) => {
  const quantityInput = document.getElementById("quantity");
  const valueQuantityInput = quantityInput.value;
  const quantityRegex = /^[0-9]/;
  let errorText = document.getElementById("texterrorquantity");

  if (
    quantityRegex.test(quantityInput.value) === true &&
    valueQuantityInput >= 1
  ) {
    errorText.innerHTML = "";
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return true;
  } else if (valueQuantityInput > 0) {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Le nombre doit être supérieur ou égal à 1";
    return false;
  } else {
    changeStyleQuantity = document.getElementById("texterrorquantity");
    changeStyleQuantity.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    errorText.innerHTML = "Merci d'indiquer votre nombre de games";
    return false;
  }
};
//
//6ème CHAMP : BOUTON VILLE
//
const validateRadio = (event) => {
  const location1Input = document.getElementById("location1");
  const location2Input = document.getElementById("location2");
  const location3Input = document.getElementById("location3");
  const location4Input = document.getElementById("location4");
  const location5Input = document.getElementById("location5");
  const location6Input = document.getElementById("location6");
  const checkedLocation1Input = location1Input.checked;
  const checkedLocation2Input = location2Input.checked;
  const checkedLocation3Input = location3Input.checked;
  const checkedLocation4Input = location4Input.checked;
  const checkedLocation5Input = location5Input.checked;
  const checkedLocation6Input = location6Input.checked;

  if (
    checkedLocation1Input == false &&
    checkedLocation2Input == false &&
    checkedLocation3Input == false &&
    checkedLocation4Input == false &&
    checkedLocation5Input == false &&
    checkedLocation6Input == false
  ) {
    textLocation = document.getElementById("texterrorlocation").textContent;
    document.getElementById("texterrorlocation").textContent =
      "Merci de sélectionner une ville";
    changeStyleIconObligatoire = document.getElementById("texterrorlocation");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return false;
  } else {
    checkedLocation1Input == true ||
      checkedLocation2Input == true ||
      checkedLocation3Input == true ||
      checkedLocation4Input == true ||
      checkedLocation5Input == true ||
      checkedLocation6Input == true;

    textLocation = document.getElementById("texterrorlocation").textContent;
    document.getElementById("texterrorlocation").textContent = "";

    changeStyleIconObligatoire = document.getElementById("texterrorlocation");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return true;
  }
};
//
//7ème CHAMP : CHECHBOX
//
const validateCheckbox = () => {
  const conditionsCheckBox1 = document.getElementById("checkbox1");
  let errorText = document.getElementById("texterrorconditions");

  if (conditionsCheckBox1.checked == false) {
    errorText.innerHTML =
      "Merci d'accepter les termes et conditions générales pour s'inscrire";
    changeStyleIconObligatoire = document.getElementById("texterrorconditions");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return false;
  } else {
    errorText.innerHTML = "";
    changeStyleIconObligatoire = document.getElementById("texterrorconditions");
    changeStyleIconObligatoire.setAttribute(
      "style",
      "font-size : 14px; color : red; font-weight : bold"
    );
    return true;
  }
};

//
// FONCTION DE VALIDATION

const validate = () => {
  const isFirstNameValid = validateFirst();
  const isLastNameValid = validateLast();
  const isEmailValid = validateEmail();
  const isBirthdateValid = validateBirthdate();
  const isQuantityValid = validateQuantity();
  const isRadioValid = validateRadio();
  const isCheckboxValid = validateCheckbox();

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isBirthdateValid &&
    isQuantityValid &&
    isRadioValid &&
    isCheckboxValid
  );
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
      console.log({
        prénom: "isFirstNameValid",
        nom: "isLastNameValid",
        email: "isEmailValid",
        birthdate: "isBirthdateValid",
        quantity: "isQuantityValid",
        radio: "isRadioValid",
        checkbox: "isCheckboxValid",
      });
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
// BOUTON FERMETURE APRES INSCRIPTION
const btnValidation = document.getElementById("btn-validation");
btnValidation.addEventListener("click", function (event) {
  modalbg.style.display = "none";
});
