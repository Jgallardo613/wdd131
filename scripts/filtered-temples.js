// --- 1. Temple Data Array (Updated with 10 temples, including Idaho Falls) ---
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

// --- 2. Dynamic Card Generation Function ---
const gallery = document.querySelector('.gallery');

// Function to create and display temple cards
function createTempleCards(filteredTemples) {
    // Clear any existing cards while keeping the main heading
    gallery.innerHTML = '<h2>Latter-day Saint Temples</h2>'; 

    filteredTemples.forEach(temple => {
        // Create the elements
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const figcaption = document.createElement('figcaption');
        const ul = document.createElement('ul');

        // Create the list items for details
        const locationLi = document.createElement('li');
        const dedicatedLi = document.createElement('li');
        const areaLi = document.createElement('li');

        // Set content and attributes for the elements
        figcaption.textContent = temple.templeName;
        
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '400');
        img.setAttribute('height', '250');

        locationLi.textContent = `Location: ${temple.location}`;
        dedicatedLi.textContent = `Dedicated: ${temple.dedicated}`;
        areaLi.textContent = `Area: ${temple.area.toLocaleString()} sq ft`; // Format area number

        // Append list items to the ul
        ul.appendChild(locationLi);
        ul.appendChild(dedicatedLi);
        ul.appendChild(areaLi);

        // Append img, figcaption, and ul to the figure
        figure.appendChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(ul);

        // Append the figure to the gallery container
        gallery.appendChild(figure);
    });
}

// Initial call to display ALL temples when the page loads
createTempleCards(temples);


// --- 3. Footer Updates (Current Year & Last Modified) ---
// Set current year
const currentYearSpan = document.querySelector('#currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Set last modified date
const lastModifiedSpan = document.querySelector('#lastmodified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}


// --- 4. Responsive Menu Toggle ---
const menuToggle = document.querySelector('#menu-toggle');
const navElement = document.querySelector('.navigation');

if (menuToggle && navElement) {
    menuToggle.addEventListener('click', () => {
        navElement.classList.toggle('open');
        
        const isExpanded = navElement.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        
        if (isExpanded) {
            menuToggle.innerHTML = '&times;'; 
        } else {
            menuToggle.innerHTML = '&#9776;'; 
        }
    });
}


// --- 5. Navigation & Filtering Logic ---
const navLinks = document.querySelectorAll('.navigation a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        // Remove 'active' class from all links and add to the clicked one
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Get the filter type from the link text
        const filter = link.textContent.toLowerCase();
        let filteredTemples = [];

        switch (filter) {
            case 'home':
                filteredTemples = temples;
                break;
            case 'old':
                // Temples dedicated before 1950 
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1950);
                break;
            case 'new':
                // Temples dedicated after 2000
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                // Temples with area greater than 100,000 sq ft
                filteredTemples = temples.filter(temple => temple.area > 100000);
                break;
            case 'small':
                // Temples with area less than 40,000 sq ft
                filteredTemples = temples.filter(temple => temple.area < 40000);
                break;
            default:
                filteredTemples = temples; 
        }

        // Re-run the display function with the filtered list
        createTempleCards(filteredTemples);
    });
});