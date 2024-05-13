import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import generateRandomNumber from "./utils/generateRandomNumber";
import getPokemons from "./utils/fetchPokemon";
import shuffleCards from "./utils/shuffleCards";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [playedCards, setPlayedCards] = useState([]);
  const [maxScore, setMaxScore] = useState(parseInt(localStorage.getItem('maxScore')) || playedCards.length);
  const [difficulty, setDifficulty] = useState(12);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    setLoading(true);
    getPokemons({generateRandomNumber, difficulty, setPokemonList, setLoading});
  }, [difficulty]);

  function handlePlayedCard(pokemon) {
    const { name } = pokemon;

    if (playedCards.includes(name)) {
      alert(`Game Over! Your score is ${playedCards.length}`);
      window.location.reload();
      
      return; // exit function if the card has already been played
    }

    if (playedCards.length === pokemonList.length - 1) { //checks if all pokemons are clicked
      alert('Congratulations! You won!')
      window.location.reload();
    }

    if (playedCards.length >= maxScore) { //checks if max score is beat
      setMaxScore(playedCards.length + 1)
      localStorage.setItem("maxScore", maxScore + 1);
    }

    setPlayedCards((prevPlayedCards) => [...prevPlayedCards, name]);
    setPokemonList((prevPokemonList) => shuffleCards(prevPokemonList));
  }

  function resetScore() {
    setMaxScore(0)
    localStorage.setItem("maxScore", maxScore)
  }

  return (
    <>
      <div className="score">
        <h2>Score: {playedCards.length}</h2>
        <h2>High score: {maxScore}</h2>
      </div>
      <div className="buttons">
        <button onClick={() => {setDifficulty(12)}}>Easy</button>
        <button onClick={() => {setDifficulty(18)}}>Normal</button>
        <button onClick={() => {setDifficulty(24)}}>Expert</button>
        <button onClick={resetScore}>Reset Score</button>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <PokemonCard pokemonList={pokemonList} handlePlayedCard={handlePlayedCard} />
      )}
    </>
  );
}

export default App;
