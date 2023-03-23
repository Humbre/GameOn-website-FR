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
const modalBtn = document.getElementsByClassName(".btn-signup"); // deux boutons je m'inscris (desktop + responsive)
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


// evenement dans boucle pour que le bouton je m'inscris fonctionne en responsive 
for (i=0, i<modalBtn.length, i++){
  modalBtn[i].addEventListener("click", launchModal);
}
// + fonction pour ouvrir le formulaire (sur le bouton je m'inscris)
function launchModal(){
  modalbg.style.display = "block";
  modalbg.style.opacity = "1";
}



// evenement pour fermer la modale
closeBtn.addEventListener("click", closeModal);
//+ fonction pour fermer le formulaire (avec la croix)
function closeModal(){
  modalbg.style.display = "none";
}

// evenement pour envoyer les données 
btnSubmit.addEventListener("click", sendData);
//+ fonction pour envoyer les données si pas d'erreurs + reset
function sendData(){
  let errors = validateData(); 
  showErrors(errors);

  //condition d'affichage des erreurs
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

  if (firstName.value.length <2){ //on verifie la longueur du prenom
    errors.firstName = "Votre prénom doit faire minimum 2 caractères";
  }
  if (lastName.value.length <2){ //On verifie la longueur du nom
    errors.lastName = "Votre nom doit faire minimum 2 caractères";
  }
  if (!expressionReguliereMail.test(email.value)){ // on verifie l'email avec la regex
    errors.email = "Veuillez entrer une adresse email valide";   
  }
  if (!birthDate.value){ // On verifie la date de naissance
    errors.birthDate = "Veuillez entrer votre date de naissance";
  }
  if (!quantityRegex.test(quantity.value)){ // On verifie la quantité grace à la regex quantité
    errors.quantity = "Veuillez entrer un nombre entre 0 et 999";
  }
  if (!document.querySelector('.checkbox-input1:checked')) { // On verifie qu'une checkbox soit cochée dans les villes
    errors.checkBox = "Veuillez cocher une des cases précédentes";
  }
  if (!document.querySelector('.checkbox-input2:checked')) { // on verifie que les conditions d'utilisation soient cochées
    errors.checkBox1 = "Veuillez accepter les condition d'utilisation";
  }
  return errors; // On retourne les erreurs dans l'objet si erreur il y a
}


// fonction d'affichage de données si erreurs + reset de <p> si pas d'erreurs
function showErrors(errors){

  if (errors.firstName) { // S'il y a des erreurs dans le prenom, on affiche le texte, sinon on affiche rien
    document.getElementById("firstNameError").innerText = errors.firstName;
  } else{
    document.getElementById("firstNameError").innerText = "";
  }

  if (errors.lastName) { // S'il y a des erreurs dans le nom, on affiche le texte, sinon on affiche rien
    document.getElementById("lastNameError").innerText = errors.lastName;
  } else{
    document.getElementById("lastNameError").innerText = "";
  } 

  if (errors.email) { // S'il y a des erreurs dans le mail, on affiche le texte, sinon on affiche rien
    document.getElementById("mailError").innerText = errors.email;
  } else{
    document.getElementById("mailError").innerText = "";
  } 

  if (errors.birthDate) { // S'il y a des erreurs dans la date de naissance, on affiche le texte, sinon on affiche rien
    document.getElementById("birthdateError").innerText = errors.birthDate;
  } else{
    document.getElementById("birthdateError").innerText = "";
  }  
  
  if (errors.quantity) { // S'il y a des erreurs dans la quantité, on affiche le texte, sinon on affiche rien
    document.getElementById("quantityError").innerText = errors.quantity;
  } else{
    document.getElementById("quantityError").innerText = "";
  }  
  
  if (errors.checkBox) { // Si les checbox villes ne sont pas cochées, on affiche le texte, sinon on affiche rien
    document.getElementById("check1Error").innerText = errors.checkBox;
  } else{
    document.getElementById("check1Error").innerText = "";
  }  
  
  if (errors.checkBox1) { // Si les conditions d'utilisations ne sont pas cochées, on affiche le texte, sinon on affiche rien
    document.getElementById("check2Error").innerText = errors.checkBox1;
  } else{
    document.getElementById("check2Error").innerText = "";
  }
  
}




