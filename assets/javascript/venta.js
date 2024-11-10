const propiedades_venta = [
  {
    id: 1,
    img: "assets/img/casas venta/1.jpeg",
    title: "Casa moderna en el centro",
    descripcion: "Hermosa casa moderna con acabados de lujo y amplio jardín.",
    ubicacion: "Av. Central, Ciudad",
    habitaciones: 4,
    baños: 3,
    costo: "250,000 USD",
    smoke: true,
    pets: true
  },
  {
    id: 2,
    img: "assets/img/casas venta/2.webp",
    title: "Apartamento en edificio exclusivo",
    descripcion: "Apartamento con vista panorámica y piscina en la azotea.",
    ubicacion: "Calle Vista Bella, Ciudad",
    habitaciones: 3,
    baños: 2,
    costo: "180,000 USD",
    smoke: false,
    pets: false
  },
  {
    id: 3,
    img: "assets/img/casas venta/3.jpeg",
    title: "Penthouse con terraza privada",
    descripcion: "Penthouse amplio con terraza privada y vistas al mar.",
    ubicacion: "Paseo del Mar, Ciudad",
    habitaciones: 5,
    baños: 4,
    costo: "500,000 USD",
    smoke: false,
    pets: true
  },
  {
    id: 4,
    img: "assets/img/casas venta/4.jpeg",
    title: "Chalet en la montaña",
    descripcion: "Chalet rústico con chimenea y hermosas vistas a la montaña.",
    ubicacion: "Camino del Bosque, Pueblo",
    habitaciones: 3,
    baños: 2,
    costo: "300,000 USD",
    smoke: true,
    pets: true
  },
  {
    id: 5,
    img: "assets/img/casas venta/5.jpeg",
    title: "Casa de campo con huerto",
    descripcion: "Casa de campo con amplio terreno y huerto privado.",
    ubicacion: "Ruta del Sol, Aldea",
    habitaciones: 4,
    baños: 3,
    costo: "350,000 USD",
    smoke: false,
    pets: true
  },
  {
    id: 6,
    img: "assets/img/casas venta/6.jpg",
    title: "Apartamento céntrico",
    descripcion: "Apartamento céntrico cerca de centros comerciales y parques.",
    ubicacion: "Plaza Mayor, Ciudad",
    habitaciones: 2,
    baños: 1,
    costo: "200,000 USD",
    smoke: true,
    pets: false
  },
  {
    id: 7,
    img: "assets/img/casas venta/7.jpg",
    title: "Villa de lujo con piscina",
    descripcion: "Villa con jardín extenso, piscina y sala de juegos.",
    ubicacion: "Residencial Privada, Ciudad",
    habitaciones: 6,
    baños: 5,
    costo: "800,000 USD",
    smoke: false,
    pets: true
  },
  {
    id: 8,
    img: "assets/img/casas venta/8.jpg",
    title: "Casa minimalista",
    descripcion: "Casa de diseño minimalista con grandes ventanales y luz natural.",
    ubicacion: "Calle Nueva, Ciudad",
    habitaciones: 3,
    baños: 2,
    costo: "320,000 USD",
    smoke: false,
    pets: false
  },
  {
    id: 9,
    img: "assets/img/casas venta/9.webp",
    title: "Mansión con viñedo",
    descripcion: "Mansión de lujo rodeada de viñedos, perfecta para eventos.",
    ubicacion: "Valle de las Uvas, Pueblo",
    habitaciones: 7,
    baños: 6,
    costo: "1,200,000 USD",
    smoke: true,
    pets: true
  },
  {
    id: 10,
    img: "assets/img/casas venta/10.jpg",
    title: "Cabaña junto al lago",
    descripcion: "Cabaña rústica junto al lago, ideal para escapadas de fin de semana.",
    ubicacion: "Lago Azul, Pueblo",
    habitaciones: 2,
    baños: 1,
    costo: "150,000 USD",
    smoke: true,
    pets: true
  },
  {
    id: 11,
    img: "assets/img/casas venta/11.jpg",
    title: "Casa con jardín vertical",
    descripcion: "Casa ecológica con jardín vertical y paneles solares.",
    ubicacion: "Calle Verde, Ciudad",
    habitaciones: 4,
    baños: 3,
    costo: "400,000 USD",
    smoke: false,
    pets: false
  },
  {
    id: 12,
    img: "assets/img/casas venta/12.jpg",
    title: "Residencia histórica",
    descripcion: "Residencia antigua con arquitectura clásica y detalles históricos.",
    ubicacion: "Barrio Antiguo, Ciudad",
    habitaciones: 5,
    baños: 4,
    costo: "600,000 USD",
    smoke: false,
    pets: true
  }
];

    function renderizarPropiedades(propiedades, contenedorId) {
        const contenedor = document.querySelector(`#${contenedorId}`);
        let conjuntoDeInformacion = "";
      
        for (let propiedad of propiedades) {
          conjuntoDeInformacion += `
            <div class="col-md-4 mb-4">
              <div class="card">
                <img 
                  src="${propiedad.img}"
                  class="card-img-top"
                  alt="${propiedad.title}"
                />
                <div class="card-body">
                  <h5 class="card-title">${propiedad.title}</h5>
                  <p class="card-text">${propiedad.descripcion}</p>
                  <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                  <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                    <i class="fas fa-bath"></i> ${propiedad.baños}</p>
                  <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                  <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}">
                    ${propiedad.smoke ? '<i class="fas fa-smoking"></i> Permitido fumar' : '<i class="fas fa-smoking-ban"></i> No se permite fumar'}
                  </p>
                  <p class="${propiedad.pets ? 'text-success' : 'text-danger'}">
                    ${propiedad.pets ? '<i class="fas fa-paw"></i> Mascotas permitidas' : '<i class="fas fa-ban"></i> No se permiten mascotas'}
                  </p>
                </div>
              </div>
            </div>
          `;
        }

contenedor.innerHTML = conjuntoDeInformacion;
};
if (document.querySelector("#cajadeventas")) {
    const propiedadesVentaParaIndex = propiedades_venta.slice(0,3);
    renderizarPropiedades (propiedadesVentaParaIndex,"cajadeventas");
} else if (document.querySelector ("#cajadeventastodas")) {
    renderizarPropiedades(propiedades_venta, "cajadeventastodas")
}