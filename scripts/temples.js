// WDD 131: Temple Album Project - Dynamic Footer Dates (Only required JavaScript)

// Set the current year in the footer
const currentYearSpan = document.getElementById('currentyear');
currentYearSpan.textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedSpan = document.getElementById('lastmodified');
lastModifiedSpan.textContent = document.lastModified;