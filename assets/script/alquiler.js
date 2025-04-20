document.addEventListener('DOMContentLoaded', () => {
    console.log("Alquiler.js cargado correctamente");
    console.log("Propiedades en alquiler:", propiedades_alquiler);
  
    const alquilerContainer = document.getElementById('alquilerContainer');
  
    // Verifica que el arreglo esté disponible y no esté vacío
    if (!propiedades_alquiler || propiedades_alquiler.length === 0) {
      console.error("Error: propiedades_alquiler no está definido o está vacío.");
      return;
    }
  
    renderizarPropiedades(alquilerContainer, propiedades_alquiler);
  });
  
  function renderizarPropiedades(container, propiedades) {
    container.innerHTML = ""; // Limpia el contenido antes de añadir nuevas propiedades
  
    propiedades.forEach(propiedad => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
      col.innerHTML = `
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p>${propiedad.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones</p>
            <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
            <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
              <i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
              ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
              <i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'}"></i>
              ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  
    console.log("Propiedades renderizadas exitosamente.");
  }