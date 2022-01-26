import '../styles/styles.css';
import '../styles/scss/main.scss';
//* This is an example of how to inc
import MemoryJogger from './modules/MemoryJogger';

new MemoryJogger();


if (module.hot) {
    module.hot.accept();
}