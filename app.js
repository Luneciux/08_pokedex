import { PokemonList } from "./listar_pokemons.js"
import * as http from 'http';

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


  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);

  const pathname = req.url;
  
  if (pathname === '/pokemons') {
    res.end(content);  
  }else{
    res.end("<html>Use the URL  /pokemons</html>");  
  }
}

const server = http.createServer((req, res) => {
  const { method } = req;
 
  if(method === "GET") {
      return handleGetRequest(req, res);
  } else { throw new Error(`Unsupported request method: ${method}`); }
});


server.listen(8000, 'localhost', () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});