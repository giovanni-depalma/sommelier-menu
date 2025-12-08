export interface RegionData {
    id: string;
    name: string;
    country: 'Italia' | 'Spagna';
    coordinates: { lat: number; lng: number };
    description: string;
    zoom?: number;
}

export const regions: RegionData[] = [
    // --- ITALIA ---
    {
        id: "Abruzzo",
        name: "Abruzzo",
        country: "Italia",
        coordinates: { lat: 42.1920, lng: 13.7289 },
        description: "Regione aspra e montuosa che digrada verso l'Adriatico. Il clima varia dal marittimo al continentale. Famosa per il Montepulciano d'Abruzzo, vino rosso potente e fruttato, e il Trebbiano, bianco complesso e longevo. Il Cerasuolo è un rosato di grande struttura."
    },
    {
        id: "Alto Adige",
        name: "Alto Adige",
        country: "Italia",
        coordinates: { lat: 46.4983, lng: 11.3548 },
        description: "Zona alpina al confine con l'Austria. Vigneti eroici su pendii ripidi, notevole escursione termica. Regno dei bianchi aromatici (Gewürztraminer, Sauvignon, Riesling) e rossi leggeri ed eleganti (Pinot Nero, Schiava, Lagrein). Vini caratterizzati da freschezza, profumi intensi e mineralità."
    },
    {
        id: "Campania",
        name: "Campania",
        country: "Italia",
        coordinates: { lat: 40.8518, lng: 14.2681 },
        description: "Terra vulcanica e solare. L'Irpinia è la zona più vocata, con suoli ricchi di minerali. Grandi bianchi come Fiano (strutturato, nocciola) e Greco (minerale, sulfureo). Tra i rossi domina l'Aglianico (Taurasi), il 'Barolo del Sud', potente e longevo."
    },
    {
        id: "Friuli",
        name: "Friuli",
        country: "Italia",
        coordinates: { lat: 46.0625, lng: 13.2388 },
        description: "Terra di confine e di grandi bianchi. Il Collio e i Colli Orientali offrono suoli di marne e arenarie ('ponca'). Famosa per bianchi strutturati e longevi (Friulano, Ribolla Gialla) e per la tradizione dei macerati (orange wines). Rossi bordolesi e autoctoni (Refosco, Schioppettino)."
    },
    {
        id: "Lombardia",
        name: "Lombardia",
        country: "Italia",
        coordinates: { lat: 45.4642, lng: 9.1900 },
        description: "Regione variegata. La Franciacorta è la culla del Metodo Classico italiano di qualità. La Valtellina offre Nebbiolo (Chiavennasca) di montagna, fine ed elegante. L'Oltrepò Pavese è il serbatoio del Pinot Nero."
    },
    {
        id: "Marche",
        name: "Marche",
        country: "Italia",
        coordinates: { lat: 43.4125, lng: 13.1662 },
        description: "Regione collinare che guarda l'Adriatico. Il Verdicchio (Castelli di Jesi e Matelica) è il re indiscusso: uno dei bianchi più longevi e strutturati d'Italia. Rossi interessanti da Montepulciano e Sangiovese (Conero, Piceno)."
    },
    {
        id: "Piemonte",
        name: "Piemonte",
        country: "Italia",
        coordinates: { lat: 44.6975, lng: 8.0360 }, // Langhe approx
        description: "Una delle regioni vinicole più prestigiose al mondo. Le Langhe (patrimonio UNESCO) sono la patria del Nebbiolo (Barolo, Barbaresco), vino da invecchiamento complesso e tannico. Barbera e Dolcetto offrono beva più immediata ma grande carattere. Bianchi da Arneis, Cortese (Gavi) e Timorasso."
    },
    {
        id: "Puglia",
        name: "Puglia",
        country: "Italia",
        coordinates: { lat: 40.9160, lng: 16.5888 },
        description: "Il 'tacco' d'Italia, terra di sole e vento. Primitivo (Manduria, Gioia del Colle) e Negroamaro (Salento) dominano tra i rossi: vini caldi, morbidi e fruttati. Famosa anche per i rosati di grande tradizione e freschezza."
    },
    {
        id: "Sardegna",
        name: "Sardegna",
        country: "Italia",
        coordinates: { lat: 40.1209, lng: 9.0129 },
        description: "Isola dalla forte identità. Il Cannonau (Grenache) è il rosso simbolo, caldo e possente. Il Vermentino (Gallura) dà bianchi sapidi, marini e strutturati, sferzati dal maestrale. Il Carignano nel sud offre rossi eleganti da vigne a piede franco su sabbia."
    },
    {
        id: "Sicilia",
        name: "Sicilia",
        country: "Italia",
        coordinates: { lat: 37.5990, lng: 14.0154 },
        description: "Un continente vitivinicolo. L'Etna è la zona più in voga: viticoltura vulcanica di montagna, vini (Nerello, Carricante) eleganti, minerali e verticali ('Borgogna del Mediterraneo'). Nel resto dell'isola, Nero d'Avola e Grillo esprimono calore e ricchezza mediterranea ma con tecniche moderne che preservano la freschezza."
    },
    {
        id: "Trentino",
        name: "Trentino",
        country: "Italia",
        coordinates: { lat: 46.0748, lng: 11.1217 },
        description: "Viticoltura di montagna ma con influenze mitigatorie. Culla del Trento DOC, spumante Metodo Classico di montagna (Chardonnay, Pinot Nero) di grande freschezza e longevità. Teroldego Rotaliano è il rosso autoctono principe, fruttato e vibrante."
    },
    {
        id: "Toscana",
        name: "Toscana",
        country: "Italia",
        coordinates: { lat: 43.4500, lng: 11.1200 }, // Chianti area
        description: "Cuore del vino italiano. Il Sangiovese è l'anima della regione (Chianti Classico, Brunello di Montalcino, Nobile di Montepulciano), capace di esprimere terroir diversi con eleganza, acidità e tannino. La costa (Bolgheri) è famosa per i 'Super Tuscan', blend bordolesi potenti e moderni."
    },
    {
        id: "Umbria",
        name: "Umbria",
        country: "Italia",
        coordinates: { lat: 42.9380, lng: 12.6216 },
        description: "Il cuore verde d'Italia. Orvieto è famosa per i bianchi vulcanici e muffati. Montefalco è la patria del Sagrantino: vitigno rosso dal tannino potentissimo, che richiede lungo affinamento per regalare vini di struttura monumentale e complessità."
    },
    {
        id: "Valle d'Aosta",
        name: "Valle d'Aosta",
        country: "Italia",
        coordinates: { lat: 45.7349, lng: 7.3131 },
        description: "La regione viticola più piccola e alta d'Italia. Vini eroici, spesso da vitigni autoctoni (Petit Rouge, Fumin, Prié Blanc) coltivati su terrazzamenti ripidissimi. Vini freschi, nervosi, profumati, di grande personalità alpina."
    },
    {
        id: "Veneto",
        name: "Veneto",
        country: "Italia",
        coordinates: { lat: 45.4950, lng: 11.4500 }, // Valpolicella/Soave area
        description: "Regione gigante per volumi e varietà. La Valpolicella offre l'Amarone (grande rosso da uve appassite, ricco e potente). Soave è terra di grandi bianchi vulcanici da Garganega. Prosecco (Glera) nelle colline di Conegliano-Valdobbiadene."
    },

    // --- SPAGNA ---
    {
        id: "Alicante",
        name: "Alicante",
        country: "Spagna",
        coordinates: { lat: 38.3452, lng: -0.4810 },
        description: "Zona mediterranea storica. Famosa per il Fondillón, vino dolce ossidativo da Monastrell quasi estinto e recuperato. Vini rossi caldi, maturi e speziati, spesso da vecchie vigne ad alberello."
    },
    {
        id: "Bierzo",
        name: "Bierzo",
        country: "Spagna",
        coordinates: { lat: 42.6000, lng: -6.6500 },
        description: "Zona di transizione tra la Galizia e l'altopiano. Il regno della Mencía: vitigno rosso che qui dà vini freschi, minerali, speziati e floreali, con una finezza che ricorda il Pinot Nero o il Cabernet Franc. Vigne vecchie su suoli di ardesia."
    },
    {
        id: "Bizkaiko Txakolina",
        name: "Bizkaiko Txakolina",
        country: "Spagna",
        coordinates: { lat: 43.2570, lng: -2.9234 }, // Bilbao area
        description: "Denominazione dei Paesi Baschi attorno a Bilbao. Il Txakoli è un bianco atlantico, leggermente frizzante, acidulo e tagliente, da uve Hondarrabi Zuri. Perfetto con i pintxos e il pesce."
    },
    {
        id: "Castilla y León",
        name: "Castilla y León",
        country: "Spagna",
        coordinates: { lat: 41.6523, lng: -4.7245 },
        description: "Vasta regione che raggruppa diverse DO importanti (Ribera, Rueda, Toro, Bierzo) ma anche 'Vini della Terra' di grande qualità prodotti fuori dalle denominazioni classiche, spesso da vecchie vigne pre-fillossera."
    },
    {
        id: "Conca del Riu Anoia",
        name: "Conca del Riu Anoia",
        country: "Spagna",
        coordinates: { lat: 41.4300, lng: 1.7800 },
        description: "Piccola e prestigiosa zona nel cuore del Penedès. Raventós i Blanc ha creato questa denominazione per i suoi spumanti metodo classico (biosfera unica, suoli marini, vitigni autoctoni) per staccarsi dalla DO Cava e puntare all'eccellenza assoluta."
    },
    {
        id: "Corpinnat",
        name: "Corpinnat",
        country: "Spagna",
        coordinates: { lat: 41.4175, lng: 1.7000 }, // Sant Sadurní area
        description: "Marchio collettivo di eccellenza per spumanti del Penedès. Nato da produttori storici usciti dalla DO Cava. Regole rigidissime: uve biologiche 100% proprie, raccolta manuale, lunghi affinamenti. Rappresenta il vertice qualitativo delle bollicine spagnole."
    },
    {
        id: "Galicia",
        name: "Galizia",
        country: "Spagna",
        coordinates: { lat: 42.8782, lng: -8.5448 },
        description: "La Spagna verde e atlantica. Rías Baixas, Valdeorras, Ribeira Sacra. Terra di grandi bianchi (Albariño, Godello) freschi, salini e minerali, e di rossi leggeri e speziati (Mencía) da viticoltura eroica."
    },
    {
        id: "Jerez",
        name: "Jerez - Xérès - Sherry",
        country: "Spagna",
        coordinates: { lat: 36.6866, lng: -6.1372 },
        description: "Il triangolo magico dell'Andalusia (Jerez, Sanlúcar, El Puerto). Vini fortificati unici al mondo prodotti con il metodo Solera. Fino e Manzanilla (invecchiamento biologico sotto il velo di 'flor') sono secchi, salini e taglienti. Oloroso e Pedro Ximénez sono ossidativi, complessi e dolci."
    },
    {
        id: "Jumilla",
        name: "Jumilla",
        country: "Spagna",
        coordinates: { lat: 38.4735, lng: -1.3255 },
        description: "Altopiano arido nel sud-est. Regno del Monastrell (Mourvèdre), che qui riesce a dare vini concentrati, potenti e fruttati senza perdere equilibrio, grazie alle vigne vecchie a piede franco su suoli sabbiosi/costieri."
    },
    {
        id: "Montilla-Moriles",
        name: "Montilla-Moriles",
        country: "Spagna",
        coordinates: { lat: 37.5855, lng: -4.6401 }, // Cordoba south area
        description: "A sud di Cordoba. Simile a Jerez ma usa uva Pedro Ximénez anche per i vini secchi. I Fino qui sono naturalmente alcolici (senza fortificazione) grazie al clima caldissimo. Vini sapidi, mandorlati, di grande carattere andaluso."
    },
    {
        id: "Navarra",
        name: "Navarra",
        country: "Spagna",
        coordinates: { lat: 42.4846, lng: -1.9547 },
        description: "Regione di transizione tra Atlantico, Pirenei e valle dell'Ebro. Famosa storicamente per i rosati di Garnacha freschi e fruttati, oggi produce anche grandi rossi e bianchi (Chardonnay) di stile internazionale ma con impronta locale."
    },
    {
        id: "País Vasco",
        name: "Paesi Baschi",
        country: "Spagna",
        coordinates: { lat: 43.0800, lng: -2.6000 },
        description: "Terra del Txakoli (Getaria, Bizkaia, Álava). Vini bianchi atlantici, affilati, a bassa gradazione, pensati per la gastronomia locale di mare. Recentemente riscoperti per la loro freschezza e unicità."
    },
    {
        id: "Penedès",
        name: "Penedès",
        country: "Spagna",
        coordinates: { lat: 41.3460, lng: 1.6980 },
        description: "La zona vinicola più importante della Catalogna, a sud di Barcellona. Famosa mondialmente per il Cava. Grande varietà di stili grazie alle diverse altitudini. Xarel·lo è il vitigno bianco autoctono principe, capace di dare vini fermi e spumanti di carattere e longevità."
    },
    {
        id: "Priorat",
        name: "Priorat",
        country: "Spagna",
        coordinates: { lat: 41.2333, lng: 0.8167 },
        description: "Piccola zona montuosa in Catalogna. Suoli unici di ardesia scura ('llicorella'). Vigne vecchissime di Garnacha e Cariñena su pendii vertiginosi. Vini rossi potenti, minerali, concentrati e molto longevi. Una delle due sole DOCa (migliori denominazioni) di Spagna insieme alla Rioja."
    },
    {
        id: "Ribera del Duero",
        name: "Ribera del Duero",
        country: "Spagna",
        coordinates: { lat: 41.6500, lng: -3.7000 },
        description: "Lungo il fiume Duero, sull'altopiano castigliano. Clima continentale estremo. Il Tempranillo (Tinto Fino) qui sviluppa una buccia spessa e dà vini rossi scuri, strutturati, potenti e complessi, diversi dall'eleganza della Rioja. Vega Sicilia è il mito nato qui."
    },
    {
        id: "Rioja",
        name: "Rioja",
        country: "Spagna",
        coordinates: { lat: 42.3000, lng: -2.5000 },
        description: "La regione vinicola più classica e famosa di Spagna. Tempranillo è il re. Tradizione di lunghi affinamenti in legno (Crianza, Reserva, Gran Reserva). Stile che spazia dal classico (note di vaniglia, cocco, tabacco, fini ed eleganti) al moderno (più frutto ed estrazione). Alta, Alavesa e Oriental sono le tre sottozone."
    },
    {
        id: "Rueda",
        name: "Rueda",
        country: "Spagna",
        coordinates: { lat: 41.4130, lng: -4.9570 },
        description: "Sull'altopiano castigliano. La patria del vino bianco spagnolo moderno. Il Verdejo è l'uva autoctona: vini aromatici (erbe, frutta tropicale), freschi e con un tipico finale amarognolo. Alcuni esempi fermentati in legno mostrano grande complessità."
    },
    {
        id: "Rías Baixas",
        name: "Rías Baixas",
        country: "Spagna",
        coordinates: { lat: 42.5000, lng: -8.8000 },
        description: "Sulla costa atlantica della Galizia, un fiordo verdeggiante. Patria dell'Albariño: bianco aromatico (pesca, agrumi, fiori), minerale e salino, con acidità vibrante. Perfetto abbinamento per i frutti di mare locali."
    },
    {
        id: "Terra Alta",
        name: "Terra Alta",
        country: "Spagna",
        coordinates: { lat: 41.0500, lng: 0.4333 },
        description: "Nell'entroterra della Catalogna meridionale. Zona emergente famosa per la Garnacha Blanca, che qui raggiunge i massimi livelli espressivi: vini bianchi strutturati, cremosi, mediterranei ma freschi."
    },
    {
        id: "Toro",
        name: "Toro",
        country: "Spagna",
        coordinates: { lat: 41.5200, lng: -5.4000 },
        description: "Zona calda e arida lungo il Duero, verso il Portogallo. Il Tinta de Toro (Tempranillo adattato) dà vini rossi massicci, potenti, alcolici e nerissimi. Molte vigne sono pre-fillossera. Vini di grande impatto."
    },
    {
        id: "Valdeorras",
        name: "Valdeorras",
        country: "Spagna",
        coordinates: { lat: 42.3800, lng: -7.0500 },
        description: "La 'Valle dell'Oro' in Galizia, più interna. Clima un po' più continentale. Famosa per il Godello: bianco che unisce la freschezza atlantica alla struttura e complessità, spesso paragonato ai Borgogna bianchi. Anche rossi da Mencía."
    },
    {
        id: "Valencia",
        name: "Valencia",
        country: "Spagna",
        coordinates: { lat: 39.4700, lng: -0.3760 },
        description: "Vasta zona mediterranea. Produce di tutto, ma è interessante per il recupero di varietà autoctone antiche (come il Mandó) e per i vini dolci da Moscatel. Zona di grande fermento e innovazione recente."
    },
    {
        id: "Álava",
        name: "Álava (Txakoli)",
        country: "Spagna",
        coordinates: { lat: 42.8500, lng: -2.6700 }, // Arabako Txakolina
        description: "La più interna delle tre zone del Txakoli basco. Clima più continentale, vini con un po' più di corpo e struttura rispetto a quelli della costa, ma sempre caratterizzati da freschezza e acidità vibrante."
    }
];
