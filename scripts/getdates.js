
const currentyear = new Date("2024-06-22T 00:00:00").getFullYear(2024);

const lastModifiedDate = new Date().toLocaleDateString();

document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = `Last modofied:${lastModifiedDate}`;

