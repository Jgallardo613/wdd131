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
        
        // CRITICAL FIX: Change the button symbol from ≡ to ×
        if (isExpanded) {
            menuToggle.innerHTML = '&times;'; // Sets content to '×' (close symbol)
        } else {
            menuToggle.innerHTML = '&#9776;'; // Sets content back to '≡' (hamburger symbol)
        }
    });
}