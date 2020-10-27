document.onmousemove = function() {
	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn4.iconfinder.com/data/icons/iconshock_avatars/48/mounstrico4_48.png" id="cat">');
	var cat = document.getElementById('cat');
	cat.style.position = 'fixed';

	document.onmousemove = function(event) {
		cat.style.left = event.clientX + 10 + 'px';
		cat.style.top = event.clientY + 10 + 'px';
	}

}



