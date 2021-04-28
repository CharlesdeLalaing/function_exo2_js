// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

// function reverseNumber(nbr) {
//     return parseInt(nbr.toString().split('').reverse().join(''))
// .toString --> from a number to a string
// .split --> separate each number from the string to create an array
// .reverse --> reverse the position of the element of the array
// .join --> place them back together as a string
// .parseFloat --> change back from a string to a number
// }
// console.log(reverseNumber(65539));


// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// function divPar2(nbr1) {
//     switch (nbr1 % 2) {
//         case 0:
//             return alert(`ce num ${nbr1} est divisible par 2 => ${nbr1} / 2 = ${nbr1/2}`)
//         case 1:
//             return alert(`ce num n'est pas divisible par deux`)
//         default:
//             break;
//     }
// }
// console.log(divPar2(5));
// EXO3
// Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

function LogIn() {
    let code = prompt("code svp");
    if (code == "mdp") {
        alert("sweet lord");
    } else {
        alert("wrong");
        LogIn()
    }
}
console.log(LogIn())
