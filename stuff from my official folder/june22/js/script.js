var numsArray = [];
var btn = document.getElementsByTagName('button')[0];
var body = document.getElementsByTagName('body')[0];


for (var i = 1 - 1; i <= 100; i++){
	if (1 % 2 == 0){
	    numsArray.push('even');
	}else{
		numsArray.push('odd');
	}
}

window.addEventListener('scroll', function(){
	scrollVal = body.scrollTop;
	scroll > 200 ? btn.style.display = 'block' : btn.style.display = 'none';
	console.log(scrollVal);
});


btn.addEventListener('click', function(){
	numsArray.reverse();
	alert(numsArray);
});
