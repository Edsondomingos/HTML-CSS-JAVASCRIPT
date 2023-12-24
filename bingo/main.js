const body = document.querySelector('body')
const btnNum = document.querySelector('button')
let numerosDoJogo = []
let numerosChamados = []

for (let i = 1; i <= 100; i++) {
    numerosDoJogo.push(i)
}

const puxaNumero = () => {
    if (numerosDoJogo.length > 0) {
        let indice = Math.floor(Math.random() * numerosDoJogo.length)
        console.log(indice)
        numerosChamados.push(numerosDoJogo[indice])
        numerosDoJogo.splice(indice, 1)

        const sections = document.querySelectorAll('section')
        sections.forEach(e => {
            e.parentNode.removeChild(e)
            console.log('apagou sections')
        })


        let article1 = document.createElement('article')
        let article2 = document.createElement('article')
        let novaSection1 = document.createElement('section')
        let novaSection2 = document.createElement('section')
        novaSection1.innerHTML = '<h2>Numeros Disponiveis</h2>'
        novaSection2.innerHTML = '<h2>Numeros Chamados</h2>'

        // Mostra os numeros chamados
        numerosChamados.forEach(f => {
            let strong = document.createElement('strong')
            strong.textContent = f
            article2.appendChild(strong)
            novaSection2.appendChild(article2)
            body.appendChild(novaSection2)
        })
        
        // Mostra os numeros ainda diponiveis
        numerosDoJogo.forEach(e => {
            let strong = document.createElement('strong')
            strong.textContent = e
            article1.appendChild(strong)
            novaSection1.appendChild(article1)
            body.appendChild(novaSection1)
        })


    } else {
        let article1 = document.createElement('article')
        let novaSection1 = document.createElement('section')
        let h4 = document.createElement('h4')
        h4.textContent = 'Não tem mais numeros para chamar'
        article1.appendChild(h4)
        novaSection1.appendChild(article1)
        body.appendChild(novaSection1)
    }

}

btnNum.addEventListener('click', () => {
    puxaNumero()
})

window.addEventListener('beforeunload', () => {    
    confirm('Isso irá recomcar o Bingo')
})