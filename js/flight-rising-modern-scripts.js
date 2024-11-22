// ========== ARRAYS ==========

var websiteUrl = document.location.origin;

var colorsArray = [
	{
		id: 0,
		text: 'Maize',
		color: '#FFFDEA',
		textcolor: '#000'
	},
	{
		id: 1,
		text: 'Cream',
		color: '#FFEFDC',
		textcolor: '#000'
	},
	{
		id: 2,
		text: 'Antique',
		color: '#D8D6CD',
		textcolor: '#000'
	},
	{
		id: 3,
		text: 'White',
		color: '#FFFFFF',
		textcolor: '#000'
	},
	{
		id: 4,
		text: 'Moon',
		color: '#D8D7D8',
		textcolor: '#000'
	},
	{
		id: 5,
		text: 'Ice',
		color: '#DAE0F3',
		textcolor: '#000'
	},
	{
		id: 6,
		text: 'Orca',
		color: '#E1DFFF',
		textcolor: '#000'
	},
	{
		id: 7,
		text: 'Platinum',
		color: '#C8BECE',
		textcolor: '#000'
	},
	{
		id: 8,
		text: 'Silver',
		color: '#BBBABF',
		textcolor: '#000'
	},
	{
		id: 9,
		text: 'Dust',
		color: '#9D9D9F',
		textcolor: '#000'
	},
	{
		id: 10,
		text: 'Grey',
		color: '#808080',
		textcolor: '#000'
	},
	{
		id: 11,
		text: 'Smoke',
		color: '#9494A9',
		textcolor: '#000'
	},
	{
		id: 12,
		text: 'Gloom',
		color: '#545365',
		textcolor: '#FFF'
	},
	{
		id: 13,
		text: 'Lead',
		color: '#413C40',
		textcolor: '#FFF'
	}
];

var primaryGenesArray = [];

var secondaryGenesArray = [];

var tertiaryGenesArray = [];

var speciesArray = [
	{
		id: 0,
		text: 'Bogsneak',
		image: 'images/FR/bogsneak.png',
		rarity: 'uncommon'
	},
	{
		id: 1,
		text: 'Coatl',
		image: 'images/FR/coatl.png',
		rarity: 'rare'
	},
	{
		id: 2,
		text: 'Fae',
		image: 'images/FR/fae.png',
		rarity: 'plentiful'
	},
	{
		id: 3,
		text: 'Fathom',
		image: 'images/FR/fathom.png',
		rarity: 'uncommon'
	},
	{
		id: 4,
		text: 'Guardian',
		image: 'images/FR/guardian.png',
		rarity: 'plentiful'
	},
	{
		id: 5,
		text: 'Imperial',
		image: 'images/FR/imperial.png',
		rarity: 'limited'
	},
	{
		id: 6,
		text: 'Mirror',
		image: 'images/FR/mirror.png',
		rarity: 'plentiful'
	},
	{
		id: 7,
		text: 'Nocturne',
		image: 'images/FR/nocturne.png',
		rarity: 'limited'
	},
	{
		id: 8,
		text: 'Obelisk',
		image: 'images/FR/obelisk.png',
		rarity: 'uncommon'
	},
	{
		id: 9,
		text: 'Pearlcatcher',
		image: 'images/FR/pearlcatcher.png',
		rarity: 'common'
	},
	{
		id: 10,
		text: 'Ridgeback',
		image: 'images/FR/ridgeback.png',
		rarity: 'common'
	},
	{
		id: 11,
		text: 'Skydancer',
		image: 'images/FR/skydancer.png',
		rarity: 'uncommon'
	},
	{
		id: 12,
		text: 'Snapper',
		image: 'images/FR/snapper.png',
		rarity: 'common'
	},
	{
		id: 13,
		text: 'Spiral',
		image: 'images/FR/spiral.png',
		rarity: 'common'
	},
	{
		id: 14,
		text: 'Tundra',
		image: 'images/FR/tundra.png',
		rarity: 'plentiful'
	},
	{
		id: 15,
		text: 'Wildclaw',
		image: 'images/FR/wildclaw.png',
		rarity: 'rare'
	}
];

// ========== FORMATTERS ==========

function formatResultColors(state) {
	if (!state.id) {
		return state.text;
	}

	var $state = $('<div style="background:' + state.color + '; color:' + state.textcolor + ';"> ' + state.text + '</div>');

	return $state;
}

function formatSelectionColors(state) {
	if (!state.id) {
		return state.text;
	}

	var $state = $('<div><div></div></div>');

	// Use .text() instead of HTML string concatenation to avoid script injection issues
	$state.find('div').text(state.text);
	$state.find('div').attr('style', 'background:' + state.color + '; color:' + state.textcolor + ';');

	return $state;
}

function formatResultSpecies(state) {
	if (!state.id) {
		return state.text;
	}

	var $state = $('<div class="d-flex align-items-center"><img src="' + websiteUrl + '/' + state.image + '" class="img-dragon" /><span> ' + state.text + '</span></div>');
	return $state;
}

function formatSelectionSpecies(state) {
	if (!state.id) {
		return state.text;
	}

	var $state = $('<div class="d-flex align-items-center"><img class="img-dragon" /><span></span></div>');

	// Use .text() instead of HTML string concatenation to avoid script injection issues
	$state.find('span').text(state.text);
	$state.find('img').attr('src', websiteUrl + '/' + state.image);

	return $state;
}

// ========== FUNCTIONS ==========

$('input').on('keyup', function () {
	if (!$(this).val()) {
		$(this).removeClass('filled');
	} else {
		$(this).addClass('filled');
	}
});

$(document).ready(function () {
	$('#parent-one-specie').select2({
		placeholder: 'Specie',
		data: speciesArray,
		dropdownCssClass: 'specie-dropdown',
		selectionCssClass: 'specie-result',
		templateResult: formatResultSpecies,
		templateSelection: formatSelectionSpecies
	});
	$('#parent-one-primary-color').select2({
		placeholder: 'Primary color',
		data: colorsArray,
		dropdownCssClass: 'color-dropdown',
		selectionCssClass: 'color-result',
		templateResult: formatResultColors,
		templateSelection: formatSelectionColors
	});
});
