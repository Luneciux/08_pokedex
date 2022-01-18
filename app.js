import { PokemonList } from "./listar_pokemons.js"
import express from 'express';

const app = express();

const handleGetRequest = (req, res) => {
  let content = `
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

  content += `
        </table>
      </body>
    </html>
  `;

  //Nome - Número da espécios - Tipos - PvMax - Ataque - Defesa - Ataque Especial - Defesa Especial - Velocidade - Peso - Altura
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);

  const pathname = req.url;
  
  if (pathname === '/pokemons') {
    res.end(content);  
  } else{
    res.end("<html>Use the URL  /pokemons</html>");  
  }
}

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

app.get('/pokemons', (req, res) => {
  res.send('Pokemons');
});

app.get('/pokemons/:id', (req, res) => {
  res.send('Pokemons' + req.params.id);
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!');
});
