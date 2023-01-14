const pageBody = document.querySelector('.page__body');
const mainNav = pageBody.querySelector('.main-nav');
const navToggle = mainNav.querySelector('.main-nav__toggle');
const mainNavList = mainNav.querySelector('.main-nav__list');

const closeMainNav = () => {
  pageBody.classList.remove('page__body--lock');
  mainNav.classList.remove('main-nav--opened');
};

const onNavToggleClick = () => {
  pageBody.classList.toggle('page__body--lock');
  mainNav.classList.toggle('main-nav--opened');
};

const onMainNavListClick = (evt) => {
  const id = evt.target.getAttribute('href');
  const section = document.querySelector(id);

  if (id != null && id.startsWith('#')) {
    evt.preventDefault();
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    closeMainNav();
  }
};

navToggle.addEventListener('click', onNavToggleClick);
mainNavList.addEventListener('click', onMainNavListClick);

document.addEventListener('click', (evt) => {
  if (mainNav.classList.contains('main-nav--opened')) {
    if (evt.target.classList.contains('main-nav--opened')) {
      closeMainNav();
    }
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27 || evt.key === 'Escape' || evt.key === 'Esc') {
    closeMainNav();
  }
});