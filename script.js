// JavaScript to automatically update the year in the footer
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});


// const hamburger = document.querySelector('.fa-burger');
// const menu = document.querySelector('.menu');
// const overlay = document.querySelector(".overlay")

// hamburger.addEventListener('click', function () {
    
//     menu.style.display = "block";
//     hamburger.style.display = "none";
//     overlay.classList.toggle('open');
// });


// Selecting the elements
const menuButton = document.querySelector('.menu1');
const menu = document.querySelector('.menu');

// Adding click event listener
menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');  // Toggle the menu visibility
    menuButton.style.color = "white"
});



document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';


menuButton.addEventListener('click', () => {
   
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
});


// -------------------------------cdn----------------------------

ScrollReveal().reveal('.content-box',{delay:500,origin:'top', interval: 200});
ScrollReveal().reveal('.mcqimg',{delay:500,origin:'top', interval: 200});

// -------------------------------cdn----------------------------


// var i = 0;
// var txt = 'All MCQ Practice Questions and answers.';
// var speed = 50;

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// // Automatically start the typewriter effect when the page loads
// window.onload = function() {
//   typeWriter();
// };


const scriptURL = 'https://script.google.com/macros/s/AKfycbxQAoe28f6_g0Rri2RfzCrA0nk4O6Wy-9UKT7rZSbjcNuT7VSnpN_1akIY6eYjcn86_dw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent sucessfully"
    })
    setTimeout( function(){
        msg.innerHTML=""

    },5000)
    form.reset()
    .catch(error => console.error('Error!', error.message))
})