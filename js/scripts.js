// window.addEventListener('load', (event) => {
// 	new cursoreffects.rainbowCursor();
// });

var cursorEffect;
var themesArray = ['theme-land', 'theme-sea'];

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

$('html').removeClass();

if (localStorage.getItem('pageTheme') == null) {
	let randomTheme = Math.floor(Math.random() * themesArray.length);
	localStorage.setItem('pageTheme', themesArray[randomTheme]);
}

$('html').addClass(localStorage.getItem('pageTheme'));

$('.button-switch-theme').on('click', function () {
	$('html').removeClass();
	cursorEffect.destroy();
	if (localStorage.getItem('pageTheme') == 'theme-land') {
		localStorage.setItem('pageTheme', 'theme-sea');
		cursorEffect = new cursoreffects.bubbleCursor();
	} else if (localStorage.getItem('pageTheme') == 'theme-sea') {
		localStorage.setItem('pageTheme', 'theme-land');
		cursorEffect = new cursoreffects.rainbowCursor();
	}

	$('html').addClass(localStorage.getItem('pageTheme'));

	window.scrollTo(0, 0);
});

window.addEventListener('load', (event) => {
	if (localStorage.getItem('pageTheme') == 'theme-land') {
		cursorEffect = new cursoreffects.rainbowCursor();
	} else if (localStorage.getItem('pageTheme') == 'theme-sea') {
		cursorEffect = new cursoreffects.bubbleCursor();
	}
});
