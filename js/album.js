"use strict";

// ---------------------------------------------------------
// 1. CONFIGURACIÓN
// ---------------------------------------------------------

const RUTA_BANDAS = "assets/";
const RUTA_ALBUMES = "assets/Albunes/";

const BANDAS = {
    "odisseo": {
        nombre: "Odisseo",
        imagen: "Odisseo.webp",
        ancla: "Odisseo",
        descripcion:
            "Banda mexicana de rock alternativo que combina new wave, pop y balada romántica en español."
    },

    "meltt": {
        nombre: "Meltt",
        imagen: "Meltt.webp",
        ancla: "Meltt",
        descripcion:
            "Banda canadiense de rock alternativo y psicodélico, conocida por sus atmósferas envolventes y melodías ambientales."
    },

    "serbia": {
        nombre: "Serbia",
        imagen: "Serbia.webp",
        ancla: "Serbia",
        descripcion:
            "Banda mexicana de rock alternativo con guitarras intensas, melodías enérgicas y letras emocionales."
    },

    "ases-falsos": {
        nombre: "Ases Falsos",
        imagen: "AsesFalsos.webp",
        ancla: "AsesFalsos",
        descripcion:
            "Banda chilena de rock alternativo conocida por sus letras reflexivas, melodías y personalidad musical."
    },

    "los-mesoneros": {
        nombre: "Los Mesoneros",
        imagen: "LosMesoneros.webp",
        ancla: "LosMesoneros",
        descripcion:
            "Banda venezolana de rock alternativo y pop rock con letras sobre relaciones, cambios y experiencias personales."
    }
};


// ---------------------------------------------------------
// 2. FUNCIÓN PARA CREAR ÁLBUMES
// ---------------------------------------------------------

function crearAlbum(
    idBanda,
    nombre,
    carpeta,
    archivo,
    lanzamiento,
    genero,
    duracion,
    descripcion,
    historia,
    canciones,
    cantidad,
    notaCanciones = ""
) {
    const banda = BANDAS[idBanda];

    return {
        nombre,
        banda: banda.nombre,
        idBanda,

        portada: `${RUTA_ALBUMES}${carpeta}/${archivo}`,
        imagenBanda: `${RUTA_BANDAS}${banda.imagen}`,

        lanzamiento:
            lanzamiento || "Consulta la plataforma musical",

        genero:
            genero || "Rock alternativo / música alternativa",

        duracion:
            duracion || "Consulta la plataforma musical",

        descripcion,
        historia,

        canciones: canciones.map(nombre => ({ nombre })),

        cantidadCanciones:
            cantidad ?? (
                canciones.length ||
                "Consulta la plataforma musical"
            ),

        notaCanciones
    };
}


// ---------------------------------------------------------
// 3. CATÁLOGO DE ÁLBUMES
// ---------------------------------------------------------

