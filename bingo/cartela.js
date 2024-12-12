let btnOutraCartela = document.querySelector('.outra-cartela')
let btnCartelaEscolhida = document.querySelector('.escolher')
let btnBater = document.querySelector('.bater')

// Escolhendo numeros aleatorios de 1 à 100, sem repetir
let numeros = []
let minhaCartela = JSON.parse(localStorage.getItem('minhacartela'))
if (minhaCartela == null) { // Se NÃO tiver numeros ja escolhidos
console.log(minhaCartela)
    while (numeros.length < 12) {
        let numero = Math.floor(Math.random() * 100) + 1
        if (numeros.indexOf(numero) == -1) {
            numeros.push(numero)
        }
    }
} else {
    numeros = minhaCartela
    btnOutraCartela.style.display = 'none'
    btnCartelaEscolhida.style.display = 'none'
    btnBater.style.display = 'block'
    
}
// Adicionando numeros a cartela (visual)
const meusNumeros = document.querySelector('.meus-numeros')
for (let i = 0; i < numeros.length; i++) {
    meusNumeros.innerHTML += `
        <p>
        <strong>${numeros[i]}</strong>
        <input type='checkbox' readonly value='${numeros[i]}'/>
        </p>
    `
}

// Botões de ação
function cartelaEscolhida() {

    btnOutraCartela.style.display = 'none'
    btnCartelaEscolhida.style.display = 'none'
    btnBater.style.display = 'block'

    window.addEventListener('beforeunload', (event) => {
        event.preventDefault()
    })
    localStorage.setItem('minhacartela', JSON.stringify(numeros))
}

function bater() {
    if(confirm('Batido e Conferido?')){
        localStorage.removeItem('minhacartela')
    }
}