var container = document.getElementsByClassName('clickableContainer')[0];
var caption = document.getElementsByClassName('caption')[0];

container.addEventListener('mouseover',function(){
	if(container.className == 'clickableContainer'){
	container.className = 'clickableContainerHover';
	caption.className = 'captionHover';
	}
	else{
		container.className = 'clickableContainer';
		caption.className = 'caption';
	}
});

container.addEventListener('mouseout',function(){
		container.className = 'clickableContainer';
		caption.className = 'caption';
});

var hamburger = document.getElementsByClassName('hamburgerContainer')[0];
var menuOverlay = document.getElementById('menuoverlay');
var overlay = document.getElementById('overlay');


hamburger.addEventListener('click',function(){
	if(hamburger.className == 'hamburgerContainer'){
	hamburger.className = 'hamburgerContainerHover';
	menuOverlay.className = "open";
	}
	else{
		hamburger.className = 'hamburgerContainer';
		menuOverlay.className = "";

	}
});





overlay.addEventListener('click',function(){
	hamburger.className = 'hamburgerContainer';

	}
);