var move = 0;
var timer;


var test = document.getElementById('test');

//setInterval(funcName, time(in ms!!!, 1s == 1000))
// step();

function step() {
	test.style.marginLeft = move + 'px';
	move += 10;
 	timer = setTimeout(step, 50);
}

// timer = setInterval(step, 50);

document.getElementById('stop').onclick = function() {
// 	clearInterval(timer);
	clearTimeout(timer);
}


// setTimeout(step, 5000);


var a = 10;
back();
function back() {
	document.getElementById('out').innerHTML = a;
	a--;
	if (a < 0) {
		clearTimeout(timer);
		alert('timer is off');
	}else {
		timer = setTimeout(back, 1000);
	}
	
}