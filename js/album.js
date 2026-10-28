
/* =========================================================
   LADO B | FICHA DINÁMICA DE ÁLBUMES
   Archivo: js/album.js
   ========================================================= */

"use strict";

// ---------------------------------------------------------
// 1. CONFIGURACIÓN
// ---------------------------------------------------------

const RUTA_BANDAS = "assets/";
const RUTA_ALBUMES = "assets/Albunes/";

// Información pendiente: se mostrará un mensaje mientras
// no agreguemos los datos reales de cada álbum.
const PENDIENTE = "Pendiente de agregar";


// ---------------------------------------------------------
// 2. CATÁLOGO DE ÁLBUMES
// Las rutas respetan las mayúsculas y minúsculas de Linux.
// ---------------------------------------------------------

function crearAlbum(nombre, banda, idBanda, portada) {
    return {
        nombre,
        banda,
        idBanda,
        portada,
        imagenBanda: `${RUTA_BANDAS}${idBanda === "ases-falsos"
            ? "AsesFalsos"
            : idBanda === "los-mesoneros"
                ? "LosMesoneros"
                : idBanda === "odisseo"
                    ? "Odisseo"
                    : idBanda === "meltt"
                        ? "Meltt"
                        : "Serbia"
        }.webp`,

        lanzamiento: PENDIENTE,
        genero: PENDIENTE,
        duracion: PENDIENTE,
        descripcion: PENDIENTE,
        historia: [],
        canciones: [],
        reproductor: ""
    };
}

