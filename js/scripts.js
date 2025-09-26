// window.addEventListener('load', (event) => {
// 	new cursoreffects.rainbowCursor();
// });

// $('.featherlight').featherlight();

var cursorEffect;
var themesArray = ['theme-land', 'theme-sea'];

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

$('html').removeClass();

if (localStorage.getItem('pageTheme') == null) {
	let randomTheme = Math.floor(Math.random() * themesArray.length);
	let randomNumber = Math.floor(Math.random() * 50);

	// RARE AND SPECIAL THEME
	if (randomNumber === 1) {
		console.log(
			"%cCONGRATS! You're lucky enough to be GREEN TODAY!",
			'background-color: green; color: white; font-style: bold; border: 1px solid limegreen; font-size: 14px; padding: 5px 10px; border-radius:8px;'
		);
		localStorage.setItem('pageTheme', 'theme-green');
	} else {
		localStorage.setItem('pageTheme', themesArray[randomTheme]);
	}
}

$('html').addClass(localStorage.getItem('pageTheme'));

$('.button-switch-theme').on('click', function () {
	$('html').removeClass();
	cursorEffect.destroy();
	let randomNumber = Math.floor(Math.random() * 50);

	if (localStorage.getItem('pageTheme') != 'theme-green') {
		if (randomNumber === 1) {
			console.log(
				"%cCONGRATS! You're lucky enough to be GREEN TODAY!",
				'background-color: green; color: white; font-style: bold; border: 1px solid limegreen; font-size: 14px; padding: 5px 10px; border-radius:8px;'
			);
			localStorage.setItem('pageTheme', 'theme-green');
			cursorEffect = new cursoreffects.bubbleCursor();
		} else {
			if (localStorage.getItem('pageTheme') == 'theme-land') {
				localStorage.setItem('pageTheme', 'theme-sea');
				cursorEffect = new cursoreffects.bubbleCursor();
			} else if (localStorage.getItem('pageTheme') == 'theme-sea') {
				localStorage.setItem('pageTheme', 'theme-land');
				cursorEffect = new cursoreffects.rainbowCursor();
			}
		}
	} else {
		localStorage.setItem('pageTheme', 'theme-land');
		cursorEffect = new cursoreffects.rainbowCursor();
	}

	$('html').addClass(localStorage.getItem('pageTheme'));

	window.scrollTo(0, 0);
});

$('.secret-green-backdoor-shhhh').on('click', function () {
	$('html').removeClass();
	cursorEffect.destroy();

	console.log(
		"%cYou found the secret green button. Shhh don't tell people about it.",
		'background-color: green; color: white; font-style: bold; border: 1px solid limegreen; font-size: 14px; padding: 5px 10px; border-radius:8px;'
	);
	localStorage.setItem('pageTheme', 'theme-green');
	cursorEffect = new cursoreffects.bubbleCursor();
	$('html').addClass(localStorage.getItem('pageTheme'));

	window.scrollTo(0, 0);
});

window.addEventListener('load', (event) => {
	if (localStorage.getItem('pageTheme') == 'theme-land') {
		cursorEffect = new cursoreffects.rainbowCursor();
	} else if (localStorage.getItem('pageTheme') == 'theme-sea') {
		cursorEffect = new cursoreffects.bubbleCursor();
	} else if (localStorage.getItem('pageTheme') == 'theme-green') {
		cursorEffect = new cursoreffects.bubbleCursor();
	}
});
