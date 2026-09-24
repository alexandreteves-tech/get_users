const http = require("node:http");   
const { json } = require("node:stream/consumers");

http.createServer((request, response) => {   
    response.setHeader('Access-Control-Allow-Origin', '*'); 
    
    if(request.url !== '/product'){
      response.writeHead(
        404,
        {'content-type': 'application/json'}
      );
      response.end (JSON.stringify({message: 'Não existente.'}));
      return;
    }
    response.writeHead(200, { "content-type": "application/json" }); 
    
    response.end(
      JSON.stringify([{
        product:"video cassete",
        value: "1.200",
      },{product: "vitrola",
        value: "1.300",
      },{product: "toca fitas",
        value:'300'
      }]));
      
    }).listen(3001);  