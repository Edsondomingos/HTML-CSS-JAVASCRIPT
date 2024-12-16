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
    // teste()
    // window.addEventListener('beforeunload', (event) => {
    //     event.preventDefault()
    // })
}
// Adicionando numeros a cartela (visual)
const meusNumeros = document.querySelector('.meus-numeros')
for (let i = 0; i < numeros.length; i++) {
    meusNumeros.innerHTML += `
        <p class='numero'>
        <strong title='numero ${numeros[i]}' aria-label='${numeros[i]}'>${numeros[i]}</strong>
        </p>
        `
    // <input type='checkbox' readonly value='${numeros[i]}'/>
}

// function teste(){
let containerNumero = document.querySelectorAll('.numero')
let marcacaoCartela = []

// Se numero ja tiver sido marcado(Ao atualizar a pagina ou apenas começar, remarcar)
let marcacaoCartelaStorge = JSON.parse(localStorage.getItem('marcacaoCartela'))
if(marcacaoCartelaStorge != null){
    marcacaoCartela = marcacaoCartelaStorge
    marcacaoCartelaStorge.forEach((e,f) => {
        if(e == true){
            containerNumero[f].style.background = 'rgb(0, 255, 0)'
        }
    })
}

// Marcação do numero com cor
containerNumero.forEach((e,f) => {
    marcacaoCartela.push(false)
    e.addEventListener('click', () => {
        if (e.style.background == '') {
            e.style.background = 'rgb(0, 255, 0)'
            marcacaoCartela[f] = true
        } else if (e.style.background == 'rgb(0, 255, 0)') {
            e.style.background = ''
            marcacaoCartela[f] = false
        }
        localStorage.setItem('marcacaoCartela', JSON.stringify(marcacaoCartela))
    })
})

// }

// Botões de ação (Outra cartela e )
function cartelaEscolhida() {

    btnOutraCartela.style.display = 'none'
    btnCartelaEscolhida.style.display = 'none'
    btnBater.style.display = 'block'

    window.addEventListener('beforeunload', (event) => {
        event.preventDefault()
    })
    localStorage.setItem('minhacartela', JSON.stringify(numeros))
    // teste()
    // localStorage.setItem('marcacaoCartela', JSON.stringify([false,false,false,false,false,false,false,false,false,false,false,false]))
    // marcacaoCartela = [false,false,false,false,false,false,false,false,false,false,false,false]
}

function bater() {
    if (confirm('Batido e Conferido?')) {
        localStorage.removeItem('minhacartela')
        localStorage.removeItem('marcacaoCartela')
        window.location.reload()
    }
}