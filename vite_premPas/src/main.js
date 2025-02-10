// Demo de la classe d'affichage dsply de la librairie util
//import * as util from './utilV1.js';
import * as util from 'https://cdn.jsdelivr.net/gh/dubser/jsdemo-common/utilV1.js';

// Instantiation et init de l'affichage 
const inst_0= new util.dsply("conteneur", {color :'darkblue', width : '40vw', height : '10vh'}); 
const inst_1= new util.dsply("conteneur1",{width : '40vw', height : '10vh'});

//console.log("Objet....Instance 0 Id : " + inst_0.divId );

// Test d'accès a l'instance depuis HTML 
// Lister du texte dans la fenetre
function lister(){
  inst_0.lister("Texte transmis");
}
window.lister=lister; // Rendre la fonction disponible en HTML


// Clear la fenetre d'affichage

function clrWin(){
  inst_0.clrListWin("");
}
window.clrWin=clrWin; // Rendre la fonction disponible en HTML



// Lister du texte dans la fenetre1
function lister1(){
  inst_1.lister("Texte transmis1");
}
window.lister1=lister1; // Rendre la fonction disponible en HTML

// Clear la fenetre d'affichage

function clrWin1(){
  inst_1.clrListWin("");
}
window.clrWin1=clrWin1; // Rendre la fonction disponible en HTML

