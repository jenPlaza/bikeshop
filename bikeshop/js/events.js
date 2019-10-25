/*
 * events.js
 * 
*/

let button = document.getElementById("Btn");
  function openForm() {
    document.getElementById("mailingList").style.display = "block";
    button.removeEventListener("click", openForm);
  }
  button.addEventListener("click", openForm);

let newsbutton = document.getElementById("radio");
  function thankyou() {
      document.getElementById("thankYou").style.display = "block";
    newsbutton.removeEventListener("click", thankyou);
  }
  newsbutton.addEventListener("click", thankyou);

