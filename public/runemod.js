// PRIMERA PRUEBA CALCULO MDOIFICADORES

// DEFINIENDO VALORES CARACTERÍSTICAS FIJOS
/*
let fue = 16;
let con = 12;
let tam = 12;
let des = 11;
let int = 11;
let pod = 12;
let car = 11;
*/

// CREACION ALEATORIA DE CARACTERÍSTICAS ALEATORIOS

let fue = (Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));
let con = (Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));
let tam = 6+(Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));
let des = (Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));
let int = 6+(Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));
let pod = (Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));
let car = (Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1))+(Math.floor(Math.random()*6+1));

console.log('CARACTERISTICAS');
console.log('Fuerza: '+fue);
console.log('Constitucion: '+con);
console.log('Tamaño: '+tam);
console.log('Destreza: '+des);
console.log('Inteligencia; '+int);
console.log('Poder: '+pod);
console.log('Carisma: '+car);

// OTRAS VARIABLES
let pv = con;   // Puntos de vida
let md=fue+tam; // Modificador al daño
let de=pod+car; // Daño en combate espiritual
let modagi=0;   // Modificador a las habilidades de agilidad
let modcom=0;   // Modificador a las habilidades de comunicacion
let modcon=0;   // Modificador a las habilidades de conocimientos
let modmag=0    // Modificador a las habilidades de magia
let modman=0;   // Modificador a las habilidades de manipulacion
let modper=0;   // Modificador a las habilidades de percepcion
let modsig=0;   // Modificador a las habilidades de sigilo

// CALCULO PUNTOS MAGICOS
console.log ('Puntos Mágicos: '+pod);

// CALCULO DE PUNTOS DE GOLPE
if (tam<5){pv = con-2}
if (tam>4 && tam<9){pv = con-1}
if (tam>8 && tam<13){pv = con}
if (tam>12 && tam<17){pv=con+1}
if (tam>16 && tam<21){pv=con+2}
if (tam>20 && tam<25){pv=con+3}
if (tam>24 && tam<29){pv=con+4}
if (tam>28 && tam<33){pv=con+5}
if (tam>32 && tam<36){pv=con+6}
if (tam>35) {pv=con+6}

if (pod<5){pv = pv-1}
if (pod>4 && pod<17){pv = pv}
if (pod>16 && pod<21){pv=pv+1}
if (pod>20 && pod<25){pv=pv+2}
if (pod>24 && pod<29){pv=pv+3}
if (pod>28 && pod<33){pv=pv+4}
if (pod>32 && pod<36){pv=pv+5} 
if (pod>25) {pv=pv+6} 
console.log('Puntos de Vida : '+ pv);

// PUNTOS DE GOLPE POR LOCALAIZACIÓN (HUMANOIDES)
console.log('PUNTOS DE GOLPE POR LOCALIZACIÓN');
if (pv<7){
    console.log('Piernas: '+2);
    console.log('Abdomen: '+2);
    console.log('Pecho: '+3);
    console.log('Brazos: '+1);
    console.log('Cabeza: '+2);
}
if (pv>6 && pv<10){
    console.log('Piernas: '+3);
    console.log('Abdomen: '+3);
    console.log('Pecho: '+4);
    console.log('Brazos: '+2);
    console.log('Cabeza: '+3);
}
if (pv>9 && pv<13){
    console.log('Piernas: '+4);
    console.log('Abdomen: '+4);
    console.log('Pecho: '+5);
    console.log('Brazos: '+3);
    console.log('Cabeza: '+4);
}
if (pv>12 && pv<16){
    console.log('Piernas: '+5);
    console.log('Abdomen: '+5);
    console.log('Pecho: '+6);
    console.log('Brazos: '+4);
    console.log('Cabeza: '+5);
}
if (pv>15 && pv<19){
    console.log('Piernas: '+6);
    console.log('Abdomen: '+6);
    console.log('Pecho: '+7);
    console.log('Brazos: '+5);
    console.log('Cabeza: '+6);
}
if (pv>18 && pv<22){
    console.log('Piernas: '+7);
    console.log('Abdomen: '+7);
    console.log('Pecho: '+8);
    console.log('Brazos: '+6);
    console.log('Cabeza: '+7);
}
if (pv>21 && pv<25){
    console.log('Piernas: '+8);
    console.log('Abdomen: '+8);
    console.log('Pecho: '+9);
    console.log('Brazos: '+7);
    console.log('Cabeza: '+8);
}
if (pv>24 && pv<28){
    console.log('Piernas: '+9);
    console.log('Abdomen: '+9);
    console.log('Pecho: '+10);
    console.log('Brazos: '+8);
    console.log('Cabeza: '+9);
} 
if (pv>27) {
    console.log('Piernas: '+10);
    console.log('Abdomen: '+10);
    console.log('Pecho: '+11);
    console.log('Brazos: '+9);
    console.log('Cabeza: '+10);
}

