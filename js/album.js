
/* =====================================================
   LADO B | FICHA DINÁMICA DE ÁLBUMES
   Archivo: js/album.js
   ===================================================== */

// 1. Rutas provisionales para imágenes.
const IMAGEN_ALBUM_POR_DEFECTO = "assets/albumes/placeholder.webp";
const IMAGEN_BANDA_POR_DEFECTO = "assets/bandas/placeholder.webp";

// 2. Crear una ficha con sus datos iniciales.
function crearAlbum(
    nombre,
    banda,
    idBanda,
    portada = IMAGEN_ALBUM_POR_DEFECTO,
    imagenBanda = IMAGEN_BANDA_POR_DEFECTO
) {
    return {
        nombre,
        banda,
        idBanda,
        portada,
        imagenBanda,

        // Estos datos se completarán con información verificada.
        lanzamiento: "Por completar",
        genero: "Por completar",
        duracion: "Por completar",
        descripcion: "La descripción de este álbum está pendiente.",
        historia: [],
        canciones: [],
        reproductor: ""
    };
}

// 3. Catálogo de los 23 álbumes seleccionados.
const albumes = {
    // ================= ODISSEO =================

    "si-yo-soy": crearAlbum(
        "Si Yo Soy",
        "Odisseo",
        "odisseo",
        "assets/Albunes/Odisseo/SiYoSoy.webp",
        "assets/Odisseo.webp"
    ),

    "dias-de-fuego": crearAlbum(
        "Días de Fuego",
        "Odisseo",
        "odisseo",
        "assets/Albunes/Odisseo/DiasDeFuego.webp",
        "assets/Odisseo.webp"
    ),

    "cambio-estacional": crearAlbum(
        "Cambio Estacional",
        "Odisseo",
        "odisseo",
        IMAGEN_ALBUM_POR_DEFECTO,
        "assets/Odisseo.webp"
    ),

    "generacion-inmediata": crearAlbum(
        "Generación Inmediata",
        "Odisseo",
        "odisseo",
        IMAGEN_ALBUM_POR_DEFECTO,
        "assets/Odisseo.webp"
    ),

    "tormentas-inesperadas": crearAlbum(
        "Tormentas Inesperadas",
        "Odisseo",
        "odisseo",
        IMAGEN_ALBUM_POR_DEFECTO,
        "assets/Odisseo.webp"
    ),

    // ================= MELTT =================

    "pathways": crearAlbum(
        "Pathways",
        "Meltt",
        "meltt",
        IMAGEN_ALBUM_POR_DEFECTO,
        "assets/Meltt.webp"
    ),

    "eternal-embers": crearAlbum(
        "Eternal Embers",
        "Meltt",
        "meltt",
        IMAGEN_ALBUM_POR_DEFECTO,
        "assets/Meltt.webp"
    ),

    "swin-slowly": crearAlbum(
        "Swin Slowly",
        "Meltt",
        "meltt",
        IMAGEN_ALBUM_POR_DEFECTO,
        "assets/Meltt.webp"
    ),

    // ================= SERBIA =================

    "secretos-del-sol": crearAlbum(
        "Secretos del Sol",
        "Serbia",
        "serbia"
    ),

    "fin-del-mundo": crearAlbum(
        "Fin del Mundo",
        "Serbia",
        "serbia"
    ),

    "melodramatica": crearAlbum(
        "Melodramática",
        "Serbia",
        "serbia"
    ),

    "no-es-que-no-te-quiera-pero": crearAlbum(
        "No es que no te quiera pero...",
        "Serbia",
        "serbia",
        "assets/Albunes/no_es_que_no_te_quiera.webp"
    ),

    // ================= ASES FALSOS =================

    "juventud-americana": crearAlbum(
        "Juventud Americana",
        "Ases Falsos",
        "ases-falsos"
    ),

    "conduccion": crearAlbum(
        "Conducción",
        "Ases Falsos",
        "ases-falsos"
    ),

    "el-hombre-puede": crearAlbum(
        "El Hombre Puede",
        "Ases Falsos",
        "ases-falsos"
    ),

    "mala-fama": crearAlbum(
        "Mala Fama",
        "Ases Falsos",
        "ases-falsos"
    ),

    "chocadito": crearAlbum(
        "Chocadito",
        "Ases Falsos",
        "ases-falsos"
    ),

    "tacto": crearAlbum(
        "Tacto",
        "Ases Falsos",
        "ases-falsos"
    ),

    // ================= LOS MESONEROS =================

    "indeleble": crearAlbum(
        "Indeleble",
        "Los Mesoneros",
        "los-mesoneros"
    ),

    "caiga-la-noche": crearAlbum(
        "Caiga la Noche",
        "Los Mesoneros",
        "los-mesoneros"
    ),

    "pangea": crearAlbum(
        "Pangea",
        "Los Mesoneros",
        "los-mesoneros",
        "assets/Albunes/pangea.webp"
    ),

    "nuestro-ano": crearAlbum(
        "Nuestro Año",
        "Los Mesoneros",
        "los-mesoneros"
    ),

    "eso-que-nos-trajo-a-abbey-road": crearAlbum(
        "Eso que nos trajo a Abbey Road",
        "Los Mesoneros",
        "los-mesoneros"
    )
};


// 4. Obtener el identificador desde la URL.
// Ejemplo: album.html?album=pangea
const parametros = new URLSearchParams(window.location.search);
const idAlbum = parametros.get("album");
const album = albumes[idAlbum];