const albumes = {

    // =====================================================
    // ODISSEO
    // =====================================================

    "si-yo-soy": crearAlbum(
        "odisseo",
        "Sí, Yo Soy",
        "Odisseo",
        "SiYoSoy.webp",
        "2012",
        "Rock alternativo, new wave y pop romántico",
        "38 minutos",
        "Álbum debut de Odisseo. Presenta las bases de su sonido con melodías intensas y una combinación de rock alternativo y canción romántica.",
        [
            "Publicado el 16 de agosto de 2012, Sí, Yo Soy presenta la primera etapa discográfica de Odisseo.",
            "El disco reúne diez canciones y ayudó a establecer la identidad musical que la banda desarrollaría en sus siguientes producciones."
        ],
        [
            "Infame",
            "Sentimental",
            "Barry",
            "Corazón de Acero",
            "No",
            "Sí, Yo Soy",
            "Angustia",
            "Odio + Deseo",
            "Delirio",
            "El Tesoro (La Jaula de Oro)"
        ],
        10
    ),

    "dias-de-fuego": crearAlbum(
        "odisseo",
        "Días de Fuego",
        "Odisseo",
        "DiasDeFuego.webp",
        "2014",
        "Rock alternativo, new wave y pop romántico",
        "40 minutos",
        "Segundo álbum de estudio de Odisseo. Amplía el sonido de la banda mediante melodías dramáticas, sintetizadores y una interpretación vocal cargada de emoción.",
        [
            "Publicado en 2014, Días de Fuego consolidó la presencia de Odisseo dentro de la escena alternativa mexicana.",
            "El álbum continuó desarrollando la combinación de rock, new wave y canción romántica que caracteriza a la agrupación."
        ],
        [
            "Dominio",
            "Malestar",
            "Días de Fuego",
            "Cuatro Veces",
            "Mentía",
            "Estatua Roja",
            "Las Penas por Amor",
            "Los Mismos Errores",
            "Lobo Cordero",
            "Ahora Es Cuando",
            "Caprichos"
        ],
        11
    ),

    "cambio-estacional": crearAlbum(
        "odisseo",
        "Cambio Estacional",
        "Odisseo",
        "CambioEstacional.webp",
        "2018",
        "Rock alternativo, new wave y pop",
        "36 minutos",
        "Álbum que muestra una nueva etapa musical de Odisseo, con sintetizadores, guitarras y canciones que mantienen el componente emocional de su propuesta.",
        [
            "Cambio Estacional se publicó el 28 de septiembre de 2018.",
            "El álbum representa una etapa importante en la evolución sonora de la banda."
        ],
        [
            "Hablando Lento",
            "Calor al Corazón",
            "Los Imanes",
            "Belleza Americana",
            "Pacto",
            "Invencibles",
            "Escalas",
            "Arranques",
            "Lo Que Quieras de Mí",
            "Más de Ti"
        ],
        10
    ),

    "generacion-inmediata": crearAlbum(
        "odisseo",
        "Generación Inmediata",
        "Odisseo",
        "GeneracionInmediata.webp",
        "2022",
        "Rock alternativo, new wave y pop",
        "33 minutos",
        "Álbum de Odisseo publicado en 2022. Reúne melodías directas, arreglos de rock alternativo y la interpretación emocional característica de la agrupación.",
        [
            "Generación Inmediata se publicó el 25 de marzo de 2022.",
            "El disco reúne diez canciones y marcó una nueva etapa discográfica para Odisseo."
        ],
        [
            "Tu Tiempo",
            "Nube Fantasma",
            "Coincidir",
            "En Contra",
            "La Tregua",
            "Piscis",
            "Admirador",
            "Tiemblo de Ti",
            "Gustándonos",
            "Me Alejo"
        ],
        10
    ),

    "tormentas-inesperadas": crearAlbum(
        "odisseo",
        "Tormentas Inesperadas",
        "Odisseo",
        "TormentasInesperadas.webp",
        "2024",
        "Rock alternativo, new wave y pop",
        "34 minutos",
        "Producción de Odisseo que mantiene su combinación de rock alternativo, sintetizadores y melodías emotivas.",
        [
            "Tormentas Inesperadas se publicó el 12 de julio de 2024.",
            "El álbum reúne diez canciones y continúa el desarrollo musical de Odisseo."
        ],
        [
            "Atípica",
            "Dos Extraños",
            "Amanecidos",
            "Cuartos Separados",
            "Te Conozco de Siempre",
            "Por la Música",
            "Lo Que Tienes con Él",
            "Estrella de Seda",
            "No Te Puedo Adivinar",
            "Obsesión"
        ],
        10
    ),


    // =====================================================
    // MELTT
    // =====================================================

    "pathways": crearAlbum(
        "meltt",
        "Pathways",
        "Meltt",
        "Pathways.webp",
        "2026",
        "Rock alternativo y psicodelia",
        "47 minutos",
        "Álbum de Meltt con sintetizadores, melodías vocales, percusiones dinámicas y texturas psicodélicas.",
        [
            "Pathways se publicó el 12 de junio de 2026.",
            "La banda produjo el álbum de manera independiente, abriendo una nueva etapa en su sonido."
        ],
        [
            "One Life",
            "Up All Night",
            "Hesitate",
            "By Your Side",
            "I Love You",
            "Another Elegy",
            "Goodbye",
            "In Your Arms",
            "The Huntsman",
            "Monomyth",
            "Never Let Go",
            "If You're Lonely",
            "In Good Time"
        ],
        13
    ),

    "eternal-embers": crearAlbum(
        "meltt",
        "Eternal Embers",
        "Meltt",
        "EternalEmbers.webp",
        "2023",
        "Rock alternativo y psicodelia",
        "52 minutos",
        "Álbum de Meltt que combina guitarras, sintetizadores y ambientes psicodélicos con composiciones melódicas y una producción atmosférica.",
        [
            "Eternal Embers se publicó en 2023.",
            "El disco explora paisajes sonoros atmosféricos y melodías de inspiración psicodélica."
        ],
        [
            "Into the Blue",
            "Only in Your Eyes",
            "Within You, Within Me",
            "Do You Ever Wonder?",
            "The Absent Sea",
            "It Could Grow Anywhere",
            "(Hummingbird in the Garden)",
            "Blossoms",
            "Your Melody",
            "Aphantasian Dreams",
            "The Fire",
            "Soak My Head",
            "When the Smoke Abates",
            "Another Quiet Sunday (Keep Moving On)"
        ],
        14
    ),

    "swim-slowly": crearAlbum(
        "meltt",
        "Swim Slowly",
        "Meltt",
        "SwimSlowly.webp",
        "2019",
        "Rock alternativo y psicodelia",
        "40 minutos",
        "Álbum de Meltt que combina melodías suaves, guitarras y capas instrumentales con una atmósfera psicodélica y contemplativa.",
        [
            "Swim Slowly se publicó el 20 de septiembre de 2019.",
            "El álbum reúne doce canciones y es uno de los lanzamientos centrales de la primera etapa discográfica de Meltt."
        ],
        [
            "On Your Own",
            "Too Much Tension",
            "Deeper Water",
            "Feel the Same",
            "Wash Over Me",
            "We'll See",
            "S.O.S.",
            "Love Again",
            "Flow",
            "Footprints of the Sun",
            "Photogénie",
            "Moths in the Darkness"
        ],
        12
    ),


    // =====================================================
    // SERBIA
    // =====================================================

    "secretos-del-sol": crearAlbum(
        "serbia",
        "Secretos del Sol",
        "Serbia",
        "SecretosDelSol.webp",
        "2019",
        "Rock alternativo",
        "39 minutos",
        "Lanzamiento de Serbia de su primera etapa discográfica, con guitarras, melodías intensas y una interpretación emocional.",
        [
            "Secretos del Sol se publicó el 3 de mayo de 2019.",
            "El álbum reúne once canciones y forma parte de la etapa inicial de Serbia dentro del rock alternativo mexicano."
        ],
        [
            "Tú - Intro",
            "Acostúmbrame",
            "Sol",
            "Frío Artificial",
            "Cinco Años y un Mes",
            "Tiempo",
            "Cicatrices",
            "Rosa Maniática",
            "Instinto Animal",
            "Reflejo",
            "Y Yo - Outro"
        ],
        11
    ),

    "fin-del-mundo": crearAlbum(
        "serbia",
        "Fin del Mundo",
        "Serbia",
        "FinDelMundo.webp",
        "2022",
        "Rock alternativo",
        "",
        "Lanzamiento de Serbia que reúne canciones de rock alternativo de guitarras y un enfoque emocional.",
        [
            "La edición del álbum Fin del Mundo se publicó en 2022. La canción homónima apareció previamente como sencillo en 2021."
        ],
        [
            "Fin del Mundo",
            "Amapola",
            "Cama - Acústica",
            "Satélite - Acústica",
            "Último Beso",
            "Tormenta",
            "Dosis"
        ],
        7
    ),

    "melodramatica": crearAlbum(
        "serbia",
        "Melodramática",
        "Serbia",
        "Melodramatica.webp",
        "2023",
        "Rock alternativo",
        "51 minutos",
        "Álbum de Serbia con canciones de rock alternativo, interpretaciones expresivas y letras de tono emocional.",
        [
            "Melodramática se publicó el 28 de abril de 2023.",
            "La edición disponible reúne doce pistas, incluida una colaboración con Bruses."
        ],
        [
            "Siete Días de Luto (Intro)",
            "Melodramática",
            "Nunca Me Olvides",
            "La Única Manera de Sobrevivir es Entrenando la Mente... No el Cuello (Fuerte)",
            "No Duele Llorar",
            "No Te Des por Vencida",
            "Divina Oscuridad",
            "Martes Muerto",
            "Eternos",
            "Noches Largas",
            "...",
            "Noches Largas (feat. Bruses)"
        ],
        12
    ),

    "no-es-que-no-te-quiera-pero": crearAlbum(
        "serbia",
        "No Es Que No Te Quiera Pero…",
        "Serbia",
        "NoEsQueNoTeQuieraPero.webp",
        "2026",
        "Rock alternativo",
        "41 minutos",
        "Álbum de Serbia que reúne canciones de su etapa reciente y conserva el enfoque emocional de su rock alternativo.",
        [
            "La edición de 2026 reúne trece canciones.",
            "La lista incluye temas como Querido Corazón, Llegar al Cielo, Bonita y Todo de Mí."
        ],
        [
            "Querido Corazón",
            "Defecto",
            "Llegar al Cielo",
            "Que No Se Te Haga Tarde",
            "3 de Abril",
            "Anime Love Ghost",
            "Demasiado Tarde",
            "Suéltame",
            "Un Millón de Estrellas",
            "Me Haces Feliz",
            "Eres Tú",
            "Bonita",
            "Todo de Mí"
        ],
        13
    ),


    // =====================================================
    // ASES FALSOS
    // =====================================================

    "juventud-americana": crearAlbum(
        "ases-falsos",
        "Juventud Americana",
        "AsesFalsos",
        "JuventudAmericana.webp",
        "2012",
        "Rock alternativo e indie rock",
        "58 minutos",
        "Álbum debut de Ases Falsos, reconocido por sus letras reflexivas, personalidad musical y melodías memorables.",
        [
            "Juventud Americana se publicó en 2012 como el primer álbum de Ases Falsos.",
            "El disco consolidó a la agrupación como una propuesta destacada del rock chileno."
        ],
        [
            "Misterios del Perú",
            "Salto alto",
            "Pacífico",
            "Séptimo cielo",
            "Venir es fácil",
            "El Golfo de Adén",
            "No quiero que estés conmigo",
            "Fuerza especial",
            "Manantial",
            "Europa",
            "La flor del jazmín",
            "Aguanieve",
            "Quemando",
            "Estudiar y trabajar",
            "La sinceridad del cosmos"
        ],
        15
    ),

    "conduccion": crearAlbum(
        "ases-falsos",
        "Conducción",
        "AsesFalsos",
        "Conduccion.webp",
        "2014",
        "Rock alternativo e indie rock",
        "",
        "Segundo álbum de Ases Falsos. Combina melodías memorables con letras de observación social y experiencias personales.",
        [
            "Conducción se publicó el 17 de marzo de 2014.",
            "El álbum consolidó la presencia de Ases Falsos en la música chilena. Entre sus canciones más reconocidas se encuentra Simetría."
        ],
        [
            "Mantén la conducción",
            "La gran curva",
            "Plácidamente",
            "Cae la cortina",
            "Mi ejército",
            "Búscate un lugar para ensayar",
            "Nada",
            "Simetría",
            "Niña por favor",
            "Tora Bora",
            "Ivanka",
            "Yo no quiero volver",
            "Al borde del cañón",
            "Una estrella que se mueve"
        ],
        14
    ),

    "el-hombre-puede": crearAlbum(
        "ases-falsos",
        "El Hombre Puede",
        "AsesFalsos",
        "ElHombrePuede.webp",
        "2016",
        "Rock alternativo e indie rock",
        "",
        "Tercer álbum de estudio de Ases Falsos, con guitarras, arreglos variados y letras reflexivas.",
        [
            "El Hombre Puede se publicó en 2016.",
            "Fue producido por Martín Del Real y masterizado por Chalo González."
        ],
        [
            "Chakras",
            "Gehena",
            "Sal de ahí",
            "Subyugado",
            "Más se fortalece",
            "Fría",
            "Mucho más mío",
            "Antes sí ahora no",
            "Creo que no creo",
            "Trato hecho"
        ],
        10
    ),

    "mala-fama": crearAlbum(
        "ases-falsos",
        "Mala Fama",
        "AsesFalsos",
        "MalaFama.webp",
        "2018",
        "Rock alternativo e indie rock",
        "54 minutos",
        "Álbum de Ases Falsos con letras incisivas y melodías que alternan entre lo enérgico y lo reflexivo.",
        [
            "Mala Fama se publicó en 2018.",
            "Entre sus canciones más conocidas están Mala Fama y Así es como termina."
        ],
        [
            "Así es como termina",
            "El viento soplará",
            "Qué hará de mí",
            "Lucha causa problema",
            "Jhendelyn",
            "Nace un contragolpe",
            "Películas",
            "Mi tribu",
            "La casa",
            "Siempre nueva",
            "88",
            "Nada me debo",
            "Mala fama"
        ],
        13
    ),

    "chocadito": crearAlbum(
        "ases-falsos",
        "Chocadito",
        "AsesFalsos",
        "Chocadito.webp",
        "2020",
        "Rock alternativo e indie rock",
        "44 minutos",
        "Álbum de Ases Falsos que combina guitarras con matices instrumentales y letras introspectivas.",
        [
            "Chocadito se publicó en 2020.",
            "Fue producido por Francisco Rojas y grabado junto al músico y productor Antonio Caballero."
        ],
        [
            "Y los pájaros comerán de tu carne",
            "Todo chocado",
            "Camina",
            "Vivir es bailar",
            "Los demás",
            "Pienso en ti",
            "Mi vibra negra",
            "Colombiana",
            "TV",
            "Sombra de la higuera",
            "Puedes siempre contar con ello"
        ],
        11
    ),

    "tacto": crearAlbum(
        "ases-falsos",
        "Tacto",
        "AsesFalsos",
        "Tacto.webp",
        "2020",
        "Rock alternativo e indie rock",
        "",
        "Álbum de Ases Falsos centrado en la intimidad, las relaciones entre personas y la vida cotidiana.",
        [
            "Tacto se publicó en 2020 y fue producido por Martín Del Real.",
            "El álbum reúne nueve canciones escritas por Cristóbal Briceño y compuestas junto con Del Real."
        ],
        [
            "Eres una bomba",
            "Todo pa qué",
            "Nunca Nadie Nos Extraña",
            "Cómo quieres que no me enoje",
            "Otro invierno en el infierno",
            "Noche falsa",
            "Yo sí estoy en guerra",
            "Tigre",
            "La lucha diaria"
        ],
        9
    ),


    // =====================================================
    // LOS MESONEROS
    // =====================================================

    "indeleble": crearAlbum(
        "los-mesoneros",
        "Indeleble",
        "LosMesoneros",
        "Indeleble.webp",
        "2011",
        "Pop rock y rock alternativo",
        "40 minutos",
        "Álbum debut de Los Mesoneros. Presenta pop rock con guitarras, melodías directas y letras sobre experiencias personales.",
        [
            "Indeleble se publicó el 22 de junio de 2011.",
            "El disco establece las bases de la propuesta de Los Mesoneros dentro del rock en español."
        ],
        [
            "Un Segundo",
            "Tokio",
            "Sol Rojo",
            "Aquí Sigo",
            "Ya No Estoy",
            "Cicatriz",
            "La Máscara",
            "Malos Tiempos",
            "Cuando Llega el Momento",
            "Retroceder",
            "Indeleble"
        ],
        11
    ),

    "caiga-la-noche": crearAlbum(
        "los-mesoneros",
        "Caiga la Noche",
        "LosMesoneros",
        "CaigalLaNoche.webp",
        "2017",
        "Pop rock y rock alternativo",
        "37 minutos",
        "Álbum de Los Mesoneros que combina guitarras, ritmos de pop rock y melodías orientadas a las experiencias personales.",
        [
            "Caiga la Noche se publicó el 31 de marzo de 2017.",
            "El álbum reúne once canciones y continúa el desarrollo del sonido de la banda."
        ],
        [
            "Caiga la Noche",
            "Algo Bueno",
            "El Paraíso",
            "Caballo Nuevo",
            "Solo",
            "Juntos",
            "Luna",
            "Riesgo",
            "Mientras",
            "Sr. Prudencia",
            "Sabana"
        ],
        11
    ),

    "pangea": crearAlbum(
        "los-mesoneros",
        "Pangea",
        "LosMesoneros",
        "pangea.webp",
        "2019",
        "Pop rock y rock alternativo",
        "25 minutos",
        "Álbum de Los Mesoneros publicado en 2019, con melodías de pop rock y una producción contemporánea.",
        [
            "Pangea se publicó el 27 de septiembre de 2019.",
            "El álbum reúne ocho canciones y fue nominado a los Latin Grammy en la categoría de Mejor Álbum Pop/Rock."
        ],
        [
            "Prefiero No Saber",
            "Te Lo Advertí",
            "Dudo Que Lo Encuentres",
            "Pangea",
            "Dime Cómo Tú Quieras",
            "Lo Peor De Mí",
            "Exprópiese",
            "Últimas Palabras"
        ],
        8
    ),

    "nuestro-ano": crearAlbum(
        "los-mesoneros",
        "Nuestro Año",
        "LosMesoneros",
        "NuestroAño.webp",
        "2024",
        "Pop rock y rock alternativo",
        "37 minutos",
        "Álbum de Los Mesoneros que combina pop rock, guitarras y melodías centradas en relaciones, cambios y experiencias personales.",
        [
            "Nuestro Año se publicó en 2024.",
            "El disco continúa la evolución de Los Mesoneros dentro del rock en español."
        ],
        [
            "Nuestro Año",
            "Dos",
            "¿Qué Hora Es Allá?",
            "Cumpleaños",
            "El Puesto Es Mío",
            "No Terminamos de Terminar",
            "Su Lado de la Cama",
            "Más Tuyo",
            "Ingenuo",
            "Tu Canción",
            "Despídete Bien",
            "Diciembre"
        ],
        12
    ),

    "eso-que-nos-trajo-a-abbey-road": crearAlbum(
        "los-mesoneros",
        "Eso Que Nos Trajo a Abbey Road",
        "LosMesoneros",
        "EsoQueNosTrajoAAbbeyRoad.webp",
        "2026",
        "Rock y pop rock en vivo",
        "61 minutos",
        "Álbum en vivo de Los Mesoneros con nuevas interpretaciones de canciones de distintas etapas de la banda.",
        [
            "Eso Que Nos Trajo a Abbey Road se publicó el 26 de febrero de 2026.",
            "El lanzamiento reúne diecisiete interpretaciones en vivo."
        ],
        [
            "Memoria Muscular (Desde Abbey Road)",
            "Dos (Desde Abbey Road)",
            "Nuestro Año (Desde Abbey Road)",
            "Te Lo Advertí (Desde Abbey Road)",
            "Cumpleaños (Desde Abbey Road)",
            "El Paraíso (Desde Abbey Road)",
            "Solo (Desde Abbey Road)",
            "Caiga La Noche (Desde Abbey Road)",
            "Tonada De Luna Llena (Desde Abbey Road)",
            "Pangea (Desde Abbey Road)",
            "El Puesto Es Mío (Desde Abbey Road)",
            "Dime Cómo Tú Quieras (Desde Abbey Road)",
            "Un Segundo (Desde Abbey Road)",
            "Exprópiese (Desde Abbey Road)",
            "Indeleble (Desde Abbey Road)",
            "Últimas Palabras (Desde Abbey Road)",
            "Diciembre (Desde Abbey Road)"
        ],
        17
    )
};


