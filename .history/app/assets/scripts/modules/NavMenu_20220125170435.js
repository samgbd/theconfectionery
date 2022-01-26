class NavMenu {
  constructor () {
    this.hamburger = document.getElementById('hamburger');
    this.navMenu = document.getElementById('navMenu');
    this.navHeight = document.getElementById('navList').offsetHeight;

    this.events()
  }

  events(){
    this.hamburger.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu () {
    if (this.checkIfOpen()) {
      this.hamburger.classList.remove('is-active')
      this.navMenu.classList.remove('is-active')
      this.navMenu.style.height = '0px';
      console.log('close')
    } else {
      this.hamburger.classList.add('is-active')
      this.navMenu.classList.add('is-active')
      this.navMenu.style.height = `this.navHeight;
      console.log('open')
    }
  }

  checkIfOpen () {
    return this.hamburger.classList.contains('is-active');
  }



}

export default NavMenu;