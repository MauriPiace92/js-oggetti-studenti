// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var infoStudente = {

    'nome': 'Paolo',
    'cognome': 'Bargiggia',
    'età': '56'

}

for (var key in infoStudente){
    console.log(infoStudente[key]);
}

// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var arrayStudenti= [

    {
        'nome': 'Tommaso',
        'cognome': 'Bargiggia',
        'età': 22
    },
    {
        'nome': 'Mario',
        'cognome': 'Rossi',
        'età': 25
    },
    {
        'nome': 'Pippo',
        'cognome': 'Pluto',
        'età': 23
    }

];

// Ciclo per trovare solo gli studenti per nome e cognome:
for (var i=0; i< arrayStudenti.length;i++){
    var singleStudent = arrayStudenti[i];

    
    console.log('Nome Studente: '+ singleStudent.nome);
    console.log('Cognome Studente: ' + singleStudent.cognome);

}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeNuovo = prompt ('inserisci il tuo Nome: ');
var cognomeNuovo = prompt ('inserisci il tuo Cognome: ');
var etàNuova= parseInt(prompt('inserisci il tuo Cognome: '));

var nuovoStudente= 
    
    {
        'nome':nomeNuovo,
        'cognome': cognomeNuovo,
        'età': etàNuova
    }

    arrayStudenti.push(nuovoStudente);
    console.log(arrayStudenti);