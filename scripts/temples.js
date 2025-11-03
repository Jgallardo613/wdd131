// WDD 131: Temple Album Project - JavaScript Filtering Logic

// =========================================================================
// 1. TEMPLE DATA ARRAY (All necessary data for filtering and display)
// =========================================================================

const temples = [
    {
        templeName: "Los Angeles California Temple",
        location: "Los Angeles, California, USA",
        dedicated: "1956, March, 11",
        area: 190614, 
        image: "losangelestemple.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642, 
        image: "mexicocitytemple.jpg"
    },
    {
        templeName: "Dallas Texas Temple",
        location: "Dallas, Texas, USA",
        dedicated: "1984, October, 19",
        area: 44207, 
        image: "dallastexastemple.jpg"
    },
    {
        templeName: "Austin Texas Temple",
        location: "Cedar Park, Texas, USA",
        dedicated: "2024, August, 17", 
        area: 30000, 
        image: "austintexastemple.jpg"
    },
    {
        templeName: "San Antonio Texas Temple",
        location: "San Antonio, Texas, USA",
        dedicated: "2005, May, 22",
        area: 16800, 
        image: "sanantoniotemple.jpg"
    },
    {
        templeName: "Tijuana Mexico Temple",
        location: "Tijuana, Mexico",
        dedicated: "2015, December, 13",
        area: 33367, 
        image: "tijuanamexicotemple.jpg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010, 
        image: "romeitalytemple.jpg"
    },
    {
        templeName: "Rexburg Idaho Temple",
        location: "Rexburg, Idaho, USA",
        dedicated: "2008, February, 10",
        area: 57504, 
        image: "rexburgidahotemple.jpg" 
    },
    {
        templeName: "San Salvador El Salvador Temple",
        location: "San Salvador, El Salvador",
        dedicated: "2011, August, 21",
        area: 27986, 
        image: "sansalvadortemple.jpg"
    }
];

const gallery = document.querySelector('.gallery'); 

// =========================================================================
// 2. CORE FUNCTION: Dynamic Gallery Builder (Renders figures from the array)
// =========================================================================

function renderTemples(templeList) {
    // Clears the gallery before building the new list 
    gallery.innerHTML = '<h2>Temple Gallery</h2>'; 

    templeList.forEach(temple => {
        // 1. Create the new HTML elements
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');
        
        // 2. Set attributes using data from the temple object
        img.setAttribute('src', `images/${temple.image}`);
        img.setAttribute('alt', temple.templeName);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '400'); 
        img.setAttribute('height', '250'); 

        figcaption.textContent = temple.templeName;
        
        // 3. Assemble the elements and put them in the gallery
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
}

// =========================================================================
// 3. NAVIGATION FILTERING LOGIC (Adds event listeners to nav links)
// =========================================================================
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        // Remove 'active' class from all links and add it to the clicked one
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        const filterType = link.textContent.toLowerCase();
        let filteredTemples = [];
        
        switch (filterType) {
            case 'home':
                filteredTemples = temples;
                gallery.querySelector('h2').textContent = 'Home (All Temples)';
                break;
            case 'old':
                // Filters for dedication dates before 1980
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1980);
                gallery.querySelector('h2').textContent = 'Old Temples (Dedicated before 1980)';
                break;
            case 'new':
                // Filters for dedication dates after 2000
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                gallery.querySelector('h2').textContent = 'New Temples (Dedicated after 2000)';
                break;
            case 'large':
                // Filters for area larger than 90,000 sq ft
                filteredTemples = temples.filter(t => t.area > 90000);
                gallery.querySelector('h2').textContent = 'Large Temples (Area > 90,000 sq ft)';
                break;
            case 'small':
                // Filters for area smaller than 35,000 sq ft
                filteredTemples = temples.filter(t => t.area < 35000);
                gallery.querySelector('h2').textContent = 'Small Temples (Area < 35,000 sq ft)';
                break;
            default:
                filteredTemples = temples;
                gallery.querySelector('h2').textContent = 'Temple Gallery';
        }
        
        renderTemples(filteredTemples); // Display the results of the filter
    });
});

// =========================================================================
// 4. DYNAMIC FOOTER DATES
// =========================================================================

// Set the current year in the footer
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedSpan = document.getElementById('lastmodified');
lastModifiedSpan.textContent = document.lastModified;

// =========================================================================
// 5. INITIAL PAGE LOAD
// =========================================================================

// Runs once when the page loads to display all temples
renderTemples(temples);