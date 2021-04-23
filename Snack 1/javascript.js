// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
// Calcola quanto pesano tutte le zucchine

var RaccoltaZucchine = [
    { varieta: "Italiana", peso: 2, lunghezza: "16cm" },
    { varieta: "Spagnola", peso: 1.9, lunghezza: "16cm" },
    { varieta: "Francese", peso: 1.5, lunghezza: "15cm" },
    { varieta: "Tedesca", peso: 1.7, lunghezza: "14cm" },
    { varieta: "Africana", peso: 3.4, lunghezza: "21cm" },
    { varieta: "Asiatica", peso: 1.3, lunghezza: 10 },
    { varieta: "SudCoreana", peso: 1.4, lunghezza: 12},
    { varieta: "NordCoreana", peso: 1.3, lunghezza: 11},
    { varieta: "Marocchina", peso: 3, lunghezza: 19 },
    { varieta: "Americana", peso: 2.5, lunghezza: 18 },
]

var pesoTotaleZucchine = 0;

for (let i = 0; i < RaccoltaZucchine.length; i++) {
    pesoTotaleZucchine += RaccoltaZucchine[i].peso;
}

console.log(pesoTotaleZucchine)
