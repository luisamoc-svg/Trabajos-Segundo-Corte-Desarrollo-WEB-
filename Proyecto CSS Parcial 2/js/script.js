// Objeto con la información de los menús diarios
const menus = {
  lunes: {
    dia: "Lunes",
    platillo: "Hamburguesa Doble Carne con Queso",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400"
  },
  martes: {
    dia: "Martes",
    platillo: "Pizza Especial Pepperoni",
    imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
  },
  miercoles: {
    dia: "Miércoles",
    platillo: "Perro Caliente Especial con Tocino",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=400"
  },
  jueves: {
    dia: "Jueves",
    platillo: "Tacos al Pastor con Queso",
    imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400"
  },
  viernes: {
    dia: "Viernes",
    platillo: "Alitas de Pollo BBQ con Papas",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400"
  }
};

// Función para cambiar el menú según el día seleccionado
function verMenu(diaClave) {
  const menuSeleccionado = menus[diaClave];
  if (menuSeleccionado) {
    document.getElementById('dia').innerText = menuSeleccionado.dia;
    document.getElementById('platillo').innerText = menuSeleccionado.platillo;
    document.getElementById('imagen').src = menuSeleccionado.imagen;
  }
}