async function getMedicines() {
    try {
        // Ask the backend for data
        const response = await fetch('http://localhost:8000/medicines');
        
        // Convert the response to JSON
        const data = await response.json();
        
        const list = document.getElementById('medicines');

        // Loop through the medicine from the backend and creeate a list 
        data.medicines.forEach(med => {

            const item = document.createElement('li');
            
            // If the price is null it will display a message
            const priceDisplay = med.price ? `£${med.price}` : 'Price not available';
            
            item.innerHTML = `
                <strong>${med.name}</strong> - ${priceDisplay}
            `;
            
            // Add it to the webpage
            list.appendChild(item);
        });

    } catch (error) {
        console.error("Error fetching medicines:", error);
    }
}

 // Runs the function once the page loads
getMedicines();