const albumes = {
    // =====================================================
    // ODISSEO
    // =====================================================

    "si-yo-soy": crearAlbum(
        "Si Yo Soy",
        "Odisseo",
        "odisseo",
        `${RUTA_ALBUMES}Odisseo/SiYoSoy.webp`
    ),

    "dias-de-fuego": crearAlbum(
        "Días de Fuego",
        "Odisseo",
        "odisseo",
        `${RUTA_ALBUMES}Odisseo/DiasDeFuego.webp`
    ),

    "cambio-estacional": crearAlbum(
        "Cambio Estacional",
        "Odisseo",
        "odisseo",
        `${RUTA_ALBUMES}Odisseo/CambioEstacional.webp`
    ),

    "generacion-inmediata": crearAlbum(
        "Generación Inmediata",
        "Odisseo",
        "odisseo",
        `${RUTA_ALBUMES}Odisseo/GeneracionInmediata.webp`
    ),

    "tormentas-inesperadas": crearAlbum(
        "Tormentas Inesperadas",
        "Odisseo",
        "odisseo",
        `${RUTA_ALBUMES}Odisseo/TormentasInesperadas.webp`
    ),

    // =====================================================
    // MELTT
    // =====================================================

    "pathways": crearAlbum(
        "Pathways",
        "Meltt",
        "meltt",
        `${RUTA_ALBUMES}Meltt/Pathways.webp`
    ),

    "eternal-embers": crearAlbum(
        "Eternal Embers",
        "Meltt",
        "meltt",
        `${RUTA_ALBUMES}Meltt/EternalEmbers.webp`
    ),

    "swim-slowly": crearAlbum(
        "Swim Slowly",
        "Meltt",
        "meltt",
        `${RUTA_ALBUMES}Meltt/SwimSlowly.webp`
    ),

    // =====================================================
    // SERBIA
    // =====================================================

    "secretos-del-sol": crearAlbum(
        "Secretos del Sol",
        "Serbia",
        "serbia",
        `${RUTA_ALBUMES}Serbia/SecretosDelSol.webp`
    ),

    "fin-del-mundo": crearAlbum(
        "Fin del Mundo",
        "Serbia",
        "serbia",
        `${RUTA_ALBUMES}Serbia/FinDelMundo.webp`
    ),

    "melodramatica": crearAlbum(
        "Melodramática",
        "Serbia",
        "serbia",
        `${RUTA_ALBUMES}Serbia/Melodramatica.webp`
    ),

    "no-es-que-no-te-quiera-pero": crearAlbum(
        "No Es Que No Te Quiera Pero",
        "Serbia",
        "serbia",
        `${RUTA_ALBUMES}Serbia/NoEsQueNoTeQuieraPero.webp`
    ),

    // =====================================================
    // ASES FALSOS
    // =====================================================

    "juventud-americana": crearAlbum(
        "Juventud Americana",
        "Ases Falsos",
        "ases-falsos",
        `${RUTA_ALBUMES}AsesFalsos/JuventudAmericana.webp`
    ),

    "conduccion": crearAlbum(
        "Conducción",
        "Ases Falsos",
        "ases-falsos",
        `${RUTA_ALBUMES}AsesFalsos/Conduccion.webp`
    ),

    "el-hombre-puede": crearAlbum(
        "El Hombre Puede",
        "Ases Falsos",
        "ases-falsos",
        `${RUTA_ALBUMES}AsesFalsos/ElHombrePuede.webp`
    ),

    "mala-fama": crearAlbum(
        "Mala Fama",
        "Ases Falsos",
        "ases-falsos",
        `${RUTA_ALBUMES}AsesFalsos/MalaFama.webp`
    ),

    "chocadito": crearAlbum(
        "Chocadito",
        "Ases Falsos",
        "ases-falsos",
        `${RUTA_ALBUMES}AsesFalsos/Chocadito.webp`
    ),

    "tacto": crearAlbum(
        "Tacto",
        "Ases Falsos",
        "ases-falsos",
        `${RUTA_ALBUMES}AsesFalsos/Tacto.webp`
    ),

    // =====================================================
    // LOS MESONEROS
    // =====================================================

    "indeleble": crearAlbum(
        "Indeleble",
        "Los Mesoneros",
        "los-mesoneros",
        `${RUTA_ALBUMES}LosMesoneros/Indeleble.webp`
    ),

    "caiga-la-noche": crearAlbum(
        "Caiga la Noche",
        "Los Mesoneros",
        "los-mesoneros",
        `${RUTA_ALBUMES}LosMesoneros/CaigalLaNoche.webp`
    ),

    "pangea": crearAlbum(
        "Pangea",
        "Los Mesoneros",
        "los-mesoneros",
        `${RUTA_ALBUMES}LosMesoneros/pangea.webp`
    ),

    "nuestro-ano": crearAlbum(
        "Nuestro Año",
        "Los Mesoneros",
        "los-mesoneros",
        `${RUTA_ALBUMES}LosMesoneros/NuestroAño.webp`
    ),

    "eso-que-nos-trajo-a-abbey-road": crearAlbum(
        "Eso Que Nos Trajo a Abbey Road",
        "Los Mesoneros",
        "los-mesoneros",
        `${RUTA_ALBUMES}LosMesoneros/EsoQueNosTrajoAAbbeyRoad.webp`
    )
};


// ---------------------------------------------------------
// 3. OBTENER ELEMENTOS DEL HTML
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
// 4. MOSTRAR U OCULTAR LAS SECCIONES
// ---------------------------------------------------------

function mostrarFicha() {
    elementos.encabezadoBanda.hidden = false;
    elementos.presentacionAlbum.hidden = false;
    elementos.historiaAlbum.hidden = false;
    elementos.cancionesAlbum.hidden = false;
    elementos.escuchaAlbum.hidden = false;
    elementos.estadoAlbum.hidden = true;
}

function mostrarErrorAlbum() {
    elementos.encabezadoBanda.hidden = true;
    elementos.presentacionAlbum.hidden = true;
    elementos.historiaAlbum.hidden = true;
    elementos.cancionesAlbum.hidden = true;
    elementos.escuchaAlbum.hidden = true;
    elementos.estadoAlbum.hidden = false;

    document.title = "Lado B | Álbum no encontrado";
}


// ---------------------------------------------------------
// 5. CONFIGURAR IMÁGENES
// ---------------------------------------------------------

function configurarImagen(imagen, ruta, descripcion) {
    imagen.hidden = false;
    imagen.alt = descripcion;

    imagen.onerror = function () {
        console.error(`No se pudo cargar la imagen: ${ruta}`);
        imagen.hidden = true;
    };

    imagen.src = ruta;
}


