const input = document.querySelector('input');
const button = document.querySelector('button');  
const list = document.querySelector('ul');

button.addEventListener ('click', handle);   

async function handle () {   
    

    try {
        const response = await fetch('http://localhost:3001/'+ input.products);       
        const datas = await response.json();

        if (!response.ok) {
            throw new Error(response.status + 'Rota não existente.');
        }
    
        list.textContent = '';
    
        for (let i = 0; i < datas.length; i++) {
            const item = document.createElement('li');
            item.textContent = datas[i].product + ' | '  + datas[i].value;
            list.appendChild(item);
        }

    } catch (error) {
      list.textContent = 'Erro ' + error.status + '.' + error.message;
    }
}              

button.addEventListener ('click', handle);

