/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65

*/


// Get data user:
var numberKm = prompt('Inserisci il numero di Km che vuoi percorrere');
var age = prompt('Inserisci la tua età');


// Prezzo biglietto base:
var ticketPrice = numberKm * 0.21;

document.getElementById('ticket-price-base').innerHTML =  ticketPrice.toFixed(2) + '€';


// Sconti in base all'età:
if (age < 18) {
  ticketPrice =  ticketPrice - (ticketPrice * 20 / 100);
  document.getElementById("title-discount-20").style.display = "block";
  document.getElementById('ticket-price-discount-20').innerHTML =  ticketPrice.toFixed(2)  + '€';
}
else if (age > 65) {
  ticketPrice =  ticketPrice - (ticketPrice * 40 / 100);
  document.getElementById("title-discount-40").style.display = "block";
  document.getElementById('ticket-price-discount-40').innerHTML =  ticketPrice.toFixed(2)  + '€';
}

// Costo finale:
document.getElementById('tot-price').innerHTML =  ticketPrice.toFixed(2) + '€';