// ---------------------------------------------------------
// 4. OBTENER ELEMENTOS DEL HTML
// ---------------------------------------------------------

const elementos = {
    encabezadoBanda: document.getElementById("encabezadoBanda"),
    presentacionAlbum: document.getElementById("presentacionAlbum"),
    historiaAlbum: document.getElementById("historiaAlbum"),
    cancionesAlbum: document.getElementById("cancionesAlbum"),
    escuchaAlbum: document.getElementById("escuchaAlbum"),
    estadoAlbum: document.getElementById("estadoAlbum"),

    imagenBanda: document.getElementById("imagenBanda"),
    nombreBanda: document.getElementById("nombreBanda"),
    descripcionBanda: document.getElementById("descripcionBanda"),
    enlaceBanda: document.getElementById("enlaceBanda"),

    portadaAlbum: document.getElementById("portadaAlbum"),
    nombreAlbum: document.getElementById("nombreAlbum"),
    artistaAlbum: document.getElementById("artistaAlbum"),
    lanzamientoAlbum: document.getElementById("lanzamientoAlbum"),
    generoAlbum: document.getElementById("generoAlbum"),
    duracionAlbum: document.getElementById("duracionAlbum"),
    cantidadCanciones: document.getElementById("cantidadCanciones"),
    descripcionAlbum: document.getElementById("descripcionAlbum"),

    contenidoHistoriaAlbum:
        document.getElementById("contenidoHistoriaAlbum"),

    listaCanciones: document.getElementById("listaCanciones"),
    reproductorAlbum: document.getElementById("reproductorAlbum")
};


