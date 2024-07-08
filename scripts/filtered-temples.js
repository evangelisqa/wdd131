const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
// Select menu buttons
const homeButton = document.querySelector('#home-button');
const oldButton = document.querySelector('#old-button');
const newButton = document.querySelector('#new-button');
const largeButton = document.querySelector('#large-button');
const smallButton = document.querySelector('#small-button');

const pageHeading = document.querySelector('#page-heading');


hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

/* The temples I have been visiting */
const temples = [
    {
        templeName: "Taipei Taiwan Temple",
        location: "Taipei, Taipei, Taiwan",
        dedicated: "1984, November, 17",
        area: 9945,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-1031625-wallpaper.jpg"
    },
    {
        templeName: "Regina Sakatchewan Temple",
        location: "Regina, Saskatchewan",
        dedicated: "1999, Novenber, 14",
        area: 10700,
        imageUrl: 
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/regina-saskatchewan/400x250/regina-temple-lds-83522-wallpaper.jpg"
    },
    {
        templeName: "Calgary Temple",
        location: "Calgary, Alberta",
        dedicated: "2012, October, 28",
        area: 33000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/400x250/calgary-albert-temple-lds-1059122-wallpaper.jpg"
    },
    {
        templeName: "Cardston Temple",
        location: "Cardston, Alberta",
        dedicated: "1923, August, 26",
        area: 88562,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/400x250/cardston-canada-temple-lds-1072764-wallpaper.jpg"

    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },

    {
        templeName: "Idaho Falls Idaho Temple",
        location: "Idaho Falls, Idaho",
        dedicated: "23, September, 1945",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/1-Idaho-Falls-Temple-2097425.jpg"
    },
    {
        templeName: "Denver Colorado Temple",
        location: "Denver, Colorado",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/400x250/denver-temple-lds-766966-wallpaper.jpg"
    },
    
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, New Mexico",
        dedicated: "34245",
        area: 6800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-998219-wallpaper.jpg"
    },
    {
        templeName: "Gilbert Arizona Temple",
        location: "Gilbert, Arizona",
        dedicated: "2014, March 2",
        area: 85326,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-temple-exterior-1207309-wallpaper.jpg"
    },
    {
        templeName: "Phoenix Arizona Temple",
        location: "Phoenix, Arizona",
        dedicated: "2014, November, 2014",
        area: 64870,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/phoenix-arizona/400x250/phoenix-arizona-temple-1284110-wallpaper.jpg"
    },
    {
        templeName: "Winnipeg Manitoba Temple",
        location: "Winnipeg, Manitoba",
        dedicated: "2021, October, 31",
        area: 16100,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winnipeg-manitoba/400x250/winnipeg_manitoba_temple_exterior.jpeg"
    },
    {
        templeName: "Manila Philippines Temple",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area:26683,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Portland Oregon Temple",
        location: "Portlan, Oregon",
        dedicated: "1989,August, 21",
        area: 80500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/2018/400x250/Portland-Oregon-Temple10.jpg"
    },
    {
        templeName: "Seatle Washington Temple",
        location: "Seatle, Washington",
        dedicated: "1980, 21, November",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seatlle-temple-lds-933559-wallpaper.jpg"
    },
    {
        templeName: "Vancouver Canada Temple",
        location: "Vancover, British Columbia ",
        dedicated: "2010, May, 2",
        area: 28165,
        imageUrl:
             "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vancouver-british-columbia/400x250/vancouver-temple-766984-wallpaper.jpg"
    },

    /* I've been planning to visit these temples someday */
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-clouds-922212-wallpaper.jpg"
    },
   
];

let filteredTemples = [];

document.addEventListener('DOMContentLoaded', function () {
    generate_temple_cards("home");
}, false);

function changeActive(activePhrase) {
// change active class on nav buttons
    homeButton.classList.remove('active');
    oldButton.classList.remove('active');
    newButton.classList.remove('active');
    largeButton.classList.remove('active');
    smallButton.classList.remove('active');

    switch (activePhrase) {
        case "home":
            homeButton.classList.add('active');
            break;
        case "old":
            oldButton.classList.add('active');
            break;
        case "new":
            newButton.classList.add('active');
            break;
        case "large":
            largeButton.classList.add('active');
            break;
        case "small":
            smallButton.classList.add('active');
            break;
        default:
    }
}

// reorder date format
function reorderDate(dateString) {
    const parts = dateString.split(',').map(part => part.trim()); // ['1965', 'April', '4']

    const day = parts[2];
    const month = parts[1];
    const year = parts[0];

    return `${day} ${month} ${year}`;
}

function generate_temple_cards(filterPhrase) {
/* Filter temple array: Home - displays all | Old - temples built before 1900 | New - temples built after 2000 | 
Large - temples larger than 90000 square feet | Small - temples smaller than 10000 square feet */
    switch (filterPhrase) {
        case "home":
            filteredTemples = temples;
            pageHeading.textContent = "Temples | Home";
            break;
        case "old":
            filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) < 1900);
            pageHeading.textContent = "Old Temples | Built Before 1900";
            break;
        case "new":
            filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",", 1)) > 2000);
            pageHeading.textContent = "New Temples | Built After 2000";
            break;
        case "large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            pageHeading.textContent = "Large Temples | Greater than 90000 sq ft";
            break;
        case "small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            pageHeading.textContent = "Small Temples | Less than 10000 sq ft";
            break;
        default:
            filteredTemples = temples;
            pageHeading.textContent = "Temples | Home";
    };
    changeActive(filterPhrase);
    const htmlTemples = filteredTemples.map(
        (temple) =>
            `<div class="temple-card">
                <div class="temple-info">
                    <h3>${temple.templeName}</h3>
                    <table>
                        <tr>
                            <th class="label">Location:</th>
                            <td class="value">${temple.location}</td>
                        </tr>
                        <tr>
                            <th class="label">Dedicated:</th>
                            <td class="value">${reorderDate(temple.dedicated)}</td>
                        </tr>
                        <tr>
                            <th class="label">Size:</th>
                            <td class="value">${temple.area} sq ft</td>
                        </tr>
                    </table>
                </div>
                <img class="temple-img" data-src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400">
            </div>`
    );
    document.getElementById("temples").innerHTML = htmlTemples.join('');
    // remove the data-src attribute once the image has loaded
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
}

// create an event listeners for menu selections
homeButton.addEventListener('click', () => {
    generate_temple_cards("home");
});
oldButton.addEventListener('click', () => {
    generate_temple_cards("old");
});
newButton.addEventListener('click', () => {
    generate_temple_cards("new");
});
largeButton.addEventListener('click', () => {
    generate_temple_cards("large");
});
smallButton.addEventListener('click', () => {
    generate_temple_cards("small");
});

// Display the current year in the first paragraph of the footer.
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display the date the document was last modified in the second paragraph of the footer.
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;