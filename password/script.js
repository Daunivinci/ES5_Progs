var str = '';
document.getElementById('test').onkeypress = function(event) {
	console.log(event);
	
	str = str + event.key;
	console.log(str);
	this.value +=  String.fromCharCode(getRandomInt(65, 122));
	return false;


}
// console.log(String.fromCharCode(122));

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}