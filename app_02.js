const button = document.querySelector('button')   // ele vai buscar o primeiro Button no HTML

button.addEventListener ('click', handle);   
// função para adicionar um observador de evento // click é um evento de uma lista de eventos possíveis.

async function handle () {                                         // handle foi escolhido aleatoriamente  // async informa que é uma solicitação que vai demorar
    const response = await fetch('http://localhost:3000');         // fetch é uma solicitação de função // o await foi feito para informar que ele deve aguardar a resposta
    const data = await response.json();
    console.log(data);
}                       

// handle();       // comentei para usar a tag button do HTML para executar a função                                                              // linha de execução

// DOM = Document Object Model