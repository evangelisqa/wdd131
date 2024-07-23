// Output the current year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output the date the document was last modified in the footer's second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;

const hamburger = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.mainMenu');

hamburger.addEventListener('click',() => {
    mainMenu.classList.toggle('active');
});

