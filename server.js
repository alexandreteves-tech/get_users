const http = require('node:http');
// este modulo é do proprio node, motivo pelo qual digitamos da forma como está acima.

function handle () {
    console.log('knocked on the door!');
}
//API É quem faz o serviço, é como um garçom servindo em um restaurante a partir do momento qu entra o cliente.

http.createServer(handle).listen(3000);
// esse comando acima permite a criação de um servidor, é como uma casca do servidor.

