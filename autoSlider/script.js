//document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();  
var	left = 0;
var timer;

function autoSlider(){
	timer = setTimeout(function(){
		var row = document.getElementById('row');
		left = left -128;
		if (left < -1280) {
			left = 0;
			clearTimeout(timer);
		}
		row.style.left = left + 'px';
		autoSlider();
	}, 1000);
}


