//Descrizione: chiedere all'utente il numero di chilometri che vuole percorrere e l'età. Sulla base di ciò calcolare il prezzo del biglietto

//container è la section che contiene tutti i dati del biglietto
var container = document.getElementById('biglietto');
//per i due bottoni
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');

var rest = document.getElementById('reset');


//GENERARE IL BIGLIETTO
genera.addEventListener('click',
  function(){
    //Ricevo i dati che l'utente ha inserito
    var nome = document.getElementById('nome').value;
    console.log("il nome del passeggero è: ", nome);

    var tragitto = document.getElementById('km').value;
    console.log("i kilometri da percorrere sono: ", tragitto);

    var age = document.getElementById('eta').value;
    console.log("l'età del passeggero è: ", age);

    //Calco del biglietto
     //1km=0.21
    var prezzo = 0.21 * tragitto;
    var offerta = 'Biglietto standard';
    console.log("il prezzo senza sconto è: ", prezzo, offerta);

    //Biglietti con lo sconto
    if(age === 'minorenne'){
      //sconto 20%
      prezzo -= prezzo * 0.20;
      var offerta = 'Biglietto sconto minorenni';
      console.log("il prezzo scontato è: ", prezzo, offerta);
    }

  }
)
