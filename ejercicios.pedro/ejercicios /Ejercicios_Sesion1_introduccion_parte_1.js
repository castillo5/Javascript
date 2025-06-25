//parte 1

/* Gestionar el nombre de una empresa: Crear una variable de texto para
almacenar el nombre de mi empresa favorita (por ejemplo, "Google"). Luego,
quiero ver ese nombre impreso en pantalla. */
function ejercicio_01(){
    let company = "amazon";
    console.log("mi empresa es" , company);
}


/*Contar productos en inventario: Declarar una variable numérica entera para
registrar la cantidad de productos en el almacén, fijándola en 150. Después de
asignarla, necesito imprimir esa cantidad para una revisión rápida.*/
function ejercicio_02(){
    let products = 150;
    console.log("la cantidad de productos es ", products)

}


/*Establecer un precio base: Definir una variable numérica decimal para
representar el precio unitario de un artículo, con un valor de 29.99. Quiero poder imprimir este precio para futuras referencias.*/
function ejercicio_03(){
    let price = 29.99
    console.log("el precio de mis articulos unitarios es ", price)
    
}


/*Indicar el estado de un recurso: Usar una variable booleana llamada activo para señalar si un sistema o usuario está actualmente True (activo) o False (inactivo).Necesito imprimir su estado actual.*/
function ejercicio_04(){
    let status = true
    console.log("y el estado de mi empresa es:", status)
    
}


/*Actualizar una puntuación: Empezar con una variable puntos con el valor inicial de 100. Si el usuario gana más puntos, necesito cambiar su valor a 120 y luego imprimir el nuevo total de puntos*/
function ejercicio_05(){
    let value = 100;
    value = 120;
    console.log("el nuevo valor inicial es: ",value)
    
}




//parte 2

/*Verificar el tipo de un código postal: Tengo un código postal "05001" guardado. Necesito saber si es tratado como texto o número, así que quiero imprimir tanto su valor como su tipo de dato.*/
function ejercicio_06(){
    let postcode = "05001";
    console.log("el tipo de variable es: ", typeof postcode ,"y su numero es ",postcode)
    
}


/*Confirmar el tipo de un conteo de empleados: Manejo el número de empleados
de una sucursal, que es 50. Es crucial confirmar que este número se almacene como un tipo entero. Imprime su valor y su tipo.*/
function ejercicio_07(){
    let employees = 50;
    console.log("el tipo de variable es: ", typeof employees ,"y su numero de empleados es ",employees)
    
}


/*Asegurar el tipo de un porcentaje: El porcentaje de IVA es 0.19. Para cálculos precisos, debo verificar que este valor se interprete como un número decimal. Imprime su valor y su tipo.*/
function ejercicio_08(){
    let iva =  0.19
    console.log("el tipo de variable es: ", typeof iva,"y el porcentaje de iva: ",iva)
    
}


/*Comprobar el estado de disponibilidad: Hay una variable disponible con el valor False. Necesito imprimir tanto su valor como su tipo de dato para confirmar que es un booleano.*/
function ejercicio_09(){
    let value_ = false;
    console.log("el tipo de variable es: ", typeof value_,"y el valor es: ", value_)
    
}


/*Clasificar información variada: Para organizar mis datos sobre animales, he
registrado el animal = "perro", su numero_patas = 4 y si es_mamifero = True.
Quiero imprimir el tipo de dato de cada una de estas variables para asegurar su correcta categorización.*/
function ejercicio_10(){
    let animal = "perro"
    let number_foot = 4
    let mammal = true
    console.log("los datos son su animal:", animal,"numero de patas:", number_foot, "y si es mamifero:" , mammal ,"que sus typo de variables son",typeof animal,",",typeof number_foot,",",typeof mammal," respectivamente")
    
}


//parte 3.

/*Calcular el saldo final después de un depósito: Si mi saldo inicial es 500 y realizo un deposito de 200, necesito una operación que calcule el saldo final y lo imprima.*/
function ejercicio_11(){
    let stard_01 = 500
    let change = 200
    console.log("mi estado inicial es:", stard_01 ,"me realizaron un abono de:", change," dando como resultado que mi nuevo saldo sea de:",stard_01+change)
    
}


/*Determinar la diferencia de temperatura: Registré una temperatura máxima de
30.5 y una temperatura mínima de 18.0. Quiero calcular la diferencia de
temperatura entre ambas y mostrarla*/
function ejercicio_12(){
    let temp_max = 30.5
    let temp_min = 18.0
    console.log("la temperatura minima es de: ", temp_min," y la temperatura maxima es de: ",temp_max ," dando como promedio de temperaturas: ", temp_max - temp_min)
    
}


/*Calcular el salario bruto: Un empleado trabajó 40 horas y su tarifa por hora es 25.5. Necesito calcular su salario bruto y mostrarlo.*/
function ejercicio_13(){
    let work_01 = 40;
    let work_for_hour = 25.5;
    console.log("su empleado a trabajado", work_01 , " horas y la tarifa por hora es: ", work_for_hour, " dando un salario bruto de:", work_01 * work_for_hour," pesos")
    
}

/*Obtener el promedio de ventas por vendedor: Mis ventas totales fueron 12000 y tuve 4 vendedores. Necesito una forma de calcular el promedio de ventas por vendedor y obtener ese valor.*/

function ejercicio_14(){
    let sales_total = 12000
    let sellers = 4
    console.log("las ventas totales fueron", sales_total, " y los trabajadores fueron: ", sellers ," dando un promedio de trabajador de: ", sales_total/sellers)
}

/*Saber los minutos restantes de una clase: Una clase tiene una duración total de
75 minutos. Si consideramos que cada bloque completo es de 60 minutos, ¿cuántos minutos sobran al final? Necesito este cálculo impreso.*/

function ejercicio_15(){
    let clas = 75
    let block = 60
    console.log("las clases duran " , clas ," min y un bloque  ", block ," dando un tiempo de sobra ", clas - block ,"min por clase")
}

// parte 4

/*Construir un número de contacto completo: Tengo el prefijo "Teléfono: " y el numero "3101234567". Necesito combinarlos para formar el contacto completo y
poder imprimirlo en un directorio.*/

function ejercicio_16(){
    let phone = 3101234567
    
}






//menu principal


console.log("menu principal selecion el ejercicio que desea hacer")























