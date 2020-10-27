function f1() {
	var num, prNum, out, tempOut;
	prNum = Math.floor((Math.random() * 10) + 1); //random num from 0 to 10 (+1 потому что мат рандом не даст сделать 9 (9.9 будет 9))
	tempOut = document.getElementById('temp-out');
	tempOut.innerHTML = prNum;

	num = document.getElementById('myNum').value;
	out = document.getElementById('out');


	if (num == prNum) {
		out.innerHTML = 'You Get';
	}
	else if (num > prNum) {
		out.innerHTML = "You write too hight";
	}

	else {
		out.innerHTML = "You write to low";
	}
}