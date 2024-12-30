function enviar(url) {
    if (navigator.share) {
        navigator.share({
            url: url,
            title: 'Convite',
            text: 'Convite para discursar na Sacramental'
        })
            .then(() => alert('Enviar?'))
            .catch((e) => console.log(e))
    } else {
        navigator.clipboard.writeText(url)
            .then(() => alert('Convite copiado. Cole na mensagem para o convidado'))
            .catch((e) => console.log(e))
    }
}

const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    enviar(encodeURI(`${window.location.origin}/HTML-CSS-JAVASCRIPT/ramo-canguaretama/convidado.html?convidado=${inputs[0].value}&data=${inputs[1].value}&tema=${inputs[2].value}&tempo=${inputs[3].value}&orador=${inputs[4].value}`))
    // inputs.forEach(input => console.log(input.value))
})