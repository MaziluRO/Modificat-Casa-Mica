const slides = document.querySelectorAll('.carousel__slide');
const nextBtn = document.querySelector('.right-btn');
const prevBtn = document.querySelector('.left-btn');
const dotsNav = document.querySelector('.carousel__nav');
const dots = document.querySelectorAll('.carousel__indicator');

let curSlide = 0;
const maxSlide = slides.length;

const activateDot = function (slide) {
	dots.forEach((dot) => dot.classList.remove('current-slide'));

	document
		.querySelector(`.carousel__indicator[data-slide="${slide}"]`)
		.classList.add('current-slide');
};

const goToSlide = function (slide) {
	slides.forEach(
		(s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
	);
};
setInterval(function () {
	nextSlide();
}, 6000);
// Next slide
const nextSlide = function () {
	if (curSlide === maxSlide - 1) {
		curSlide = 0;
	} else {
		curSlide++;
	}

	goToSlide(curSlide);
	activateDot(curSlide);
};

//Prev slide
const prevSlide = function () {
	if (curSlide === 0) {
		curSlide = maxSlide - 1;
	} else {
		curSlide--;
	}
	goToSlide(curSlide);
	activateDot(curSlide);
};

const init = function () {
	goToSlide(0);
	activateDot(0);
};
init();

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
	if (e.key === 'ArrowLeft') prevSlide();
	e.key === 'ArrowRight' && nextSlide();
});

dotsNav.addEventListener('click', function (e) {
	if (e.target.classList.contains('carousel__indicator')) {
		const { slide } = e.target.dataset;
		goToSlide(slide);
		activateDot(slide);
	}
});
