const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const main = document.querySelector('main');
const header = document.querySelector('header');
const menu = document.getElementById('menu');

// Check if dark mode preference is already stored
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial mode based on stored preference
setMode(isDarkMode);

toggle.addEventListener('click', function() {
  const darkMode = !body.classList.contains('dark-mode');
  setMode(darkMode);

  // Store the dark mode preference
  localStorage.setItem('darkMode', darkMode);
});

function setMode(darkMode) {
  body.classList.toggle('dark-mode', darkMode);
  main.classList.toggle('dark-mode', darkMode);
  header.classList.toggle('dark-mode', darkMode);
  menu.classList.toggle('dark-mode', darkMode);

  // Update the toggle icon
  if (darkMode) {
    toggle.classList.remove('bi-moon');
    toggle.classList.add('bi-brightness-high-fill');
  } else {
    toggle.classList.remove('bi-brightness-high-fill');
    toggle.classList.add('bi-moon');
  }
}

// Check the stored preference on page load
window.addEventListener('DOMContentLoaded', function() {
  setMode(isDarkMode);
});


function myFunction() {
    var x = document.getElementById("menu");
    if (x.classList.contains("hidden")) {
        x.classList.remove("hidden");
        x.classList.add("visible");
    } else {
        x.classList.remove("visible");
        x.classList.add("hidden");
    }
  } 
