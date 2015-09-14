var first= document.getElementById("first"),
	nested= document.getElementById("nested"),
	downdeep= document.getElementById("deepdown"),
	hero = document.getElementById("hero"),
	body = document.getElementById("body")

var a = document.getElementByClassName("dropdown"),
for(var i = 0; i < a.length; i++){
	a[i].addEventListener("click", function(e){
		e.target.classList.toggle("visible");)};

function first(){
	first.classlist.toggle("visible");};}

function nested(){
	nested.classlist.toggle("visible");};}

function downDeep(){
	downDeep.classlist.toggle("visible");};

hero.addEventListener("click", function(){
	hero.classList.toggle("clicked");};

body.addEventListener("mouseenter", function(){
	hero.classList.add("enter");};

body.addEventListener("mouseleave", function(){
	hero.classList.remove("leave");};