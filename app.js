const obtenerUsuarios = async () => {
  try {
    const respuesta = await fetch("noticias.json");
    if (!respuesta.ok) {
      throw new Error(`Error en la red`);
    }
    const datos = await respuesta.json();

    const seccionNoticias = document.getElementById("contenedor-noticias");

    datos.forEach(noticia => {
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
const boton = document.querySelector('#boton-ordenar');
const darPrioridad = async () => {
  try {
  const respuesta = await fetch("noticias.json");
  if (!respuesta.ok) {
    throw new Error(`Error en la red`);
  }
  const datos = await respuesta.json();
  const seccionNoticias = document.getElementById("contenedor-noticias");
  datos.forEach(noticia => {
    if (noticia.importe == true) {
      `
          <article class="noticia-item">
            <h3>${noticia.titulo}</h3>
            <small>${noticia.fecha} - ${noticia.categoria}</small>
            <p>${noticia.contenido}</p>
          </article>
          <hr>`;
      seccionNoticias.innerHTML += htmlNoticia;
    }
  }
  );}
  catch (error) {
    console.error("No se pudieron obtener los datos:", error);
  }
}



    boton.addEventListener('click', () => {
      const seccionNoticias = document.getElementById("contenedor-noticias");
      seccionNoticias.innerHTML = '';
      obtenerUsuarios().then(noticias => {
        const noticiasOrdenadas = darPrioridad(noticias);
        noticiasOrdenadas.forEach(noticia => {
          const htmlNoticia = `
                <article class="noticia-item">
                    <h3>${noticia.titulo}</h3>
                    <small>${noticia.fecha} - ${noticia.categoria}</small>
                    <p>${noticia.contenido}</p>
                </article>
                <hr>`;
          seccionNoticias.innerHTML += htmlNoticia;
        });
      }).catch(error => {
        console.error("Error al ordenar las noticias:", error);
      });

    });
  

    obtenerUsuarios();
