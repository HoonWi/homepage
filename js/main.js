const searchEl = document.querySelector('.search');
const searchInputEL = searchEl.querySelector('input')

console.log(searchEl)
console.log(searchInputEL)

searchEl.addEventListener('click', function () {
  searchInputEL.focus();
})

searchInputEL.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEL.setAttribute('placeholder', '통합검색');
})

searchInputEL.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEL.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간)