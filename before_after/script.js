document.getElementById('myslide').onmousemove = function(event) {
	var x = event.offsetX;
	console.log(x);
	document.getElementById('two').style.width = x + 'px';
}

document.getElementById('myslide').onmouseleave = function(event) {
	document.getElementById('two').style.width = '768px';
}

document.getElementById('myslide_old').onmousemove = function(event) {
	var x = event.offsetX;
	console.log(x);
	document.getElementById('twt').style.width = x + 'px';
}

document.getElementById('myslide_old').onmouseleave = function(event) {
	document.getElementById('twt').style.width = '768px';
}
