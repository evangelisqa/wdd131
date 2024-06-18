
const currentYear = new Date().getFullYear;

const lastModifiedDate = documennt.lastModified;

document.querySelector('footer p:first-of type').textContent = `Copyright @ ${currentYear}`;
document.querySelector('footer p:nth-of-type(2)').textContent = `Last Modified: ${lastModifiefDate}`;