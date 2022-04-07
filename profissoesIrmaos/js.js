function elemento(dados){
	let article = document.createElement('article');
	article.innerHTML = `<p>${dados.nome}<br/>${dados.profissao}</p>`;
	document.querySelector('section').appendChild(article);
}

fetch("http://127.0.0.1:5500/dados.json")
.then(
	response => {
		response.json().then(data => {
			for(let i = 0; i < data.dados.length;i++){
				elemento(data.dados[i]);
			}
				
			
		}) 
	}
)
