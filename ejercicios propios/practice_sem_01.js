
/*
conceptos a tener en cuenta:
    console.log =  para ejecutar aklgo atravez de la terminal
    let = es una variable que puede ser alterada mas luego
    const = es la variable pero solo una vez definida ya no podra ser alterada 

    variables primitimas [boolianos,numericos,cadena de texto]
    variables no primitivas[listas]

jerarquia en javascript [scope]
    es la regla que hace la accesibilidad de variables y funciones 
    scoop global = la variable global que se ejecuta en todo el codigo
    scoop local = la variable de una funcion que solo funciona para ella
    scoop bloque = solo funcional para repeticiones for while como nada mas que un contador 

conversiones en java script
nota: todo las conversiones inician en mayuscula 

Boolean = cambia a buliano ejemplo (boolean(1))
String =  lo convierte en una cadena de texto ejemplo string(123)

funcion en javascript 

    function saludar(){
    console.log("hola,mundo");
    }
    saludar();
    return = que regresa un valor en especial luego de hacer el proceso


condicionales en java script
    if = si se cumple esto
    if else = si no se cumple haz esto
    else =  si no se cumple nada haz esto 

    contraccion de condicionales estructura:
    condicion + ? + expresionsiverdadero : expresionsifalso;

    ejemplo:
    const puedebeber = edad >= 18 ? "si, puede beber " : "por ahora ya no puedes beber"

switch o if anidado mas contraido:

    el switch utiliza como un menu dando ciertas acciones en cuyo valor varie o si de plano no es es ninguna de las opciones antes predefinidas(en caso de este seria el defauld)


    switch (expresion){
    case valor1:
        break;
    case valor2:
        break;
    default:
        breaki;
    }



buche en java script 

    for = diseñado para buches con cierta cantidad de ciclo pre definidos 

    estructura:

        for(inicializacion[variable para que empiece];la condicion[cuando finalice el codigo o culmine]; actualizacion[cuantos saltos de entre intervalos])

    ejemplo:

        for(let i = 0; i < 5; i++){
            console.log("repeticion numero: " + i)
        }



        norta = esto daria como resultados del 0 al 4 (por que inicia en 0 y se ejecuta varias veces)

    diferencias de uso:

    - para recorrer un objeto
    for (let clave in objeto{
    }

    ejemplo:

        const persona = {
        nombre : "elena",
        edad : 28,
        ciudad : "bogota"
        };

        for (let propiedad in persona){
            console.log(´${propiedad} : ${persona[propiedad]});
        }
        - para iterar osea recorrer una lista 

        const frutas {"banano","manzana","platano"}

        for(let fruta of frutas){
            console.log("las frutas son ", fruta)
        }

        nota= tambien se puede con cadenas de texto

        for (let letra of "madre"){
            console.log("madre")
        }




    el i++ es el aumento o actualizacion en caso que se desee actualizar con paso 2 en 2 seria = i+=2

    while y do while 
    el while es un bucle de repeticion en funcion de una condicion 

    let contador = 0;
    while(contador < 3){
        console.log("el contador es: " + contador ) 
    }

    do while minimo se ejecuta una vez por codigo por su diseño siendo la condicion al final del bloque al contrario que while normal


    estructura 
    do {


    } while();

    ejemplo:
    let i = 0;
    do {
        console.log("valor de i: " + i);
        i++;
    }while (i < 0)







    






*/


console.log(boolean(1))

let contador = 0;
contador = 1;
console.log(contador)

const contadordef = 9;
console.log(contadordef)

console.log("hello, javascrip")