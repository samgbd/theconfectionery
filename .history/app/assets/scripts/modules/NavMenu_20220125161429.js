class NavMenu {
  constructor () {
    this.hamburger = document.getElementById('hamburger');
  }


  toggleMenu () {
    if (this.checkIfOpen()) {

    }
  }

  checkIfOpen () {
    return this.hamburger.classList.contains('isactive');
  }


}

export default NavMenu;