import menuItems from './partials/menu.json';
import menuCardTpl from './temp/menu-cards.hbs';
import refs from './refs';

function createMenuCardsMarkup(menuItems) {
        return menuItems.map(menuCardTpl)
        .join('');
}


const {menuList, themeCheckbox, body} = refs;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
function setTheme() {
    let themePage = localStorage.getItem('theme'); 
      if (themePage){
    body.classList.add(localStorage.getItem('theme'));
        if(localStorage.getItem('theme') === 'light-theme'){
        themeCheckbox.checked = false;       
        body.classList.add('light-theme');
    }else {
        themeCheckbox.checked = true;       
    }
    }else {
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT)
        console.log(Theme.LIGHT);
    }
}

themeCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        document.querySelector('body').classList.replace('light-theme', 'dark-theme');
    } 
    else
    {localStorage.setItem('theme', Theme.LIGHT);
    document.querySelector('body').classList.replace('dark-theme', 'light-theme')
    }
});
const menuMarkup = createMenuCardsMarkup(menuItems);
refs.menuList.insertAdjacentHTML('beforeend', menuMarkup) ;
setTheme();