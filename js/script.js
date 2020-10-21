//Descrizione: chiedere all'utente il numero di chilometri che vuole percorrere e l'età. Sulla base di ciò calcolare il prezzo del biglietto

//container è la section che contiene tutti i dati del biglietto
var container = document.getElementById('biglietto');
//per i due bottoni
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');

//var reset = document.getElementById('reset');


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
    //con lo sconto
    //var scontoM = prezzo * 0.80;
    //var scontoO = prezzo * 0.60;

    //Biglietti con lo sconto
    if (age === 'minorenne') {
      //sconto 20%
      prezzo -= prezzo * 0.20;
      //scontoM;
      var offerta = 'Biglietto sconto minorenni';
      console.log("il prezzo scontato è: ", prezzo, offerta);
    } else if (age === 'over65') {
      //sconto 40%
      prezzo -= prezzo * 0.40;
      //scontoO;
      var offerta = 'Biglietto sconto over 65';
      console.log("il prezzo scontato è: ", prezzo, offerta);
    }

    //due cifre dopo la virgola
    prezzo = prezzo.toFixed(2) + '€';
    //scontoM = scontoM.toFixed(2) + '€';
    //scontoO = scontoO.toFixed(2) + '€';

    //numeri random per la carozza 1-10
    var numCarozza = Math.floor( Math.random() * 10) + 1;

    ////numeri random per codice cp 10000-100000
    var numCCp = Math.floor( Math.random() * (10000 - 1000) ) + 10000;

    //Inseriamo i valori ottenuti nella pagina all'interno della tabella
    document.getElementById('nomePasseggero').innerHTML = nome;
    document.getElementById('offertaApplicata').innerHTML = offerta;
    document.getElementById('carrozza').innerHTML = numCarozza;
    document.getElementById('codiceCP').innerHTML = numCCp;
    document.getElementById('costobiglietto').innerHTML = prezzo;

    //mostare il BIGLIETTO
    container.className = 'mostra';
  }
);

//NUOVO BIGLIETTO
annulla.addEventListener('click',
  function() {
    //azzera i valori
    document.getElementById('nome').innerHTML = '';
    document.getElementById('km').innerHTML = '';
    document.getElementById('eta').innerHTML = '';
    document.getElementById('nomePasseggero').innerHTML = '';
    document.getElementById('offertaApplicata').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codiceCP').innerHTML = '';
    document.getElementById('costobiglietto').innerHTML = '';

    //nascondere il BIGLIETTO
    container.className = 'hidden';

  }
);
