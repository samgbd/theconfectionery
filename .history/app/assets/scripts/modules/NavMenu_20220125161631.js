class NavMenu {
  constructor () {
    this.hamburger = document.getElementById('hamburger');
  }

  hamburger.addEventListener('click', toggleMenu);

  toggleMenu () {
    if (this.checkIfOpen()) {
      this.hamburger.classList.remove('is-active')
      console.log('close')
    } else {
      this.hamburger.classList.add('is-active')
      console.log('open')
    }
  }

  checkIfOpen () {
    return this.hamburger.classList.contains('is-active');
  }


}

export default NavMenu;