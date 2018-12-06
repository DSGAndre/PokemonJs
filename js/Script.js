var nomJoueur;
var pokemonJoueur;
var attaqueJ1;
var pokemonIa;
var attaqueIa;
var nbCoups=0;
var button;
button=document.createElement("input");
button.setAttribute("type", "submit");
button.setAttribute("value","Reesayer");
button.setAttribute("onClick","newGame()");
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

  constructor(nom, type, hp, vitesse, armure, attaque, imageFront, imageBack){
    this.nom =nom;
    this.type = type;
    this.hp = hp;
    this.vitesse = vitesse ;
    this.armure= armure;
    this.attaque= attaque;
    this.imageFront = imageFront; 
    this.imageBack = imageBack; 
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
    //nom, type, hp, vitesse, armure, attaque, imageFront, imageBack
    // nom, force, capacite, type
    Charge = new Attaque("Charge",20,30,type.NORMAL);
    ViveAttaque = new Attaque("ViveAttaque",35,20,type.NORMAL),
    FouetLiane = new Attaque("Fouet Liane",20,20,type.PLANTE),
    Griffe = new Attaque("Griffe",30,20,type.NORMAL),
    Flameche = new Attaque("Flamèche",30,20,type.FEU),
    
    Pikachu = new Pokemon("Pikachu",type.ELECTRIK,50,15,5, attaque= [
    Eclair = new Attaque("Eclair",30,20,type.ELECTRIK),
    Charge,
    ViveAttaque,
    FatalFoudre = new Attaque("Fatal-Foudre",80,5,type.ELECTRIK),          
    ],loadedAssets.imagePikachuF,loadedAssets.imagePikachuB);
    
    Salameche = new Pokemon("Salamèche",type.FEU,70,10,5, attaque= [
    Flameche,
    Charge,
    Griffe,
    Deflagration = new Attaque("Déflagration",60,5,type.FEU)            
    ],loadedAssets.imageSalemecheF,loadedAssets.imageSalamecheB);

    Bulbizarre = new Pokemon("Bulbizarre",type.PLANTE,100,5,20,attaque = [
    FouetLiane,
    Charge,
    Bélier = new Attaque("ViveAttaque",40,10,type.NORMAL),
    CanonGraine = new Attaque("Canon Graine",60,5,type.PLANTE), 
      ],loadedAssets.imageBulbizarreF,loadedAssets.imageBulbizarreB);

    Carapuce = new Pokemon("Carapuce",type.EAU,80,15, attaque =[
    Ecume = new Attaque("Ecume",20,20,type.EAU),
    Charge,
    Griffe,
    Hydrocanon = new Attaque("Hydrocanon",60,5,type.EAU)            
    ],loadedAssets.imageCarapuceF,loadedAssets.imageCarapuceB);

    Caninos = new Pokemon("Caninos",type.FEU,60,17, attaque =[
    Flameche,
    Charge,
    ViveAttaque,
    LanceFlamme = new Attaque("Lance-Flamme",60,5,type.Feu)            
    ],loadedAssets.imageCaninosF,loadedAssets.imageCaninosB);

    Chetiflor = new Pokemon("Chetiflor",type.PLANTE,60,5, attaque =[
    FouetLiane,
    Charge,
    ViveAttaque,
    EcoSphere = new Attaque("Eco-Sphère",60,5,type.PLANTE)            
    ],loadedAssets.imageChetiflorF,loadedAssets.imageChetiflorB);

    Miaouss = new Pokemon("Miaouss",type.NORMAL,50,5, attaque =[
    Jackpot = new Attaque("Jackpot",30,15,type.NORMAL),
    Charge,
    ViveAttaque,
    Ultralaser = new Attaque("Ultralaser",100,1,type.NORMAL),       
    ],loadedAssets.imageMiaoussF,loadedAssets.imageMiaoussB);    

    Evoli = new Pokemon("Evoli",type.NORMAL,70,5, attaque =[
    Griffe,
    Charge,
    ViveAttaque,
    Damoclès = new Attaque("Damoclès",60,5,type.NORMAL),       
    ],loadedAssets.imageEvoliF,loadedAssets.imageEvoliB);

    Hypotrempe = new Pokemon("Hypotrempe",type.EAU,50,5, attaque =[
    PistoletAO = new Attaque("PistoletAO",15,25,type.EAU),
    Charge,
    ViveAttaque,
    Surf = new Attaque("Surf",50,7,type.EAU),       
    ],loadedAssets.imageHypotrempeF,loadedAssets.imageHypotrempeB);

    Taupiqueur = new Pokemon("Taupiqueur",type.SOL,100,10, attaque =[
    CoudBoue = new Attaque("Coud\'Boue",15,25,type.SOL),
    Charge,
    ViveAttaque,
    Seisme = new Attaque("Séisme",60,5,type.SOL),       
    ],loadedAssets.imageTaupiqueurF,loadedAssets.imageTaupiqueurB);

    loadedAssets.generiqueSong.play();
  // A remplir d'autre Pokémons
}
//document.querySelector("form").onsubmit =
 function chargerJeu(e){
  e.preventDefault(); 
  loadedAssets.defeatSong.currentime=0;
  loadedAssets.victorySong.currentime=0;
  nomJoueur = document.querySelector("#pseudo").value; //setTimeout(chargerJeu,1000000); Le setTimeout ne marche pas car l'écran freeze entièrement 
  console.log("Nom égal = " +nomJoueur);
  // on cache la div
  document.querySelector("#nomJoueur").style.display="none";
  choisirPokemon();
}

function choisirPokemon(){
  
  // On écoute le clique de la souris quand il clique sur l'image
  pokemonIa = Pikachu;
  pokemonJoueur = Salameche;
  // On écoute le clique de la souris quand il clique sur l'image
  loadedAssets.generiqueSong.pause();
  /*loadedAssets.generiqueSong.currentime=0;
  loadedAssets.battleSong.play();*/
   lancerCombat();
}

function lancerCombat(){
  //chargerMap();
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


/*function genererMap(){
  
  // Ici il faudra load les maps via un int random au moins les maps sont aléatoires.

}*/

function pokemonJoueurEstVivant(pokemonJ){
  if( pokemonJ.hp<=0){
    loadedAssets.battleSong.pause();
    loadedAssets.battleSong.currentime=0;
    loadedAssets.defeatSong.play();
    var defaite=document.querySelector('#gameOver');
    defaite.innerHTML="Vous êtes mort ! Essayez donc de faire mieux en retentans votre chance ! <br/><br/>";
    defaite.appendChild(button);
    defaite.style.display="block";
    console.log(pokemonJ.nom+" est mort\n");
    return false;
   }
   return true;
}

function pokemonIaEstVivant(pokemon){
  if( pokemon.hp<=0){
    loadedAssets.battleSong.pause();
    loadedAssets.battleSong.currentime=0;
    loadedAssets.victorySong.play();
    var textVictoire= document.querySelector('#gagner');
    textVictoire.innerHTML ="Vous avez gagner en : "+nbCoups+" coups ! Essayer de faire mieux en cliquant sur rejouer<br/><br/>";
    textVictoire.appendChild(button);
    textVictoire.style.display="block";
    console.log(pokemon.nom+" est mort\n");
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
  // Animation barre de vie qui descend 
}

function newGame(){
  
  location.reload();
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