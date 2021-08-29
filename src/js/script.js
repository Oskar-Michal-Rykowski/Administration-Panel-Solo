import { select, classNames } from './settings.js';

class navigationWork {
  constructor() {
    const thisApp = this;

    thisApp.getElements();
    thisApp.initActions();
  }

  getElements() {
    const thisApp = this;

    thisApp.pages = document.querySelectorAll(select.pages);
    console.log('thisApp.pages', thisApp.pages);

    thisApp.menuLinks = document.querySelectorAll(select.menuLinks);
    console.log('thisApp.menuLinks', thisApp.menuLinks);

    //Find hamburger
    thisApp.hamburger = document.querySelector(select.hamburger);

    //Find navigation-dropdown
    thisApp.navigationDropdown = document.querySelector(
      select.navigationDropdown
    );
  }

  initActions() {
    const thisApp = this;

    //find links in menu and add eventListener
    for (let link of thisApp.menuLinks) {
      console.log('link', link);
      link.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('addEventListener added');
        //after click find all pages and remove class active-page
        for (let page of thisApp.pages) {
          page.classList.remove(classNames.elementStatus.activePage);
          console.log('class removed');
        }

        //from clicked element get attribute href
        const linksHref = link.getAttribute('href');
        console.log('linksHref', linksHref);

        //find element with id = above const + '-page'
        const pageId = linksHref + '-page';
        console.log('pageId', pageId);

        const page = document.getElementById(pageId);
        console.log('page', page);

        //add class active page
        page.classList.add(classNames.elementStatus.activePage);

        navigationDropdown();
      });
    }

    //Hamburger working
    //Function
    function navigationDropdown() {
      thisApp.navigationDropdown.classList.toggle(
        classNames.elementStatus.activeMenu
      );
    }

    //Add eventListener to hamburger
    thisApp.hamburger.addEventListener('click', function (event) {
      event.preventDefault();
      navigationDropdown();
    });
    //if clicked toggle class active
  }
}

// eslint-disable-next-line no-unused-vars
const app = new navigationWork();
