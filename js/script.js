document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    const headerContent = `
    <header class="header">
    <div class="logoCoC">
      <a href="index.html"><img src="images/logo.png" alt="logo"></a>
    </div>
    <nav class="navbar">
      <input type="checkbox" class="checkbox" id="nav-toggle">
      <label for="nav-toggle" class="nav-toggle-label">&#9776;</label>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="Esports.html">Esports</a></li>
        <li><a href="Catalogo.html">Catalogo</a></li>
        <li><a href="Contacto.html">Contacto</a></li>
      </ul>
    </nav>
  </header>
    `;
    headerContainer.innerHTML = headerContent;
});
document.addEventListener('DOMContentLoaded', function() {
    
    const footerElement = document.querySelector('.footer');

    
const footerContent = `
  <footer class="footer">
    <div class="container">
      <aside class="footer_left">
        <a href="#"><h4><img src="images/gmail.png" class="logo" alt=""></a> <span>  CodoACodogaming@gmail.com</span> </h4>
      </aside>
      <aside class="footer_left">
        <a href="#"><h4><img src="images/facebook.png" class="logo" alt=""></a><span>  CodoACodo123</span> </h4>
      </aside>
      <aside class="footer_left">
        <a href="#"><h4><img src="images/logotipo-de-instagram.png" class="logo" alt=""></a> <span>  CoC_1234</span> </h4>
      </aside>
      <div class="FooterTwo"> 2024 Codo a codo</div>
    </div>
  </footer>
`;

footerElement.innerHTML = footerContent;
});