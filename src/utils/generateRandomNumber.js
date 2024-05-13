//random number generator to get random pokemon instead of just getting the default first 20 pokemons on the API
export default function generateRandomNumber() {
    return Math.floor(Math.random() * 1000) + 1;
  }
