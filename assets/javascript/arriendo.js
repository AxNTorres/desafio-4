const propiedades_arriendo = [
  {
    id: 1,
    img: "assets/img/casas arriendo/1.webp",
    title: "Departamento céntrico",
    descripcion: "Moderno departamento céntrico con excelente conexión de transporte.",
    ubicacion: "Av. Principal, Ciudad",
    habitaciones: 2,
    baños: 1,
    costo: "800 USD/mes",
    smoke: false,
    pets: true
  },
  {
    id: 2,
    img: "assets/img/casas arriendo/2.webp",
    title: "Estudio amueblado",
    descripcion: "Estudio completamente amueblado, ideal para estudiantes.",
    ubicacion: "Calle Estudiante, Ciudad",
    habitaciones: 1,
    baños: 1,
    costo: "500 USD/mes",
    smoke: true,
    pets: false
  },
  {
    id: 3,
    img: "assets/img/casas arriendo/3.webp",
    title: "Casa familiar con jardín",
    descripcion: "Casa espaciosa con jardín, cerca de colegios y parques.",
    ubicacion: "Barrio Residencial, Ciudad",
    habitaciones: 4,
    baños: 2,
    costo: "1,200 USD/mes",
    smoke: false,
    pets: true
  },
  {
    id: 4,
    img: "assets/img/casas arriendo/4.jpg",
    title: "Apartamento en la playa",
    descripcion: "Apartamento con vista al mar y acceso directo a la playa.",
    ubicacion: "Playa Blanca, Ciudad",
    habitaciones: 3,
    baños: 2,
    costo: "1,500 USD/mes",
    smoke: true,
    pets: true
  },
  {
    id: 5,
    img: "assets/img/casas arriendo/5.webp",
    title: "Cabaña en el bosque",
    descripcion: "Cabaña rústica en medio del bosque, ideal para desconectar.",
    ubicacion: "Bosque Encantado, Pueblo",
    habitaciones: 2,
    baños: 1,
    costo: "700 USD/mes",
    smoke: false,
    pets: true
  },
  {
    id: 6,
    img: "assets/img/casas arriendo/6.jpg",
    title: "Loft industrial",
    descripcion: "Loft de estilo industrial en el corazón del distrito creativo.",
    ubicacion: "Distrito Creativo, Ciudad",
    habitaciones: 1,
    baños: 1,
    costo: "900 USD/mes",
    smoke: false,
    pets: false
  },
  {
    id: 7,
    img: "assets/img/casas arriendo/7.jpg",
    title: "Piso con terraza",
    descripcion: "Piso con amplia terraza y vistas a la ciudad.",
    ubicacion: "Calle Terraza, Ciudad",
    habitaciones: 3,
    baños: 2,
    costo: "1,100 USD/mes",
    smoke: true,
    pets: true
  },
  {
    id: 8,
    img: "assets/img/casas arriendo/8.jpg",
    title: "Apartamento en rascacielos",
    descripcion: "Apartamento en las alturas con vistas impresionantes.",
    ubicacion: "Torre Alta, Ciudad",
    habitaciones: 2,
    baños: 2,
    costo: "1,300 USD/mes",
    smoke: false,
    pets: false
  },
  {
    id: 9,
    img: "assets/img/casas arriendo/9.webp",
    title: "Casa de campo",
    descripcion: "Casa de campo con espacio para cultivar y disfrutar de la naturaleza.",
    ubicacion: "Finca La Campiña, Pueblo",
    habitaciones: 3,
    baños: 2,
    costo: "1,000 USD/mes",
    smoke: true,
    pets: true
  },
  {
    id: 10,
    img: "assets/img/casas arriendo/10.jpeg",
    title: "Apartamento moderno",
    descripcion: "Apartamento moderno y luminoso cerca de parques y tiendas.",
    ubicacion: "Barrio Moderno, Ciudad",
    habitaciones: 2,
    baños: 1,
    costo: "850 USD/mes",
    smoke: false,
    pets: true
  },
  {
    id: 11,
    img: "assets/img/casas arriendo/11.jpeg",
    title: "Residencia de lujo",
    descripcion: "Residencia de lujo con piscina y gimnasio privado.",
    ubicacion: "Residencial Lujo, Ciudad",
    habitaciones: 5,
    baños: 4,
    costo: "2,500 USD/mes",
    smoke: true,
    pets: false
  },
  {
    id: 12,
    img: "assets/img/casas arriendo/12.jpeg",
    title: "Departamento amueblado",
    descripcion: "Departamento amueblado con todo lo necesario para mudarse.",
    ubicacion: "Calle Mudanza, Ciudad",
    habitaciones: 1,
    baños: 1,
    costo: "600 USD/mes",
    smoke: false,
    pets: false
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
if (document.querySelector("#cajadealquiler")) {
  const propiedadesArriendoParaIndex = propiedades_arriendo.slice(0, 3);
  renderizarPropiedades(propiedadesArriendoParaIndex, "cajadealquiler");
} else if (document.querySelector("#cajaalquilertodas")) {
  renderizarPropiedades(propiedades_arriendo, "cajaalquilertodas");
}