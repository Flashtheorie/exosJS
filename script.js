// Exercice 1 : Trouver les trois dernieres lettres d'un string
function lastthree(str) {
    let length = str.length;
    let lenghtmoins = str.length - 3;
    console.log(str.slice(lenghtmoins, length));
}

lastthree("Couillasse de la ville");


// Exercice 2 : Retourner le type dela variable