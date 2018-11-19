window.onload = init;

let canvas, w, h;

const typeAttaque = {
  EAU : 'eau',
  FEU : 'feu'
}

class Pokemon {
  
  let name, type, faiblesse, resistance, armure, vitesse, image, hp, attacks;
  
  constructor(name, type, faiblesse, resistance, armure, vitesse, image, hp, attacks) {
    this.name = name;
    this.type = type;
    this.faiblesse = faiblesse;
    this.resistance = resistance;
    this.image = image;
    this.hp = hp;
    this.attacks = attacks;
  }
}

class Attaque {
  
  let nomAttaque, typeAttaque, puissance, capacite;
  
  constructor(nomAttaque, typeAttaque, puissance, capacite) {
    this.nomAttaque = nomAttaque;
    this.typeAttaque = typeAttaque;
    this.puissance = puissance;
    this.capacite = capacite;
  }  
}

funtion lancerCombat(){ 
  
  
}

function attaquer(){
  
}

function init(){
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  
  w = canvas.width;
  h = canvas.height;
  
}
