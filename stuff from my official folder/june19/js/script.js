var useMe = 'jacobrodhall',
var passMe = 'hallman';

function loginCheck(useMe === passMe){
	var loginItems = login.elements;
	if(loginItems[0].value === dvUser &&
		loginItems[1].value === dvPass){
		document.location.href = 'index.html';
    }else{
   	    loginItems[0].value = ''  
        loginItems[1].value = ''
	}
};

























/*
//var formMe = document.getElementById('form')[0],
//var passMe = document.getElementById('dvUser')[0],
//var useMe = document.getElementById('dvPass')[0]

var body = document.getElementsByTagName('body')[0],
    header = document.getElementsByTagName('header')[0];
	scrollVal = '';

window.addEventListener('scroll', function(){
	scrollVal = body.scrollTop;
	console.log(scrollVal);
	if(scrollVal >= 99){
		header.classList.add('hidden');
    }else{
   		header.classList.remove('hidden');
    }
});
*/