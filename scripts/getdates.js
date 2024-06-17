
document.addEventListener('DOMContentLoaded',
(event) =>{
    // Get current year
    const currentYear = newDate().getFullYear();
    // Set the copyright year
    document.querySelector('footer p:first-of-type').textContent = `Copryright @${currentYear}`;
    const lastModifiedDate = document.lastModified;
    document.querySelector(`footer p:nth-of-type(2)`).textContent = `Last Updated: ${lastModifiedDate}`


    document.getElementById('currentYear').textContent=new Date().getFullYear;
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
});