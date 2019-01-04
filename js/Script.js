var nomJoueur;
var pokemonJoueur;
var attaqueJ1;
var pokemonIa;
var attaqueIa;
var ImageIA;
var ImageJoueur;
var nbCoups=0;
var button;
button=document.createElement("button");
button.innerText="Réesayer";
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

function newGame(){
  
  location.reload();
}

function start(){

  canvas = document.querySelector("#myCanvas");
  canvas.width = 640;
  canvas.height = 480;
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

    Carapuce = new Pokemon("Carapuce",type.EAU,80,15,10, attaque =[
    Ecume = new Attaque("Ecume",20,20,type.EAU),
    Charge,
    Griffe,
    Hydrocanon = new Attaque("Hydrocanon",60,5,type.EAU),            
    ],loadedAssets.imageCarapuceF,loadedAssets.imageCarapuceB);

    Caninos = new Pokemon("Caninos",type.FEU,60,17,7, attaque =[
    Flameche,
    Charge,
    ViveAttaque,
    LanceFlamme = new Attaque("Lance-Flamme",60,5,type.Feu),            
    ],loadedAssets.imageCaninosF,loadedAssets.imageCaninosB);

    Chetiflor = new Pokemon("Chetiflor",type.PLANTE,60,5,5, attaque =[
    FouetLiane,
    Charge,
    ViveAttaque,
    EcoSphere = new Attaque("Eco-Sphère",60,5,type.PLANTE),            
    ],loadedAssets.imageChetiflorF,loadedAssets.imageChetiflorB);

    Miaouss = new Pokemon("Miaouss",type.NORMAL,50,5,6, attaque =[
    Jackpot = new Attaque("Jackpot",30,15,type.NORMAL),
    Charge,
    ViveAttaque,
    Ultralaser = new Attaque("Ultralaser",100,1,type.NORMAL),       
    ],loadedAssets.imageMiaoussF,loadedAssets.imageMiaoussB);    

    Evoli = new Pokemon("Evoli",type.NORMAL,70,5,6, attaque =[
    Griffe,
    Charge,
    ViveAttaque,
    Damoclès = new Attaque("Damoclès",60,5,type.NORMAL),       
    ],loadedAssets.imageEvoliF,loadedAssets.imageEvoliB);

    Hypotrempe = new Pokemon("Hypotrempe",type.EAU,50,5,3, attaque =[
    PistoletAO = new Attaque("PistoletAO",15,25,type.EAU),
    Charge,
    ViveAttaque,
    Surf = new Attaque("Surf",50,7,type.EAU),       
    ],loadedAssets.imageHypotrempeF,loadedAssets.imageHypotrempeB);

    Taupiqueur = new Pokemon("Taupiqueur",type.SOL,100,10,5, attaque =[
    CoudBoue = new Attaque("Coud\'Boue",15,25,type.SOL),
    Charge,
    ViveAttaque,
    Seisme = new Attaque("Séisme",60,5,type.SOL),       
    ],loadedAssets.imageTaupiqueurF,loadedAssets.imageTaupiqueurB);

    loadedAssets.generiqueSong.play();
  // A remplir d'autre Pokémons
}

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
  
  pokemonIa=Pikachu;
  pokemonJoueur=Pikachu;

  loadedAssets.generiqueSong.pause();
  loadedAssets.generiqueSong.currentime=0;

  var selection= document.querySelector('#selection');
  var titre = document.createElement("H3");
  var texte = document.createTextNode(nomJoueur+" veuillez choisir sur un pokémon puis choississez celui de votre adversaire ");
  titre.appendChild(texte);
  selection.appendChild(titre);
  dessinerChoix();

 /**************************** AFFICHAGE SUR DEUX LIGNES LES IMAGES DES POKEMONS MAIS IL FAUT PASSER PAR SVG DONC ON FAIT PAS LE CLICK SUR IMAGE ******************************/
  /*selectPikachu.addEventListener("click", function(){
    pokemonJoueur=Pikachu;
  });
  var selectPikachu = ctx.drawImage(Pikachu.imageFront,50,200);
  var selectEvoli = ctx.drawImage(Evoli.imageFront,150,200);
  var selectCarapuce = ctx.drawImage(Carapuce.imageFront,250,200);
  var selectSalameche = ctx.drawImage(Salameche.imageFront,350,200);
  var selectBulbizarre = ctx.drawImage(Bulbizarre.imageFront,450,200);
  var selectCaninos = ctx.drawImage(Caninos.imageFront,50,300);
  var selectTaupiqueur = ctx.drawImage(Taupiqueur.imageFront,150,300);
  var selectMiaouss = ctx.drawImage(Miaouss.imageFront,250,300);
  var selectChetiflor = ctx.drawImage(Chetiflor.imageFront,350,300);
  var selectHypotrempe = ctx.drawImage(Hypotrempe.imageFront,450,300);
  */

  var listePokemon=[Pikachu.nom,Evoli.nom,Carapuce.nom,Salameche.nom,Bulbizarre.nom,Caninos.nom,Taupiqueur.nom,Miaouss.nom,Chetiflor.nom,Hypotrempe.nom];
  for(var i in listePokemon){
    var option = document.createElement('option');
    option.setAttribute('value', listePokemon[i]);
    option.innerHTML = listePokemon[i];
    document.getElementById('selectJoueur').appendChild(option);

  }for(var i in listePokemon){
    var option = document.createElement('option');
    option.setAttribute('value', listePokemon[i]);
    option.innerHTML = listePokemon[i];
    document.getElementById('selectIa').appendChild(option);
  }
  selection.style.display="block";

  // Par défault au met pikachu aux deux joueurs

  document.getElementById('selectJoueur').addEventListener('change', function(e){
    switch (e.target.value){

      case "Pikachu" :
        loadedAssets.pikachuCrie.play();
        pokemonJoueur= Pikachu;
        break;

      case "Evoli" :
        loadedAssets.evoliCrie.play();
        pokemonJoueur= Evoli;
        break;

      case "Carapuce" :
        loadedAssets.carapuceCrie.play();
        pokemonJoueur= Carapuce;
        break;

      case "Salamèche" :
        loadedAssets.salamecheCrie.play();
        pokemonJoueur= Salameche;
        break;

      case "Bulbizarre":
        loadedAssets.bulbizarreCrie.play();
        pokemonJoueur= Bulbizarre;
        break;

      case "Caninos" :
        loadedAssets.caninosCrie.play();
        pokemonJoueur= Caninos;
        break;

      case "Taupiqueur" :
        loadedAssets.taupiqueurCrie.play();
        pokemonJoueur= Taupiqueur;
        break;

      case "Miaouss" :
        loadedAssets.miaoussCrie.play();
        pokemonJoueur= Miaouss;
        break;

      case "Chetiflor" :
        loadedAssets.chetiflorCrie.play();
        pokemonJoueur= Chetiflor;
        break;

      case "Hypotrempe" :
        loadedAssets.hypotrempeCrie.play();
        pokemonJoueur= Hypotrempe;
        break;
    }
      dessinerChoix();
      console.log("PokemonJoueur : "+pokemonJoueur);
  });

  document.getElementById('selectIa').addEventListener('change', function(e){
    switch (e.target.value){

      case "Pikachu" :
        loadedAssets.pikachuCrie.play();
        pokemonIa= Pikachu;
        break;

      case "Evoli" :
        loadedAssets.evoliCrie.play();
        pokemonIa= Evoli;
        break;

      case "Carapuce" :
        loadedAssets.carapuceCrie.play();
        pokemonIa= Carapuce;
        break;

      case "Salamèche" : 
        loadedAssets.salamecheCrie.play();
        pokemonIa= Salameche;
        break;

      case "Bulbizarre" :
        loadedAssets.bulbizarreCrie.play();
        pokemonIa= Bulbizarre;
        break;

      case "Caninos" :
        loadedAssets.caninosCrie.play();
        pokemonIa= Caninos;
        break;

      case "Taupiqueur" :
        loadedAssets.taupiqueurCrie.play();
        pokemonIa= Taupiqueur;
        break;

      case "Miaouss" :
        loadedAssets.miaoussCrie.play();
        pokemonIa= Miaouss;
        break;

      case "Chetiflor" :
        loadedAssets.chetiflorCrie.play();
        pokemonIa= Chetiflor;
        break;

      case "Hypotrempe" :
        loadedAssets.hypotrempeCrie.play();
        pokemonIa= Hypotrempe;
        break;
    }
      dessinerChoix();
      console.log("PokemonIa : "+pokemonIa);  
  });
}

