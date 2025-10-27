// WDD 131: Jeffrey Gallardo - Dynamic Date Script

// --- Task 1: Display Current Year in Footer ---

// Get the current year
const currentYear = new Date().getFullYear();

// Find the element with the ID 'currentyear'
const yearElement = document.getElementById('currentyear');

// Insert the current year into the HTML
if (yearElement) {
    yearElement.textContent = currentYear;
}


// --- Task 2: Display Last Modified Date in Footer ---

// Find the element with the ID 'lastModified'
const lastModifiedElement = document.getElementById('lastModified');

// Get the document's last modified date
const lastModified = document.lastModified;

// Insert the last modified date into the HTML
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${lastModified}`;
}