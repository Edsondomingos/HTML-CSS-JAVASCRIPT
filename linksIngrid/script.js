let whatsapp = document.querySelectorAll('.whatsapp');

whatsapp.forEach((e,f) => {
		e.addEventListener('click', function() {
		if (window.screen.width > 452){
			whatsapp[f].setAttribute(
				'href','https://web.whatsapp.com/send?phone=5584991661673&text=Olá,+quero+agendar+um+dia!'
			)
			whatsapp[f].setAttribute('target','_blank')
		} else {
			whatsapp[f].setAttribute(
				'href','https://api.whatsapp.com/send?phone=5584991661673&text=Olá,+quero+agendar+um+dia!'
			)
			whatsapp[f].setAttribute('target','_blank')
		}
	
})})