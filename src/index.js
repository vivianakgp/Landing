const MENU = document.getElementById('menu');
const ICON_OPEN_MENU = document.getElementById('iconOpenMenu');
const ICON_CLOSE_MENU = document.getElementById('iconCloseMenu');
const CONTAINER_MENU = document.getElementById('menu__container');
const BTN_PRE = document.getElementById('btnPrev');
const BTN_NEXT = document.getElementById('btnNext');
const CAR_CONT = document.getElementById('carContainer');
const LIST_CONT = document.getElementById('listContainer');
const LIST = document.querySelectorAll('.list');

/* Controller show and hidden menu  */
let lastScrollTop = 0;
function showAndHideMenu() {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  // console.log(` el scroll de la pantalla es: ${st}`);
  if (st > lastScrollTop) {
    MENU.classList.add('menuScrollUp');
    // console.log(`El scroll actual es: ${st} > al ultimo scroll ${lastScrollTop} (0)  y oculta el menu`);
  } else if (st === 0) {
    // MENU.style.backgroundColor = 'transparent';
  } else {
    MENU.classList.remove('menuScrollUp');
    // console.log(`El scroll actual es: ${st} < al ultimo scroll ${lastScrollTop}  y muestra el menu`);
  }
  lastScrollTop = st;
}
// events //
window.addEventListener('scroll', showAndHideMenu);// se iza but eslint does not allow
ICON_OPEN_MENU.addEventListener('click', () => { CONTAINER_MENU.style.right = '0'; });
ICON_CLOSE_MENU.addEventListener('click', () => { CONTAINER_MENU.style.right = '-100%'; });
// // // // /// /// ///

/* carousel */
const LIST_WIDTH = LIST[0].offsetWidth;
let leftPosition = null;
function move(value) {
  const LIST_CONT_WIDTH = LIST_CONT.offsetWidth;// linea roja
  const CAR_CONT_WIDTH = CAR_CONT.offsetWidth;// morado
  LIST_CONT.style.left == '' ? leftPosition = LIST_CONT.style.left = 0 :leftPosition = parseFloat(LIST_CONT.style.left.slice(0, -2) * -1);

  if (leftPosition < (LIST_CONT_WIDTH - CAR_CONT_WIDTH) && value === 2) {
    LIST_CONT.style.left = `${-1 * (leftPosition + LIST_WIDTH)}px`;
  } else if (leftPosition > 0 && value === 1) {
    LIST_CONT.style.left = `${-1 * (leftPosition - LIST_WIDTH)}px`;
  }
}
BTN_PRE.onclick = () => move(1);
BTN_NEXT.onclick = () => move(2);
