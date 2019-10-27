/*
 * events.js 
*/
/*MemberBenefits buttonClick*/
var button = document.getElementById('Btn');
 function openForm(){
     document.getElementById("mailingList").style.display = "block";
button.removeEventListener("click",openForm);
   }
if(button){
button.addEventListener("click",openForm, false);
}
  
/*Thankyou*/
  var newsbutton = document.getElementById("radio");
   function thankyou() {
       document.getElementById("thankYou").style.display = "block";
     newsbutton.removeEventListener("click", thankyou);
   }
if(newsbutton){
   newsbutton.addEventListener("click", thankyou, false);
}
	

/*ContactUs Get Directions buttonClick*/
	var getDirectionsBtn = document.getElementById("gtDrctnBtn");
  function directions() {
	document.getElementById("directions").style.display = 'block';
	
var getDirections = document.getElementById('drivingTo');
getDirections.innerHTML='<h3>Get on I-275 N from N Florida Ave<br/ >3 min (1.0 mi)<br/ ><br/ >Follow I-4 E to Orlando. Exit from I-4 E<br/ >1 h 16 min (83.9 mi)<br/ ><br/ >Take W Colonial Dr and N Magnolia Ave to your destination<br/ >3 min (0.6 mi)</h3>';
  }
if(getDirectionsBtn){
  getDirectionsBtn.addEventListener("click", directions, false);
}







