// The array of products provided in the assignment instructions
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averageRating: 4.5 },
    { id: "a-337", name: "Warp Drive", averageRating: 5.0 },
    { id: "a-143", name: "Teleporter", averageRating: 4.0 },
    { id: "a-434", name: "Light Speed Engine", averageRating: 4.8 },
    { id: "a-764", name: "Time Travel Unit", averageRating: 3.5 },
    { id: "a-245", name: "Invisibility Cloak", averageRating: 4.2 }
];

function populateProductOptions() {
    // Get the select element by its ID
    const selectElement = document.getElementById('product-name');

    // Loop through the products array
    products.forEach(product => {
        // 1. Create a new <option> element
        let option = document.createElement('option');
        
        // 2. Set the option's value to the product id
        option.value = product.id; 
        
        // 3. Set the option's visible text to the product name
        option.textContent = product.name; 

        // 4. Append the new option to the select element
        selectElement.appendChild(option);
    });
}

// Ensure the function runs only after the form HTML is fully loaded
document.addEventListener('DOMContentLoaded', populateProductOptions);