import '../styles/styles.css';
import '../styles/scss/main.scss';
//* This is an example of how to import
import MemoryJogger from './modules/MemoryJogger';

new MemoryJogger();


if (module.hot) {
    module.hot.accept();
}