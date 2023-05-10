const searchEl = document.querySelector(".search");
const searchInputEL = searchEl.querySelector("input");

console.log(searchEl);
console.log(searchInputEL);

searchEl.addEventListener("click", function () {
	searchInputEL.focus();
});

searchInputEL.addEventListener("focus", function () {
	searchEl.classList.add("focused");
	searchInputEL.setAttribute("placeholder", "통합검색");
});

searchInputEL.addEventListener("blur", function () {
	searchEl.classList.remove("focused");
	searchInputEL.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

window.addEventListener(
	"scroll",
	_.throttle(function () {
		console.log(window.scrollY);
		if (window.scrollY > 500) {
			// gsap.to(요소, 지속시간, 옵션);
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none",
			});
		} else {
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: "block",
			});
		}
	}, 300)
);
// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * 0.7, // 0.7, 1.4, 2.1, 2.8
		opacity: 1,
	});
});

// Swiper
new Swiper('.notice-line .swiper-container', {
	direction: 'vertical',
	autoplay: true,
	loop: true,
});
new Swiper('.promotion .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	loop: true,
	autoplay: {
		delay:3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.promotion .swiper-pagination',
		clickable: true,
	},
	navigation: {
		prevEl: '.promotion .swiper-prev',
		nextEl: '.promotion .swiper-next',
	},
});

// Promotion Toggle Btn
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
	isHidePromotion = !isHidePromotion
	if (isHidePromotion) {
		promotionEl.classList.add('hide');
	} else {
		promotionEl.classList.remove('hide');
	}
})

// 범위 내 랜덤 함수(소수점 2자리까지)
function random(min, max)	{
	return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
	gsap.to(selector, random(1.5, 2.5), {
		y: size,
		repeat: -1,
		yoyo: true,
		ease: Power1.easeInOut,
		delay: random(0, delay)
	});
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
	new ScrollMagic
		.Scene({
			triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
			triggerHook: .8
		})
		.SetClassToggle()
		.addTo();
})