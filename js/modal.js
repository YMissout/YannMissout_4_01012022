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

// Regex
const nameRegex = /^[a-zA-Z][a-zA-Z]/; //nom
const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //mail
const quantityRegex = /^[0-9]+/;

// Variables input du form
const nameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const location1Input = document.getElementById("location1");
const location2Input = document.getElementById("location2");
const location3Input = document.getElementById("location3");
const location4Input = document.getElementById("location4");
const location5Input = document.getElementById("location5");
const location6Input = document.getElementById("location6");
const conditionsCheckBox1 = document.getElementById("checkbox1");

const errorText = [
  "texterrorfirstname",
  "texterrorlastname",
  "texterroremail",
  "texterrorbirthdate",
  "texterrorquantity",
  "texterrorlocation",
  "texterrorconditions",
];

const errorTexts = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom",
  "Merci de renseigner une adresse email valide",
  "Vous devez entrer votre date de naissance",
  "Merci d'indiquer votre nombre de games",
  "Vous devez choisir une ville",
  "Vous devez vérifier que vous acceptez les termes et conditions",
];

const validateFirst = (event) => {
  let valueFirstNameInput = nameInput.value; //value field
  if (nameRegex.test(valueFirstNameInput)) {
    document.getElementById(errorText[0]).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorText[0]).innerHTML = errorTexts[0];
    return false;
  }
};
const validateLast = (event) => {
  let valueLastNameInput = lastNameInput.value; //value field
  if (nameRegex.test(valueLastNameInput)) {
    document.getElementById(errorText[1]).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorText[1]).innerHTML = errorTexts[1];
    return false;
  }
};
const validateEmail = (event) => {
  let valueEmailInput = emailInput.value; //value field
  if (mailRegex.test(valueEmailInput)) {
    document.getElementById(errorText[2]).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorText[2]).innerHTML = errorTexts[2];
    return false;
  }
};
const validateBirthdate = (event) => {
  let valueBirthdateInput = birthdateInput.value; //value field
  if (valueBirthdateInput === "") {
    document.getElementById(errorText[3]).innerHTML = errorTexts[3];
    return false;
  } else {
    document.getElementById(errorText[3]).innerHTML = "";
    return true;
  }
};
const validateQuantity = (event) => {
  let valueQuantityInput = quantityInput.value; //value field
  if (quantityRegex.test(valueQuantityInput)) {
    document.getElementById(errorText[4]).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorText[4]).innerHTML = errorTexts[4];
    return false;
  }
};
const validateRadio = (event) => {
  let checkedLocation1Input = location1Input.checked;
  let checkedLocation2Input = location2Input.checked;
  let checkedLocation3Input = location3Input.checked;
  let checkedLocation4Input = location4Input.checked;
  let checkedLocation5Input = location5Input.checked;
  let checkedLocation6Input = location6Input.checked;
  if (
    checkedLocation1Input == false &&
    checkedLocation2Input == false &&
    checkedLocation3Input == false &&
    checkedLocation4Input == false &&
    checkedLocation5Input == false &&
    checkedLocation6Input == false
  ) {
    document.getElementById(errorText[5]).innerHTML = errorTexts[5];
    return false;
  } else {
    // checkedLocation1Input == true ||
    //   checkedLocation2Input == true ||
    //   checkedLocation3Input == true ||
    //   checkedLocation4Input == true ||
    //   checkedLocation5Input == true ||
    //   checkedLocation6Input == true;
    document.getElementById(errorText[5]).innerHTML = "";
    return true;
  }
};

const validateCheckbox = (event) => {
  if (!conditionsCheckBox1.checked) {
    document.getElementById(errorText[6]).innerHTML = errorTexts[6];
    return false;
  } else {
    document.getElementById(errorText[6]).innerHTML = "";
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
