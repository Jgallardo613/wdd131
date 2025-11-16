// Temple Data Array
const temples = [
    {
        templeName: "Los Angeles California Temple",
        location: "Los Angeles, California, USA",
        dedicated: "11 March 1956",
        area: 190614,
        imageUrl: "images/losangelestemple.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "2 December 1983",
        area: 116642,
        imageUrl: "images/mexicocitytemple.jpg"
    },
    {
        templeName: "Dallas Texas Temple",
        location: "Dallas, Texas, USA",
        dedicated: "19 October 1984",
        area: 44207,
        imageUrl: "images/dallastexastemple.jpg"
    },
    {
        templeName: "Austin Texas Temple",
        location: "Austin, Texas, USA",
        dedicated: "17 August 2024", 
        area: 30000,
        imageUrl: "images/austintexastemple.jpg"
    },
    {
        templeName: "San Antonio Texas Temple",
        location: "San Antonio, Texas, USA",
        dedicated: "22 May 2005",
        area: 16800,
        imageUrl: "images/sanantoniotemple.jpg"
    },
    {
        templeName: "Tijuana Mexico Temple",
        location: "Tijuana, Mexico",
        dedicated: "13 December 2015",
        area: 33367,
        imageUrl: "images/tijuanamexicotemple.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "10 March 2019",
        area: 41010,
        imageUrl: "images/romeitalytemple.jpg"
    },
    {
        templeName: "Rexburg Idaho Temple",
        location: "Rexburg, Idaho, USA",
        dedicated: "10 February 2008",
        area: 57504,
        imageUrl: "images/rexburgidahotemple.jpg"
    },
    {
        templeName: "San Salvador El Salvador Temple",
        location: "San Salvador, El Salvador",
        dedicated: "21 August 2011",
        area: 27986,
        imageUrl: "images/sansalvadortemple.jpg"
    },
    {
        templeName: "Idaho Falls Idaho Temple",
        location: "Idaho Falls, Idaho, USA",
        dedicated: "23 September 1945",
        area: 64156,
        imageUrl: "images/idahofallsidahotemple.jpg"
    },
];

// Get gallery element
const gallery = document.querySelector('.gallery');

// Function to create temple cards
function createTempleCards(filteredTemples) {
    gallery.innerHTML = '<h2>Latter-day Saint Temples</h2>';

    filteredTemples.forEach(temple => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const ul = document.createElement('ul');

        // Set image attributes
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';
        img.width = 400;
        img.height = 250;

        figcaption.textContent = temple.templeName;

        // Create list items
        ul.innerHTML = `
            <li>Location: ${temple.location}</li>
            <li>Dedicated: ${temple.dedicated}</li>
            <li>Area: ${temple.area.toLocaleString()} sq ft</li>
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(ul);
        gallery.appendChild(figure);
    });
}

// Footer updates
const currentYearSpan = document.querySelector('#currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.querySelector('#lastmodified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}

// Menu toggle
const menuToggle = document.querySelector('#menu-toggle');
const navElement = document.querySelector('.navigation');

if (menuToggle && navElement) {
    menuToggle.addEventListener('click', () => {
        navElement.classList.toggle('open');
        menuToggle.innerHTML = navElement.classList.contains('open') ? '&times;' : '&#9776;';
    });
}

// Navigation filtering
const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const filter = link.textContent.toLowerCase();
        let filteredTemples = [];

        switch (filter) {
            case 'home':
                filteredTemples = temples;
                break;
            case 'old':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(' ').pop());
                    return year < 1900;
                });
                break;
            case 'new':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(' ').pop());
                    return year > 2000;
                });
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }

        createTempleCards(filteredTemples);
    });
});

// Display all temples on page load
createTempleCards(temples);