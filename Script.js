var nomJoueur;
var pokemonJoueur;
var attaqueJ1;
var pokemonIa;
var attaqueIa;
var nbCoups=0;

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

	constructor(nom, type, hp, vitesse, armure, attaque){
		this.nom =nom;
		this.type = type;
		this.hp = hp;
		this.vitesse = vitesse ;
		this.armure= armure;
		this.attaque= attaque; 
	}
}

window.onload = function () {
	
    document.getElementsByTagName('p')[0].style.display="none";
    document.getElementsByTagName('p')[1].style.display="none";
    creerPokemon();
	chargerJeu();
	choisirPokemon();
	lancerCombat();
  
}

function creerPokemon(){
    // On créer l'attaque charge car elle est commune à plusieurs Pokemon
    Charge = new Attaque("Charge",20,30,type.NORMAL);
    
    Pikachu = new Pokemon("Pikachu",type.ELECTRIK,50,15,5, attaque= [
    Eclair = new Attaque("Eclair",30,20,type.ELECTRIK),
    Charge,
    ViveAttaque = new Attaque("ViveAttaque",35,20,type.NORMAL),
    FatalFoudre = new Attaque("Fatal-Foudre",80,5,type.ELECTRIK)            
    ]);
    
    Salameche = new Pokemon("Salamèche",type.FEU,100,15,5, attaque= [
    Flameche = new Attaque("Flamèche",30,20,type.FEU),
    Charge,
    Griffe = new Attaque("Griffe",30,20,type.NORMAL),
    Deflagration = new Attaque("Déflagration",80,5,type.FEU)            
    ]);
  
  // A remplir d'autre Pokémons
}

function chargerJeu(){
 
  nomJoueur = document.getElementById("pseudo").value;
  // La il faudra changer les scènes html css etc Pour mettre la scène de selection des pokemons
  
}

function choisirPokemon(){
  
  // On écoute le clique de la souris quand il clique sur l'image
  pokemonIa = Pikachu;
  pokemonJoueur = Salameche;
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
    lancerCombat();     
}

function pokemonJoueurEstVivant(pokemonJ){
  if( pokemonJ.hp<=0){
    document.getElementById('GameOver').style.display="block";
    console.log(pokemonJ.nom+" est mort\n");
    return false;
   }
   return true;
}

function pokemonIaEstVivant(pokemon){
  if( pokemon.hp<=0){
    var textVictoire= document.getElementById('Gagner');
    textVictoire.textContent="Vous avez gagner en : "+nbCoups+" coups ! </br> Essayer de faire mieux en cliquant sur rejouer";
    textVictoire.style.display="block";
    console.log(pokemon.nom+" est mort");
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
  console.log(eff);


  console.log(pokemon);
  console.log(attaque);
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