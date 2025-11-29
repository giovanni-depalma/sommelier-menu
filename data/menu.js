const menu = [
    {
        category: "Tapas y Entradas",
        items: [
            {
                id: "t1",
                name: "Jamón Ibérico de Bellota",
                description: "Prosciutto iberico 100% ghianda, tagliato a coltello. 36 mesi di stagionatura.",
                price: 28,
                pairing: "s1" // Cava Reserva
            },
            {
                id: "t2",
                name: "Pan con Tomate",
                description: "Pane di cristallo tostato con pomodoro fresco, olio EVO e sale maldon.",
                price: 6,
                pairing: "w1" // Albariño
            },
            {
                id: "t3",
                name: "Gambas al Ajillo",
                description: "Gamberi saltati con aglio, peperoncino e olio d'oliva sfrigolante.",
                price: 16,
                pairing: "w14" // Godello
            },
            {
                id: "t4",
                name: "Pulpo a la Gallega",
                description: "Polpo bollito con patate, pimentón de la Vera e olio d'oliva.",
                price: 22,
                pairing: "w2" // Albariño invecchiato
            },
            {
                id: "t5",
                name: "Croquetas de Jamón",
                description: "Crocchette cremose al prosciutto iberico (4 pezzi).",
                price: 12,
                pairing: "s4" // Cava Rosé
            },
            {
                id: "t6",
                name: "Patatas Bravas",
                description: "Patate croccanti con salsa brava piccante e aioli.",
                price: 10,
                pairing: "r4" // Rosato Ribera
            }
        ]
    },
    {
        category: "Platos Principales",
        items: [
            {
                id: "m1",
                name: "Paella Valenciana",
                description: "Riso bomba, pollo, coniglio, fagiolini piattoni, garrofón e zafferano. (Min 2 pers)",
                price: 24,
                pairing: "r3" // Rosato strutturato o Rosso leggero
            },
            {
                id: "m2",
                name: "Paella de Marisco",
                description: "Riso bomba, gamberi, scampi, cozze, calamari e fumetto di pesce. (Min 2 pers)",
                price: 28,
                pairing: "w6" // Bianco strutturato (Rioja)
            },
            {
                id: "m3",
                name: "Cochinillo Asado",
                description: "Maialino da latte arrosto stile Segovia, pelle croccante e carne tenera.",
                price: 32,
                pairing: "re14" // Ribera del Duero
            },
            {
                id: "m4",
                name: "Chuletón de Vaca Vieja",
                description: "Costata di manzo galiziano frollata 45 giorni, alla griglia (prezzo all'etto).",
                price: 8,
                pairing: "re10" // Rioja Gran Reserva
            },
            {
                id: "m5",
                name: "Bacalao al Pil-Pil",
                description: "Baccalà confit in olio d'oliva, aglio e peperoncino, emulsionato.",
                price: 26,
                pairing: "w11" // Txakoli
            }
        ]
    },
    {
        category: "Postres",
        items: [
            {
                id: "d1",
                name: "Crema Catalana",
                description: "Crema alla vaniglia con crosta di zucchero caramellato.",
                price: 8,
                pairing: "p1" // Pedro Ximenez
            },
            {
                id: "d2",
                name: "Tarta de Queso Vasca",
                description: "Cheesecake stile San Sebastián, cremosa e bruciata fuori.",
                price: 10,
                pairing: "p7" // Passito di Pantelleria
            },
            {
                id: "d3",
                name: "Churros con Chocolate",
                description: "Frittelle di pastella con cioccolata calda densa.",
                price: 8,
                pairing: "p5" // Brandy
            }
        ]
    }
];

export default menu;
