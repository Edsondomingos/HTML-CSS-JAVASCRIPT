const url = window.location.href
const urlParams = new URLSearchParams(new URL(url).search)

const convidado = urlParams.get('convidado')
const data = urlParams.get('data').split('-').reverse().join('/')
const tema = urlParams.get('tema')
const tempo = urlParams.get('tempo')
const orador = urlParams.get('orador')

document.querySelector('#nome-convidado').textContent = convidado
document.querySelector('#data').textContent = data
document.querySelector('#tema').textContent = tema
document.querySelector('#tempo').textContent = tempo
document.querySelector('#orador').textContent = orador

