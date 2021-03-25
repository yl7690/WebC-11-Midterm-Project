var menuButtonElem;
var yinElem;
var yangElem;
var naviElem;
var menuOpen = false;
var menuClosed = true;
var A, B, C, D, E, F, G, H, I, J;
var nameA, nameB, nameC, nameD, nameE, nameF, nameG, nameH, nameI, nameJ;
var blank;

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

window.addEventListener('DOMContentLoaded', (event) => {

  // menuButtonElem = document.getElementsByClassName('menuButton')[0];
  A = document.getElementsByClassName('positionA')[0];
  B = document.getElementsByClassName('positionB')[0];
  C = document.getElementsByClassName('positionC')[0];
  D = document.getElementsByClassName('positionD')[0];
  E = document.getElementsByClassName('positionE')[0];
  F = document.getElementsByClassName('positionF')[0];
  G = document.getElementsByClassName('positionG')[0];
  H = document.getElementsByClassName('positionH')[0];
  I = document.getElementsByClassName('positionI')[0];
  J = document.getElementsByClassName('positionJ')[0];
  nameA = document.getElementsByClassName('A')[0];
  nameB = document.getElementsByClassName('B')[0];
  nameC = document.getElementsByClassName('C')[0];
  nameD = document.getElementsByClassName('D')[0];
  nameE = document.getElementsByClassName('E')[0];
  nameF = document.getElementsByClassName('F')[0];
  nameG = document.getElementsByClassName('G')[0];
  nameH = document.getElementsByClassName('H')[0];
  nameI = document.getElementsByClassName('I')[0];
  nameJ = document.getElementsByClassName('J')[0];
  blank = document.getElementsByClassName('placeholder')[0];

    A.addEventListener('mouseenter', showNameA);
    A.addEventListener('mouseleave', hideNameA);
    B.addEventListener('mouseenter', showNameB);
    B.addEventListener('mouseleave', hideNameB);
    C.addEventListener('mouseenter', showNameC);
    C.addEventListener('mouseleave', hideNameC);
    D.addEventListener('mouseenter', showNameD);
    D.addEventListener('mouseleave', hideNameD);
    E.addEventListener('mouseenter', showNameE);
    E.addEventListener('mouseleave', hideNameE);
    F.addEventListener('mouseenter', showNameF);
    F.addEventListener('mouseleave', hideNameF);
    G.addEventListener('mouseenter', showNameG);
    G.addEventListener('mouseleave', hideNameG);
    H.addEventListener('mouseenter', showNameH);
    H.addEventListener('mouseleave', hideNameH);
    I.addEventListener('mouseenter', showNameI);
    I.addEventListener('mouseleave', hideNameI);
    J.addEventListener('mouseenter', showNameJ);
    J.addEventListener('mouseleave', hideNameJ);
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


function showNameA() {
  console.log("show");
  nameA.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameA() {
  nameA.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameB() {
  console.log("show");
  nameB.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameB() {
  nameB.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameC() {
  console.log("show");
  nameC.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameC() {
  nameC.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameD() {
  console.log("show");
  nameD.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameD() {
  nameD.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameE() {
  console.log("show");
  nameE.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameE() {
  nameE.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameF() {
  console.log("show");
  nameF.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameF() {
  nameF.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameG() {
  console.log("show");
  nameG.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameG() {
  nameG.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameH() {
  console.log("show");
  nameH.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameH() {
  nameH.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameI() {
  console.log("show");
  nameI.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameI() {
  nameI.classList.remove('showName');
  blank.classList.remove('hideBlank');
}

function showNameJ() {
  console.log("show");
  nameJ.classList.add('showName');
  blank.classList.add('hideBlank');
}

function hideNameJ() {
  nameJ.classList.remove('showName');
  blank.classList.remove('hideBlank');
}
