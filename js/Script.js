var nomJoueur;
var pokemonJoueur;
var attaqueJ1;
var pokemonIa;
var attaqueIa;
var nbCoups=0;
var button;
button=document.createElement("input");
button.setAttribute("type", "button");
button.setAttribute("value","Reesayer");
button.setAttribute("onClick","location.href=location.href");
let canvas,ctx;



const type ={ 
  
  EAU:"Eau",
  FEU :"Feu",
  PLANTE:"Plante",
  ELECTRIK:"Electrik", 
  SOL:"Sol",
  NORMAL:"NORMAL"
  
};

class Attaque {

   constructor(nom, force, capacite, type){
    this.nom = nom;
    this.force =force;
    this.capacite = capacite;
    this.type =type;

  }
}

class Pokemon {

  constructor(nom, type, hp, vitesse, armure, attaque, iF, iB){
    this.nom =nom;
    this.type = type;
    this.hp = hp;
    this.vitesse = vitesse ;
    this.armure= armure;
    this.attaque= attaque;
    this.imageF = iF; 
    this.imageB = iB; 
  }
}

function start(){
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  ctx.beginPath();
  document.querySelector("#gameOver").style.display="none";
  document.querySelector("#gagner").style.display="none";
  creerPokemon();
}



function creerPokemon(){
  
    console.log("Création des pokemons ");
    // On créer l'attaque charge car elle est commune à plusieurs Pokemon
    Charge = new Attaque("Charge",20,30,type.NORMAL);
    
    Pikachu = new Pokemon("Pikachu",type.ELECTRIK,50,15,5, attaque= [
    Eclair = new Attaque("Eclair",30,20,type.ELECTRIK),
    Charge,
    ViveAttaque = new Attaque("ViveAttaque",35,20,type.NORMAL),
    FatalFoudre = new Attaque("Fatal-Foudre",80,5,type.ELECTRIK),          
    ],loadedAssets.imagePikachuF,loadedAssets.imagePikachuB);
    
    Salameche = new Pokemon("Salamèche",type.FEU,100,15,5, attaque= [
    Flameche = new Attaque("Flamèche",30,20,type.FEU),
    Charge,
    Griffe = new Attaque("Griffe",30,20,type.NORMAL),
    Deflagration = new Attaque("Déflagration",80,5,type.FEU)            
    ],loadedAssets.imageSalemecheF,loadedAssets.imageSalamecheB);
  
  // A remplir d'autre Pokémons
}
//document.querySelector("form").onsubmit =
 function chargerJeu(){

  nomJoueur = document.querySelector("#pseudo").value;
  console.log("Nom égal = " +nomJoueur);
  // on cache la div
  document.querySelector("#nomJoueur").style.display="none";

  event.preventDefault(); // Reset l'envoie du formulaire*/
  //creerPokemon();
  choisirPokemon();
  lancerCombat();
}

function choisirPokemon(){
  
  // On écoute le clique de la souris quand il clique sur l'image
  pokemonIa = Pikachu;
  pokemonJoueur = Salameche;
  loadedAssets.battleSong.play();
}

function lancerCombat(){
  attaqueJ1 = choisirAttaque(pokemonJoueur);
  if(pokemonJoueur.vitesse >= pokemonIa.vitesse){
    calculDegats(attaqueJ1,pokemonIa);
    if(pokemonIaEstVivant(pokemonIa))
      calculDegats(pokemonIa.attaque[Math.floor((Math.random() * 4))],pokemonJoueur);
    else return;
  }
  else {
    calculDegats(pokemonIa.attaque[Math.floor((Math.random() * 4))],pokemonJoueur);
    if(pokemonJoueurEstVivant(pokemonJoueur))
      calculDegats(attaqueJ1,pokemonIa);
    else return;
  }
  // Animation de la barre de vie qui descend
    nbCoups++;
  // résolution du bug comme quoi l'ia est morte donc le combat s'arrête
      if(pokemonJoueurEstVivant(pokemonJoueur)) lancerCombat();     
}

function pokemonJoueurEstVivant(pokemonJ){
  if( pokemonJ.hp<=0){
    var defaite=document.querySelector('#gameOver');
    defaite.innerHTML="Vous êtes mort ! Essayez donc de faire mieux en retentans votre chance ! <br/><br/>";
    defaite.appendChild(button);
    defaite.style.display="block";
    console.log(pokemonJ.nom+" est mort\n");
    loadedAssets.battleSong.pause();
    loadedAssets.battleSong.currentime=0;
    return false;
   }
   return true;
}

function pokemonIaEstVivant(pokemon){
  if( pokemon.hp<=0){
    var textVictoire= document.querySelector('#gagner');
    textVictoire.innerHTML ="Vous avez gagner en : "+nbCoups+" coups ! Essayer de faire mieux en cliquant sur rejouer<br/><br/>";
    textVictoire.appendChild(button);
    textVictoire.style.display="block";
    console.log(pokemon.nom+" est mort");
    loadedAssets.battleSong.pause();
    loadedAssets.battleSong.currentime=0;
    return false;
    }
   return true;
}

function choisirAttaque(pokemon){
  // Il faut afficher les attaque du pokemon donc surement changer la scène
  // Ecouteur sur l'attaque qu'il faut choisir
  //console.log(pokemon.attaque[0]);
  var attaqueChoisie = pokemon.attaque[0];
  
  if(attaqueChoisie.capacite != 0){
    attaqueChoisie.capacite--;
    return attaqueChoisie;
  }
  else {
    //Choisir attaque d'un pokemon redemande de chosiir un autre attaque
    choisirAttaque(pokemon);
  }
}

function calculDegats(attaque,pokemon){

  var eff = efficacite(attaque,pokemon);
  console.log(attaque);
  console.log(pokemon);
  pokemon.hp = pokemon.hp-((attaque.force-pokemon.armure)/5)*eff;
}

function efficacite(attaque,pokemon){
  switch (pokemon.type) {
    case 'Eau':
    switch (attaque.type) {
      case 'Sol': case 'Feu': case 'Eau':
        return 0.5;
      case 'Electrik': case 'Plante' :
        return 2;
      default:
        return 1;
    }
    case 'Feu':
    switch (attaque.type) {
      case 'Plante': case 'Feu':
        return 0.5;
      case 'Eau' :
        return 2;
      default:
        return 1;
    }
    case 'Plante':
    switch (attaque.type) {
      case 'Plante': case 'Eau':
        return 0.5;
      case 'Feu' :
        return 2;
      default:
        return 1;
    }
    case 'Sol':
    switch (attaque.type) {
      case 'Eau' : case 'Plante' :
        return 2;
      case 'Electrik':
        return 0;
      default:
        return 1;
    }
    case 'Electrik':
    switch (attaque.type) {
      case 'Sol' :
        return 2;
      case 'Electrik':
        return 0.5;
      default:
        return 1;
    }
    default:
      return 1;
  }
}