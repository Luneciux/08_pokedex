import { PokemonList } from "./listar_pokemons.js"
import express from 'express';

const app = express();

const handleGetRequest = (req, res, pokemon_id) => {
  let content;

  if(pokemon_id == null){
    content = `
        <html>
          <head>
            <style>
              table, th, td {
                border: 1px solid white;
                border-collapse: collapse;
              }
              th, td {
                padding: 5px;
                justify-content: center;
                align-text: center;
                background-color: #96D4D4;
              }
            </style>
          </head>
          <body>
            <table>
              <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>HP</td>
                <td>Atk</td>
                <td>Dfs</td>
                <td>SpcATK</td>
                <td>SpcDFS</td>
                <td>Velocidade</td>
              </tr>
    `;
    PokemonList.forEach(pokemon => {
      content += `
            <tr>
              <td>${pokemon["ID"]}</td>
              <td>${pokemon["Nome"]}</td>
              <td>${pokemon["HP"]}</td>
              <td>${pokemon["Atk"]}</td>
              <td>${pokemon["Dfs"]}</td>
              <td>${pokemon["SpcATK"]}</td>
              <td>${pokemon["SpcDFS"]}</td>
              <td>${pokemon["Velocidade"]}</td>
            </tr>
      `;
    });
  } else {
    content = `
        <html>
          <head>
            <style>
              table, th, td {
                border: 1px solid white;
                border-collapse: collapse;
              }
              th, td {
                padding: 5px;
                justify-content: center;
                align-text: center;
                background-color: #96D4D4;
              }
            </style>
          </head>
          <body>
            <table>
              <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>HP</td>
                <td>Atk</td>
                <td>Dfs</td>
                <td>SpcATK</td>
                <td>SpcDFS</td>
                <td>Velocidade</td>
                <td>Peso</td>
                <td>Altura</td>
                <td>Tipo</td>
              </tr>
    `;

            
      let tipos = '';

      PokemonList[pokemon_id]["Tipo"].forEach(obj => {
        tipos += obj.type.name + " "
      });
    
      content += `
            <tr>
              <td>${PokemonList[pokemon_id]["ID"]}</td>
              <td>${PokemonList[pokemon_id]["Nome"]}</td>
              <td>${PokemonList[pokemon_id]["HP"]}</td>
              <td>${PokemonList[pokemon_id]["Atk"]}</td>
              <td>${PokemonList[pokemon_id]["Dfs"]}</td>
              <td>${PokemonList[pokemon_id]["SpcATK"]}</td>
              <td>${PokemonList[pokemon_id]["SpcDFS"]}</td>
              <td>${PokemonList[pokemon_id]["Velocidade"]}</td>
              <td>${PokemonList[pokemon_id]["Peso"]}</td>
              <td>${PokemonList[pokemon_id]["Altura"]}</td>
              <td>${tipos}</td>`;
    
  }

  content += `
        </table>
      </body>
    </html>
  `;

  //Nome - Número da espécios - Tipos - PvMax - Ataque - Defesa - Ataque Especial - Defesa Especial - Velocidade - Peso - Altura
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);

  const pathname = req.url;
  res.end(content);
}

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.get('/pokemons', (req, res) => {
  handleGetRequest(req, res);
});

app.get('/pokemons/:id', (req, res) => {
  handleGetRequest(req, res, req.params.id);
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});
