const prompt=require("prompt-sync")();

function checkPalindrome(string) {

    const Kirjaimet = string.split('');

    const toisinKirjaimet = Kirjaimet.reverse();

    const toisinSana = toisinKirjaimet.join('');

    if(string == toisinSana) {
        console.log("Antamasi sana on palindromi");
    }
    else {
        console.log("Antamasi sana ei ole palindromi");
    }
}

const string = prompt("Anna sana: ");

checkPalindrome(string);