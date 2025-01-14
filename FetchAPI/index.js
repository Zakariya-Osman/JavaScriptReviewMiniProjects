// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("HTTP error, status = " + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.))
//   .catch((error) => console.error("Error: ", error));

list = [];

function getPokemonData() {
  let userInput = document.getElementById("pokemon").value.trim().toLowerCase();
  fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      let pokemonInfo = {
        name: data.name,
        // weight: data.weight,
        // height: data.height,
        // abilities: data.abilities,
        // types: data.types,
        sprites: data.sprites.front_default, // Correct the typo
      };
      console.log(pokemonInfo);
      return pokemonInfo;
    })
    .catch((error) => console.error("Error: ", error));
}

// function echoPokemonName() {
//   let bee = document.getElementById("pokemon").value;
//   console.log(bee);
// }

//getPokemonData("beedrill", "name");

// function optionSelectedAttribute(list) {
//   for (let i = 0; i < list.length; i++) {
//     let option = document.createElement("option");
//     option.textContent = list[i];
//     document.getElementById("pokemon").appendChild(option);
//   }
// }

// function getAllTypesOfData(pokemonName) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP error, status = " + response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(Object.keys(data)); // Use bracket notation to access dynamic property
//     })
//     .catch((error) => console.error("Error: ", error));
// }

// function getAllTypesOfData(pokemonName) {
//   var list = [];
//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("HTTP error, status = " + response.status);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       list.push(Object.keys(data));
//       return list[1];
//     })
//     .catch((error) => console.error("Error: ", error));
// }

// console.log(getAllTypesOfData("beedrill"));

//getPokemonData("ditto", "weight");
//function getAllTypesOfData()
