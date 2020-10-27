var goods = {
	"28292" : {
		"name" : "Bananas",
		"cost" : 30,
		"img" : "https://toppng.com/uploads/preview/bunch-of-bananas-11533035035gij2n6afqo.png",
		"stock" : "yes"
	},

	"29292" : {
		"name" : "tomatoes",
		"cost" : 50,
		"img" : "https://www.iconfinder.com/icons/3765577/tomato_fresh_tomatoes_icon",
		"stock" : "no"
	}
};

console.log(goods);

var out = '';

for (var key in goods) {
	out+= "name: " + goods[key].name + '<br>'; 
	out+= "cost: " + goods[key].cost + '<br>'; 
	out+= "stock: " + goods[key].stock + '<br>'; 
	// <img src="" alt="">
	out+= '<img src="' + goods[key].img + '">';
	out+= '<hr>';
}

document.getElementById('out').innerHTML = out;