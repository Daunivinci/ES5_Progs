var block = document.getElementById('one');

// block.onclick = function() {
// 	this.style.background = 'green';
// 	this.onclick = null;
// }

// doble click

// block.ondblclick = function() {
// 	this.style.background = 'red';
// }

// right mose button click

block.oncontextmenu = function() {
	this.style.background = 'black';
	return false; //(turning off context menu only!! on block)
}

// document.oncontextmenu = function() {
// 	return false; //(turning off context menu on webpage)
// }

// mose hover on element

// block.onmouseenter = function() {
// 	console.log('got it');
// 	this.style.background = 'gold';
// }

// // mose out of element

// block.onmouseleave = function() {
// 	this.style.background = 'orange';
// }

// move moving
// var a = 0;

// block.onmousemove = function() {
// 	a++;
// 	this.style.width = 100 + a + 'px';
// }

// press mouse button (any) 

block.onmousedown = function(event) {
	this.style.background = 'cyan';
	console.log(event.button);
}