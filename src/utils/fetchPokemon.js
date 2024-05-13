import generateRandomNumber from "./generateRandomNumber";

export default async function getPokemons({difficulty, setPokemonList, setLoading}) {
    const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
    const urls = [];

    for (let i = 0; i < difficulty; i++) {
      const randomNumber = generateRandomNumber();
      const url = `${pokemonURL}${randomNumber}`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`Failed to fetch data for Pokémon ${randomNumber}`);
        continue; 
      }
      const data = await response.json();
      const spriteUrl = data.sprites.front_default; 
      urls.push(spriteUrl);
    }

    setPokemonList(urls);
    setLoading(false); // Set loading to false when fetching data completes
  }