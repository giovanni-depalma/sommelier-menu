const wines = [
    // --- BOLLICINE (Sparkling) ---
    // Spain (Cava & Corpinnat)
    { id: 's1', name: "Cava Reserva de la Familia", producer: "Juvé & Camps", vintage: "2018", region: "Penedès", country: "Spagna", type: "Bollicine", grape: "Xarel·lo, Macabeo, Parellada", price: 45, description: "Cava iconico, brut nature, note di frutta bianca matura e tostatura." },
    { id: 's2', name: "Cava Imperial", producer: "Gramona", vintage: "2016", region: "Corpinnat", country: "Spagna", type: "Bollicine", grape: "Xarel·lo, Macabeo", price: 60, description: "Lunghissimo affinamento, complesso, note di pasticceria e fiori bianchi." },
    { id: 's3', name: "Cava Brut Nature", producer: "Recaredo", vintage: "2017", region: "Corpinnat", country: "Spagna", type: "Bollicine", grape: "Xarel·lo, Macabeo", price: 55, description: "Secco, minerale, biodinamico, espressione pura del terroir." },
    { id: 's4', name: "Cava Rosé Trepat", producer: "Agustí Torelló Mata", vintage: "2019", region: "Penedès", country: "Spagna", type: "Bollicine", grape: "Trepat", price: 38, description: "Rosato fresco, frutti rossi di bosco, bollicina fine." },
    { id: 's5', name: "Izar-Leku", producer: "Artadi", vintage: "2017", region: "País Vasco", country: "Spagna", type: "Bollicine", grape: "Hondarrabi Zuri", price: 50, description: "Spumante atlantico, salino, agrumato, unico nel suo genere." },
    { id: 's6', name: "Cava Kripta", producer: "Agustí Torelló Mata", vintage: "2013", region: "Penedès", country: "Spagna", type: "Bollicine", grape: "Macabeo, Parellada, Xarel·lo", price: 120, description: "Bottiglia ad anfora, affinamento lunghissimo, cremoso e complesso." },
    { id: 's7', name: "De Nit", producer: "Raventós i Blanc", vintage: "2020", region: "Conca del Riu Anoia", country: "Spagna", type: "Bollicine", grape: "Xarel·lo, Macabeo, Parellada, Monastrell", price: 42, description: "Rosato pallido, elegante, minerale con note di agrumi." },
    { id: 's8', name: "Texturas de Pedra", producer: "Raventós i Blanc", vintage: "2016", region: "Conca del Riu Anoia", country: "Spagna", type: "Bollicine", grape: "Xarel·lo Vermell, Sumoll, Bastard Negre", price: 65, description: "Blanc de Noirs, strutturato, note di frutta rossa e spezie." },
    { id: 's9', name: "Reserva Particular", producer: "Recaredo", vintage: "2011", region: "Corpinnat", country: "Spagna", type: "Bollicine", grape: "Xarel·lo, Macabeo", price: 95, description: "Austero, profondo, note di frutta secca e mineralità calcarea." },
    { id: 's10', name: "III Lustros", producer: "Gramona", vintage: "2014", region: "Corpinnat", country: "Spagna", type: "Bollicine", grape: "Xarel·lo, Macabeo", price: 70, description: "Cremoso, note di mela cotogna, erbe aromatiche e brioche." },
    
    // Italy (Franciacorta, Trento, Oltrepò)
    { id: 'i1', name: "Franciacorta Cuvée Prestige", producer: "Ca' del Bosco", vintage: "NV", region: "Lombardia", country: "Italia", type: "Bollicine", grape: "Chardonnay, Pinot Nero", price: 55, description: "Classico, equilibrato, note di pesca e mandorla." },
    { id: 'i2', name: "Franciacorta Satèn", producer: "Bellavista", vintage: "2017", region: "Lombardia", country: "Italia", type: "Bollicine", grape: "Chardonnay", price: 65, description: "Morbido, setoso, perlage finissimo, note di fiori bianchi." },
    { id: 'i3', name: "Giulio Ferrari Riserva del Fondatore", producer: "Ferrari", vintage: "2009", region: "Trentino", country: "Italia", type: "Bollicine", grape: "Chardonnay", price: 180, description: "Icona assoluta, complesso, lunghissima persistenza, miele e spezie." },
    { id: 'i4', name: "Trento DOC Perlé", producer: "Ferrari", vintage: "2016", region: "Trentino", country: "Italia", type: "Bollicine", grape: "Chardonnay", price: 50, description: "Intenso, note di mela renetta e crosta di pane." },
    { id: 'i5', name: "Oltrepò Pavese Pinot Nero", producer: "Monsupello", vintage: "NV", region: "Lombardia", country: "Italia", type: "Bollicine", grape: "Pinot Nero", price: 35, description: "Strutturato, vinoso, note di piccoli frutti rossi." },
    { id: 'i6', name: "Franciacorta Annamaria Clementi", producer: "Ca' del Bosco", vintage: "2013", region: "Lombardia", country: "Italia", type: "Bollicine", grape: "Chardonnay, Pinot Bianco, Pinot Nero", price: 190, description: "Maestoso, complesso, note di frutta esotica e pasticceria." },
    { id: 'i7', name: "Trento DOC Riserva Graal", producer: "Altemasi", vintage: "2014", region: "Trentino", country: "Italia", type: "Bollicine", grape: "Chardonnay, Pinot Nero", price: 60, description: "Elegante, austero, note di cacao e nocciola." },
    { id: 'i8', name: "Alta Langa Riserva", producer: "Contratto", vintage: "2016", region: "Piemonte", country: "Italia", type: "Bollicine", grape: "Pinot Nero, Chardonnay", price: 48, description: "Fresco, sapido, note di lievito e agrumi." },

    // France (Champagne)
    { id: 'f1', name: "Champagne Brut Imperial", producer: "Moët & Chandon", vintage: "NV", region: "Champagne", country: "Francia", type: "Bollicine", grape: "Pinot Noir, Meunier, Chardonnay", price: 70, description: "Vibrante, generoso, note di mela verde e fiori bianchi." },
    { id: 'f2', name: "Champagne Grande Cuvée", producer: "Krug", vintage: "169ème", region: "Champagne", country: "Francia", type: "Bollicine", grape: "Pinot Noir, Chardonnay, Meunier", price: 250, description: "Sinfonia di aromi, tostatura, frutta secca, agrumi canditi." },
    { id: 'f3', name: "Champagne Special Cuvée", producer: "Bollinger", vintage: "NV", region: "Champagne", country: "Francia", type: "Bollicine", grape: "Pinot Noir, Chardonnay, Meunier", price: 85, description: "Struttura, vinosità, note di pera, spezie e noci fresche." },
    { id: 'f4', name: "Champagne Blanc de Blancs", producer: "Ruinart", vintage: "NV", region: "Champagne", country: "Francia", type: "Bollicine", grape: "Chardonnay", price: 110, description: "Puro, luminoso, note di agrumi e fiori bianchi." },
    { id: 'f5', name: "Champagne Cristal", producer: "Louis Roederer", vintage: "2014", region: "Champagne", country: "Francia", type: "Bollicine", grape: "Pinot Noir, Chardonnay", price: 320, description: "Perfezione, setoso, gessoso, frutti bianchi e mandorla." },

    // --- BIANCHI (Whites) ---
    // Spain
    { id: 'w1', name: "Albariño de Fefiñanes", producer: "Palacio de Fefiñanes", vintage: "2021", region: "Rías Baixas", country: "Spagna", type: "Bianchi", grape: "Albariño", price: 35, description: "Fresco, minerale, note di mela verde e fiori." },
    { id: 'w2', name: "Pazo Señorans Selección de Añada", producer: "Pazo Señorans", vintage: "2012", region: "Rías Baixas", country: "Spagna", type: "Bianchi", grape: "Albariño", price: 75, description: "Invecchiato, complesso, idrocarburi, frutta matura." },
    { id: 'w3', name: "Viña Tondonia Blanco Reserva", producer: "López de Heredia", vintage: "2010", region: "Rioja", country: "Spagna", type: "Bianchi", grape: "Viura, Malvasía", price: 80, description: "Ossidativo, unico, funghi, miele, frutta secca." },
    { id: 'w4', name: "Belondrade y Lurton", producer: "Belondrade", vintage: "2020", region: "Rueda", country: "Spagna", type: "Bianchi", grape: "Verdejo", price: 55, description: "Fermentato in barrique, cremoso, strutturato, tostato." },
    { id: 'w5', name: "As Sortes", producer: "Rafael Palacios", vintage: "2020", region: "Valdeorras", country: "Spagna", type: "Bianchi", grape: "Godello", price: 65, description: "Elegante, minerale, pompelmo, fiori di campo." },
    { id: 'w6', name: "Capellanía", producer: "Marqués de Murrieta", vintage: "2016", region: "Rioja", country: "Spagna", type: "Bianchi", grape: "Viura", price: 45, description: "Complesso, speziato, note di camomilla e rovere." },
    { id: 'w7', name: "Ossian", producer: "Ossian Vides y Vinos", vintage: "2019", region: "Castilla y León", country: "Spagna", type: "Bianchi", grape: "Verdejo", price: 48, description: "Vigne pre-fillossera, profondo, minerale, frutta a nocciolo." },
    { id: 'w8', name: "Plácet de Valtomelloso", producer: "Álvaro Palacios", vintage: "2020", region: "Rioja", country: "Spagna", type: "Bianchi", grape: "Viura", price: 40, description: "Biologico, elegante, pera, finocchio, legno ben integrato." },
    { id: 'w9', name: "Nora da Neve", producer: "Viña Nora", vintage: "2018", region: "Rías Baixas", country: "Spagna", type: "Bianchi", grape: "Albariño", price: 42, description: "Fermentato in legno, ampio, pesca sciroppata, vaniglia." },
    { id: 'w10', name: "Sketch", producer: "Raúl Pérez", vintage: "2020", region: "Rías Baixas", country: "Spagna", type: "Bianchi", grape: "Albariño", price: 90, description: "Affinato sott'acqua, salino, vibrante, agrumato." },
    { id: 'w11', name: "Itsasmendi 7", producer: "Bodegas Itsasmendi", vintage: "2019", region: "Bizkaiko Txakolina", country: "Spagna", type: "Bianchi", grape: "Hondarrabi Zuri, Riesling", price: 32, description: "Fresco, sapido, erbaceo, mela verde." },
    { id: 'w12', name: "Edetaria Blanc", producer: "Edetaria", vintage: "2019", region: "Terra Alta", country: "Spagna", type: "Bianchi", grape: "Garnacha Blanca", price: 38, description: "Mediterraneo, cremoso, fiori bianchi, finocchio." },
    { id: 'w13', name: "Chivite Colección 125", producer: "J. Chivite Family Estates", vintage: "2017", region: "Navarra", country: "Spagna", type: "Bianchi", grape: "Chardonnay", price: 60, description: "Stile borgognone, burroso, nocciola, pesca." },
    { id: 'w14', name: "O Luar do Sil", producer: "Pago de los Capellanes", vintage: "2021", region: "Valdeorras", country: "Spagna", type: "Bianchi", grape: "Godello", price: 30, description: "Fresco, floreale, minerale, frutta bianca." },
    { id: 'w15', name: "Remelluri Blanco", producer: "Remelluri", vintage: "2018", region: "Rioja", country: "Spagna", type: "Bianchi", grape: "Blend autoctono", price: 75, description: "Complesso, erbe aromatiche, cera d'api, minerale." },

    // Italy
    { id: 'w16', name: "Vintage Tunina", producer: "Jermann", vintage: "2019", region: "Friuli", country: "Italia", type: "Bianchi", grape: "Blend", price: 70, description: "Iconico, ricco, miele, fiori di campo, persistente." },
    { id: 'w17', name: "Cervaro della Sala", producer: "Antinori", vintage: "2020", region: "Umbria", country: "Italia", type: "Bianchi", grape: "Chardonnay, Grechetto", price: 85, description: "Strutturato, vaniglia, frutta tropicale, minerale." },
    { id: 'w18', name: "Vermentino Capichera", producer: "Capichera", vintage: "2020", region: "Sardegna", country: "Italia", type: "Bianchi", grape: "Vermentino", price: 55, description: "Intenso, macchia mediterranea, pietra focaia, mandorla." },
    { id: 'w19', name: "Fiano di Avellino", producer: "Ciro Picariello", vintage: "2020", region: "Campania", country: "Italia", type: "Bianchi", grape: "Fiano", price: 35, description: "Minerale, affumicato, nocciola, agrumi." },
    { id: 'w20', name: "Soave Classico La Rocca", producer: "Pieropan", vintage: "2019", region: "Veneto", country: "Italia", type: "Bianchi", grape: "Garganega", price: 45, description: "Avvolgente, frutta esotica, spezie dolci." },
    { id: 'w21', name: "Verdicchio Riserva Villa Bucci", producer: "Bucci", vintage: "2017", region: "Marche", country: "Italia", type: "Bianchi", grape: "Verdicchio", price: 60, description: "Longevo, anice, mandorla, miele, equilibrato." },
    { id: 'w22', name: "Etna Bianco Pietramarina", producer: "Benanti", vintage: "2016", region: "Sicilia", country: "Italia", type: "Bianchi", grape: "Carricante", price: 80, description: "Vulcanico, salino, erbe aromatiche, mela cotogna." },
    { id: 'w23', name: "Timorasso Derthona", producer: "Vigneti Massa", vintage: "2019", region: "Piemonte", country: "Italia", type: "Bianchi", grape: "Timorasso", price: 40, description: "Potente, minerale, idrocarburi con l'evoluzione." },
    { id: 'w24', name: "Gewürztraminer Nussbaumer", producer: "Tramin", vintage: "2020", region: "Alto Adige", country: "Italia", type: "Bianchi", grape: "Gewürztraminer", price: 42, description: "Aromatico, litchi, petali di rosa, speziato." },
    { id: 'w25', name: "Trebbiano d'Abruzzo", producer: "Valentini", vintage: "2016", region: "Abruzzo", country: "Italia", type: "Bianchi", grape: "Trebbiano", price: 150, description: "Mito, naturale, complesso, imprevedibile, unico." },

    // France
    { id: 'w26', name: "Chablis Grand Cru Les Clos", producer: "William Fèvre", vintage: "2018", region: "Borgogna", country: "Francia", type: "Bianchi", grape: "Chardonnay", price: 130, description: "Teso, minerale, ostrica, limone, grandioso." },
    { id: 'w27', name: "Sancerre Les Monts Damnés", producer: "François Cotat", vintage: "2019", region: "Loira", country: "Francia", type: "Bianchi", grape: "Sauvignon Blanc", price: 75, description: "Puro, gessoso, agrumi, fiori bianchi, longevo." },
    { id: 'w28', name: "Meursault", producer: "Coche-Dury", vintage: "2017", region: "Borgogna", country: "Francia", type: "Bianchi", grape: "Chardonnay", price: 450, description: "Leggendario, nocciola tostata, burro, tensione vibrante." },
    { id: 'w29', name: "Condrieu La Doriane", producer: "Guigal", vintage: "2019", region: "Rodano", country: "Francia", type: "Bianchi", grape: "Viognier", price: 110, description: "Opulento, albicocca, violetta, speziato." },
    { id: 'w30', name: "Alsace Riesling Cuvée Frédéric Émile", producer: "Trimbach", vintage: "2013", region: "Alsazia", country: "Francia", type: "Bianchi", grape: "Riesling", price: 85, description: "Secco, petrolio, agrumi canditi, minerale." },

    // --- ROSATI (Rosés) ---
    // Spain
    { id: 'r1', name: "Viña Tondonia Rosado Gran Reserva", producer: "López de Heredia", vintage: "2010", region: "Rioja", country: "Spagna", type: "Rosati", grape: "Garnacha, Tempranillo", price: 90, description: "Unico al mondo, buccia di cipolla, evoluto, speziato." },
    { id: 'r2', name: "Chivite Colección 125 Rosado", producer: "J. Chivite Family Estates", vintage: "2018", region: "Navarra", country: "Spagna", type: "Rosati", grape: "Garnacha, Tempranillo", price: 45, description: "Strutturato, fermentato in legno, gastronomico." },
    { id: 'r3', name: "Pícaro del Águila Clarete", producer: "Dominio del Águila", vintage: "2019", region: "Ribera del Duero", country: "Spagna", type: "Rosati", grape: "Tempranillo, Albillo", price: 40, description: "Stile antico, fresco, vibrante, frutti rossi." },
    { id: 'r4', name: "Roselito", producer: "Bertrand Sourdais", vintage: "2020", region: "Ribera del Duero", country: "Spagna", type: "Rosati", grape: "Tinto Fino, Albillo", price: 25, description: "Fresco, floreale, facile beva, elegante." },
    { id: 'r5', name: "Pla dels Àngels", producer: "Scala Dei", vintage: "2020", region: "Priorat", country: "Spagna", type: "Rosati", grape: "Garnacha", price: 35, description: "Minerale, delicato, frutti di bosco, erbe." },

    // Italy
    { id: 'r6', name: "Cerasuolo d'Abruzzo", producer: "Valentini", vintage: "2019", region: "Abruzzo", country: "Italia", type: "Rosati", grape: "Montepulciano", price: 95, description: "Potente, vinoso, complesso, quasi un rosso." },
    { id: 'r7', name: "Etna Rosato", producer: "Girolamo Russo", vintage: "2020", region: "Sicilia", country: "Italia", type: "Rosati", grape: "Nerello Mascalese", price: 32, description: "Vulcanico, sapido, piccoli frutti rossi." },
    { id: 'r8', name: "Five Roses Anniversario", producer: "Leone de Castris", vintage: "2021", region: "Puglia", country: "Italia", type: "Rosati", grape: "Negroamaro", price: 28, description: "Storico, ciliegia, rosa, fresco e sapido." },
    { id: 'r9', name: "Alea Rosa", producer: "Grosjean", vintage: "2020", region: "Valle d'Aosta", country: "Italia", type: "Rosati", grape: "Premetta", price: 30, description: "Montagna, fragolina di bosco, acidità tagliente." },
    { id: 'r10', name: "Chiaretto del Garda", producer: "Ca' dei Frati", vintage: "2021", region: "Lombardia", country: "Italia", type: "Rosati", grape: "Groppello, Marzemino", price: 25, description: "Delicato, pesca, fiori di mandorlo." },

    // France
    { id: 'r11', name: "Bandol Rosé", producer: "Domaine Tempier", vintage: "2020", region: "Provenza", country: "Francia", type: "Rosati", grape: "Mourvèdre", price: 45, description: "Il re dei rosati, strutturato, spezie, agrumi." },
    { id: 'r12', name: "Tavel", producer: "Château d'Aqueria", vintage: "2020", region: "Rodano", country: "Francia", type: "Rosati", grape: "Grenache, Cinsault", price: 30, description: "Intenso, colorato, frutta rossa matura, vinoso." },
    { id: 'r13', name: "Côtes de Provence Rosé", producer: "Miraval", vintage: "2021", region: "Provenza", country: "Francia", type: "Rosati", grape: "Cinsault, Grenache", price: 35, description: "Elegante, pallido, fiori bianchi, fragola." },

    // --- ROSSI (Reds) ---
    // Spain
    { id: 're1', name: "Unico", producer: "Vega Sicilia", vintage: "2010", region: "Ribera del Duero", country: "Spagna", type: "Rossi", grape: "Tempranillo, Cabernet Sauvignon", price: 350, description: "Mito spagnolo, eleganza infinita, complesso, eterno." },
    { id: 're2', name: "L'Ermita", producer: "Álvaro Palacios", vintage: "2018", region: "Priorat", country: "Spagna", type: "Rossi", grape: "Garnacha", price: 900, description: "Cult, mistico, minerale, profondità abissale." },
    { id: 're3', name: "Pingus", producer: "Dominio de Pingus", vintage: "2016", region: "Ribera del Duero", country: "Spagna", type: "Rossi", grape: "Tinto Fino", price: 1100, description: "Rarissimo, concentrato, potente ma equilibrato." },
    { id: 're4', name: "Viña Tondonia Reserva", producer: "López de Heredia", vintage: "2009", region: "Rioja", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 60, description: "Classico, pelle, tabacco, vaniglia, setoso." },
    { id: 're5', name: "La Rioja Alta Gran Reserva 904", producer: "La Rioja Alta", vintage: "2011", region: "Rioja", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 75, description: "Tradizionale, balsamico, spezie dolci, elegante." },
    { id: 're6', name: "Clos Mogador", producer: "René Barbier", vintage: "2018", region: "Priorat", country: "Spagna", type: "Rossi", grape: "Garnacha, Carignan", price: 95, description: "Pioniere del Priorat, scisto, frutta nera, potente." },
    { id: 're7', name: "Aalto", producer: "Bodegas Aalto", vintage: "2019", region: "Ribera del Duero", country: "Spagna", type: "Rossi", grape: "Tinto Fino", price: 55, description: "Moderno, frutto esplosivo, legno nuovo, strutturato." },
    { id: 're8', name: "Pintia", producer: "Vega Sicilia", vintage: "2017", region: "Toro", country: "Spagna", type: "Rossi", grape: "Tinta de Toro", price: 65, description: "Potente, rustico-elegante, cioccolato, more." },
    { id: 're9', name: "Valbuena 5°", producer: "Vega Sicilia", vintage: "2016", region: "Ribera del Duero", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 140, description: "Fratello minore dell'Unico, più immediato, ricco." },
    { id: 're10', name: "Castillo Ygay Gran Reserva", producer: "Marqués de Murrieta", vintage: "2010", region: "Rioja", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 180, description: "Storico, complesso, evoluto, perfetto equilibrio." },
    { id: 're11', name: "Malleolus", producer: "Emilio Moro", vintage: "2019", region: "Ribera del Duero", country: "Spagna", type: "Rossi", grape: "Tinto Fino", price: 45, description: "Espressivo, speziato, tannini maturi." },
    { id: 're12', name: "Pesquera Reserva", producer: "Alejandro Fernández", vintage: "2018", region: "Ribera del Duero", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 40, description: "Il vino che ha fatto la storia della Ribera, classico." },
    { id: 're13', name: "Numanthia", producer: "Numanthia", vintage: "2016", region: "Toro", country: "Spagna", type: "Rossi", grape: "Tinta de Toro", price: 60, description: "Concentrato, nero, tannini potenti, lungo." },
    { id: 're14', name: "Corimbo I", producer: "Bodegas La Horra", vintage: "2015", region: "Ribera del Duero", country: "Spagna", type: "Rossi", grape: "Tinto Fino", price: 50, description: "Progetto Roda in Ribera, elegante, fruttato." },
    { id: 're15', name: "Roda I Reserva", producer: "Bodegas Roda", vintage: "2016", region: "Rioja", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 65, description: "Frutta nera, moderno, profondo, cioccolato." },
    { id: 're16', name: "Les Terrasses", producer: "Álvaro Palacios", vintage: "2019", region: "Priorat", country: "Spagna", type: "Rossi", grape: "Garnacha, Carignan", price: 40, description: "Accessibile, minerale, macchia mediterranea." },
    { id: 're17', name: "Ultreia Saint Jacques", producer: "Raúl Pérez", vintage: "2020", region: "Bierzo", country: "Spagna", type: "Rossi", grape: "Mencía", price: 25, description: "Fresco, floreale, pepe, beva compulsiva." },
    { id: 're18', name: "El Pisón", producer: "Artadi", vintage: "2018", region: "Álava", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 300, description: "Vigna singola, pura eleganza, seta." },
    { id: 're19', name: "San Román", producer: "Bodegas San Román", vintage: "2018", region: "Toro", country: "Spagna", type: "Rossi", grape: "Tinta de Toro", price: 45, description: "Mauro in Toro, potente, minerale, scuro." },
    { id: 're20', name: "Mauro", producer: "Bodegas Mauro", vintage: "2019", region: "Castilla y León", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 40, description: "Affidabile, ricco, fruttato, tannini dolci." },
    { id: 're21', name: "Clio", producer: "Bodegas El Nido", vintage: "2019", region: "Jumilla", country: "Spagna", type: "Rossi", grape: "Monastrell", price: 55, description: "Marmellata, caffè, potente, alcolico." },
    { id: 're22', name: "Juan Gil Silver Label", producer: "Juan Gil", vintage: "2020", region: "Jumilla", country: "Spagna", type: "Rossi", grape: "Monastrell", price: 20, description: "Popolare, frutta matura, rovere tostato." },
    { id: 're23', name: "Camins del Priorat", producer: "Álvaro Palacios", vintage: "2020", region: "Priorat", country: "Spagna", type: "Rossi", grape: "Blend", price: 28, description: "Intro al Priorat, fresco, fruttato." },
    { id: 're24', name: "La Montesa", producer: "Palacios Remondo", vintage: "2019", region: "Rioja", country: "Spagna", type: "Rossi", grape: "Garnacha", price: 22, description: "Succoso, spezie, arancia rossa, agile." },
    { id: 're25', name: "Sierra Cantabria Colección Privada", producer: "Sierra Cantabria", vintage: "2018", region: "Rioja", country: "Spagna", type: "Rossi", grape: "Tempranillo", price: 48, description: "Macerazione carbonica parziale, frutto intenso, caffè." },

    // Italy
    { id: 're26', name: "Barolo Monfortino", producer: "Giacomo Conterno", vintage: "2014", region: "Piemonte", country: "Italia", type: "Rossi", grape: "Nebbiolo", price: 1200, description: "Il Re, austero, infinito, potenza controllata." },
    { id: 're27', name: "Sassicaia", producer: "Tenuta San Guido", vintage: "2018", region: "Toscana", country: "Italia", type: "Rossi", grape: "Cabernet Sauvignon, Cabernet Franc", price: 280, description: "Il padre dei Supertuscan, eleganza bordolese, macchia mediterranea." },
    { id: 're28', name: "Tignanello", producer: "Antinori", vintage: "2018", region: "Toscana", country: "Italia", type: "Rossi", grape: "Sangiovese, Cabernet", price: 130, description: "Icona moderna, ciliegia, spezie, equilibrio." },
    { id: 're29', name: "Brunello di Montalcino", producer: "Biondi-Santi", vintage: "2015", region: "Toscana", country: "Italia", type: "Rossi", grape: "Sangiovese", price: 180, description: "La tradizione, acidità vibrante, longevità estrema." },
    { id: 're30', name: "Amarone della Valpolicella", producer: "Quintarelli", vintage: "2013", region: "Veneto", country: "Italia", type: "Rossi", grape: "Corvina, Rondinella", price: 350, description: "Opera d'arte, infinito, ciliegia sotto spirito, spezie." },
    { id: 're31', name: "Barbaresco Sorì San Lorenzo", producer: "Gaja", vintage: "2017", region: "Piemonte", country: "Italia", type: "Rossi", grape: "Nebbiolo", price: 450, description: "Potente, concentrato, erbe, liquirizia." },
    { id: 're32', name: "Masseto", producer: "Tenuta dell'Ornellaia", vintage: "2017", region: "Toscana", country: "Italia", type: "Rossi", grape: "Merlot", price: 800, description: "Il Merlot italiano, opulento, argilla, ferro." },
    { id: 're33', name: "Pergole Torte", producer: "Montevertine", vintage: "2018", region: "Toscana", country: "Italia", type: "Rossi", grape: "Sangiovese", price: 150, description: "Sangiovese in purezza, elegante, fine, unico." },
    { id: 're34', name: "Etna Rosso Prephylloxera", producer: "Tenuta delle Terre Nere", vintage: "2019", region: "Sicilia", country: "Italia", type: "Rossi", grape: "Nerello Mascalese", price: 120, description: "Vigne franche di piede, etereo, finezza borgognona." },
    { id: 're35', name: "Taurasi Radici Riserva", producer: "Mastroberardino", vintage: "2014", region: "Campania", country: "Italia", type: "Rossi", grape: "Aglianico", price: 60, description: "Barolo del Sud, tannino, terra, frutti neri." },
    { id: 're36', name: "Montepulciano d'Abruzzo", producer: "Valentini", vintage: "2015", region: "Abruzzo", country: "Italia", type: "Rossi", grape: "Montepulciano", price: 300, description: "Selvaggio, ridotto poi esplosivo, caffè, terra." },
    { id: 're37', name: "Solaia", producer: "Antinori", vintage: "2017", region: "Toscana", country: "Italia", type: "Rossi", grape: "Cabernet, Sangiovese", price: 320, description: "Soleggiato, ricco, cioccolato, menta." },
    { id: 're38', name: "Turriga", producer: "Argiolas", vintage: "2017", region: "Sardegna", country: "Italia", type: "Rossi", grape: "Cannonau blend", price: 80, description: "Simbolo sardo, mirto, macchia, potenza." },
    { id: 're39', name: "San Leonardo", producer: "Tenuta San Leonardo", vintage: "2016", region: "Trentino", country: "Italia", type: "Rossi", grape: "Bordeaux blend", price: 90, description: "Aristocratico, peperone, eleganza nordica." },
    { id: 're40', name: "Chianti Classico Gran Selezione", producer: "Castello di Ama", vintage: "2016", region: "Toscana", country: "Italia", type: "Rossi", grape: "Sangiovese", price: 55, description: "Vigneto Bellavista, ciliegia scura, minerale." },

    // France
    { id: 're41', name: "Château Margaux", producer: "Château Margaux", vintage: "2010", region: "Bordeaux", country: "Francia", type: "Rossi", grape: "Cabernet Sauvignon blend", price: 900, description: "La regina di Bordeaux, profumo inebriante, seta." },
    { id: 're42', name: "Château Latour", producer: "Château Latour", vintage: "2009", region: "Bordeaux", country: "Francia", type: "Rossi", grape: "Cabernet Sauvignon blend", price: 1200, description: "Potenza, struttura, longevità secolare." },
    { id: 're43', name: "Romanée-Conti", producer: "DRC", vintage: "2014", region: "Borgogna", country: "Francia", type: "Rossi", grape: "Pinot Noir", price: 15000, description: "Il Graal. Indescrivibile." },
    { id: 're44', name: "La Tâche", producer: "DRC", vintage: "2014", region: "Borgogna", country: "Francia", type: "Rossi", grape: "Pinot Noir", price: 4000, description: "Speziato, potente, complesso, regale." },
    { id: 're45', name: "Châteauneuf-du-Pape", producer: "Château Rayas", vintage: "2009", region: "Rodano", country: "Francia", type: "Rossi", grape: "Grenache", price: 1500, description: "Sabbia, fragola, pepe bianco, etereo." },
    { id: 're46', name: "Côte-Rôtie La Landonne", producer: "Guigal", vintage: "2015", region: "Rodano", country: "Francia", type: "Rossi", grape: "Syrah", price: 400, description: "Scuro, bacon, olive nere, tannino massiccio." },
    { id: 're47', name: "Château Haut-Brion", producer: "Château Haut-Brion", vintage: "2015", region: "Bordeaux", country: "Francia", type: "Rossi", grape: "Merlot, Cabernet", price: 700, description: "Fumè, tabacco, terra calda, unico." },
    { id: 're48', name: "Pommard Les Rugiens", producer: "De Courcel", vintage: "2016", region: "Borgogna", country: "Francia", type: "Rossi", grape: "Pinot Noir", price: 120, description: "Maschile, ferroso, strutturato, longevo." },

    // --- PASSITI / DISTILLATI (Sweet & Spirits) ---
    // Spain
    { id: 'p1', name: "Pedro Ximénez Duquesa", producer: "Sánchez Romate", vintage: "NV", region: "Jerez", country: "Spagna", type: "Passiti/Distillati", grape: "Pedro Ximénez", price: 30, description: "Denso, fichi secchi, datteri, cioccolato." },
    { id: 'p2', name: "Don PX Convento Selección", producer: "Toro Albalá", vintage: "1946", region: "Montilla-Moriles", country: "Spagna", type: "Passiti/Distillati", grape: "Pedro Ximénez", price: 350, description: "Petrolio nero, concentrazione estrema, storia liquida." },
    { id: 'p3', name: "Sherry Palo Cortado VORS", producer: "Lustau", vintage: "NV", region: "Jerez", country: "Spagna", type: "Passiti/Distillati", grape: "Palomino", price: 80, description: "Raro, naso da Amontillado, bocca da Oloroso, noci." },
    { id: 'p4', name: "Fondillón Gran Reserva", producer: "Brotons", vintage: "1964", region: "Alicante", country: "Spagna", type: "Passiti/Distillati", grape: "Monastrell", price: 120, description: "Vino nobile, non fortificato, ossidativo, legno vecchio." },
    { id: 'p5', name: "Brandy de Jerez Solera Gran Reserva", producer: "Cardenal Mendoza", vintage: "NV", region: "Jerez", country: "Spagna", type: "Passiti/Distillati", grape: "Distillato", price: 45, description: "Morbido, prugna, caramello, rovere." },
    { id: 'p6', name: "Orujo de Galicia", producer: "Pazo de Señorans", vintage: "NV", region: "Galicia", country: "Spagna", type: "Passiti/Distillati", grape: "Vinacce Albariño", price: 35, description: "Grappa galiziana, erbe, fiori, cristallina." },

    // Italy
    { id: 'p7', name: "Ben Ryé", producer: "Donnafugata", vintage: "2020", region: "Sicilia", country: "Italia", type: "Passiti/Distillati", grape: "Zibibbo", price: 60, description: "Albicocca, miele, macchia mediterranea, fresco." },
    { id: 'p8', name: "Vin Santo del Chianti Classico", producer: "Avignonesi", vintage: "2008", region: "Toscana", country: "Italia", type: "Passiti/Distillati", grape: "Trebbiano, Malvasia", price: 250, description: "Denso, caramello, caffè, acidità incredibile." },
    { id: 'p9', name: "Grappa Nonino Riserva", producer: "Nonino", vintage: "NV", region: "Friuli", country: "Italia", type: "Passiti/Distillati", grape: "Blend", price: 50, description: "Morbida, vaniglia, mandorla, elegante." },
    { id: 'p10', name: "Passito di Pantelleria Bukkuram", producer: "De Bartoli", vintage: "2014", region: "Sicilia", country: "Italia", type: "Passiti/Distillati", grape: "Zibibbo", price: 70, description: "Sole, datteri, spezie, non stucchevole." },

    // France
    { id: 'p11', name: "Château d'Yquem", producer: "Château d'Yquem", vintage: "2015", region: "Sauternes", country: "Francia", type: "Passiti/Distillati", grape: "Sémillon, Sauvignon", price: 450, description: "Luce liquida, zafferano, botrytis, infinito." },
    { id: 'p12', name: "Cognac XO", producer: "Hennessy", vintage: "NV", region: "Cognac", country: "Francia", type: "Passiti/Distillati", grape: "Distillato", price: 180, description: "Complesso, cuoio, spezie, rotondo." },
    { id: 'p13', name: "Bas-Armagnac", producer: "Darroze", vintage: "1980", region: "Guascogna", country: "Francia", type: "Passiti/Distillati", grape: "Distillato", price: 150, description: "Rustico, prugna secca, carattere, fuoco." }
];

export default wines;
