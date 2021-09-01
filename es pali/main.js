// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// scrivo una funzione
function isPalindrome(str) {
    var strReverse = "";
    for( var i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    // confronto la parola capovolta con la parola originale
    if(str == strReverse) {
        return true;
    } else {
        return false;
    }
    
}



// chiedo all'utente di inserire una parola
var parola = prompt("Inserisci una parola");

if( isPalindrome( parola ) == true ) {
    alert( "Complimenti, la tua parola è Palindroma! Hai vinto un I Phone" );
} else {
    alert( "Mi spiace! la tua parola non è Palindroma. Riprova!" );
}




































