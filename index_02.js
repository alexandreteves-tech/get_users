const http = require("node:http");   /// o http foi escolhido aleatoriamente. /// se pedir algo que é do NODE colocar sempre node: *node com 2 pontos.
const { json } = require("node:stream/consumers");

http.createServer((request, response) => {   //pedi para criar o servidor, com requisição e resposta // "=>" esse simbolo é uma arrow function, ela é aberta e fechada com chaves {}
    response.setHeader('Access-Control-Allow-Origin', '*'); // normalmente se usa o nome do site que pode responder a requisição
    
    if(request.url !== '/users'){
      response.writeHead(
        404,
        {'content-type': 'application/json'}
      );
      response.end (JSON.stringify({message: 'Não existente.'}));
      return;
    }
    response.writeHead(200, { "content-type": "application/json" }); //writeHead significa escrever cabeçalho
    
    response.end(
      JSON.stringify([{
        name: "Alexandre",
        email: "alexandretevesat@gmail.com",
      },{name: "Valdiana Bessa",
        email: "valdianabessa@email.com",
      },{name: "Ana Bessa",
        email:'ana@email.com'
      }]));
      
    }).listen(3000);  //para um servidor preciso de uma máquina física, processamento, memoria ram , armazenamento e porta de acesso. 
    
    // para executar localmente, executo no browser 127.0.0.1:3000
    // obs JSON - JavaScript Object Notation (Notação de Objetos JavaScript)
    //pesquise sobre status code
    
    
    // console.log (request.url);