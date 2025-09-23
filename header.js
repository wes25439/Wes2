
class GelkeyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="logo2">
          <img src="admin-ajax.jpg" alt="Gelkey Logo" />
        </div>
        <a href="#home" class="logo"> 
          <span class="big-g">G</span>el<span>Keylab</span>
        </a>
        <i class="bx bx-menu" id="menu-icon"></i>
        <nav class="navbar">
          <a href="#home">Chemicals</a>
          <a href="#about">Glassware</a>
          <a href="#services">Lab Apparatus</a>
          <a href="#projects">Lab Installation</a>
          <a href="#contact">School Furniture</a>
        </nav>
        <button class="gradient-btn">Contact Us</button>
      </header>
    `;
  }
}
customElements.define("gelkey-header", GelkeyHeader);
