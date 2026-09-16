// Este modulo é do proprio node, motivo pelo qual digitamos da forma como está acima.
//-------------------------------------------
// function handle () {
//     console.log('knocked on the dooooor!');
// }
// API É quem faz o serviço, é como um garçom servindo em um restaurante a partir do momento qu entra o cliente.
//---------------------------------------------
// http.createServer(handle).listen(3000);
// esse comando acima permite a criação de um servidor, é como uma casca do servidor.
// outra forma de escrever as linhas anteriores: http.create.Server(() => console.log('hello')).listen(3000)
//---------------------------------------------

const http = require("node:http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(
      JSON.stringify({
        name: "Alexandre",
        email: "alexandretevesat@gmail.com",
      }),
    );
  })
  .listen(3000);

///
////