// ---------------------------------------------------------
// 6. MOSTRAR INFORMACIÓN DE LA BANDA
// ---------------------------------------------------------

function mostrarBanda(album) {
    configurarImagen(
        elementos.imagenBanda,
        album.imagenBanda,
        `Fotografía de ${album.banda}`
    );

    elementos.nombreBanda.textContent = album.banda;

    elementos.descripcionBanda.textContent =
        `Descubre ${album.nombre}, conoce su música y explora más sobre ${album.banda}.`;

    elementos.enlaceBanda.href =
        `banda.html?banda=${encodeURIComponent(album.idBanda)}`;
}


// ---------------------------------------------------------
// 7. MOSTRAR INFORMACIÓN DEL ÁLBUM
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
        album.canciones.length > 0
            ? album.canciones.length
            : PENDIENTE;

    elementos.descripcionAlbum.textContent = album.descripcion;

    document.title = `Lado B | ${album.nombre}`;
}


// ---------------------------------------------------------
// 8. MOSTRAR LA HISTORIA DEL ÁLBUM
// ---------------------------------------------------------

function mostrarHistoria(album) {
    const contenedor = elementos.contenidoHistoriaAlbum;
    contenedor.replaceChildren();

    if (album.historia.length === 0) {
        const parrafo = document.createElement("p");

        parrafo.textContent =
            "La información sobre este álbum estará disponible próximamente.";

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
// 9. MOSTRAR LA LISTA DE CANCIONES
// ---------------------------------------------------------

function mostrarCanciones(album) {
    const lista = elementos.listaCanciones;
    lista.replaceChildren();

    if (album.canciones.length === 0) {
        const elemento = document.createElement("li");

        elemento.classList.add("list-group-item");
        elemento.textContent =
            "La lista de canciones está pendiente de completar.";

        lista.appendChild(elemento);
        return;
    }

    album.canciones.forEach((cancion, indice) => {
        const elemento = document.createElement("li");
        elemento.classList.add("list-group-item");

        const informacion = document.createElement("span");
        const numero = document.createElement("span");

        numero.classList.add("numeroCancion");
        numero.textContent = `${indice + 1}.`;

        informacion.appendChild(numero);
        informacion.appendChild(
            document.createTextNode(cancion.nombre)
        );

        elemento.appendChild(informacion);

        if (cancion.duracion) {
            const duracion = document.createElement("span");

            duracion.classList.add("datosAlbum");
            duracion.textContent = cancion.duracion;

            elemento.appendChild(duracion);
        }

        lista.appendChild(elemento);
    });
}


// ---------------------------------------------------------
// 10. MOSTRAR EL REPRODUCTOR
// ---------------------------------------------------------

function mostrarReproductor(album) {
    const contenedor = elementos.reproductorAlbum;
    contenedor.replaceChildren();

    if (!album.reproductor) {
        const mensaje = document.createElement("p");

        mensaje.textContent =
            "El reproductor estará disponible cuando agreguemos el enlace.";

        contenedor.appendChild(mensaje);
        return;
    }

    const iframe = document.createElement("iframe");

    iframe.src = album.reproductor;
    iframe.title = `Escuchar ${album.nombre}`;
    iframe.loading = "lazy";
    iframe.allow =
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.allowFullscreen = true;

    contenedor.appendChild(iframe);
}


// ---------------------------------------------------------
// 11. INICIAR LA FICHA
// ---------------------------------------------------------

function inicializarAlbum() {
    // Comprobar que el HTML contiene las secciones necesarias.
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

    // Leer el identificador de la URL.
    const parametros = new URLSearchParams(window.location.search);
    const idAlbum = parametros.get("album");
    const album = albumes[idAlbum];

    // Mostrar el aviso cuando no hay coincidencia.
    if (!album) {
        mostrarErrorAlbum();
        return;
    }

    // Renderizar todos los componentes.
    mostrarFicha();
    mostrarBanda(album);
    mostrarDatosAlbum(album);
    mostrarHistoria(album);
    mostrarCanciones(album);
    mostrarReproductor(album);
}

// El script también funciona si se carga antes de terminar el HTML.
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarAlbum);
} else {
    inicializarAlbum();
}
