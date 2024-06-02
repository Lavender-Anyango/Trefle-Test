const baseUrl = "https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q";
const url = "https://corsproxy.io/?" + encodeURIComponent(baseUrl);
async function fetchPlants() {
    try {
        const response = await fetch(`${url}`);
        const plants = await response.json();
        displayPlants(plants.data.slice(0, 10)); // Display only the first 10 plants
        const searchBar = document.getElementById('searchBar');
        searchBar.addEventListener('input', () => filterPlants(plants.data));
    } catch (error) {
        console.log(error);
    }
}
function displayPlants(plants) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous results
    plants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.classList.add('plant-card');
        const nameElement = document.createElement('h3');
        nameElement.textContent = plant.common_name;
        plantCard.appendChild(nameElement);
        const imgElement = document.createElement('img');
        imgElement.src = plant.image_url;
        imgElement.alt = plant.common_name;
        plantCard.appendChild(imgElement);
        // Add event listener for displaying details on click
        plantCard.addEventListener('click', () => displayPlantDetails(plant));
        container.appendChild(plantCard);
    });
}
function filterPlants(plants) {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredPlants = plants.filter(plant =>
        plant.common_name && plant.common_name.toLowerCase().includes(searchTerm)
    );
    displayPlants(filteredPlants.slice(0, 10)); // Display only the first 10 matching plants
}
function displayPlantDetails(plant) {
    const modal = document.getElementById('modal');
    const plantDetails = document.getElementById('plant-details');
    // Populate modal with plant details
    plantDetails.innerHTML = `
        <h2>${plant.common_name}</h2>
        <img src="${plant.image_url}" alt="${plant.common_name}" style="width:100%;height:auto;border-radius:15px;">
        <p><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
        <p><strong>Family:</strong> ${plant.family_common_name}</p>
        <p><strong>Genus:</strong> ${plant.genus}</p>
        <p><strong>Year:</strong> ${plant.year}</p>
        <p><strong>Bibliography:</strong> ${plant.bibliography}</p>
    `;
    // Display the modal
    modal.style.display = "block";
    // Add event listener to close the modal
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.style.display = "none";
    });
    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
fetchPlants();