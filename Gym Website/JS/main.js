var mobileButton = document.getElementById('mobileButton');
var menu = document.getElementById('menu');
var closeButton = document.getElementsByClassName('close')[0];
var overlay = document.getElementById('overlay');


mobileButton.addEventListener('click',function(){
if(menu.className == ' openbar'){
	menu.className = '';
	overlay.className='';
	}
else{
	menu.className = 'openbar';
	overlay.className = ' open';
	}
});

closeButton.addEventListener('click',function(){
menu.className = 'menu';
overlay.className = '';
});

overlay.addEventListener('click', function(){
	overlay.className = '';
	menu.className = '';
});


