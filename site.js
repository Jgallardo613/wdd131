// 1. Define your constants
const API_KEY = '9f301294c8071fb76244b3e09406e044'; // Your implemented API Key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// Selectors for HTML elements (Assuming these IDs are in your index.html)
const weatherContainer = document.querySelector('#weather-output'); // Current weather output
const forecastContainer = document.querySelector('#forecast-output'); // 5-day forecast output

// ----------------------------------------------------------------------
// 2. Main function to fetch the CURRENT weather data (Uses the 'weather' endpoint)
async function fetchWeather(city) {
    // Construct the full API URL for CURRENT weather
    const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=imperial`; 
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`City not found or API error: ${response.status}`);
        }
        const data = await response.json(); 
        displayWeather(data); // Call the function to display current data
    
    } catch (error) {
        weatherContainer.innerHTML = `<h2>Error: ${error.message}</h2>`; 
        console.error('Fetching current weather error:', error);
    }
}

// ----------------------------------------------------------------------
// 3. New function to fetch the 5-DAY forecast data (Uses the 'forecast' endpoint)
async function fetchForecast(city) {
    // Construct the full API URL for 5-DAY forecast
    const url = `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=imperial`; 
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            // Error handling is necessary here as well
            throw new Error(`Forecast not found or API error: ${response.status}`);
        }
        const data = await response.json(); // Data is now a JSON Object containing the 'list' array
        displayForecast(data); // Call the function to display the forecast array
    
    } catch (error) {
        if (forecastContainer) {
            forecastContainer.innerHTML = `<h2>Error fetching forecast: ${error.message}</h2>`;
        }
        console.error('Fetching forecast error:', error);
    }
}

// ----------------------------------------------------------------------
// 4. Function to display the CURRENT data (Uses objects and template literals)
function displayWeather(data) {
    if (weatherContainer) {
        const cityName = data.name;
        const temp = data.main.temp;
        const condition = data.weather[0].description;
        
        weatherContainer.innerHTML = `
            <h2>Current Weather in ${cityName}</h2>
            <p>Temperature: ${temp}°F</p>
            <p>Condition: ${condition}</p>
        `;
    }
}

// ----------------------------------------------------------------------
// 5. New function to display the 5-DAY forecast (Uses objects, arrays, and array methods)
function displayForecast(data) {
    if (forecastContainer) {
        // Clear previous forecast
        forecastContainer.innerHTML = ''; 

        // Array Method: .filter() - Filter the 40 items down to one per day (at 12:00 PM)
        const dailyForecasts = data.list.filter(item => 
            item.dt_txt.includes('12:00:00')
        );
        
        // Array Method: .forEach() - Loop through the 5 selected daily items
        dailyForecasts.forEach(forecast => {
            // Use objects to extract data from the forecast item
            const date = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            const temp = Math.round(forecast.main.temp);
            const description = forecast.weather[0].description;
            
            // Exclusively use template literals to build the HTML for each day
            forecastContainer.innerHTML += `
                <div class="forecast-day">
                    <h3>${date}</h3>
                    <p>Temp: ${temp}°F</p>
                    <p>${description}</p>
                </div>
            `;
        });
    }
}

// ----------------------------------------------------------------------
// 6. Updated Event Listener to call BOTH fetch functions
document.querySelector('#weather-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const cityInput = document.querySelector('#city-input');
    const city = cityInput.value.trim();

    if (city) { 
        // Call BOTH the current weather and the forecast functions
        fetchWeather(city);
        fetchForecast(city);
    } else {
        alert('Please enter a city!');
    }
});