var b = document.getElementById("project-bar");
var c = document.getElementById("bar")
function menuResponsive() {
	if (b.className === "project-bar") {
		b.className += " active";
	}	else {
		b.className = "project-bar";
	}
}
function iconTransform(x) {
    x.classList.toggle("change");
}

/* Slide function */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
  if (b.className === "project-bar active"){
  	b.className = "project-bar";
  	iconTransform(c);
  }
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("one-page");
  var numbers = document.getElementsByClassName("number");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < numbers.length; i++) {
      numbers[i].className = numbers[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  numbers[slideIndex-1].className += " active";
}
