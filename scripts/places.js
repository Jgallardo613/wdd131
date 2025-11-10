// Student Work Note: This script handles dynamic updates for the footer and weather section.

// Step 5.1: Dynamic Footer Dates
// 1. Set the current year
const currentYear = new Date().getFullYear();
// Checks for the span with ID 'currentyear' and updates its text content
document.getElementById('currentyear').textContent = currentYear;

// 2. Set the last modified date
const lastModified = document.lastModified;
// Checks for the span with ID 'lastmodified' and updates its text content
document.getElementById('lastmodified').textContent = lastModified;

// --- Wind Chill Calculation (Step 5.2) ---

// Step 5.2.2: Get static T (°C) and V (km/h) from HTML elements
// These values should match the 25°C and 3 km/h currently in the HTML.
const temp = parseFloat(document.getElementById('temp-static').textContent); 
const windSpeed = parseFloat(document.getElementById('wind-static').textContent); 

// Step 5.2.3: Wind Chill Function (Metric Formula - Required)
function calculateWindChill(T, V) {
    // T = temperature in Celsius, V = wind speed in kilometers per hour
    // The calculation must be done on one line of code:
    return (13.12 + (0.6215 * T) - (11.37 * Math.pow(V, 0.16)) + (0.3965 * T * Math.pow(V, 0.16)));
}

// Step 5.2.4: Conditional Check and Display Logic
// Metric Wind Chill Condition: T <= 10 °C AND V > 4.8 km/h
if (temp <= 10 && windSpeed > 4.8) {
    // Conditions met: Calculate and display the result
    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('windchill').textContent = windChill.toFixed(1) + ' °C';

} else {
    // Conditions not met (25°C is too warm for wind chill): Display "N/A"
    document.getElementById('windchill').textContent = 'N/A';
}