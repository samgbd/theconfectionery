import '../styles/styles.css';
import '../styles/scss/main.scss';
//* This is an example of how to import, and then call, your module files *
import MemoryJogger from './modules/MemoryJogger';

new MemoryJogger();
//* You should erase me,

if (module.hot) {
    module.hot.accept();
}