import * as fs from 'fs';

const Pokemons = JSON.parse(fs.readFileSync("pokedex-light.json", "utf8"));

export default Pokemons;