function dessinerChoix(){

  // On efface le canvas puis on dessine les pokémons à certaines coordonnées
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(pokemonJoueur.imageFront,50,250);
  ctx.drawImage(pokemonIa.imageFront,400,250);
}
function validerChoix(e){
  e.preventDefault();
  genererMap();
}


function genererMap(){
 
 document.querySelector('#selection').style.display="none";
  ctx.drawImage(pokemonIa.imageFront,60,150); 
  ctx.drawImage(loadedAssets.fond,0,0);
  lancerCombat();
  // Affichage Pokemon Joueur
  // var afficheJoueur = new Image();
  // imageJoueur.src = "./assets/img/front/pikachuF.png";
  // imageJoueur.onload = function(){
  //   ctx.drawImage(imageJoueur,425,70);   
  // }

}

function lancerCombat(){
  
  loadedAssets.battleSong.play();
  attaqueJ1 = choisirAttaque(pokemonJoueur);
  if(pokemonJoueur.vitesse >= pokemonIa.vitesse){
    calculDegats(attaqueJ1,pokemonIa);
    if(pokemonIaEstVivant(pokemonIa))
      calculDegats(pokemonIa.attaque[Math.floor((Math.random() * 4))],pokemonJoueur);
  }
  else {
    calculDegats(pokemonIa.attaque[Math.floor((Math.random() * 4))],pokemonJoueur);
    if(pokemonJoueurEstVivant(pokemonJoueur))
      calculDegats(attaqueJ1,pokemonIa);
  }
  // Animation de la barre de vie qui descend
    nbCoups++;
  // résolution du bug comme quoi l'ia est morte donc le combat s'arrête
      if(pokemonJoueurEstVivant(pokemonJoueur) && pokemonIaEstVivant(pokemonIa)) lancerCombat(); 
      else console.log("Combat fini");    
}

function pokemonJoueurEstVivant(pokemon){
  if( pokemon.hp<=0){
    loadedAssets.battleSong.pause();
    loadedAssets.battleSong.currentime=0;
    loadedAssets.defeatSong.play();
    var defaite=document.querySelector('#gameOver');
    button.addEventListener("click",newGame);
    defaite.appendChild(button);
    defaite.style.display="block";
    console.log(pokemon.nom+" est mort\n");
    return false;
   }
   return true;
}

function pokemonIaEstVivant(pokemon){
  if( pokemon.hp<=0){
    loadedAssets.battleSong.pause();
    loadedAssets.battleSong.currentime=0;
    loadedAssets.victorySong.play();
    var gagner= document.querySelector('#gagner');
    var textVictoire = document.createTextNode("Vous avez gagner en : "+nbCoups+" coups ! Essayer de faire mieux en cliquant sur rejouer");
    gagner.appendChild(textVictoire);
    gagner.appendChild(document.createElement("br"));
    button.addEventListener("click",newGame);
    gagner.appendChild(button);
    gagner.style.display="block";
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