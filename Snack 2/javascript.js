// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine

var RaccoltaZucchineSotto15 = [
    { varieta: "Tedesca", peso: 1.7, lunghezza: 14 },
    { varieta: "Asiatica", peso: 1.3, lunghezza: 10 },
    { varieta: "SudCoreana", peso: 1.4, lunghezza: 12 },
    { varieta: "NordCoreana", peso: 1.3, lunghezza: 11 },
];

var RaccoltaZucchineSopra15 = [
    { varieta: "Italiana", peso: 2, lunghezza: 16 },
    { varieta: "Spagnola", peso: 1.9, lunghezza: 16 },
    { varieta: "Francese", peso: 1.5, lunghezza: 15 },
    { varieta: "Africana", peso: 3.4, lunghezza: 21 },
    { varieta: "Marocchina", peso: 3, lunghezza: 19 },
    { varieta: "Americana", peso: 2.5, lunghezza: 18 },
];

var pesoTotaleZucchineSotto15 = 0;

for (let i = 0; i < RaccoltaZucchineSotto15.length; i++) {
    pesoTotaleZucchineSotto15 += RaccoltaZucchineSotto15[i].peso;
}

var pesoTotaleZucchineSopra15= 0;

for (let i = 0; i < RaccoltaZucchineSopra15.length; i++) {
    pesoTotaleZucchineSopra15 += RaccoltaZucchineSopra15[i].peso;
}

console.log(pesoTotaleZucchineSotto15)
console.log(pesoTotaleZucchineSopra15)




