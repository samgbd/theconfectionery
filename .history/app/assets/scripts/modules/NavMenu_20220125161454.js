class NavMenu {
  constructor () {
    this.hamburger = document.getElementById('hamburger');
  }


  toggleMenu () {
    if (this.checkIfOpen()) {
      this.hamburger.classList.remove()
    }
  }

  checkIfOpen () {
    return this.hamburger.classList.contains('is-active');
  }


}

export default NavMenu;