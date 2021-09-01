// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

// Sommiamo i due numeri

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

//Dichiariamo chi ha vinto. 

function getNumRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// chiedo all'utente un numero tra 1 e 5
var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5"));
// mi assicuro che il numero inserito dall'utente rientri nei parametri richiesti
while(isNaN( numeroUtente ) || numeroUtente < 1 || numeroUtente > 5) {
    numeroUtente = parseInt(prompt("Non hai inserito un numero corretto! Riprova"));
}
// chiedi all'utente tra pari e dispari
var sceltaUtente = prompt("Scegli tra pari e dispari");
// mi assicuro che il numero inserito dall'utente rientri nei parametri richiesti
while(sceltaUtente != "pari" && sceltaUtente != "dispari") {
    sceltaUtente = prompt("Attenzione! La tua scelta non è corretta!");
}
// definisco una funzione che generi numeri random
var numeroCpu = getNumRand(1,5);
console.log("Il numero generato per la cpu è", numeroCpu);
// sommo i numeri utente e random
var sommma = numeroUtente + numeroCpu;
// verifica se somma è pari o dispari
var risultato;

if(isEven( sommma )) {
    risultato = "pari";
} else {
    risultato = "dispari";
}

// stabilisco se la scelta dell'utente è vincente
if(sceltaUtente == risultato) {
    alert("Complimenti! Hai vinto!");
} else {
    alert("Mi dispiace! Hai perso");
}