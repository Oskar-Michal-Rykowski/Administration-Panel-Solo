import { select, classNames } from './settings.js';

class actionStart {
  constructor() {
    const thisApp = this;

    thisApp.getElements();
    thisApp.initMenuActions();
    thisApp.initPopupsActions();
  }

  getElements() {
    const thisApp = this;

    thisApp.pages = document.querySelectorAll(select.pages);
    // //console.log('thisApp.pages', thisApp.pages);

    thisApp.menuLinks = document.querySelectorAll(select.menuLinks);
    //console.log('thisApp.menuLinks', thisApp.menuLinks);

    //Find hamburger
    thisApp.hamburger = document.querySelector(select.hamburger);

    //Find navigation-dropdown
    thisApp.navigationDropdown = document.querySelector(
      select.navigationDropdown
    );

    thisApp.popupOverlay = document.getElementById(select.overlay);

    thisApp.popupMessage = document.querySelector(select.popupMessage);
    thisApp.yourManager = document.querySelector(select.yourManager);

    thisApp.popupLogin = document.querySelector(select.popupLogin);
    thisApp.userProfile = document.querySelector(select.userProfile);

    thisApp.popupQuit = document.querySelector(select.popupQuit);
    thisApp.quitButton = document.querySelector(select.quitButton);
  }

  initMenuActions() {
    const thisApp = this;

    //find links in menu and add eventListener
    for (let link of thisApp.menuLinks) {
      //console.log('link', link);
      link.addEventListener('click', function (event) {
        event.preventDefault();
        //console.log('addEventListener added');
        //after click find all pages and remove class active-page
        for (let page of thisApp.pages) {
          page.classList.remove(classNames.elementStatus.activePage);
          //console.log('class removed');
        }

        //from clicked element get attribute href
        const linksHref = link.getAttribute('href');
        //console.log('linksHref', linksHref);

        //find element with id = above const + '-page'
        const pageId = linksHref + '-page';
        //console.log('pageId', pageId);

        const page = document.getElementById(pageId);
        //console.log('page', page);

        //add class active page
        page.classList.add(classNames.elementStatus.activePage);

        navigationDropdown();
      });
    }

    //HAMBURGER WORKING
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

  initPopupsActions() {
    const thisApp = this;

    function closeModal() {
      thisApp.popupOverlay.classList.remove(
        classNames.elementStatus.overlayShow
      );
    }

    document
      .querySelectorAll(select.closeButtonsOverlay)
      .forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          closeModal();
        });
      });

    document
      .querySelector(select.overlayId)
      .addEventListener('click', function (e) {
        if (e.target === this) {
          closeModal();
        }
      });

    document.addEventListener('keyup', function (e) {
      if (e.keyCode === 27) {
        closeModal();
      }
    });

    function openModal(modal) {
      console.log('modal', modal);

      document.querySelectorAll('#overlay > *').forEach(function (modal) {
        modal.classList.remove(classNames.elementStatus.overlayShow);
      });

      document
        .querySelector(select.overlayId)
        .classList.add(classNames.elementStatus.overlayShow);

      modal.classList.add(classNames.elementStatus.overlayShow);
    }

    thisApp.yourManager.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('thisApp.popupMessage', thisApp.popupMessage);
      openModal(thisApp.popupMessage);
    });

    thisApp.userProfile.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('thisApp.popupMessage', thisApp.popupMessage);
      openModal(thisApp.popupLogin);
    });

    thisApp.quitButton.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('thisApp.popupMessage', thisApp.popupMessage);
      openModal(thisApp.popupQuit);
    });
  }
}

// eslint-disable-next-line no-unused-vars
const app = new actionStart();
