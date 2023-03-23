// fonction menu burger responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// constantes du dom
const modalbg = document.querySelector(".bground"); //background
const modalBtn = document.getElementsByClassName(".btn-signup"); // deux boutons je m'inscris
const formData = document.querySelector(".formData"); // formulaire
const closeBtn = document.querySelector(".close"); // croix pour fermer la modale
const btnSubmit = document.querySelector(".btn-submit"); // bouton envoyer les données
const firstName = document.getElementById('first'); // prénom
const lastName = document.getElementById('last'); // nom
const email = document.getElementById('email'); // email
const birthDate = document.getElementById('birthdate'); // date de naissance
const quantity = document.getElementById('quantity'); //quantité, chiffre entre 0 et 999
const expressionReguliereMail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/; // regex mail
const quantityRegex = /^(?:0|[1-9]\d{0,2})$/; // regex quantité


// evenement + fonction pour ouvrir le formulaire (sur le bouton je m'inscris)

for (i=0, i<modalBtn.length, i++){
  modalBtn[i].addEventListener("click", launchModal);
}

function launchModal(){
  modalbg.style.display = "block";
  modalbg.style.opacity = "1";
}



// evenement + fonction pour fermer le formulaire (avec la croix)
closeBtn.addEventListener("click", closeModal);

function closeModal(){
  modalbg.style.display = "none";
}

// evenement + fonction pour envoyer les données si pas d'erreurs + reset
btnSubmit.addEventListener("click", sendData);

function sendData(){

  let errors = validateData(); 
  showErrors(errors);

  if(Object.keys(errors).length > 0){ 
    alert('Il y a eu une erreur, veuillez réessayer');
    modalbg.style.display = "block";
    // s'il y a une erreur dans les inputs, message pour reessayer
  }else{
    document.getElementsByClassName(".modal-body").innerHTML = '<p>Merci, votre candidature a bien été reçue.</p>';
    modalbg.style.display = "none";
    modalbg.style.opacity = "0";
    document.querySelector('.form[name=reserve]').reset();
    // s'il n'y a pas d'erreurs, reset + message de bonne reception
  }

}

// fonction de verifications que les données entrées soient valides
function validateData(){
  let errors = {}; // erreurs stockées dans objet

  if (firstName.value.length <2){ 
    errors.firstName = "Votre prénom doit faire minimum 2 caractères";
  }
  if (lastName.value.length <2){
    errors.lastName = "Votre nom doit faire minimum 2 caractères";
  }
  if (!expressionReguliereMail.test(email.value)){
    errors.email = "Veuillez entrer une adresse email valide";   
  }
  if (!birthDate.value){
    errors.birthDate = "Veuillez entrer votre date de naissance";
  }
  if (!quantityRegex.test(quantity.value)){
    errors.quantity = "Veuillez entrer un nombre entre 0 et 999";
  }
  if (!document.querySelector('.checkbox-input1:checked')) {
    errors.checkBox = "Veuillez cocher une des cases précédentes";
  }
  if (!document.querySelector('.checkbox-input2:checked')) {
    errors.checkBox1 = "Veuillez accepter les condition d'utilisation";
  }
  return errors;
}


// fonction d'affichage de données si erreurs + reset de <p> si pas d'erreurs
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
  
  if (errors.checkBox) {
    document.getElementById("check1Error").innerHTML = errors.checkBox;
  } else{
    document.getElementById("check1Error").innerHTML = "";
  }  
  
  if (errors.checkBox1) {
    document.getElementById("check2Error").innerHTML = errors.checkBox1;
  } else{
    document.getElementById("check2Error").innerHTML = "";
  }
  
}




