// Extract the query from the URL
const params = new URLSearchParams(window.location.search);
const query = params.get('query');
document.getElementById('search-query').innerHTML = `Showing results for: <strong>${query}</strong>`;

// Hardcoded results for demonstration
const hardcodedResults = [
    { name: 'Parking Spot 1', address: '123 Main St, London', price: '£5/hour' },
    { name: 'Parking Spot 2', address: '45 High St, London', price: '£8/hour' },
    { name: 'Parking Spot 3', address: '789 Park Ave, London', price: '£10/hour' }
];

// Function to display results
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    results.forEach((spot) => {
        resultsContainer.innerHTML += `
    <div class="result-item">
    <h3>${spot.name}</h3>
    <p>${spot.address}</p>
    <p>Price: ${spot.price}</p>
    </div>
    <hr>
`;
    });
}

// Call the function with the hardcoded data
displayResults(hardcodedResults);