// RITMO DE CURACION
if (con<7){console.log('Ritmo de curación: '+1)}
if (con>6 && con<13){console.log('Ritmo de curación: '+2)}
if (con>12 && con<19){console.log('Ritmo de curación: '+3)}
if (con>18 && con<25){console.log('Ritmo de curación: '+4)}
if (con>24 && con<31){console.log('Ritmo de curación: '+35)}

// MODIFICADOR DE DAÑO
if (md<13){console.log('Modificador al daño: -1D4')}
if (md>12 && md<25){console.log('Modificador al daño: 0')}
if (md>24 && md<33){console.log('Modificador al daño: +1D4')}
if (md>32 && md<41){console.log('Modificador al daño: 1D6')}
if (md>40 && md<57){console.log('Modificador al daño: 2D6')}
if (md>56 && md<73){console.log('Modificador al daño: 3D6')}
if (md>72 && md<89){console.log('Modificador al daño: 4D6')}

// DAÑO EN COMBATE ESPIRITUAL
if (de<13){console.log('Daño en Combate Espiritual: 1D3')}
if (de>12 && de<25){console.log('Daño en Combate Espiritual: 1D6')}
if (de>24 && de<33){console.log('Daño en Combate Espiritual: 1D6+1')}
if (de>32 && de<41){console.log('Daño en Combate Espiritual: 1D6+3')}
if (de>40 && de<57){console.log('Daño en Combate Espiritual: 2D6')}
if (de>56 && de<73){console.log('Daño en Combate Espiritual: 2D6+1')}

// MOMENTO DE REACCION POR DESTREZA
if (des<6){console.log('MRDES: 5')}
if (des>5 && des<9){console.log('MRDES: 4')}
if (des>8 && des<13){console.log('MRDES: 3')}
if (des>12 && des<16){console.log('MRDES: 2')}
if (des>15 && des<19){console.log('MRDES: 1')}
if (des>19){console.log('MRDES: 0')}

// MOMENTO DE REACCION POR TAMAÑO
if (tam<7){console.log('MRTAM: 3')}
if (tam>6 && tam<15){console.log('MRTAM: 2')}
if (tam>14 && tam<22){console.log('MRTAM: 1')}
if (tam>21){console.log('MRTAM: 0')}

// MODIFICADOR A LA CATEGORÍA DE AGILIDAD
console.log('MODIFICADORES A LAS CATEGORIAS DE HABILIDAD');
if (fue<5){modagi=modagi-5}
if (fue>16 && fue<21){modagi=modagi+5}
if (fue>20 && fue<25){modagi=modagi+10}
if (fue>24 && fue<29){modagi=modagi+15}
if (fue>28 && fue<33){modagi=modagi+20}
if (fue>32){modagi=modagi+15}

if (tam<5){modagi=modagi-5}
if (tam>16 && tam<21){modagi=modagi+5}
if (tam>20 && tam<25){modagi=modagi+10}
if (tam>24 && tam<29){modagi=modagi+15}
if (tam>28 && tam<33){modagi=modagi+20}
if (tam>32){modagi=modagi+15}

