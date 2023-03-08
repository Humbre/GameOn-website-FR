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
const checkBox1 = document.getElementById('checkBox1'); //cocher un des éléments obligatoire
const checkBox2 = document.getElementById('checkbox1'); // conditions d'utilisation

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
  //return errors; on ne peut pas retourner cette fonction au début ?
  if(Object.keys(errors).length > 0){
    showErrors();
  }else{
    '';
  }

  if (validateData.value()){
    alert('Merci, votre candidature a bien été reçue.');
    modalbg.style.display = "none";
  } else{
    alert('Il y a eu une erreur, veuillez réessayer');
  }

}

// Validation des données
function validateData(){
  let errors = {};

  if (firstName.value.lenght <2){ 
    errors.firstName = "Votre prénom doit faire minimum 2 caractères";
  }
  if (lastName.value.lenght <2){
    errors.lastName = "Votre nom doit faire minimum 2 caractères";
  }
  if (email.value !== "mysite@outlook.fr" || "my.ownsite@ourearth.org" || "mysite@you.me.net" || "mysite@gmail.com"){
    errors.email = "Veuillez rentrer une adresse email valide";
  }
  if (!birthDate.value){
    errors.birthDate = "Veuillez rentrer votre date de naissance";
  }
  if (!quantity.value){
    errors.quantity = "Veuillez entrer un nombre entre 0 et 999";
  }
  if (!checkBox1.value){
    errors.checkBox1 = "Veuillez cocher une des cases suivantes";
  }
  if (!checkBox2.value){
    errors.checkBox2 = "Veuillez accepter les condition d'utilisation";
  }
  return errors;
}


// affichage des erreurs
function showErrors(errors){

  if (errors.firstName = true) {
    document.getElementById("firstNameError").innerHTML = errors.firstName;
  } else{
    document.getElementById("firstNameError").innerHTML = "";
  }

  if (errors.lastName = true) {
    document.getElementById("lastNameError").innerHTML = errors.lastName;
  } else{
    document.getElementById("lastNameError").innerHTML = "";
  } 

  if (errors.email = true) {
    document.getElementById("mailError").innerHTML = errors.email;
  } else{
    document.getElementById("mailError").innerHTML = "";
  } 

  if (errors.birthDate = true) { 
    document.getElementById("birthdateError").innerHTML = errors.birthDate;
  } else{
    document.getElementById("birthdateError").innerHTML = "";
  }  
  
  if (errors.quantity = true) {
    document.getElementById("quantityError").innerHTML = errors.quantity;
  } else{
    document.getElementById("quantityError").innerHTML = "";
  }  
  
  if (errors.checkBox1 = true) {
    document.getElementById("check1Error").innerHTML = errors.checkBox1;
  } else{
    document.getElementById("check1Error").innerHTML = "";
  }  
  
  if (errors.checkBox2 = true) {
    document.getElementById("check2Error").innerHTML = errors.checkBox2;
  } else{
    document.getElementById("check2Error").innerHTML = "";
  }
  // Est-ce qu'il y a un truc à retourner à la fin ?
}




