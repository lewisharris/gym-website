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