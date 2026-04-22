const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch("noticias.json");
    if (!respuesta.ok) {
      throw new Error(`Error en la red`);
    }
    const datos = await respuesta.json();

    const seccionNoticias = document.getElementById("contenedor-noticias");

    datos.forEach((noticia) => {
      const htmlNoticia = `
          <article class="noticia-item">
            <h3>${noticia.titulo}</h3>
            <small>${noticia.fecha} - ${noticia.categoria}</small>
            <p>${noticia.contenido}</p>
          </article>
          <hr>`;
      seccionNoticias.innerHTML += htmlNoticia;
    });
  } catch (error) {
    console.error("No se pudieron obtener los datos:", error);
  }
};

const boton = document.getElementById("boton-ordenar");

const darPrioridad = async () => {
  console.log("dentro de la funcion");

  try {
    const respuesta = await fetch("noticias.json");
    if (!respuesta.ok) {
      throw new Error(`Error en la red`);
    }
    const datos = await respuesta.json();
    const seccionNoticias = document.getElementById("contenedor-noticias");
    datos.forEach((noticia) => {
      console.log("dentro del each");

      if (noticia.importante) {
        console.log("Dentro del if");
        const htmlNoticia = `
          <article class="noticia-item">
            <h3>${noticia.titulo}</h3>
            <small>${noticia.fecha} - ${noticia.categoria}</small>
            <p>${noticia.contenido}</p>
          </article>
          <hr>`;
        seccionNoticias.innerHTML += htmlNoticia;
      }
    });
  } catch (error) {
    console.error("No se pudieron obtener los datos:", error);
  }
};

boton.addEventListener("click", () => {
  console.log("Dentro de boton");
  const seccionNoticias = document.getElementById("contenedor-noticias");
  seccionNoticias.innerHTML = "";
  darPrioridad();
});

obtenerUsuarios();