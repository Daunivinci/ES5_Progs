function out(){ 
	let p;
	p = document.getElementById('out');
	// p.innerHTML = "hello"; замена текста по нажатию на кнопку (с обработкой тэгов)
	// p.innerHTML += (' hi'); // добавить текс к уже существуюшему (с обработкой тэгов)
	// p.innerText += ' <b>HI</b>'; // добавить текс к уже существуюшему (без обработки тэгов)
	// p.insertAdjacentHTML('beforeBegin', 'HI'); //перед открывающим тэгом
	// p.insertAdjacentHTML('afterBegin', 'HI'); //после открывающего тэга перед содержимим
	//p.insertAdjacentHTML('beforeEnd', 'HI'); //перед закрывающим тэгом
	//p.insertAdjacentHTML('afterEnd', 'HI'); //после закрывающего тэга
	p.outerHTML = '<div class="one">hello</div>'; //смена команды 

}
