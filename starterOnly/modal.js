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
  if (validateData()){
    alert("error");
  } else{
    alert('Merci, votre candidature a bien été reçue.');
    modalbg.style.display = "none";
  }

}

function validateData(){
  var error;

  if (firstName.value <2){ // value en chiffre !
    error = 'Veuillez rentrer votre prénom';
  }
  if (!lastName.value <2){
    error = 'Veuillez rentrer votre nom';
  }
  if (email.value != "love@gmail.com"){
    error = 'Veuillez rentrer une adresse email valide';
  }
  if (!birthdate.value){
    error = 'Veuillez rentrer votre date de naissance';
  }
  if (!quantity.value){
    error = 'Veuillez entrer un nombre entre 0 et 999';
  }
  if (!checkBox1.value){
    error = 'Veuillez cocher une des cases suivantes';
  }
  if (!checkBox2.value){
    error = "Veuillez accepter les condition d'utilisation";
  }
  return error;

}
// rajouter un paramètre : message d'erreur si données non envoyées




//document.getElementById('form').addEventListener('submit', function() {
//  var erreur;

//  if (firstName.value <2){
//    erreur = 'Veuillez rentrer votre prénom';
//  }
//  if (!lastName.value <2){
//    erreur = 'Veuillez rentrer votre nom';
//  }
//  if (email.value != "love@gmail.com"){
//    erreur = 'Veuillez rentrer une adresse email valide';
//  }
//  if (!birthdate.value){
//    erreur = 'Veuillez rentrer votre date de naissance';
//  }
//  if (!quantity.value){
//    erreur = 'Veuillez entrer un nombre entre 0 et 999';
//  }
//  if (!checkBox1.value){
//    erreur = 'Veuillez cocher une des cases suivantes';
//  }
//  if (!checkBox2.value){
//    erreur = "Veuillez accepter les condition d'utilisation";
//  }

//});



