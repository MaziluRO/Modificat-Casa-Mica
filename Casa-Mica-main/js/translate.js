/*const translateDic = {
	showcase_title_ro: 'Casa Departe De Casa',
	showcase_title_en: 'Home Away From Home',
};*/

const translateDic = {
	showcase_title: { ro: 'Casa Departe De Casa', en: 'Home Away From Home' },
	book_room_btn: { ro: 'Rezerva Camera', en: 'Book Room' },
};

let translateThis = false;

const btnTranslate = document.querySelector('.translate-btn');
const translateArray = document.querySelectorAll('.translate-text');
console.log(translateArray);

btnTranslate.addEventListener('click', function () {
	translateThis = !translateThis;
	translateArray.forEach((text) => {
		const textID = text.id;
		//console.log(text.id);
		text.innerText = translateThis
			? translateDic[`${textID}`].ro
			: translateDic[`${textID}`].en;
	});
});
