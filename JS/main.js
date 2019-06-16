/*BODY FADE IN - this makes the page load with a short fade
  in (line of script at beginning of body tags in html)*/
 document.addEventListener("DOMContentLoaded", function(e) {
    document.body.className = '';
  });



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


