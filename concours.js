/***************************header*********************************/
var text = document.getElementById('text_head');
var text2 = document.getElementById('text_head2');
var text3 = document.getElementById('text_head3');
var Affiche_text="Association des Etudiants";
var Affiche_text2="de";
var Affiche_text3="l'Ecole Nationale d'Informatique";
var temps = 80;
var i =0;
var j=0;
var cpt=0;
var d=0;
function text_head()
{

	if(i<Affiche_text.length)
	{
		text.innerHTML+=Affiche_text.charAt(i);
		text.style.fontSize="50px";
		text.style.fontFamily="arial";
		text.style.marginLeft="130px";
		text.style.marginTop="5px";
		// text.style.color="#ff471a";
		text.style.color="white";
		text.style.textShadow="5px 5px 5px #ff471a";
		// text.style.transition=5s"
		i++;
		setTimeout(text_head,temps);
		// setInterval(text_head,temps);
	}
	
	if ((i==Affiche_text.length)&&(j<Affiche_text2.length)) {
		text2.innerHTML+=Affiche_text2.charAt(j);
		text2.style.fontSize="50px";
		text2.style.fontFamily="arial";
		text2.style.marginLeft="400px";
		// text2.style.color="#ff471a";
		text2.style.color="white";
		text2.style.textShadow="5px 5px 5px #ff471a";
		// text.style.marginTop="30px";
		j++;
		setTimeout(text_head,temps);
	}

	if ((j==Affiche_text2.length)&&(cpt<Affiche_text3.length)) {
	text3.innerHTML+=Affiche_text3.charAt(cpt);
	text3.style.fontSize="50px";
	text3.style.fontFamily="arial";
	text3.style.marginLeft="48px";
	// text3.style.color="#ff471a";
	text3.style.color="white";
	text3.style.textShadow="5px 5px 5px #ff471a";
	cpt++;
	setTimeout(text_head,temps*3);
	}
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("slide_nav").style.top = "0";
  } else {
    document.getElementById("slide_nav").style.top = "-50px";
  }
}
/*************************corps de la fenetre********************************/
/**************************services**************************************************/
function compet()
{
    document.getElementById("a").style.display="flex";
    document.getElementById("b").style.display="none";
    document.getElementById("competition").style.color="#ff471a";
    document.getAnimations("cercle").style.color="black";
}

function cercle()
{
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="flex";
    document.getElementById("competition").style.color="black";
    document.getAnimations("cercle").style.color="#ff471a";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
/**********************************team**********************************************/
function plus_liste()
{
	document.getElementById('block_liste').style.display="block";
}
function fermer()
{
	document.getElementById('block_liste').style.display="none";
}