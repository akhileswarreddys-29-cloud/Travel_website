
// Mobile Menu Toggle


const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){


menuBtn.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});


}







// Booking Form Validation


const bookingForm = document.getElementById("bookingForm");


if(bookingForm){


bookingForm.addEventListener("submit",function(event){



event.preventDefault();




let name =
document.getElementById("name").value;



let email =
document.getElementById("email").value;



let phone =
document.getElementById("phone").value;



let destination =
document.getElementById("destination").value;







if(
name === "" ||
email === "" ||
phone === "" ||
destination === "Choose Destination"

){



alert("Please fill all required details!");



}



else{



alert(
"Thank you " + name +
"! Your travel enquiry has been submitted successfully."
);



bookingForm.reset();



}



});



}








// Simple Image Slider Effect (Hero)


const hero =
document.querySelector(".hero");



const images = [

"images/hero.jpg",

"images/travel1.jpg",

"images/adventure.jpg"

];



let index = 0;



if(hero){



setInterval(()=>{


index++;


if(index >= images.length){

index = 0;

}



hero.style.backgroundImage =

`
linear-gradient(
rgba(0,0,0,0.5),
rgba(0,0,0,0.5)
),
url(${images[index]})
`;



},5000);



}