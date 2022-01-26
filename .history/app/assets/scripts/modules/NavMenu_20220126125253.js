class NavMenu {
  constructor () {
    this.hamburger = document.getElementById('hamburger');
    this.navMenu = document.getElementById('navMenu');
    this.navList = document.getElementById('navList');

    this.testing()
    this.events()
  }

  testing () {

    console.log(this.navHeight)
  }

  events(){
    this.hamburger.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu () {
    let navHeight = getHeight
    if (this.checkIfOpen()) {
      this.hamburger.classList.remove('is-active')
      this.navMenu.classList.remove('is-active')
      this.navMenu.style.height = '0px';
      console.log('close')
    } else {
      this.hamburger.classList.add('is-active')
      this.navMenu.classList.add('is-active')
      this.navMenu.style.height = `${this.navHeight}px`;
      console.log('open')
    }
  }

  checkIfOpen () {
    return this.hamburger.classList.contains('is-active');
  }

  getHeight () {
    return this.navList.offsetHeight;
  }



}

export default NavMenu;