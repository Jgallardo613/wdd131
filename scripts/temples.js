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

const gallery = document.querySelector('main'); // Select the main element

function renderTemples(templeList) {
    // Check if the first child is an h2 (if not, add the heading back)
    if (gallery.children.length === 0 || gallery.children[0].tagName !== 'H2') {
        gallery.innerHTML = '<h2>Temple Gallery</h2>';
    } else {
        // Keep the h2, but clear subsequent figures
        while (gallery.children.length > 1) {
            gallery.removeChild(gallery.lastChild);
        }
    }
    

    templeList.forEach(temple => {
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let figcaption = document.createElement('figcaption');
        
        // --- IMPORTANT: Ensure images folder is correct ---
        img.setAttribute('src', `images/${temple.image}`); 
        img.setAttribute('alt', temple.templeName);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '400'); 
        img.setAttribute('height', '250'); 

        figcaption.textContent = temple.templeName;
        
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
}

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
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
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1980);
                gallery.querySelector('h2').textContent = 'Old Temples (Dedicated before 1980)';
                break;
            case 'new':
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                gallery.querySelector('h2').textContent = 'New Temples (Dedicated after 2000)';
                break;
            case 'large':
                filteredTemples = temples.filter(t => t.area > 90000);
                gallery.querySelector('h2').textContent = 'Large Temples (Area > 90,000 sq ft)';
                break;
            case 'small':
                filteredTemples = temples.filter(t => t.area < 35000);
                gallery.querySelector('h2').textContent = 'Small Temples (Area < 35,000 sq ft)';
                break;
            default:
                filteredTemples = temples;
                gallery.querySelector('h2').textContent = 'Temple Gallery';
        }
        
        renderTemples(filteredTemples); 
    });
});

// Dynamic Footer Dates
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById('lastmodified');
lastModifiedSpan.textContent = document.lastModified;

// Initial Load
renderTemples(temples);