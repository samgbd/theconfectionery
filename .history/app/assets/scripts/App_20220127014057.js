import '../styles/styles.css';
import '../styles/scss/main.scss';
//* This is an example of how to import, and then call, your module files *
import MemoryJogger from './modules/MemoryJogger';
import NavMenu from './modules/NavMenu';

new MemoryJogger();
new NavMenu();
//* Make sure you erase me once I've served my purpose *

console.log("hey")

if (module.hot) {
    module.hot.accept();
}