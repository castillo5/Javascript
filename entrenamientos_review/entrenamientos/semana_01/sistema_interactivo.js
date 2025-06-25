let age;
let name_user;
let option;

console.log(`
    PRESS 1 TO CALCULATE YOUR AGE STATE
    PRESS 2 TO LEAVE
    PRESS 3 TO CHANGE NAME
    CHOOSE AN OPTION: 
`);

// Pide el nombre al usuario y lo valida
while (true) {
    name_user = prompt("Please type your name:");
    if (!isNaN(name_user) || name_user.trim() === "") {
        alert(`
        Is your name a number?
        I don't think so.
        `);
        continue;
    }
    break;
}

// Muestra el menú de opciones
option = prompt(`
    PRESS 1 TO CALCULATE YOUR AGE STATE
    PRESS 2 TO LEAVE
    PRESS 3 TO CHANGE NAME
    CHOOSE AN OPTION: 
`);

while (option !== "2") {

    // Opción 1: calcular estado por edad
    if (option === "1") {
        age = prompt(`
                (ENTER THE SYMBOL "*" IF YOU NEED TO RETURN TO THE MENU)

                ENTER YOUR AGE: 
        `);

        if (age === null) {
            break; // Usuario canceló
        } else if (age === "*") {
            option = prompt(`
                PRESS 1 TO CALCULATE YOUR AGE STATE
                PRESS 2 TO LEAVE
                PRESS 3 TO CHANGE NAME
                CHOOSE AN OPTION: 
            `);
            continue;
        }

        age = Number(age); // Convierte a número

        if (isNaN(age)) {
            alert("Invalid input. Please enter a valid number or '*' to return.");
            continue;
        }

        // Clasificación por edad
        if (age < 0) {
            alert("How can you talk to me if you were not even born, " + name_user + "?");
        } else if (age > 0 && age <= 5) {
            alert("You are a baby, " + name_user + ". It's amazing you can write your name and know your age.");
        } else if (age > 5 && age < 13) {
            alert("You are a child, " + name_user + ". Can you read or write?");
        } else if (age >= 13 && age <= 18) {
            alert("You are a teenager, " + name_user + ". Continue learning to code and doing what you enjoy.");
        } else if (age > 18 && age <= 40) {
            alert("You are an adult, " + name_user + ". Practice this code in your own way.");
        } else if (age > 40) {
            alert("You are a senior, " + name_user + ". You must know a lot about the coding world, right?");
        } else {
            alert("Invalid age.");
        }
    }

    // Opción 3: cambiar nombre
    else if (option === "3") {
        name_user = prompt("Enter your new name:");
        if (!isNaN(name_user) || name_user.trim() === "") {
            alert("Is your name a number? I don't think so.");
            continue;
        }
    }

    // Opción inválida
    else if (option !== "1") {
        alert("You entered an invalid option. Try again.");
    }

    // Vuelve a mostrar el menú
    option = prompt(`
        PRESS 1 TO CALCULATE YOUR AGE STATE
        PRESS 2 TO LEAVE
        PRESS 3 TO CHANGE NAME
        CHOOSE AN OPTION: 
    `);

    if (option === null || name_user === null) {
        break; // Usuario canceló
    }
}

alert("Goodbye, " + name_user + "!");
