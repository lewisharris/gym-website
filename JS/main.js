/*BODY FADE IN - this makes the page load with a short fade
  in (line of script at beginning of body tags in html)*/
 document.addEventListener("DOMContentLoaded", function(e) {
    document.body.className = '';
  });



//MenuToggle//

var hamburger = document.getElementsByClassName('hamburgerContainer')[0];
var menuOverlay = document.getElementById('menuoverlay');
var overlay = document.getElementById('overlay');




function menuToggle(e){
	if(hamburger.className == 'hamburgerContainer'){
	hamburger.className = 'hamburgerContainerGone';
	menuOverlay.className = "open";
	overlay.className = "open";
	}
	else{
		hamburger.className = 'hamburgerContainer';
		menuOverlay.className = "";
		overlay.className = "";
	};
};
hamburger.addEventListener('click',menuToggle);
menuOverlay.addEventListener('click', menuToggle);


//Code below here will only run on the home page  (held inside if statement)

if (document.title == 'Main Street Gym') {

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

};


//Code below here will only run on the facilities page  (held inside if statement)

if (document.title == 'Facilities') {
	//FAQ toggle
	const faqList = document.querySelectorAll('.faq-list-closed');
	const plusIcon = document.querySelectorAll('.plus-icon');

	faqList.forEach(function(faqList,index){
		var i = index;
		faqList.addEventListener('click', function(){
			if(faqList.style.height == '350px'){
				faqList.style.height = '';
				plusIcon[i].innerHTML = '+';
			}
			else{
				faqList.style.height = '350px';
				plusIcon[i].innerHTML = '-';
			}
		})

	})
		


		/*
		console.log(this)
		if(this.style.height == '350px'){
			this.style.height = '';
			this.innerHTML = '+';
			}
			else{
				this.style.height = '350px';
				this.innerHTML = '+';
			}
		*/


};
