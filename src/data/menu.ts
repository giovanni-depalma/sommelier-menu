import type { MenuCategory } from '../types';

const menu: MenuCategory[] = [
    {
        category: "Tapas y Entradas",
        items: [
            {
                id: "t1",
                name: "Jamón Ibérico de Bellota",
                description: "Prosciutto iberico 100% ghianda, tagliato a coltello. 36 mesi di stagionatura.",
                price: 28,
                pairingSpanish: {
                    wineId: "s1",
                    reason: "L'acidità tagliente e le bollicine fini del Cava Reserva puliscono il palato dalla grasso dolce e avvolgente del prosciutto iberico."
                },
                pairingItalian: {
                    wineId: "i1",
                    reason: "La freschezza e l'eleganza del Franciacorta bilanciano la sapidità del prosciutto, mentre le note di lievito richiamano la stagionatura."
                }
            },
            {
                id: "t2",
                name: "Pan con Tomate",
                description: "Pane di cristallo tostato con pomodoro fresco, olio EVO e sale maldon.",
                price: 6,
                pairingSpanish: {
                    wineId: "w1",
                    reason: "La freschezza salina dell'Albariño esalta la semplicità del pomodoro e l'acidità dell'olio extravergine."
                },
                pairingItalian: {
                    wineId: "w18",
                    reason: "Il Vermentino di Gallura, con la sua sapidità e note di macchia mediterranea, è il compagno ideale per questo classico."
                }
            },
            {
                id: "t3",
                name: "Gambas al Ajillo",
                description: "Gamberi saltati con aglio, peperoncino e olio d'oliva sfrigolante.",
                price: 16,
                pairingSpanish: {
                    wineId: "w14",
                    reason: "La struttura del Godello regge il confronto con l'aglio e il peperoncino, accompagnando la dolcezza dei gamberi."
                },
                pairingItalian: {
                    wineId: "w22",
                    reason: "Un Etna Bianco, vulcanico e minerale, taglia l'untuosità dell'olio e sostiene i sapori decisi del piatto."
                }
            },
            {
                id: "t4",
                name: "Pulpo a la Gallega",
                description: "Polpo bollito con patate, pimentón de la Vera e olio d'oliva.",
                price: 22,
                pairingSpanish: {
                    wineId: "w2",
                    reason: "Le note evolute di un Albariño affinato si sposano con la consistenza del polpo e le note affumicate della paprika."
                },
                pairingItalian: {
                    wineId: "w23",
                    reason: "Il Timorasso, con la sua potenza e mineralità, è perfetto per accompagnare la struttura carnosa del polpo."
                }
            },
            {
                id: "t5",
                name: "Croquetas de Jamón",
                description: "Crocchette cremose al prosciutto iberico (4 pezzi).",
                price: 12,
                pairingSpanish: {
                    wineId: "s4",
                    reason: "La bollicina del Cava Rosé contrasta la frittura, mentre i frutti rossi richiamano il sapore del prosciutto."
                },
                pairingItalian: {
                    wineId: "i5",
                    reason: "Un Metodo Classico da Pinot Nero dell'Oltrepò Pavese offre struttura e freschezza per pulire il palato."
                }
            },
            {
                id: "t6",
                name: "Patatas Bravas",
                description: "Patate croccanti con salsa brava piccante e aioli.",
                price: 10,
                pairingSpanish: {
                    wineId: "r4",
                    reason: "Un rosato fresco ma strutturato gestisce la piccantezza della salsa e l'intensità dell'aglio."
                },
                pairingItalian: {
                    wineId: "r8",
                    reason: "Il Five Roses, storico rosato pugliese, ha il corpo e la sapidità necessari per questo piatto saporito."
                }
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
                pairingSpanish: {
                    wineId: "r3",
                    reason: "Un rosato strutturato (Clarete) rispetta la delicatezza delle carni bianche e le note dello zafferano."
                },
                pairingItalian: {
                    wineId: "r6",
                    reason: "Il Cerasuolo d'Abruzzo, vinoso e potente, è l'abbinamento italiano perfetto per la ricchezza della paella."
                }
            },
            {
                id: "m2",
                name: "Paella de Marisco",
                description: "Riso bomba, gamberi, scampi, cozze, calamari e fumetto di pesce. (Min 2 pers)",
                price: 28,
                pairingSpanish: {
                    wineId: "w6",
                    reason: "Un bianco di Rioja affinato in legno ha la struttura per non scomparire di fronte ai sapori intensi del mare."
                },
                pairingItalian: {
                    wineId: "w17",
                    reason: "Il Cervaro della Sala, con la sua morbidezza e complessità, accompagna magnificamente i crostacei."
                }
            },
            {
                id: "m3",
                name: "Cochinillo Asado",
                description: "Maialino da latte arrosto stile Segovia, pelle croccante e carne tenera.",
                price: 32,
                pairingSpanish: {
                    wineId: "red8",
                    reason: "I tannini e l'acidità di un Ribera del Duero ripuliscono la bocca dalla succulenza e grassezza del maialino."
                },
                pairingItalian: {
                    wineId: "red28",
                    reason: "Il Brunello di Montalcino, con la sua acidità vibrante e tannini eleganti, sgrassa e nobilita il piatto."
                }
            },
            {
                id: "m4",
                name: "Chuletón de Vaca Vieja",
                description: "Costata di manzo galiziano frollata 45 giorni, alla griglia (prezzo all'etto).",
                price: 8,
                pairingSpanish: {
                    wineId: "re10",
                    reason: "Una carne frollata e umami richiede un Rioja Gran Reserva, con le sue note terziarie di cuoio e tabacco."
                },
                pairingItalian: {
                    wineId: "red26",
                    reason: "Il Sassicaia, con la sua eleganza bordolese e note mediterranee, è il compagno regale per questa carne."
                }
            },
            {
                id: "m5",
                name: "Bacalao al Pil-Pil",
                description: "Baccalà confit in olio d'oliva, aglio e peperoncino, emulsionato.",
                price: 26,
                pairingSpanish: {
                    wineId: "w11",
                    reason: "L'acidità tagliente del Txakoli 'taglia' la grassezza dell'emulsione, in un abbinamento basco tradizionale."
                },
                pairingItalian: {
                    wineId: "w22",
                    reason: "La mineralità e la freschezza dell'Etna Bianco bilanciano l'untuosità del piatto senza coprirne il sapore."
                }
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
                pairingSpanish: {
                    wineId: "p1",
                    reason: "La dolcezza densa del Pedro Ximénez accompagna la crema, con note di caramello che richiamano la crosta."
                },
                pairingItalian: {
                    wineId: "p8",
                    reason: "Il Vin Santo del Chianti Classico, con le sue note di frutta secca e miele, è ideale con i dolci al cucchiaio."
                }
            },
            {
                id: "d2",
                name: "Tarta de Queso Vasca",
                description: "Cheesecake stile San Sebastián, cremosa e bruciata fuori.",
                price: 10,
                pairingSpanish: {
                    wineId: "p4",
                    reason: "Il Fondillón, con le sue note ossidative e di frutta secca, sostiene la sapidità e la cottura del formaggio."
                },
                pairingItalian: {
                    wineId: "p7",
                    reason: "L'aromaticità dello Zibibbo di Pantelleria bilancia la ricchezza del formaggio con una dolcezza solare."
                }
            },
            {
                id: "d3",
                name: "Churros con Chocolate",
                description: "Frittelle di pastella con cioccolata calda densa.",
                price: 8,
                pairingSpanish: {
                    wineId: "p5",
                    reason: "Un Brandy di Jerez, caldo e avvolgente, ripulisce il palato dalla frittura e sposa il cioccolato."
                },
                pairingItalian: {
                    wineId: "p9",
                    reason: "Una Grappa morbida e invecchiata offre il calore e la complessità per chiudere il pasto in bellezza."
                }
            }
        ]
    }
];

export default menu;