// ---------------------------------------------------------
// 5. MOSTRAR U OCULTAR SECCIONES
// ---------------------------------------------------------

function mostrarFicha() {
    [
        elementos.encabezadoBanda,
        elementos.presentacionAlbum,
        elementos.historiaAlbum,
        elementos.cancionesAlbum,
        elementos.escuchaAlbum
    ].forEach(elemento => {
        elemento.hidden = false;
    });

    elementos.estadoAlbum.hidden = true;
}


function mostrarErrorAlbum() {
    [
        elementos.encabezadoBanda,
        elementos.presentacionAlbum,
        elementos.historiaAlbum,
        elementos.cancionesAlbum,
        elementos.escuchaAlbum
    ].forEach(elemento => {
        elemento.hidden = true;
    });

    elementos.estadoAlbum.hidden = false;
    document.title = "Lado B | Álbum no encontrado";
}


// ---------------------------------------------------------
// 6. CONFIGURAR IMÁGENES
// ---------------------------------------------------------

function configurarImagen(imagen, ruta, descripcion) {
    imagen.hidden = false;
    imagen.alt = descripcion;

    imagen.onerror = () => {
        console.error(`No se pudo cargar la imagen: ${ruta}`);
        imagen.onerror = null;
        imagen.src = "assets/logoTemp.webp";
    };

    imagen.src = ruta;
}


