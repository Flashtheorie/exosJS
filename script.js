// Exercice 1 : 
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'


function lastthree(str, number) {
    let length = str.length;
    let lenghtmoins = str.length - number;
    console.log(str.slice(lenghtmoins, length));
}

// Décommenter si utilisation 
//lastthree("Couillasse de la ville", 3);


// Exercice 2 :
// Write a function that takes a value as argument
// Return the type of the value


function whatType(str){
    console.log(typeof(str));
}
// Décommenter si utilisation 
// whatType(3)

// Exercice 3 : 
// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object