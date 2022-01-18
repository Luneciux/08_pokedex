import Pokemons from "./models/pokemons.js";

const PokemonList = [];

Pokemons['pokemons'].forEach(pokemon => {
    PokemonList.push({
      ID: pokemon.id,
      Nome: pokemon.name,
      HP: pokemon.stats[0].base_stat,
      Atk: pokemon.stats[1].base_stat,
      Dfs: pokemon.stats[2].base_stat,
      SpcATK: pokemon.stats[3].base_stat,
      SpcDFS: pokemon.stats[4].base_stat,
      Velocidade: pokemon.stats[5].base_stat,
      Peso: pokemon.weight,
      Altura: pokemon.height,
      Tipo: pokemon.types,
    })
});

console.table(PokemonList, ["ID", "Nome", "HP", "Atk", "Dfs", "SpcATK", "SpcDFS", "Velocidade", "Peso", "Altura"]);

export { PokemonList };



//- id - nome - pvMax - ataque - defesa - ataque especial - defesa especial - velocidade - .id , Nome: '', pvMax: '', Ataque: '', Defesa: '', SpcATK: '', SpcDFS: '', Velocidade: ''}