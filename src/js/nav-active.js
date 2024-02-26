const link = document.querySelectorAll('.header-nav-link');
const url = document.location.pathname;
const CLASS = 'active';
link.forEach(x => {
  if (x.classList.contains(CLASS)) {
    x.classList.remove(CLASS);
  }
  if (url.includes(x.getAttribute('href'))) {
    x.classList.add(CLASS);
    return;
  }
});
if (url === '/team-orion/') {
  link[0].classList.add(CLASS);
}
