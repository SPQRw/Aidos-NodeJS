class MainMenu {
    render() {
      const menu = document.createElement('ul');
      menu.classList.add('menu');
  
      const homeItem = document.createElement('li');
      homeItem.textContent = 'Home';
  
      const aboutItem = document.createElement('li');
      aboutItem.textContent = 'About';
  
      const contactItem = document.createElement('li');
      contactItem.textContent = 'Contact';
  
      menu.appendChild(homeItem);
      menu.appendChild(aboutItem);
      menu.appendChild(contactItem);
  
      return menu;
    }
  }
  
  export default MainMenu;