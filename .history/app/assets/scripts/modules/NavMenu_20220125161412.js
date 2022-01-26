class NavMenu {
  constructor () {
    this.hamburger = document.getElementById('hamburger');
  }


  toggleMenu () {
    if (checkIfOpen) {
      
    }
  }

  checkIfOpen () {
    return this.hamburger.classList.contains('isa-ctive');
  }


}

export default NavMenu;