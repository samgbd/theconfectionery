import '../styles/styles.css';
import '../styles/scss/main.scss';
import NavMenu from './modules/NavMenu';
import Form from './modules/Form';

new NavMenu();
new Form();

console.log("hey")

if (module.hot) {
    module.hot.accept();
}
