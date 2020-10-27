var p = document.getElementsByTagName('p');
console.log(p);
/*p.onclick = f1;*/ //wrong
for (var i = 0; i <= p.length; i++) {
	p[i].onclick = f1;
}


function f1() {
	/*alert("hello");*/
	console.log(this);
	this.style.background = "pink";
} 