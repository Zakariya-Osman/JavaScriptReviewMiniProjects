// fetch("https://pokeapi.co/api/v2/pokemon/dittao")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("HTTP error, status = " + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error("Error: ", error));

function getPokemonData(pokemonName, typeOfData) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }
      return response.json();
    })
    .then((data) => console.log(data[typeOfData]))
    .catch((error) => console.error("Error: ", error));
}

getPokemonData("ditto", "weight");
