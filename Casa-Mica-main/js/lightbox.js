const bodySelect = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalMainPicture = document.querySelector('#modal-main-picture');
const modalGallery = document.querySelector('#modal-gallery-pics');
const closeModalBtn = document.querySelector('.close');

let idName = ' ';

const createModalContent = function (mainPic, category) {
	clearModal();
	modalMainPicture.insertAdjacentHTML('afterbegin', mainPic);
	const picsArray = document.querySelectorAll(`.${category}-pic`);
	picsArray.forEach((picture) => {
		const markup = `<div class="pic">${picture.innerHTML}</div>`;
		modalGallery.insertAdjacentHTML('beforeend', markup);
	});
	modal.style.display = 'block';
};

const closeModal = function () {
	modal.style.display = 'none';
	clearModal();
	idName = ' ';
};

const clearModal = function () {
	modalMainPicture.innerHTML = '';
	modalGallery.innerHTML = ' ';
};

bodySelect.addEventListener('click', function (e) {
	const pic = e.target.closest('.pic');
	const idContainer = e.target.closest('.modal-item');
	if (!pic || !idContainer) return;
	idName = idContainer.id;
	createModalContent(pic.innerHTML, idName);
});

closeModalBtn.addEventListener('click', closeModal);

modalGallery.addEventListener('click', function (e) {
	const pic = e.target.closest('.pic');
	if (!pic) return;

	createModalContent(pic.innerHTML, idName);
});
