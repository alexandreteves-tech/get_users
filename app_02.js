const input = document.querySelector('input');
const button = document.querySelector('button');   // ele vai buscar o primeiro Button no HTML
const list = document.querySelector('ul');

button.addEventListener ('click', handle);   
// função para adicionar um observador de evento // click é um evento de uma lista de eventos possíveis.

async function handle () {   // handle foi escolhido aleatoriamente  // async informa que é uma solicitação que vai demorar
    

    try {
        const response = await fetch('http://localhost:3000/'+input.value);         // fetch é uma solicitação de função // o await foi feito para informar que ele deve aguardar a resposta
        const datas = await response.json();

        if (!response.ok) {
            throw new Error(response.status + 'Rota não existente.');
        }
    
        list.textContent = '';
    
        for (let i = 0; i < datas.length; i++) {
            const item = document.createElement('li');
            item.textContent = datas[i].name + ' | '  + datas[i].email;
            list.appendChild(item);
        }

    } catch (error) {
      list.textContent = 'Erro ' + error.status + '.' + error.message;
    }
    
    

    // console.log(data)  // essa linha foi usado na aula anterior;
}              

button.addEventListener ('click', handle);

// handle();       // comentei para usar a tag button do HTML para executar a função                                                              // linha de execução

// DOM = Document Object Model