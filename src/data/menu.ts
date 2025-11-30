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
                pairing: "s1", // Cava Reserva
                pairingReason: "L'acidità tagliente e le bollicine fini del Cava Reserva puliscono il palato dalla grasso dolce e avvolgente del prosciutto iberico, mentre le note di lievito e crosta di pane del metodo classico richiamano la lunga stagionatura della carne."
            },
            {
                id: "t2",
                name: "Pan con Tomate",
                description: "Pane di cristallo tostato con pomodoro fresco, olio EVO e sale maldon.",
                price: 6,
                pairing: "w1", // Albariño
                pairingReason: "La freschezza salina e citrina dell'Albariño esalta la semplicità del pomodoro fresco e l'acidità dell'olio extravergine, creando un perfetto equilibrio mediterraneo che rispetta la croccantezza del pane."
            },
            {
                id: "t3",
                name: "Gambas al Ajillo",
                description: "Gamberi saltati con aglio, peperoncino e olio d'oliva sfrigolante.",
                price: 16,
                pairing: "w14", // Godello
                pairingReason: "La struttura e la mineralità del Godello reggono il confronto con la pungenza dell'aglio e del peperoncino, mentre la sua morbidezza accompagna la dolcezza intrinseca dei gamberi senza sovrastarla."
            },
            {
                id: "t4",
                name: "Pulpo a la Gallega",
                description: "Polpo bollito con patate, pimentón de la Vera e olio d'oliva.",
                price: 22,
                pairing: "w2", // Albariño invecchiato
                pairingReason: "La complessità e le note evolute di un Albariño affinato si sposano magnificamente con la consistenza carnosa del polpo e le note affumicate della paprika (pimentón), in un abbinamento regionale classico."
            },
            {
                id: "t5",
                name: "Croquetas de Jamón",
                description: "Crocchette cremose al prosciutto iberico (4 pezzi).",
                price: 12,
                pairing: "s4", // Cava Rosé
                pairingReason: "La cremosità della besciamella fritta trova il suo contrasto ideale nella bollicina, mentre i sentori di frutti rossi del rosé accompagnano ed esaltano il sapore intenso dei cubetti di prosciutto all'interno."
            },
            {
                id: "t6",
                name: "Patatas Bravas",
                description: "Patate croccanti con salsa brava piccante e aioli.",
                price: 10,
                pairing: "r4", // Rosato Ribera
                pairingReason: "Un rosato di corpo e struttura è l'ideale per gestire la piccantezza della salsa brava e l'intensità dell'aglio nell'aioli, rinfrescando la bocca senza scomparire di fronte alla frittura."
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
                pairing: "r3", // Rosato strutturato o Rosso leggero
                pairingReason: "La carne bianca e le verdure richiedono un vino versatile; un rosato strutturato rispetta la delicatezza del coniglio e le note aromatiche dello zafferano, offrendo al contempo abbastanza corpo per il riso ricco di sapori."
            },
            {
                id: "m2",
                name: "Paella de Marisco",
                description: "Riso bomba, gamberi, scampi, cozze, calamari e fumetto di pesce. (Min 2 pers)",
                price: 28,
                pairing: "w6", // Bianco strutturato (Rioja)
                pairingReason: "La ricchezza dei crostacei e l'intensità del fumetto di pesce richiedono un bianco di grande corpo e struttura, possibilmente con un passaggio in legno, capace di non scomparire di fronte ai sapori intensi del mare."
            },
            {
                id: "m3",
                name: "Cochinillo Asado",
                description: "Maialino da latte arrosto stile Segovia, pelle croccante e carne tenera.",
                price: 32,
                pairing: "red8", // Ribera del Duero
                pairingReason: "L'untuosità marcata e la succulenza della carne di maialino necessitano dei tannini fitti e dell'acidità vibrante di un grande Ribera del Duero per ripulire la bocca ad ogni boccone."
            },
            {
                id: "m4",
                name: "Chuletón de Vaca Vieja",
                description: "Costata di manzo galiziano frollata 45 giorni, alla griglia (prezzo all'etto).",
                price: 8,
                pairing: "re10", // Rioja Gran Reserva
                pairingReason: "Una carne frollata, con sapori profondi e umami, richiede un vino altrettanto nobile ed evoluto. I tannini levigati e le note terziarie (cuoio, tabacco) di un Rioja Gran Reserva dialogano perfettamente con la frollatura."
            },
            {
                id: "m5",
                name: "Bacalao al Pil-Pil",
                description: "Baccalà confit in olio d'oliva, aglio e peperoncino, emulsionato.",
                price: 26,
                pairing: "w11", // Txakoli
                pairingReason: "L'acidità tagliente e quasi frizzante del Txakoli è fondamentale per 'tagliare' la notevole grassezza dell'emulsione di olio e gelatina del pesce, creando un abbinamento tradizionale basco di perfetta armonia."
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
                pairing: "p1", // Pedro Ximenez
                pairingReason: "La dolcezza opulenta e densa del Pedro Ximénez accompagna la ricchezza della crema all'uovo, con le sue note di fichi secchi, datteri e caramello che completano la vaniglia e la crosta bruciata."
            },
            {
                id: "d2",
                name: "Tarta de Queso Vasca",
                description: "Cheesecake stile San Sebastián, cremosa e bruciata fuori.",
                price: 10,
                pairing: "p7", // Passito di Pantelleria
                pairingReason: "L'aromaticità esplosiva dell'Zibibbo e la sua dolcezza ben bilanciata dall'acidità sostengono la sapidità del formaggio e la nota caramellata della cottura, senza risultare stucchevole."
            },
            {
                id: "d3",
                name: "Churros con Chocolate",
                description: "Frittelle di pastella con cioccolata calda densa.",
                price: 8,
                pairing: "p5", // Brandy
                pairingReason: "Un distillato caldo, complesso e avvolgente come il Brandy ripulisce il palato dalla frittura e si sposa magnificamente con l'amarezza e la densità del cioccolato fondente."
            }
        ]
    }
];

export default menu;
