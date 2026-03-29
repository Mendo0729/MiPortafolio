// Selecciones para Barra de navegación hamburguesa

const burger = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");

if (burger && ul) {
  burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
}

// Cerrar el menú de hambuguesa cuando se hace click en un enlace  

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    if (ul) {
      ul.classList.remove("show");
    }
  })
);
