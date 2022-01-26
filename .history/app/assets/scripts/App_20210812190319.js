import '../styles/styles.css';
import '../styles/scss/main.scss';
import MemoryJogger from './modules/MemoryJogger';

new MemoryJogger();


if (module.hot) {
    module.hot.accept();
}