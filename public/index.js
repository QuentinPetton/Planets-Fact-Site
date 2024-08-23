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

//Gestion de l'image Main
const imagePlanetImg = document.getElementById('planet-img');
const imageInternalImg = document.getElementById('internal-img');
const imageGeologyImg = document.getElementById('geology-img');

//Gestion de description Main (p)
const contentOverview = document.getElementById('planet-content');
const contentInternal = document.getElementById('structure-content');
const contentGeology = document.getElementById('geology-content');

//On ajoute l'eventListener

buttonOverview.addEventListener('click', function(){
  imageInternalImg.classList.add("hidden");
  imageGeologyImg.classList.add("hidden");
  imagePlanetImg.classList.remove("hidden");

  contentInternal.classList.add("hidden");
  contentGeology.classList.add("hidden");
  contentOverview.classList.remove("hidden");

  buttonInternal.classList.remove("bg");
  buttonGeology.classList.remove("bg");
  buttonOverview.classList.toggle("bg");


});

buttonInternal.addEventListener('click', function(){
  imagePlanetImg.classList.add("hidden");
  imageGeologyImg.classList.add("hidden");
  imageInternalImg.classList.remove("hidden");

  contentOverview.classList.add("hidden");
  contentGeology.classList.add("hidden");
  contentInternal.classList.remove("hidden");

  buttonOverview.classList.remove("bg");
  buttonGeology.classList.remove("bg");
  buttonInternal.classList.toggle("bg");
});


buttonGeology.addEventListener('click', function(){
  imageInternalImg.classList.add("hidden");
  imagePlanetImg.classList.add("hidden");
  imageGeologyImg.classList.remove("hidden");

  contentOverview.classList.add("hidden");
  contentInternal.classList.add("hidden");
  contentGeology.classList.remove("hidden");
  
  buttonOverview.classList.remove("bg");
  buttonInternal.classList.remove("bg");
  buttonGeology.classList.toggle("bg");

});
//