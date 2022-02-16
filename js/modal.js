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
const btnValidation = document.getElementById("btn-validation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// function to remove form
function close() {
  modalbg.style.display = "none";
}

// "X" close button of the form
btnClose.addEventListener("click", close);

// Inputs Value
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

// // Regex
const nameRegex = /^[a-z ,.'-][a-z ,.'-]+$/i;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const quantityRegex = /^[0-9]+/;
const birthdateRegex =
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

// div where to insert error text
const errorText = [
  "texterrorfirstname",
  "texterrorlastname",
  "texterroremail",
  "texterrorbirthdate",
  "texterrorquantity",
  "texterrorlocation",
  "texterrorconditions",
];

// all the error texts
const errorTexts = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom",
  "Merci de renseigner une adresse email valide",
  "Vous devez entrer votre date de naissance",
  "Merci d'indiquer votre nombre de games",
  "Vous devez choisir une ville",
  "Vous devez vérifier que vous acceptez les termes et conditions",
];

// function to validate First name, Last name, Email, Birthdate, Quantity (tournament)
const validInput = (input, regex, errorTextId, errorText) => {
  let inputValue = input.value;
  if (regex.test(inputValue)) {
    document.getElementById(errorTextId).innerText = "";
    return true;
  } else {
    document.getElementById(errorTextId).innerHTML = errorText;
    return false;
  }
};

// function radio
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
    document.getElementById(errorText[5]).innerHTML = "";
    return true;
  }
};

// function checkbox (CGU)
const validateCheckbox = (event) => {
  if (!conditionsCheckBox1.checked) {
    document.getElementById(errorText[6]).innerHTML = errorTexts[6];
    return false;
  } else {
    document.getElementById(errorText[6]).innerHTML = "";
    return true;
  }
};

// FONCTION DE VALIDATION
// First name
const validate = () => {
  const isFirstNameValid = validInput(
    nameInput,
    nameRegex,
    errorText[0],
    errorTexts[0]
  );
  // Last name
  const isLastNameValid = validInput(
    lastNameInput,
    nameRegex,
    errorText[1],
    errorTexts[1]
  );
  // Email
  const isEmailValid = validInput(
    emailInput,
    emailRegex,
    errorText[2],
    errorTexts[2]
  );
  // Birthdate
  const isBirthdateValid = validInput(
    birthdateInput,
    quantityRegex,
    errorText[3],
    errorTexts[3]
  );
  // Quantity (tournament)
  const isQuantityValid = validInput(
    quantityInput,
    quantityRegex,
    errorText[4],
    errorTexts[4]
  );
  // Radio
  const isRadioValid = validateRadio();
  // Checkbox (CGU)
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

// form sending
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

// close button after validation
btnValidation.addEventListener("click", close);
