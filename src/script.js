import { renderCoins } from './dom.js'
import { fetchExchange } from './services/exchange.js'

import Swal from 'sweetalert2'
import './style.css';

const buttonElement = document.querySelector('header form button');

function performExchange() {

  const inputElement = document.querySelector('header form input');
  const inputValue = inputElement.value.toUpperCase();

  if (!inputValue) {
    Swal.fire({
      title: 'Erro! 😳',
      text: `Hmmm... Acho que seu teclado está com vergonha. Ele não quer compartilhar nada com a gente. Tente persuadi-lo e digite algo!`,
      icon: 'error',
      confirmButtonText: 'Legal'
    }) 

    return; //quebra a execução da função

  }  

  fetchExchange(inputValue)
    .then(exchange => {

      const base = exchange.base;


      const rates = exchange.rates;
      const ratesArray = Object.entries(rates);
      const ratesArrayToObject = ratesArray.map(rateCoin => {

        const [name, value] = rateCoin;

        return {
          name: name,
          value: Number(value).toFixed(2) //decimal
        }
      })
      
      renderCoins(ratesArrayToObject, base);

    })
    .catch(error => {
      Swal.fire ({
        title: 'Erro! 😵‍💫',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Legal'

      });
      
    })    
}

buttonElement.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeyPress);

function handleClick() {
  performExchange();
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    performExchange();
  }
}
