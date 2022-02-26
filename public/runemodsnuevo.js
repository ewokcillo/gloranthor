// GENERADOR DE DADOS PARA CARACTERISTICAS HUMANAS
let dices_fue_human = [
    {
        "faces": 6,
        "number": 3,
        "modifier": 0
    }
]
let dices_con_human = [
    {
        "faces": 6,
        "number": 3,
        "modifier": 0
    }
]
let dices_tam_human = [
    {
        "faces": 6,
        "number": 2,
        "modifier": 6
    }
]
let dices_des_human = [
    {
        "faces": 6,
        "number": 3,
        "modifier": 0
    }
]
let dices_int_human = [
    {
        "faces": 6,
        "number": 2,
        "modifier": 6
    }
]
let dices_pod_human = [
    {
        "faces": 6,
        "number": 3,
        "modifier": 0
    }
]
let dices_car_human = [
    {
        "faces": 6,
        "number": 3,
        "modifier": 0
    }
]

// GENERACION DE CARACTERISTICAS ALEATORIAS

let fue = dices_calculator(dices_fue_human)
let con = dices_calculator(dices_con_human)
let tam = dices_calculator(dices_tam_human)
let des = dices_calculator(dices_des_human)
let int = dices_calculator(dices_int_human)
let pod = dices_calculator(dices_pod_human)
let car = dices_calculator(dices_car_human)

function dices_calculator(dices){
    let dice_value = 0;
    for (dice of dices){
        for (let step = 0; step < dice["number"]; step++){
            dice_value = dice_value + Math.floor(Math.random()*dice["faces"]+1)
        }
        dice_value = dice_value + +dice["modifier"]
    }

    return dice_value
}

console.log('CARACTERISTICAS')
console.log('Fuerza: '+fue);
console.log('Constitución: '+con);
console.log('Tamaño: '+tam);
console.log('Destreza: '+des);
console.log('Inteligencia: '+int);
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

// CALCULO DE PUNTOS DE VIDA
//                MODIFICADOR POR TAMAÑO A LOS PV
let tams_conf = [
    {
        "min": 0,
        "max": 4,
        "modifier": -2
    },
    {
        "min": 5,
        "max": 8,
        "modifier": -1
    },
    {
        "min": 9,
        "max": 12,
        "modifier": 0
    },
    {
        "min": 13,
        "max": 16,
        "modifier": 1
    },
    {
        "min": 17,
        "max": 20,
        "modifier": 2
    },
    {
        "min": 21,
        "max": 24,
        "modifier": 3
    },
    {
        "min": 25,
        "max": 28,
        "modifier": 4
    },
    {
        "min": 29,
        "max": 32,
        "modifier": 5
    },
    {
        "min": 33,
        "max": 36,
        "modifier": 6
    },
    {
        "min": 37,
        "max": 99,
        "modifier": 7
    }
]

//                MODIFICADOR POR PODER A LOS PV
let pods_conf = [
    {
        "min": 0,
        "max": 4,
        "modifier": -1
    },
    {
        "min": 5,
        "max": 16,
        "modifier": 0
    },
    {
        "min": 17,
        "max": 20,
        "modifier": 1
    },
    {
        "min": 21,
        "max": 24,
        "modifier": 2
    },
    {
        "min": 25,
        "max": 28,
        "modifier": 3
    },
    {
        "min": 29,
        "max": 32,
        "modifier": 4
    },
    {
        "min": 33,
        "max": 36,
        "modifier": 5
    },
    {
        "min": 38,
        "max": 99,
        "modifier": 6
    }
]

let tam_human = dices_calculator(dices_tam_human)
let con_human = dices_calculator(dices_con_human)

function pv_calculator(tam, con){
    let pv_value = 0;
    for (tam_conf of tams_conf){
        if (tam >= tam_conf["min"] && tam <= tam_conf["max"]){
            return con + tam_conf["modifier"]
        }
    }
}

let pv_human = pv_calculator(tam_human, con_human);
console.log(tam_human)
console.log(con_human)
console.log(pv_human)


/*Diego, he llegado hasta aquí. Los puntos de vida no los genera bien
algo no se calcula como dios manda. He añadido la lista de modificadores
por POD, pero no he sido capaz de hacer que entren en el cálculo.
los puntos de vida deberían ser:
 CONSTITUCION + MODIFICADOR POR TAMAÑO +  MODIFICADOR POR PODER
 
 haciendo pruebas, un tio con Constitución 12 y tamaño 11 me sale 
 con solo 8 pv, cuando debería tener 12*/
