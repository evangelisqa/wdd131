
const currentyear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModified = new Date(document.lastModified);
const options = {year:'numeric', month: 'long', day: 'numeric'};
const formattedLastModified = lastModified.toLocaleDateString('en-CAN', options);
document.getElementById("lastModified").textContent = `Last modified: $ {formattedLastModified}`;