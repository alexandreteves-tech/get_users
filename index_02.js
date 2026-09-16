const http = require("node:http");   /// o http foi escolhido aleatoriamente. /// se pedir algo que é do NODE colocar sempre node: *node com 2 pontos.

http.createServer((request, response) => {   //pedi para criar o servidor, com requisição e resposta // "=>" esse simbolo é uma arrow function, ela é aberta e fechada com chaves {}
    response.writeHead(200, { "content-type": "application/json" }); //writeHead significa escrever cabeçalho

    response.end(
      JSON.stringify({
        name: "Alexandre",
        email: "alexandretevesat@gmail.com",
      }),
    );
  })
  .listen(3000);  //para um servidor preciso de uma máquina física, processamento, memoria ram , armazenamento e porta de acesso. 

  // para executar localmente, executo no browser 127.0.0.1:3000
  // obs JSON - JavaScript Object Notation (Notação de Objetos JavaScript)
  //pesquise sobre status code