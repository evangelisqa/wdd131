
document.addEventListener('DOMContentLoaded', function () {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
  
    hamButton.addEventListener('click', () => {
      navigation.classList.toggle('show');
      hamButton.classList.toggle('open');
    });
  });

// Output the current year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Output the date the document was last modified in the footer's second paragraph
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;