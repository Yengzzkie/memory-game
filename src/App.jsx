import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [playedCards, setPlayedCards] = useState([]);
  const [maxScore, setMaxScore] = useState(parseInt(localStorage.getItem('maxScore')) || playedCards.length);

  useEffect(() => {
    getPokemons();
  }, []);

  //random number generator to get random pokemon instead of just getting the default first 20 pokemons on the API
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  //fetches pokemon images
  async function getPokemons() {
    const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
    const urls = [];

    for (let i = 0; i < 15; i++) {
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
  }

  // Fisher-Yates shuffle
  function shuffleCards(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  
  function handlePlayedCard(pokemon) {
    const { name } = pokemon;

    if (playedCards.includes(name)) {
      alert("Game Over");
      window.location.reload();
      
      return; // Exit function early if the card has already been played
    }

    if (playedCards.length >= maxScore) {
      setMaxScore(playedCards.length + 1)
      localStorage.setItem("maxScore", maxScore + 1);
    }

    setPlayedCards((prevPlayedCards) => [...prevPlayedCards, name]);
    setPokemonList((prevPokemonList) => shuffleCards(prevPokemonList));
  }

  return (
    <>
      <h2>Score: {playedCards.length}</h2>
      <h2>High score: {maxScore}</h2>
      <PokemonCard pokemonList={pokemonList} handlePlayedCard={handlePlayedCard} />
    </>
  );
}

export default App;
