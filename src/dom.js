
const ulElement = document.querySelector('.container main ul')
const h2Element = document.querySelector('.container main h2')

function createLiElement(name, value) {

    const liElement = document.createElement('li');

    liElement.innerHTML = `
        <b>${name}</b>
        <span>${value}</span>
    `
    //retorne a li com o <b> e o <span> preenchidos
    return liElement;
}

export function renderCoins(coins, baseCoins) {

  ulElement.innerHTML = '';
  h2Element.innerHTML = `Valores referentes a 1 ${baseCoins}`;

  coins.forEach(coin => {

    const name = coin.name;
    const value = coin.value;

    const liElement = createLiElement(name, value);
    ulElement.appendChild(liElement);
        
  });

}

