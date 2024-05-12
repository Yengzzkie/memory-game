import '../App.css';

export default function PokemonCard({ pokemonList, handlePlayedCard }) {
  return (
    <ul className="pokemon-card-container">
      {pokemonList.map((spriteUrl, index) => (
        <li className='card' key={index} onClick={() => handlePlayedCard({ name: spriteUrl })}>
          <img src={spriteUrl} alt={`Pokemon ${index + 1}`} />
        </li>
      ))}
    </ul>  
  );
}
