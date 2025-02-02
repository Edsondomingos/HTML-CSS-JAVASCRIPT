
const imgJogador = document.querySelector('[data-jogador]')
const imgMaquina = document.querySelector('[data-maquina]')
const resultado = document.querySelector('[data-resultado]')
const placar = document.querySelector('[data-placar]')
const btn = document.querySelectorAll('[data-btn]')

const opcoes = ['pedra','papel','tesoura']
let contJogador = 0
let contMaquina = 0

// Ao clicar na opção é iniciada a disputa
btn.forEach(e => e.addEventListener('click', () => {
    let numero = Math.floor(Math.random() * 3) 
    let escolha = e.textContent.toLowerCase()
    let maquina = opcoes[numero]
    imgJogador.src = 'imgs/' + escolha + '.png'
    imgMaquina.src = 'imgs/' + maquina + '.png'

    // Logica do jogo
    if (
        escolha === "pedra" && maquina === "tesoura" ||
        escolha === "papel" && maquina === "pedra" ||
        escolha === "tesoura" && maquina === "papel"
    ){
        contJogador += 1
        resultado.textContent = 'GANHOU'
        resultado.style.color = 'green'
    } else if(escolha === maquina) {
        resultado.textContent = 'EMPATE'
        resultado.style.color = 'black'
    } else {
        contMaquina += 1
        resultado.textContent = 'PERDEU'
        resultado.style.color = 'red'
    }
    placar.textContent = contJogador + ' / ' + contMaquina
}))