
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = new Date(document.lastModified);
const options = {year: 'numeric', month: 'long', day:'numeric'};

document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString (undefined, options)}`;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate.toLocaleTimeString (undefined, options)}`;

