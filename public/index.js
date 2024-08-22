// gestion du menu burger
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  burgerMenu.classList.toggle("close");
  overlay.classList.toggle("overlay");
});



//todo Quand je clique sur "internal structure,
// je change son contenu  text description et wiki
//je change couleur en actif


//[X]je change image
//gestion bouton 
const buttonOverview = document.querySelector(".overview");
const buttonInternal = document.querySelector(".internal");
const buttonGeology = document.querySelector(".geology");

const imagePlanetImg = document.getElementById('planet-img');
const imageInternalImg = document.getElementById('internal-img');
const imageGeologyImg = document.getElementById('geology-img');

//On ajoute l'eventListener

buttonOverview.addEventListener('click', function(){
  imageInternalImg.classList.add("hidden");
  imageGeologyImg.classList.add("hidden");
  imagePlanetImg.classList.remove("hidden");
});

buttonInternal.addEventListener('click', function(){
  imagePlanetImg.classList.add("hidden");
  imageGeologyImg.classList.add("hidden");
  imageInternalImg.classList.remove("hidden");
});


buttonGeology.addEventListener('click', function(){
  imageInternalImg.classList.add("hidden");
  imagePlanetImg.classList.add("hidden");
  imageGeologyImg.classList.remove("hidden");
  
});
//