if (des<5){modagi=modagi-10}
if (des>4 && des<9){modagi=modagi-5}
if (des>12 && des<17){modagi=modagi+5}
if (des>16 && des<21){modagi=modagi+10}
if (des>20 && des<25){modagi=modagi+15}
if (des>24 && des<29){modagi=modagi+20}
if (des>28 && des<33){modagi=modagi+25}
if (des>32){modagi=modagi+30}

if (pod<5){modagi=modagi-5}
if (pod>16 && pod<21){modagi=modagi+5}
if (pod>20 && pod<25){modagi=modagi+10}
if (pod>24 && pod<29){modagi=modagi+15}
if (pod>28 && pod<33){modagi=modagi+20}
if (pod>32){modagi=modagi+15}
console.log('Agilidad: '+modagi+'%');

// MODIFICADOR A LA CATEGORÍA DE COMUNICACION
if (int<5){modcom=modcom-5}
if (int>16 && int<21){modcom=modcom+5}
if (int>20 && int<25){modcom=modcom+10}
if (int>24 && int<29){modcom=modcom+15}
if (int>28 && int<33){modcom=modcom+20}
if (int>32){modcom=modcom+15}

if (pod<5){modcom=modcom-5}
if (pod>16 && pod<21){modcom=modcom+5}
if (pod>20 && pod<25){modcom=modcom+10}
if (pod>24 && pod<29){modcom=modcom+15}
if (pod>28 && pod<33){modcom=modcom+20}
if (pod>32){modcom=modcom+15}

if (car<5){modcom=modcom-10}
if (car>4 && car<9){modcom=modcom-5}
if (car>12 && car<17){modcom=modcom+5}
if (car>16 && car<21){modcom=modcom+10}
if (car>20 && car<25){modcom=modcom+15}
if (car>24 && car<29){modcom=modcom+20}
if (car>28 && car<33){modcom=modcom+25}
if (car>32){modcom=modcom+30}
console.log('Carisma: '+modcom+'%');

// MODIFICADOR A LA CATEGORÍA DE CONOCIMIENTOS

if (int<5){modcon=modcon-10}
if (int>4 && int<9){modcon=modcon-5}
if (int>12 && int<17){modcon=modcon+5}
if (int>16 && int<21){modcon=modcon+10}
if (int>20 && int<25){modcon=modcon+15}
if (int>24 && int<29){modcon=modcon+20}
if (int>28 && int<33){modcon=modcon+25}
if (int>32){modcon=modcon+30}

if (pod<5){modcon=modcon-5}
if (pod>16 && pod<21){modcon=modcon+5}
if (pod>20 && pod<25){modcon=modcon+10}
if (pod>24 && pod<29){modcon=modcon+15}
if (pod>28 && pod<33){modcon=modcon+20}
if (pod>32){modcon=modcon+15}
console.log('Conocimientos: '+modcon+'%');

// MODIFICADOR A LA CATEGORÍA DE MAGIA

if (pod<5){modmag=modmag-10}
if (pod>4 && pod<9){modmag=modmag-5}
if (pod>12 && pod<17){modmag=modmag+5}
if (pod>16 && pod<21){modmag=modmag+10}
if (pod>20 && pod<25){modmag=modmag+15}
if (pod>24 && pod<29){modmag=modmag+20}
if (pod>28 && pod<33){modmag=modmag+25}
if (pod>32){modmag=modmag+30}

if (car<5){modmag=modmag-5}
if (car>16 && car<21){modmag=modmag+5}
if (car>20 && car<25){modmag=modmag+10}
if (car>24 && car<29){modmag=modmag+15}
if (car>28 && car<33){modmag=modmag+20}
if (car>32){modmag=modmag+15}
console.log('Magia: '+modmag+'%');

