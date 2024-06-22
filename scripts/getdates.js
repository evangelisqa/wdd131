
const currentyear = new Date().getFullYear();

document.querySelector("footer p:first-child span").textContent = currentYear;
const lastModified = new Date(document.lastModified);
const options = {year:'numeric', month:'long', day:'numeric'};
const formattedLastModified = lastModified.toLocaleDateString('en-US', options);

document.getElementById("lastModified").textContent =`Last modified:${formattedLastModified}`;