// ---------------------------------------------------------
// 7. MOSTRAR INFORMACIÓN DE LA BANDA
// ---------------------------------------------------------

function mostrarBanda(album) {
    const banda = BANDAS[album.idBanda];

    if (!banda) {
        console.error(`Banda no encontrada: ${album.idBanda}`);
        return;
    }

    configurarImagen(
        elementos.imagenBanda,
        album.imagenBanda,
        `Fotografía de ${album.banda}`
    );

    elementos.nombreBanda.textContent = banda.nombre;
    elementos.descripcionBanda.textContent = banda.descripcion;

    // La página de bandas contiene las cinco agrupaciones.
    elementos.enlaceBanda.href = `banda.html#${banda.ancla}`;
}


// ---------------------------------------------------------
// 8. MOSTRAR INFORMACIÓN DEL ÁLBUM
// ---------------------------------------------------------

function mostrarDatosAlbum(album) {
    configurarImagen(
        elementos.portadaAlbum,
        album.portada,
        `Portada del álbum ${album.nombre}`
    );

    elementos.nombreAlbum.textContent = album.nombre;
    elementos.artistaAlbum.textContent = album.banda;

    elementos.lanzamientoAlbum.textContent = album.lanzamiento;
    elementos.generoAlbum.textContent = album.genero;
    elementos.duracionAlbum.textContent = album.duracion;

    elementos.cantidadCanciones.textContent =
        album.cantidadCanciones;

    elementos.descripcionAlbum.textContent = album.descripcion;

    document.title = `Lado B | ${album.nombre}`;
}


