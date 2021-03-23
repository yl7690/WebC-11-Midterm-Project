var menuButtonElem;
var yinElem;
var yangElem;
var naviElem;
var menuOpen = false;
var menuClosed = true;

window.addEventListener('DOMContentLoaded', (event) => {

  console.log("loaded...");
  console.log('open',menuOpen);
  console.log(menuClosed);

  // menuButtonElem = document.getElementsByClassName('menuButton')[0];
  naviElem = document.getElementsByClassName('navigation')[0]
  yinElem = document.getElementsByClassName('yinCover')[0];
  yangElem = document.getElementsByClassName('yangCover')[0];


  // menuButtonElem.addEventListener('click', openMenu);
    yinElem.addEventListener('click', openMenu);
    yangElem.addEventListener('click', openMenu);
});

function openMenu() {
  console.log("opening menu...");
  if (menuClosed) {
    yinElem.classList.add('yinOpen');
    naviElem.classList.add('showNavigation');
    menuOpen = true;
    menuClosed = false;
  } else if (menuOpen) {
    yinElem.classList.remove('yinOpen');
    naviElem.classList.remove('showNavigation');
    menuOpen = false;
    menuClosed = true;
  }
}
