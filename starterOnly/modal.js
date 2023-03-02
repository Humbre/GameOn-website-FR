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

// FERMER LE FORMULAIRE QUAND DONNEES ENVOYEES + message d'erreur
btnSubmit.addEventListener("click", sendData);

function sendData(){
  if (validateData.value()){
    alert('Merci, votre candidature a bien été reçue.');
    modalbg.style.display = "none";
  } else{
    alert('Il y a eu une erreur, veuillez réessayer');
  }

}

// Validation des données
function validateData(){
  var error;

  if (firstName.lenght <2){ // ecrire la phrase dans le formulaire
    return error;
    document.getElementById("firstName").innerHTML = "Votre prénom doit faire minimum 2 caractères"
  }
  if (lastName.lenght <2){
    return error;
    document.getElementById("lastName").innerHTML = "Votre nom doit faire minimum 2 caractères"
  }
  if (email.value !== "mysite@outlook.fr" || "my.ownsite@ourearth.org" || "mysite@you.me.net" || "mysite@gmail.com"){
    return error;
  document.getElementById("mail").innerHTML = "Veuillez rentrer une adresse email valide"
  }
  if (!birthdate.value){
    return error;
    document.getElementById("birthday").innerHTML = "Veuillez rentrer votre date de naissance"
  }
  if (!quantity.value){
    return error;
    document.getElementById("quantityTourn").innerHTML = "Veuillez entrer un nombre entre 0 et 999"
  }
  if (!checkBox1.value){
    return error;
    document.getElementById("check1").innerHTML = "Veuillez cocher une des cases suivantes"
  }
  if (!checkBox2.value){
    return error;
    document.getElementById("check2").innerHTML = "Veuillez accepter les condition d'utilisation"
  
  }

}




