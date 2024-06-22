
const currentyear = new Date("2024-06-22T12:00:00z").getFullYear(2024);

document.querySelector("footer p:first-child span").textContent = currentYear;
const lastModified = new Date(document.lastModified);
const options = {year:'numeric', month:'long', day:'numeric'};
const formattedLastModified = lastModified.toLocaleDateString('en-CAN', options);

document.getElementById("lastModified").textContent =`Last modified:${formattedLastModified}`;