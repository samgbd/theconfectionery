import '../styles/styles.css';
import '../styles/scss/main.scss';
//* This is an example of how to import, and then call, your module files *
import MemoryJogger from './modules/MemoryJogger';

new MemoryJogger();
//* Make sure you erase me once 

if (module.hot) {
    module.hot.accept();
}