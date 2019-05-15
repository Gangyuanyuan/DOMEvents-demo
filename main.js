let divs = $('div').get()
let n = 0
for(let i=0; i<divs.length; i++){
	divs[i].addEventListener('click', function(){
		setTimeout(function() {
			divs[i].classList.add('active')
		}, n * 500)
		n += 1
	}, true) // 由外向里触发
}
for(let i=0; i<divs.length; i++){
	divs[i].addEventListener('click', function(){
		setTimeout(function(){
			divs[i].classList.remove('active')
		}, n * 500)
		n += 1
	}, false) // 由里向外触发
}

