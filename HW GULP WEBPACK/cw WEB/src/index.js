import MainMenu from './components/MainMenu';
import ImageSlider from './components/MainSlider';
import LoginForm from './components/LoginForm';

// Создаем экземпляры компонентов
const mainMenu = new MainMenu();
const imageSlider = new ImageSlider();
const loginForm = new LoginForm();

// Добавляем компоненты на страницу
document.getElementById('app').appendChild(mainMenu.render());
document.getElementById('app').appendChild(imageSlider.render());
document.getElementById('app').appendChild(loginForm.render());