// ---------------------------------------------------------
// 9. MOSTRAR LA HISTORIA DEL ÁLBUM
// ---------------------------------------------------------

function mostrarHistoria(album) {
    const contenedor = elementos.contenidoHistoriaAlbum;

    contenedor.replaceChildren();

    if (album.historia.length === 0) {
        const parrafo = document.createElement("p");

        parrafo.textContent =
            "Todavía no hay información adicional verificada sobre este álbum.";

        contenedor.appendChild(parrafo);
        return;
    }

    album.historia.forEach(texto => {
        const parrafo = document.createElement("p");

        parrafo.textContent = texto;
        contenedor.appendChild(parrafo);
    });
}


// ---------------------------------------------------------
// 10. MOSTRAR LA LISTA DE CANCIONES
// ---------------------------------------------------------

function mostrarCanciones(album) {
    const lista = elementos.listaCanciones;

    lista.replaceChildren();

    if (album.canciones.length === 0) {
        const elemento = document.createElement("li");

        elemento.classList.add("list-group-item");

        elemento.textContent =
            album.notaCanciones ||
            "Consulta la lista de canciones en las plataformas musicales.";

        lista.appendChild(elemento);
        return;
    }

    album.canciones.forEach((cancion) => {
        const elemento = document.createElement("li");

        elemento.classList.add("list-group-item");

        const informacion = document.createElement("span");
        informacion.textContent = cancion.nombre;

        elemento.appendChild(informacion);
        lista.appendChild(elemento);
    });

    if (album.notaCanciones) {
        const nota = document.createElement("li");

        nota.classList.add("list-group-item");
        nota.textContent = album.notaCanciones;

        lista.appendChild(nota);
    }
}


