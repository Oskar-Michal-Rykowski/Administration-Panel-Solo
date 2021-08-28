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
  }

  initActions() {
    const thisApp = this;

    //find links in menu and add clickListener
    for (let link of thisApp.menuLinks) {
      console.log('link', link);
      link.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('addEventListener added');
        for (let page of thisApp.pages) {
          page.classList.remove(classNames.elementStatus.activePage);
          console.log('class removed');
        }

        const linksHref = link.getAttribute('href');
        console.log('linksHref', linksHref);

        const pageId = linksHref + '-page';
        console.log('pageId', pageId);

        const page = document.getElementById(pageId);
        console.log('page', page);

        page.classList.add(classNames.elementStatus.activePage);
      });
    }

    //after click find all pages and remove class active-page

    //from clicked element get attribute href

    //find element with id = above const + '-page'

    //add class active page
  }
}

// eslint-disable-next-line no-unused-vars
const app = new navigationWork();
