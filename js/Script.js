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
  TONERRE:"Tonerre", 
  SOL:"Sol",
  NORMAL:"NORMAL"
  
};

class attaque {
	 constructor(nom, force, capacite, type){
		this.nom = nom;
		this.force =force;
		this.capacite = capacite;
		this.type =type;
	}
}

class pokemon {
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
    CreerPokemon();
	ChargerJeu();
	ChoisirPokemon();
	LancerCombat();
  
}

function CreerPokemon(){
    // On créer l'attaque charge car elle est commune à plusieurs Pokemon
    Charge = new attaque("Charge",20,30,type.NORMAL);
    
    Pikachu = new pokemon("Pikachu",type.TONNERRE,50,15, Attaque= [
    Eclair = new attaque("Eclair",30,20,type.TONERRE),
    Charge,
    ViveAttaque = new attaque("ViveAttaque",35,20,type.NORMAL),
    FatalFoudre = new attaque("Fatal-Foudre",80,5,type.TONNERRE)            
    ]);
    
    Salameche = new pokemon("Salamèche",type.FEU,100,15, Attaque= [
    Flameche = new attaque("Flamèche",30,20,type.FEU),
    Charge,
    Griffe = new attaque("Griffe",30,20,type.NORMAL),
    Deflagration = new attaque("Déflagration",80,5,type.TONNERRE)            
    ]);
  
  // A remplir d'autre Pokémons
}

// wesh alors

function ChargerJeu(){
 
  nomJoueur = document.getElementById("pseudo").value;
  // La il faudra changer les scènes html css etc Pour mettre la scène de selection des pokemons
  
}

function ChoisirPokemon(){
  
  // On écoute le clique de la souris quand il clique sur l'image
  
}

function LancerCombat(){
  
  ChoisirAttaque(pokemonJoueur);
  CalculDegats(attaqueJ1,pokemonIa);
  CalculDegats(pokemonIa.attaque(getRandomInt(4)),pokemonJoueur);
  // Animation de la barre de vie qui descend
  if( PokemonJoueur.hp=="0")
   document.getElementsByTagName('p')[0].style.display="block";
  else{ 
    if( PokemonIa.hp=="0")
      var textVictoire= document.getElementsByTagName('p')[1];
      textVictoire.textContent="Vous avez gagner en : "+$nbCoups+" coups ! </br> Essayer de faire mieux en cliquant sur rejouer";
      textVictoire.style.display="block";
      }
  
    nbCoups++;
    LancerCombat();
             
}

function ChoisirAttaque(pokemon){
  // Il faut afficher les attaque du pokemon donc surement changer la scène
  // Ecouteur sur l'attaque qu'il faut choisir
}

function CalculDegats(attaque,pokemon){

  pokemon.hp.val = pokemon.hp.val-(attaque-pokemon.armure/5);
}