// ---------------------------------------------------------
// 11. ENLACES DE ESCUCHA SIN API
// ---------------------------------------------------------

function crearEnlaceEscucha(servicio, url) {
    const enlace = document.createElement("a");

    enlace.href = url;
    enlace.textContent = `Buscar en ${servicio}`;

    enlace.target = "_blank";
    enlace.rel = "noopener noreferrer";

    enlace.classList.add("btn", "btn-ladob", "m-1");

    return enlace;
}


function mostrarReproductor(album) {
    const contenedor = elementos.reproductorAlbum;

    contenedor.replaceChildren();

    // Son enlaces de búsqueda públicos, no llamadas a APIs.
    const consulta = encodeURIComponent(
        `${album.banda} ${album.nombre}`
    );

    const parrafo = document.createElement("p");

    parrafo.textContent =
        "Escucha o consulta este álbum en una plataforma externa:";

    contenedor.appendChild(parrafo);

    contenedor.appendChild(
        crearEnlaceEscucha(
            "Spotify",
            `https://open.spotify.com/search/${consulta}`
        )
    );

    contenedor.appendChild(
        crearEnlaceEscucha(
            "Apple Music",
            `https://music.apple.com/search?term=${consulta}`
        )
    );

    contenedor.appendChild(
        crearEnlaceEscucha(
            "YouTube",
            `https://www.youtube.com/results?search_query=${consulta}`
        )
    );
}


// ---------------------------------------------------------
// 12. INICIAR LA FICHA
// ---------------------------------------------------------

function inicializarAlbum() {
    const seccionesNecesarias = [
        elementos.encabezadoBanda,
        elementos.presentacionAlbum,
        elementos.historiaAlbum,
        elementos.cancionesAlbum,
        elementos.escuchaAlbum,
        elementos.estadoAlbum
    ];

    if (seccionesNecesarias.some(seccion => !seccion)) {
        console.error(
            "Lado B: faltan secciones o identificadores en album.html."
        );
        return;
    }

    const parametros = new URLSearchParams(window.location.search);

    const idAlbum = parametros.get("album");
    const album = albumes[idAlbum];

    if (!album) {
        mostrarErrorAlbum();
        return;
    }

    mostrarFicha();
    mostrarBanda(album);
    mostrarDatosAlbum(album);
    mostrarHistoria(album);
    mostrarCanciones(album);
    mostrarReproductor(album);
}


// El script funciona aunque se cargue antes de terminar el HTML.
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        inicializarAlbum
    );
} else {
    inicializarAlbum();
}