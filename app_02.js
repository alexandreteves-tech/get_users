async function handle () {                                         // handle foi escolhido aleatoriamente  // async informa que é uma solicitação que vai demorar
    const response = await fetch('http://localhost:3000');         // fetch é uma solicitação de função // o await foi feito para informar que ele deve aguardar a resposta
    const data = await response.json();
    console.log(data);
}                       

handle();                                                         // linha de execução