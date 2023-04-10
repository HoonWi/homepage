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