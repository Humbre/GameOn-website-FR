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
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelector(".formData");
const closeBtn = document.querySelector(".close");
const btnSubmit = document.querySelector(".btn-submit");
const firstName = document.getElementById('first'); // 2 caractères ou plus
const lastName = document.getElementById('last'); // 2 caractères ou plus
const email = document.getElementById('email'); // email
const birthDate = document.getElementById('birthdate'); //rentrer date de naissance
const quantity = document.getElementById('quantity'); //chiffre entre 0 et 999
//const checkBox1 = document.getElementById('checkBox1'); //cocher un des éléments obligatoire
//const checkBox2 = document.getElementById('checkbox1'); // conditions d'utilisation

// OUVRIR FORMULAIRE
modalBtn.addEventListener("click", launchModal);

function launchModal(){
  modalbg.style.display = "block";
}

// FERMER LE FORMULAIRE CROIX

closeBtn.addEventListener("click", closeModal);

function closeModal(){
  modalbg.style.display = "none";
}

// FERMER LE FORMULAIRE QUAND DONNEES ENVOYEES + messages d'erreur
btnSubmit.addEventListener("click", sendData);

function sendData(){
  let errors = validateData();

  showErrors();

  if(Object.keys(errors).length > 0){ 
    alert('Il y a eu une erreur, veuillez réessayer');
    modalbg.style.display = "block";
  }else{
    alert('Merci, votre candidature a bien été reçue.');
    modalbg.style.display = "none";
  }

}

// Validation des données
function validateData(){
  let errors = {};

  if (firstName.value.length <2){ 
    errors.firstName = "Votre prénom doit faire minimum 2 caractères";
  }
  if (lastName.value.length <2){
    errors.lastName = "Votre nom doit faire minimum 2 caractères";
  }
  if (email.value !== "mysite@outlook.fr" || "my.ownsite@ourearth.org" || "mysite@you.me.net" || "mysite@gmail.com"){
    errors.email = "Veuillez rentrer une adresse email valide";
    // utiliser des r
  }
  if (!birthDate.value){
    errors.birthDate = "Veuillez rentrer votre date de naissance";
  }
  if (!quantity.value){
    errors.quantity = "Veuillez entrer un nombre entre 0 et 999";
  }
  if (document.querySelector('checkBox1':checked).value !== 'on'){
    errors.checkBox1 = "Veuillez cocher une des cases suivantes";
  }
  if (document.getElementById('checkbox1':checked).value !== 'on'){
    errors.checkBox2 = "Veuillez accepter les condition d'utilisation";
  }
  return errors;
}


// affichage des erreurs
function showErrors(errors){

  if (errors.firstName) {
    document.getElementById("firstNameError").innerHTML = errors.firstName;
  } else{
    document.getElementById("firstNameError").innerHTML = "";
  }

  if (errors.lastName) {
    document.getElementById("lastNameError").innerHTML = errors.lastName;
  } else{
    document.getElementById("lastNameError").innerHTML = "";
  } 

  if (errors.email) {
    document.getElementById("mailError").innerHTML = errors.email;
  } else{
    document.getElementById("mailError").innerHTML = "";
  } 

  if (errors.birthDate) { 
    document.getElementById("birthdateError").innerHTML = errors.birthDate;
  } else{
    document.getElementById("birthdateError").innerHTML = "";
  }  
  
  if (errors.quantity) {
    document.getElementById("quantityError").innerHTML = errors.quantity;
  } else{
    document.getElementById("quantityError").innerHTML = "";
  }  
  
  if (errors.checkBox1) {
    document.getElementById("check1Error").innerHTML = errors.checkBox1;
  } else{
    document.getElementById("check1Error").innerHTML = "";
  }  
  
  if (errors.checkBox2) {
    document.getElementById("check2Error").innerHTML = errors.checkBox2;
  } else{
    document.getElementById("check2Error").innerHTML = "";
  }
  
}




