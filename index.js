// Función para verificar la posición y mostrar/ocultar el botón de inicio y actualizar la edad
function checkScrollPosition() {
  var aboutSection = document.getElementById('biografia');
  var btnHome = document.getElementById('btnHome');
  var edadSpan = document.querySelector('.EdadFG');

  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Función para mostrar/ocultar el botón de regreso al hacer scroll
  function checkScrollPositionForButton() {
    var btnHome = document.getElementById('btnHome');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Muestra u oculta el botón de regreso
    btnHome.style.display = scrollPosition > window.innerHeight ? 'block' : 'none';
  }

  // Evento de desplazamiento para verificar la posición y mostrar/ocultar el botón de regreso
  window.addEventListener('scroll', checkScrollPositionForButton);

  // Llama a la función inicialmente para configurar el botón en la carga de la página
  checkScrollPositionForButton();

  // Calcula la edad y actualiza el span correspondiente
  var fechaNacimiento = new Date('2001-09-18');
  var hoy = new Date();
  var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

  // Ajusta la edad si aún no ha pasado el cumpleaños
  if (hoy.getMonth() < fechaNacimiento.getMonth() || (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  // Actualiza el contenido del span con la nueva edad
  edadSpan.textContent = edad;
}

// Función para llevar al usuario al inicio
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores antiguos
  document.documentElement.scrollTop = 0; // Para navegadores modernos
}

// Evento de desplazamiento para verificar la posición y mostrar/ocultar el botón de inicio y actualizar la edad
window.addEventListener('scroll', checkScrollPosition);

// Llama a la función inicialmente para configurar la edad en la carga de la página
checkScrollPosition();

//MODO OSCURO
document.addEventListener('DOMContentLoaded', function () {
  // Verificar el modo actual almacenado en localStorage o establecer el modo claro por defecto
  var darkMode = localStorage.getItem('darkMode');
  var body = document.getElementById('bodyContainer');
  var navbarBrand = document.querySelector('.navbar-brand');
  var darkModeSwitch = document.getElementById('darkModeSwitch');
  var modeIcon = document.getElementById('modeIcon');

  // Función para alternar entre los modos
  function toggleDarkMode() {
    body.classList.toggle('dark-mode-container');
    darkModeSwitch.classList.toggle('dark-mode-switch');
    // Cambiar el ícono según el modo actual
    modeIcon.textContent = body.classList.contains('dark-mode-container') ? '🌙' : '☀️';

    // Almacenar el modo actual en localStorage
    localStorage.setItem('darkMode', body.classList.contains('dark-mode-container') ? 'enabled' : 'disabled');
  }

  // Establecer el modo claro por defecto si no hay una preferencia almacenada
  if (darkMode === 'enabled') {
    toggleDarkMode(); // Si estaba en modo oscuro, cambiar a claro al cargar la página
  }

  // Asignar el evento de clic al interruptor de modo oscuro
  darkModeSwitch.addEventListener('click', toggleDarkMode);
});

function descargarArchivo() {
  var url = 'Archivos/CV.pdf';

  var link = document.createElement('a');
  link.href = url;
  link.download = 'CV.pdf';

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

document.getElementById('downloadButton').addEventListener('click', descargarArchivo);
function updateNavbarColor() {
  const navbar = document.getElementById("navbar");
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  const modeIcon = document.getElementById("modeIcon");

  if (document.body.classList.contains("dark-mode")) {
      // Si está en modo oscuro, cambia las clases del navbar a 'navbar-dark'
      navbar.classList.remove("navbar-light");
      navbar.classList.add("navbar-dark");
      // Cambia el color del icono del modo a claro
      modeIcon.classList.remove("light-mode-icon");
      modeIcon.classList.add("dark-mode-icon");
  } else {
      // Si está en modo claro, cambia las clases del navbar a 'navbar-light'
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-light");
      // Cambia el color del icono del modo a oscuro
      modeIcon.classList.remove("dark-mode-icon");
      modeIcon.classList.add("light-mode-icon");
  }
}

// Llama a la función para que se ejecute cuando se cargue la página
updateNavbarColor();
