class NavMenu {
  constructor () {
    this.hamburger = document.getElementById('hamburger');
  }


  toggleMenu () {
    if (this.checkIfOpen()) {
      this.hamburger.classList.remove('is-active')
      console.log('close')
    } else {
      this.hamburger.classList.add('is-active')
    }
  }

  checkIfOpen () {
    return this.hamburger.classList.contains('is-active');
  }


}

export default NavMenu;