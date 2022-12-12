const select = document.querySelector('select');
const apiUrl = 'https://mindicador.cl/api';
const option1 = document.querySelector("#option1");
const search = document.querySelector("#search");
const result = document.querySelector("#result");
const option2 = document.querySelector("#option2");



async function currencyDolar(){
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data.dolar.codigo);
    option1.innerHTML += `<option id="option1" value="${data.dolar.codigo}">${data.dolar.codigo}</option>`;

        search.addEventListener('click', () => {

            const clp = inputUser.value     
            const total = clp / `${data.dolar.valor}`;
            console.log(total);    
            result.innerHTML = total;          
        });
  
};
currencyDolar();


async function currencyEuro(){
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data.euro.codigo);
    option2.innerHTML += `<option id="option2" value="${data.euro.codigo}">${data.euro.codigo}</option>`;


    search.addEventListener('click', () => {

        const clp = inputUser.value     
        const total = clp / `${data.euro.valor}`;
        console.log(total);    
        result.innerHTML = total;          
    });
};
currencyEuro();

if(document.querySelector("option.value") === "${data.euro.codigo}"){

currencyDolar();
}else {
currencyEuro();
};
