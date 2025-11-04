// WDD 131: Temple Album Project - Dynamic Footer Dates and Menu Toggle

// --- Criterion 9: Dynamic Footer Content ---
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById('lastmodified');
lastModifiedSpan.textContent = document.lastModified;

// --- Criterion 6: Responsive Menu Toggle ---
const menuToggle = document.querySelector('#menu-toggle');
const navElement = document.querySelector('.navigation');

// Add the event listener to make the button work
if (menuToggle && navElement) {
    menuToggle.addEventListener('click', () => {
        // Toggles the 'open' class on the navigation menu (for CSS styling)
        navElement.classList.toggle('open');
        // Toggles the aria-expanded state for accessibility
        const isExpanded = navElement.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
}