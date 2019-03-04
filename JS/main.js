

//MenuToggle//

var hamburger = document.getElementsByClassName('hamburgerContainer')[0];
var menuOverlay = document.getElementById('menuoverlay');
var overlay = document.getElementById('overlay');
var closeMenuIcon = document.getElementById('closemenuicon');





function menuToggle(){
	if(hamburger.className == 'hamburgerContainer'){
	hamburger.className = 'hamburgerContainerGone';
	menuOverlay.className = "open";
	overlay.className = "open";
	}
	else{
		hamburger.className = 'hamburgerContainer';
		menuOverlay.className = "";
		overlay.className = "";
	}
};

hamburger.addEventListener('click',menuToggle);
closeMenuIcon.addEventListener('click', menuToggle);


//Content

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

//Slideshow//

var slideIndex = 0;
showImage();


function showImage()	{
	var i;
	var slides = document.getElementsByClassName('slideImage');
	for(i=0;i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if(slideIndex > slides.length) {
		slideIndex = 1}
	slides[slideIndex-1].style.display = 'block';
	setTimeout(showImage,2000);
}


