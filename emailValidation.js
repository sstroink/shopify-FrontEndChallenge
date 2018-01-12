/*
    file: emailValidation.js
    supports: index.html
    
    Author: Sophie Stroink


*/

/*If successful email validation, log the email and selected interest*/
function logData(){
	var email = document.forms["newsletter"]["email"].value;
	var interest = document.forms["newsletter"]["interests"].value;
	console.log(email,interest);
}

/*Checks the email value against the regular expression*/
/*If valid, calls logData()*/
/*If invalid, notifies"Plese enter a valid email" and lets user make correction*/
function validateEmail() {
  var email = document.forms["newsletter"]["email"].value;
  var reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (email.search(reg) == -1) {
      document.getElementById("error").style.color = '#C23628'; //turns red
      return false;

  } else {
      document.getElementById("error").style.color = '#000639'; //stays purple
      return true;
  }
}