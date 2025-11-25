async function getMedicines() {
    try {
        // Ask the backend for data
        const response = await fetch('http://localhost:8000/medicines');
        
        // Convert the response to JSON
        const data = await response.json();
        
        const list = document.getElementById('medicines');

        list.innerHTML = ''; 

        // Loop through the medicine from the backend and create a list 
        data.medicines.forEach(med => {

            const item = document.createElement('li');
            
            // If the price is null it will display a "price not available" message
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


async function createMedicine(event) {

    event.preventDefault();

    const nameInput = document.getElementById('med-name');
    const priceInput = document.getElementById('med-price');

    // Prepare the data to send to Python
    const formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('price', priceInput.value);

    try {
        // Send the POST request to the backend
        await fetch('http://localhost:8000/create', {
            method: 'POST',
            body: formData
        });

        // Clear the text boxes so the user can type again
        nameInput.value = '';
        priceInput.value = '';

        // Refresh the list to show the new item
        getMedicines();

    } catch (error) {
        console.error("Error adding medicine:", error);
    }
}

// Connect the function to the form
document.getElementById('create-form').addEventListener('submit', createMedicine);

// Run the function once the page loads
getMedicines();