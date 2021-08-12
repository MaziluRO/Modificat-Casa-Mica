window.onresize = window.onload = function () {
	const mq = window.matchMedia('(max-width: 425px)');

	if (mq.matches) {
		const dropMenus = document.querySelectorAll('.dropdown-menu');
		dropMenus.forEach((menu) =>
			menu.addEventListener('click', function (e) {
				menu.querySelector('.dropdown-list').classList.toggle('display-menu');
				console.log('click');
			})
		);
	}
};
