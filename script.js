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
