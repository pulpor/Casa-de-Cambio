export function fetchExchange (inputValue) {

    return fetch(`https://api.exchangerate.host/latest?base=${inputValue}`)
        .then(Response => Response.json())
        .then(result => {
            const base = result.base;
            if(base !== inputValue) {
                throw new Error ('Houve uma colisão cósmica entre as teclas e elas estão embaralhadas! Tente decifrar o código das teclas e digite corretamente.')
            }
            return result;
        });
};