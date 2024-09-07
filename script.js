// JavaScript to automatically update the year in the footer
document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable Common Keyboard Shortcuts
  document.addEventListener("keydown", function (e) {
    // Disable F12
    if (e.key === "F12") {
      e.preventDefault();
    }

    // Disable Ctrl+Shift+I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault();
    }

    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      e.preventDefault();
    }

    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      e.preventDefault();
    }

    // Disable Ctrl+U (View Source)
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
    }
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

// ScrollReveal().reveal('.content-box',{delay:500,origin:'top', interval: 200});
ScrollReveal().reveal('.mcqimg',{delay:500,origin:'top', interval: 200});
ScrollReveal().reveal('.headdown',{delay:500,origin:'top', interval: 200});
ScrollReveal().reveal('.title',{delay:500,origin:'top', interval: 200});
ScrollReveal().reveal('.big-btn',{delay:50,origin:'bottom', interval: 50});
ScrollReveal().reveal('.toggle-label,.toggle-content',{delay:500,origin:'top', interval: 200});

// -------------------------------cdn----------------------------

document.getElementById('serv').addEventListener('click', function() {
    var content = document.getElementById('scrollable-content');
    content.classList.add('scrollable');
});

document.getElementById('refresh-btn').addEventListener('click', function() {
    location.reload(); // This reloads the current page
});


const shot = document.querySelector('#refresh-btn')
document.getElementById('reload').addEventListener('click',function() {
   shot.style.display = 'block';
});


//----------------------------------------protectedd---------------------
