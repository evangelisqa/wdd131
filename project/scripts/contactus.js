document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});


// Display the current year in the first paragraph of the footer.
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display the date the document was last modified in the second paragraph of the footer.
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;