// MODIFICADOR A LA CATEGORÍA DE MANIPULACION
if (fue<5){modman=modman-5}
if (fue>16 && fue<21){modman=modman+5}
if (fue>20 && fue<25){modman=modman+10}
if (fue>24 && fue<29){modman=modman+15}
if (fue>28 && fue<33){modman=modman+20}
if (fue>32){modman=modman+15}

if (des<5){modman=modman-10}
if (des>4 && des<9){modman=modman-5}
if (des>12 && des<17){modman=modman+5}
if (des>16 && des<21){modman=modman+10}
if (des>20 && des<25){modman=modman+15}
if (des>24 && des<29){modman=modman+20}
if (des>28 && des<33){modman=modman+25}
if (des>32){modman=modman+30}

if (int<5){modman=modman-10}
if (int>4 && int<9){modman=modman-5}
if (int>12 && int<17){modman=modman+5}
if (int>16 && int<21){modman=modman+10}
if (int>20 && int<25){modman=modman+15}
if (int>24 && int<29){modman=modman+20}
if (int>28 && int<33){modman=modman+25}
if (int>32){modman=modman+30}

if (pod<5){modman=modman-5}
if (pod>16 && pod<21){modman=modman+5}
if (pod>20 && pod<25){modman=modman+10}
if (pod>24 && pod<29){modman=modman+15}
if (pod>28 && pod<33){modman=modman+20}
if (pod>32){modman=modman+15}
console.log('Manipulacion: '+modman+'%');

// MODIFICADOR A LA CATEGORÍA DE PERCEPCION
if (int<5){modper=modper-10}
if (int>4 && int<9){modper=modper-5}
if (int>12 && int<17){modper=modper+5}
if (int>16 && int<21){modper=modper+10}
if (int>20 && int<25){modper=modper+15}
if (int>24 && int<29){modper=modper+20}
if (int>28 && int<33){modper=modper+25}
if (int>32){modper=modper+30}

if (pod<5){modper=modper-5}
if (pod>16 && pod<21){modper=modper+5}
if (pod>20 && pod<25){modper=modper+10}
if (pod>24 && pod<29){modper=modper+15}
if (pod>28 && pod<33){modper=modper+20}
if (pod>32){modper=modper+15}
console.log('Percepcion: '+modper+'%');

// MODIFICADOR A LA CATEGORÍA DE SIGILO
if (tam<5){modsig=modsig-10}
if (tam>4 && tam<9){modsig=modsig-5}
if (tam>12 && tam<17){modsig=modsig+5}
if (tam>16 && tam<21){modsig=modsig+10}
if (tam>20 && tam<25){modsig=modsig+15}
if (tam>24 && tam<29){modsig=modsig+20}
if (tam>28 && tam<33){modsig=modsig+25}
if (tam>32){modsig=modsig+30}

if (des<5){modsig=modsig-10}
if (des>4 && des<9){modsig=modsig-5}
if (des>12 && des<17){modsig=modsig+5}
if (des>16 && des<21){modsig=modsig+10}
if (des>20 && des<25){modsig=modsig+15}
if (des>24 && des<29){modsig=modsig+20}
if (des>28 && des<33){modsig=modsig+25}
if (des>32){modsig=mmodsig+30}

if (int<5){modsig=modsig-10}
if (int>4 && int<9){modsig=modsig-5}
if (int>12 && int<17){modsig=modsig+5}
if (int>16 && int<21){modsig=modsig+10}
if (int>20 && int<25){modsig=modsig+15}
if (int>24 && int<29){modsig=modsig+20}
if (int>28 && int<33){modsig=modsig+25}
if (int>32){modsig=modsig+30}

if (pod<5){modsig=modsig-5}
if (pod>16 && pod<21){modsig=modsig+5}
if (pod>20 && pod<25){modsig=modsig+10}
if (pod>24 && pod<29){modsig=modsig+15}
if (pod>28 && pod<33){modsig=modsig+20}
if (pod>32){modsig=modsig+15}
console.log('Sigilo; '+modsig+'%');