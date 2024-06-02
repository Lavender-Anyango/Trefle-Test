
const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q');
  const json = await response.json();
  console.log(json);
})();



// baseUrl= 'https://trefle.io/api/v1/plants?token=IStUS451yET7aU6HoqFv5cLSGc_IEP64VIcL1Bssm6Q'

// async function fetchPlants() {
//   try {
   
//     const response = await fetch(`${baseUrl}`,{
//         headers:{
//             'Content-Type':'Access-Control-Allow-Origin'
//         }
//     });
//     const plants = await response.json();
//     console.log(plants)

//     const container = document.querySelector('#container');
//     plants.data.forEach(plant => {
//       const plantCard = document.createElement('div');
//       plantCard.classList.add('plant-card'); 

//       const nameElement = document.createElement('h3');
//       nameElement.textContent = plant.common_name;
//       plantCard.appendChild(nameElement);

//       const imgElement = document.createElement('img');
//       imgElement.src = plant.image_url;
//       plantCard.appendChild(imgElement);

//       container.appendChild(plantCard);
//     });
//   } catch (error) {
//     console.error('Failed to fetch plants:', error);
//   }
// }

// fetchPlants();
