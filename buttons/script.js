document.onkeypress = function(event) {
	console.log(event.key);
	if (event.shiftKey) {
		console.log('shift was pressed');
	}
}