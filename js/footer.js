
document.addEventListener('DOMContentLoaded', function() {
    
    const footerElement = document.querySelector('.footer');

    
const footerContent = `
  <footer class="footer">
    <div class="container">
      <aside class="footer_left">
        <a href="#"><h4><img src="images/gmail.png" class="logoF" alt=""></a> <span>  CodoACodogaming@gmail.com</span> </h4>
      </aside>
      <aside class="footer_left">
        <a href="#"><h4><img src="images/facebook.png" class="logoF" alt=""></a><span>  CodoACodo123</span> </h4>
      </aside>
      <aside class="footer_left">
        <a href="#"><h4><img src="images/logotipo-de-instagram.png" class="logoF" alt=""></a> <span>  CoC_1234</span> </h4>
      </aside>
      <div class="FooterTwo"> 2024 Codo a codo</div>
    </div>
  </footer>
`;

footerElement.innerHTML = footerContent;
});