// Función para crear y agregar el header a la página

function createHeader() {
  const header = document.createElement("header");

  header.innerHTML = `
    <div class="logo">
      <a href="index.html"><img src="images/logo.png" alt="Logo"></a>
    </div>
    <nav>
      <ul class="nav-links">
        <li><a href="Esports.html">Esports</a></li>
        <li><a href="Catalogo.html">Catálogo</a></li>
        <li><a href="Contacto.html">Contactos</a></li>
      </ul>
      <button class="burger-menu">&#9776;</button>
    </nav>
    <div class="menu-overlay">
      <div class="menu-content">
        <button class="close-btn">&times;</button>
        <ul>
          <li><a href="Esports.html">Esports</a></li>
          <li><a href="Catalogo.html">Catálogo</a></li>
          <li><a href="Contacto.html">Contactos</a></li>
        </ul>
      </div>
    </div>
  `;

  header.classList.add("custom-header");

  return header;
}

function addHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const header = createHeader();
  headerPlaceholder.appendChild(header);

  const burgerMenu = document.querySelector(".burger-menu");
  const menuOverlay = header.querySelector(".menu-overlay");

  burgerMenu.addEventListener("click", () => {
    menuOverlay.style.transform = "translateX(0)"; // Mostrar el overlay al hacer clic en el botón
  });

  const closeBtn = menuOverlay.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    menuOverlay.style.transform = "translateX(100%)"; // Ocultar el overlay al hacer clic en el botón de cierre
  });
}

document.addEventListener("DOMContentLoaded", addHeader);