// 5. Obtener las secciones del HTML.
const encabezadoBanda = document.getElementById("encabezadoBanda");
const presentacionAlbum = document.getElementById("presentacionAlbum");
const historiaAlbum = document.getElementById("historiaAlbum");
const cancionesAlbum = document.getElementById("cancionesAlbum");
const escuchaAlbum = document.getElementById("escuchaAlbum");
const estadoAlbum = document.getElementById("estadoAlbum");


// 6. Mostrar u ocultar las secciones.
function mostrarEstadoNoEncontrado() {
    encabezadoBanda.hidden = true;
    presentacionAlbum.hidden = true;
    historiaAlbum.hidden = true;
    cancionesAlbum.hidden = true;
    escuchaAlbum.hidden = true;
    estadoAlbum.hidden = false;

    document.title = "Lado B | Álbum no encontrado";
}

function mostrarFicha() {
    encabezadoBanda.hidden = false;
    presentacionAlbum.hidden = false;
    historiaAlbum.hidden = false;
    cancionesAlbum.hidden = false;
    escuchaAlbum.hidden = false;
    estadoAlbum.hidden = true;
}


// 7. Preparar las imágenes y evitar iconos de imagen rota.
function configurarImagen(imagen, ruta, textoAlternativo, rutaRespaldo) {
    imagen.alt = textoAlternativo;

    imagen.onerror = function () {
        if (imagen.src.endsWith(rutaRespaldo)) {
            imagen.onerror = null;
            imagen.hidden = true;
            return;
        }

        imagen.src = rutaRespaldo;
    };

    imagen.src = ruta;
}


// 8. Mostrar los datos de la banda.
function mostrarBanda(datos) {
    const imagen = document.getElementById("imagenBanda");

    configurarImagen(
        imagen,
        datos.imagenBanda,
        `Fotografía de ${datos.banda}`,
        IMAGEN_BANDA_POR_DEFECTO
    );

    // Si se reutiliza la página, volver a mostrar la imagen.
    imagen.hidden = false;

    document.getElementById("nombreBanda").textContent = datos.banda;
    document.getElementById("descripcionBanda").textContent =
        `Explora el álbum ${datos.nombre} y descubre más sobre ${datos.banda}.`;

    document.getElementById("enlaceBanda").href =
        `banda.html?banda=${encodeURIComponent(datos.idBanda)}`;
}


// 9. Mostrar los datos principales del álbum.
function mostrarDatosAlbum(datos) {
    const portada = document.getElementById("portadaAlbum");

    configurarImagen(
        portada,
        datos.portada,
        `Portada del álbum ${datos.nombre}`,
        IMAGEN_ALBUM_POR_DEFECTO
    );

    portada.hidden = false;

    document.getElementById("nombreAlbum").textContent = datos.nombre;
    document.getElementById("artistaAlbum").textContent = datos.banda;
    document.getElementById("lanzamientoAlbum").textContent =
        datos.lanzamiento;
    document.getElementById("generoAlbum").textContent = datos.genero;
    document.getElementById("duracionAlbum").textContent = datos.duracion;

    document.getElementById("cantidadCanciones").textContent =
        datos.canciones.length > 0
            ? datos.canciones.length
            : "Por completar";

    document.getElementById("descripcionAlbum").textContent =
        datos.descripcion;

    document.title = `Lado B | ${datos.nombre}`;
}


// 10. Construir la sección de historia.
function mostrarHistoria(datos) {
    const contenedor = document.getElementById("contenidoHistoriaAlbum");

    contenedor.replaceChildren();

    if (datos.historia.length === 0) {
        const mensaje = document.createElement("p");

        mensaje.textContent =
            "La información sobre este álbum está pendiente de completar.";

        contenedor.appendChild(mensaje);
        return;
    }

    datos.historia.forEach(texto => {
        const parrafo = document.createElement("p");

        parrafo.textContent = texto;
        contenedor.appendChild(parrafo);
    });
}


// 11. Construir la lista de canciones.
function mostrarCanciones(datos) {
    const lista = document.getElementById("listaCanciones");

    lista.replaceChildren();

    if (datos.canciones.length === 0) {
        const mensaje = document.createElement("li");

        mensaje.classList.add("list-group-item");
        mensaje.textContent =
            "La lista de canciones está pendiente de completar.";

        lista.appendChild(mensaje);
        return;
    }

    datos.canciones.forEach((cancion, indice) => {
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


// 12. Mostrar el reproductor, si existe una URL de inserción.
function mostrarReproductor(datos) {
    const contenedor = document.getElementById("reproductorAlbum");

    contenedor.replaceChildren();

    if (!datos.reproductor) {
        const mensaje = document.createElement("p");

        mensaje.textContent =
            "El reproductor de este álbum está pendiente de configurar.";

        contenedor.appendChild(mensaje);
        return;
    }

    const reproductor = document.createElement("iframe");

    reproductor.src = datos.reproductor;
    reproductor.title = `Escuchar ${datos.nombre}`;
    reproductor.loading = "lazy";
    reproductor.allow =
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    reproductor.allowFullscreen = true;

    contenedor.appendChild(reproductor);
}


// 13. Inicializar la ficha.
function inicializarFichaAlbum() {
    if (
        !encabezadoBanda ||
        !presentacionAlbum ||
        !historiaAlbum ||
        !cancionesAlbum ||
        !escuchaAlbum ||
        !estadoAlbum
    ) {
        console.error(
            "No se encontraron todas las secciones necesarias en album.html."
        );
        return;
    }

    if (!album) {
        mostrarEstadoNoEncontrado();
        return;
    }

    mostrarFicha();
    mostrarBanda(album);
    mostrarDatosAlbum(album);
    mostrarHistoria(album);
    mostrarCanciones(album);
    mostrarReproductor(album);
}

inicializarFichaAlbum();
