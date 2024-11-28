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
	},
	{
		id: 14,
		text: 'Shale',
		color: '#4D484F',
		textcolor: '#FFF'
	},
	{
		id: 15,
		text: 'Flint',
		color: '#636268',
		textcolor: '#FFF'
	},
	{
		id: 16,
		text: 'Charcoal',
		color: '#555555',
		textcolor: '#FFF'
	},
	{
		id: 17,
		text: 'Coal',
		color: '#4B4946',
		textcolor: '#FFF'
	},
	{
		id: 18,
		text: 'Oilslick',
		color: '#352B25',
		textcolor: '#FFF'
	},
	{
		id: 19,
		text: 'Black',
		color: '#333333',
		textcolor: '#FFF'
	},
	{
		id: 20,
		text: 'Obsidian',
		color: '#1D2224',
		textcolor: '#FFF'
	},
	{
		id: 21,
		text: 'Eldritch',
		color: '#252A25',
		textcolor: '#FFF'
	},
	{
		id: 22,
		text: 'Midnight',
		color: '#292B38',
		textcolor: '#FFF'
	},
	{
		id: 23,
		text: 'Shadow',
		color: '#3B2F45',
		textcolor: '#FFF'
	},
	{
		id: 24,
		text: 'Blackberry',
		color: '#4C2A4F',
		textcolor: '#FFF'
	},
	{
		id: 25,
		text: 'Mulberry',
		color: '#6E235D',
		textcolor: '#FFF'
	},
	{
		id: 26,
		text: 'Plum',
		color: '#863290',
		textcolor: '#FFF'
	},
	{
		id: 27,
		text: 'Wisteria',
		color: '#724D79',
		textcolor: '#FFF'
	},
	{
		id: 28,
		text: 'Thistle',
		color: '#8F7D8B',
		textcolor: '#FFF'
	},
	{
		id: 29,
		text: 'Fog',
		color: '#A593B0',
		textcolor: '#FFF'
	},
	{
		id: 30,
		text: 'Mist',
		color: '#E1CEFF',
		textcolor: '#000'
	},
	{
		id: 31,
		text: 'Lavender',
		color: '#CCA4E0',
		textcolor: '#000'
	},
	{
		id: 32,
		text: 'Heather',
		color: '#9777BD',
		textcolor: '#FFF'
	},
	{
		id: 33,
		text: 'Purple',
		color: '#A261CF',
		textcolor: '#FFF'
	},
	{
		id: 34,
		text: 'Orchid',
		color: '#D951FF',
		textcolor: '#FFF'
	},
	{
		id: 35,
		text: 'Amethyst',
		color: '#993BD0',
		textcolor: '#FFF'
	},
	{
		id: 36,
		text: 'Nightshade',
		color: '#792FB2',
		textcolor: '#FFF'
	},
	{
		id: 37,
		text: 'Violet',
		color: '#653F9C',
		textcolor: '#FFF'
	},
	{
		id: 38,
		text: 'Grape',
		color: '#560FBE',
		textcolor: '#FFF'
	},
	{
		id: 39,
		text: 'Royal',
		color: '#4D2D89',
		textcolor: '#FFF'
	},
	{
		id: 40,
		text: 'Eggplant',
		color: '#332B65',
		textcolor: '#FFF'
	},
	{
		id: 41,
		text: 'Iris',
		color: '#535195',
		textcolor: '#FFF'
	},
	{
		id: 42,
		text: 'Storm',
		color: '#757ADB',
		textcolor: '#FFF'
	},
	{
		id: 43,
		text: 'Twilight',
		color: '#474BA0',
		textcolor: '#FFF'
	},
	{
		id: 44,
		text: 'Indigo',
		color: '#2D237B',
		textcolor: '#FFF'
	},
	{
		id: 45,
		text: 'Sapphire',
		color: '#0D095B',
		textcolor: '#FFF'
	},
	{
		id: 46,
		text: 'Navy',
		color: '#212B5F',
		textcolor: '#FFF'
	},
	{
		id: 47,
		text: 'Cobalt',
		color: '#003584',
		textcolor: '#FFF'
	},
	{
		id: 48,
		text: 'Ultramarine',
		color: '#1D51E7',
		textcolor: '#FFF'
	},
	{
		id: 49,
		text: 'Blue',
		color: '#324BA9',
		textcolor: '#FFF'
	},
	{
		id: 50,
		text: 'Periwinkle',
		color: '#4967D5',
		textcolor: '#FFF'
	},
	{
		id: 51,
		text: 'Lapis',
		color: '#287CEF',
		textcolor: '#000'
	},
	{
		id: 52,
		text: 'Splash',
		color: '#6394DD',
		textcolor: '#000'
	},
	{
		id: 53,
		text: 'Cornflower',
		color: '#75A8FF',
		textcolor: '#000'
	},
	{
		id: 54,
		text: 'Sky',
		color: '#AEC8FF',
		textcolor: '#000'
	},
	{
		id: 55,
		text: 'Stonewash',
		color: '#7995C1',
		textcolor: '#000'
	},
	{
		id: 56,
		text: 'Overcast',
		color: '#454F69',
		textcolor: '#FFF'
	},
	{
		id: 57,
		text: 'Steel',
		color: '#556979',
		textcolor: '#000'
	},
	{
		id: 58,
		text: 'Denim',
		color: '#2F4557',
		textcolor: '#FFF'
	},
	{
		id: 59,
		text: 'Abyss',
		color: '#0B1F25',
		textcolor: '#FFF'
	},
	{
		id: 60,
		text: 'Phtalo',
		color: '#0B2D47',
		textcolor: '#FFF'
	},
	{
		id: 61,
		text: 'Azure',
		color: '#0A3D67',
		textcolor: '#FFF'
	},
	{
		id: 62,
		text: 'Caribbean',
		color: '#0086CE',
		textcolor: '#FFF'
	},
	{
		id: 63,
		text: 'Teal',
		color: '#2B768F',
		textcolor: '#FFF'
	},
	{
		id: 64,
		text: 'Cerulean',
		color: '#00B3D5',
		textcolor: '#FFF'
	},
	{
		id: 65,
		text: 'Cyan',
		color: '#00FFF0',
		textcolor: '#000'
	},
	{
		id: 66,
		text: 'Robin',
		color: '#9AEAEF',
		textcolor: '#000'
	},
	{
		id: 67,
		text: 'Aqua',
		color: '#73C4C4',
		textcolor: '#000'
	},
	{
		id: 68,
		text: 'Turquoise',
		color: '#3BA0A1',
		textcolor: '#000'
	},
	{
		id: 69,
		text: 'Spruce',
		color: '#8BBBB2',
		textcolor: '#000'
	},
	{
		id: 70,
		text: 'Pistachio',
		color: '#E2FFE6',
		textcolor: '#000'
	},
	{
		id: 71,
		text: 'Seafoam',
		color: '#B2E2BD',
		textcolor: '#000'
	},
	{
		id: 72,
		text: 'Mint',
		color: '#9AFFC7',
		textcolor: '#000'
	},
	{
		id: 73,
		text: 'Jade',
		color: '#61AB89',
		textcolor: '#000'
	},
	{
		id: 74,
		text: 'Spearmint',
		color: '#158E67',
		textcolor: '#000'
	},
	{
		id: 75,
		text: 'Thicket',
		color: '#005F49',
		textcolor: '#FFF'
	},
	{
		id: 76,
		text: 'Peacock',
		color: '#1F4739',
		textcolor: '#FFF'
	},
	{
		id: 77,
		text: 'Emerald',
		color: '#21613F',
		textcolor: '#FFF'
	},
	{
		id: 78,
		text: 'Shamrock',
		color: '#236925',
		textcolor: '#FFF'
	},
	{
		id: 79,
		text: 'Jungle',
		color: '#1E361A',
		textcolor: '#FFF'
	},
	{
		id: 80,
		text: 'Hunter',
		color: '#1D2715',
		textcolor: '#FFF'
	},
	{
		id: 81,
		text: 'Forest',
		color: '#425035',
		textcolor: '#FFF'
	},
	{
		id: 82,
		text: 'Camo',
		color: '#51694D',
		textcolor: '#FFF'
	},
	{
		id: 83,
		text: 'Algae',
		color: '#97AF8B',
		textcolor: '#000'
	},
	{
		id: 84,
		text: 'Swamp',
		color: '#687F67',
		textcolor: '#000'
	},
	{
		id: 85,
		text: 'Avocado',
		color: '#567D34',
		textcolor: '#000'
	},
	{
		id: 86,
		text: 'Green',
		color: '#629C3F',
		textcolor: '#000'
	},
	{
		id: 87,
		text: 'Fern',
		color: '#7FCE73',
		textcolor: '#000'
	},
	{
		id: 88,
		text: 'Mantis',
		color: '#99FF9C',
		textcolor: '#000'
	},
	{
		id: 89,
		text: 'Pear',
		color: '#8ECD55',
		textcolor: '#000'
	},
	{
		id: 90,
		text: 'Leaf',
		color: '#A5E32D',
		textcolor: '#000'
	},
	{
		id: 91,
		text: 'Radioactive',
		color: '#C6FF00',
		textcolor: '#000'
	},
	{
		id: 92,
		text: 'Honeydew',
		color: '#D0E673',
		textcolor: '#000'
	},
	{
		id: 93,
		text: 'Peridot',
		color: '#E8FFB5',
		textcolor: '#000'
	},
	{
		id: 94,
		text: 'Chartreuse',
		color: '#B4CD3D',
		textcolor: '#000'
	},
	{
		id: 95,
		text: 'Spring',
		color: '#9DA932',
		textcolor: '#000'
	},
	{
		id: 96,
		text: 'Crocodile',
		color: '#828335',
		textcolor: '#000'
	},
	{
		id: 97,
		text: 'Olive',
		color: '#697135',
		textcolor: '#FFF'
	},
	{
		id: 98,
		text: 'Murk',
		color: '#4B4521',
		textcolor: '#FFF'
	},
	{
		id: 99,
		text: 'Moss',
		color: '#7F7745',
		textcolor: '#FFF'
	},
	{
		id: 100,
		text: 'Goldenrod',
		color: '#BEA55D',
		textcolor: '#000'
	},
	{
		id: 101,
		text: 'Amber',
		color: '#C18E1B',
		textcolor: '#000'
	},
	{
		id: 102,
		text: 'Honey',
		color: '#D1B300',
		textcolor: '#000'
	},
	{
		id: 103,
		text: 'Lemon',
		color: '#FFE63B',
		textcolor: '#000'
	},
	{
		id: 104,
		text: 'Yellow',
		color: '#F9E255',
		textcolor: '#000'
	},
	{
		id: 105,
		text: 'Grapefruit',
		color: '#F7FF6F',
		textcolor: '#000'
	},
	{
		id: 106,
		text: 'Banana',
		color: '#FFEC80',
		textcolor: '#000'
	},
	{
		id: 107,
		text: 'Sanddollar',
		color: '#EBE7AE',
		textcolor: '#000'
	},
	{
		id: 108,
		text: 'Flaxen',
		color: '#FDE9AE',
		textcolor: '#000'
	},
	{
		id: 109,
		text: 'Ivory',
		color: '#FFD297',
		textcolor: '#000'
	},
	{
		id: 110,
		text: 'Buttercup',
		color: '#F6BF6B',
		textcolor: '#000'
	},
	{
		id: 111,
		text: 'Gold',
		color: '#E8AF49',
		textcolor: '#000'
	},
	{
		id: 112,
		text: 'Metals',
		color: '#D1B047',
		textcolor: '#000'
	},
	{
		id: 113,
		text: 'Marigold',
		color: '#FFB43B',
		textcolor: '#000'
	},
	{
		id: 114,
		text: 'Sunshine',
		color: '#FA912B',
		textcolor: '#000'
	},
	{
		id: 115,
		text: 'Saffron',
		color: '#FF8400',
		textcolor: '#000'
	},
	{
		id: 116,
		text: 'Sunset',
		color: '#FFA249',
		textcolor: '#000'
	},
	{
		id: 117,
		text: 'Peach',
		color: '#FFB577',
		textcolor: '#000'
	},
	{
		id: 118,
		text: 'Cantaloupe',
		color: '#FF984F',
		textcolor: '#000'
	},
	{
		id: 119,
		text: 'Orange',
		color: '#D5602B',
		textcolor: '#000'
	},
	{
		id: 120,
		text: 'Bronze',
		color: '#B2570D',
		textcolor: '#FFF'
	},
	{
		id: 121,
		text: 'Terracotta',
		color: '#B23B07',
		textcolor: '#FFF'
	},
	{
		id: 122,
		text: 'Carrot',
		color: '#FF5500',
		textcolor: '#000'
	},
	{
		id: 123,
		text: 'Fire',
		color: '#EF5C23',
		textcolor: '#000'
	},
	{
		id: 124,
		text: 'Pumpkin',
		color: '#FF6941',
		textcolor: '#000'
	},
	{
		id: 125,
		text: 'Tangerine',
		color: '#FF7360',
		textcolor: '#000'
	},
	{
		id: 126,
		text: 'Cinnamon',
		color: '#C05B39',
		textcolor: '#000'
	},
	{
		id: 127,
		text: 'Caramel',
		color: '#C67147',
		textcolor: '#000'
	},
	{
		id: 128,
		text: 'Sand',
		color: '#B27749',
		textcolor: '#000'
	},
	{
		id: 129,
		text: 'Tan',
		color: '#C49A71',
		textcolor: '#000'
	},
	{
		id: 130,
		text: 'Beige',
		color: '#CABBA2',
		textcolor: '#000'
	},
	{
		id: 131,
		text: 'Stone',
		color: '#827A64',
		textcolor: '#000'
	},
	{
		id: 132,
		text: 'Taupe',
		color: '#6D675B',
		textcolor: '#FFF'
	},
	{
		id: 133,
		text: 'Slate',
		color: '#564D48',
		textcolor: '#FFF'
	},
	{
		id: 134,
		text: 'Driftwood',
		color: '#776359',
		textcolor: '#FFF'
	},
	{
		id: 135,
		text: 'Latte',
		color: '#977B6D',
		textcolor: '#000'
	},
	{
		id: 136,
		text: 'Dirt',
		color: '#77493F',
		textcolor: '#FFF'
	},
	{
		id: 137,
		text: 'Clay',
		color: '#613F3D',
		textcolor: '#FFF'
	},
	{
		id: 138,
		text: 'Sable',
		color: '#57372D',
		textcolor: '#FFF'
	},
	{
		id: 139,
		text: 'Umber',
		color: '#2F1F1B',
		textcolor: '#FFF'
	},
	{
		id: 140,
		text: 'Soil',
		color: '#5A4534',
		textcolor: '#FFF'
	},
	{
		id: 141,
		text: 'Hickory',
		color: '#735739',
		textcolor: '#FFF'
	},
	{
		id: 142,
		text: 'Tarnish',
		color: '#855D33',
		textcolor: '#FFF'
	},
	{
		id: 143,
		text: 'Ginger',
		color: '#90532B',
		textcolor: '#FFF'
	},
	{
		id: 144,
		text: 'Brown',
		color: '#8D5B3E',
		textcolor: '#FFF'
	},
	{
		id: 145,
		text: 'Chocolate',
		color: '#563012',
		textcolor: '#FFF'
	},
	{
		id: 146,
		text: 'Auburn',
		color: '#7B3D1D',
		textcolor: '#FFF'
	},
	{
		id: 147,
		text: 'Copper',
		color: '#A44B29',
		textcolor: '#FFF'
	},
	{
		id: 148,
		text: 'Rust',
		color: '#8A3220',
		textcolor: '#FFF'
	},
	{
		id: 149,
		text: 'Tomato',
		color: '#BA311C',
		textcolor: '#FFF'
	},
	{
		id: 150,
		text: 'Vermillion',
		color: '#E22D17',
		textcolor: '#FFF'
	},
	{
		id: 151,
		text: 'Ruby',
		color: '#CD000F',
		textcolor: '#FFF'
	},
	{
		id: 152,
		text: 'Cherry',
		color: '#AA0025',
		textcolor: '#FFF'
	},
	{
		id: 153,
		text: 'Crimson',
		color: '#850012',
		textcolor: '#FFF'
	},
	{
		id: 154,
		text: 'Garnet',
		color: '#5B0F15',
		textcolor: '#FFF'
	},
	{
		id: 155,
		text: 'Sanguine',
		color: '#2F0003',
		textcolor: '#FFF'
	},
	{
		id: 156,
		text: 'Blood',
		color: '#451717',
		textcolor: '#FFF'
	},
	{
		id: 157,
		text: 'Maroon',
		color: '#652127',
		textcolor: '#FFF'
	},
	{
		id: 158,
		text: 'Berry',
		color: '#8B272D',
		textcolor: '#FFF'
	},
	{
		id: 159,
		text: 'Red',
		color: '#C1272D',
		textcolor: '#FFF'
	},
	{
		id: 160,
		text: 'Strawberry',
		color: '#DE3335',
		textcolor: '#FFF'
	},
	{
		id: 161,
		text: 'Cerise',
		color: '#A22929',
		textcolor: '#FFF'
	},
	{
		id: 162,
		text: 'Carmine',
		color: '#B13A3A',
		textcolor: '#FFF'
	},
	{
		id: 163,
		text: 'Brick',
		color: '#9A534D',
		textcolor: '#FFF'
	},
	{
		id: 164,
		text: 'Coral',
		color: '#CC6F6F',
		textcolor: '#000'
	},
	{
		id: 165,
		text: 'Blush',
		color: '#FFA2A2',
		textcolor: '#000'
	},
	{
		id: 166,
		text: 'Cottoncandy',
		color: '#EB7997',
		textcolor: '#000'
	},
	{
		id: 167,
		text: 'Watermelon',
		color: '#DB518D',
		textcolor: '#000'
	},
	{
		id: 168,
		text: 'Magenta',
		color: '#E934AA',
		textcolor: '#000'
	},
	{
		id: 169,
		text: 'Fuchsia',
		color: '#EC0089',
		textcolor: '#000'
	},
	{
		id: 170,
		text: 'Raspberry',
		color: '#8A0349',
		textcolor: '#FFF'
	},
	{
		id: 171,
		text: 'Wine',
		color: '#4D0F29',
		textcolor: '#FFF'
	},
	{
		id: 172,
		text: 'Mauve',
		color: '#9C4975',
		textcolor: '#FFF'
	},
	{
		id: 173,
		text: 'Pink',
		color: '#E77FBF',
		textcolor: '#000'
	},
	{
		id: 174,
		text: 'Bubblegum',
		color: '#EAA9FF',
		textcolor: '#000'
	},
	{
		id: 175,
		text: 'Rose',
		color: '#FFD6F6',
		textcolor: '#000'
	},
	{
		id: 176,
		text: 'Pearl',
		color: '#FBEDF9',
		textcolor: '#000'
	}
];

var primaryGenesArray = [
	{
		id: 0,
		itemId: 6,
		text: 'Bar',
		rarity: 'uncommon'
	},
	{
		id: 1,
		itemId: 0,
		text: 'Basic',
		rarity: 'plentiful'
	},
	{
		id: 2,
		itemId: 0,
		text: 'Boa',
		rarity: 'uncommon'
	},
	{
		id: 3,
		itemId: 0,
		text: 'Boulder',
		rarity: 'limited'
	},
	{
		id: 4,
		itemId: 0,
		text: 'Cherub',
		rarity: 'uncommon'
	},
	{
		id: 5,
		itemId: 0,
		text: 'Chorus',
		rarity: 'uncommon'
	},
	{
		id: 6,
		itemId: 0,
		text: 'Chrysocolla',
		rarity: 'limited'
	},
	{
		id: 7,
		itemId: 0,
		text: 'Cinder',
		rarity: 'uncommon'
	},
	{
		id: 8,
		itemId: 0,
		text: 'Clown',
		rarity: 'common'
	},
	{
		id: 9,
		itemId: 0,
		text: 'Crystal',
		rarity: 'rare'
	},
	{
		id: 10,
		itemId: 0,
		text: 'Fade',
		rarity: 'common'
	},
	{
		id: 11,
		itemId: 0,
		text: 'Falcon',
		rarity: 'common'
	},
	{
		id: 12,
		itemId: 0,
		text: 'Fern',
		rarity: 'limited'
	},
	{
		id: 13,
		itemId: 0,
		text: 'Flaunt',
		rarity: 'uncommon'
	},
	{
		id: 14,
		itemId: 0,
		text: 'Giraffe',
		rarity: 'uncommon'
	},
	{
		id: 15,
		itemId: 0,
		text: 'Ground',
		rarity: 'limited'
	},
	{
		id: 16,
		itemId: 0,
		text: 'Harlequin',
		rarity: 'rare'
	},
	{
		id: 17,
		itemId: 0,
		text: 'Iridescent',
		rarity: 'rare'
	},
	{
		id: 18,
		itemId: 0,
		text: 'Jaguar',
		rarity: 'uncommon'
	},
	{
		id: 19,
		itemId: 0,
		text: 'Jupiter',
		rarity: 'uncommon'
	},
	{
		id: 20,
		itemId: 0,
		text: 'Laced',
		rarity: 'common'
	},
	{
		id: 21,
		itemId: 0,
		text: 'Leopard',
		rarity: 'common'
	},
	{
		id: 22,
		itemId: 0,
		text: 'Lionfish',
		rarity: 'uncommon'
	},
	{
		id: 23,
		itemId: 0,
		text: 'Metallic',
		rarity: 'rare'
	},
	{
		id: 24,
		itemId: 0,
		text: 'Mosaic',
		rarity: 'uncommon'
	},
	{
		id: 25,
		itemId: 0,
		text: 'Orb',
		rarity: 'limited'
	},
	{
		id: 26,
		itemId: 0,
		text: 'Petals',
		rarity: 'rare'
	},
	{
		id: 27,
		itemId: 0,
		text: 'Petrified',
		rarity: 'rare'
	},
	{
		id: 28,
		itemId: 0,
		text: 'Pharaoh',
		rarity: 'rare'
	},
	{
		id: 29,
		itemId: 0,
		text: 'Piebald',
		rarity: 'common'
	},
	{
		id: 30,
		itemId: 0,
		text: 'Pinstripe',
		rarity: 'limited'
	},
	{
		id: 31,
		itemId: 0,
		text: 'Poison',
		rarity: 'limited'
	},
	{
		id: 32,
		itemId: 0,
		text: 'Python',
		rarity: 'limited'
	},
	{
		id: 33,
		itemId: 0,
		text: 'Ribbon',
		rarity: 'uncommon'
	},
	{
		id: 34,
		itemId: 0,
		text: 'Ripple',
		rarity: 'uncommon'
	},
	{
		id: 35,
		itemId: 0,
		text: 'Savanna',
		rarity: 'common'
	},
	{
		id: 36,
		itemId: 0,
		text: 'Skink',
		rarity: 'limited'
	},
	{
		id: 37,
		itemId: 0,
		text: 'Slime',
		rarity: 'limited'
	},
	{
		id: 38,
		itemId: 0,
		text: 'Speckle',
		rarity: 'common'
	},
	{
		id: 39,
		itemId: 0,
		text: 'Starmap',
		rarity: 'rare'
	},
	{
		id: 40,
		itemId: 0,
		text: 'Stitched',
		rarity: 'limited'
	},
	{
		id: 41,
		itemId: 0,
		text: 'Swirl',
		rarity: 'common'
	},
	{
		id: 42,
		itemId: 0,
		text: 'Tapir',
		rarity: 'common'
	},
	{
		id: 43,
		itemId: 0,
		text: 'Tide',
		rarity: 'limited'
	},
	{
		id: 44,
		itemId: 0,
		text: 'Tiger',
		rarity: 'common'
	},
	{
		id: 45,
		itemId: 0,
		text: 'Vipera',
		rarity: 'uncommon'
	},
	{
		id: 46,
		itemId: 0,
		text: 'Wasp',
		rarity: 'rare'
	}
];

var secondaryGenesArray = [
	{
		id: 0,
		itemId: 0,
		text: 'Alloy',
		rarity: 'rare'
	},
	{
		id: 1,
		itemId: 0,
		text: 'Basic',
		rarity: 'plentiful'
	},
	{
		id: 2,
		itemId: 0,
		text: 'Bee',
		rarity: 'rare'
	},
	{
		id: 3,
		itemId: 0,
		text: 'Blaze',
		rarity: 'uncommon'
	},
	{
		id: 4,
		itemId: 0,
		text: 'Blend',
		rarity: 'common'
	},
	{
		id: 5,
		itemId: 0,
		text: 'Breakup',
		rarity: 'uncommon'
	},
	{
		id: 6,
		itemId: 0,
		text: 'Butterfly',
		rarity: 'rare'
	},
	{
		id: 7,
		itemId: 0,
		text: 'Choir',
		rarity: 'uncommon'
	},
	{
		id: 8,
		itemId: 0,
		text: 'Clouded',
		rarity: 'common'
	},
	{
		id: 9,
		itemId: 0,
		text: 'Constellation',
		rarity: 'rare'
	},
	{
		id: 10,
		itemId: 0,
		text: 'Current',
		rarity: 'uncommon'
	},
	{
		id: 11,
		itemId: 0,
		text: 'Daub',
		rarity: 'uncommon'
	},
	{
		id: 12,
		itemId: 0,
		text: 'Edged',
		rarity: 'common'
	},
	{
		id: 13,
		itemId: 0,
		text: 'Eel',
		rarity: 'limited'
	},
	{
		id: 14,
		itemId: 0,
		text: 'Eye Spots',
		rarity: 'common'
	},
	{
		id: 15,
		itemId: 0,
		text: 'Facet',
		rarity: 'rare'
	},
	{
		id: 16,
		itemId: 0,
		text: 'Fissure',
		rarity: 'limited'
	},
	{
		id: 17,
		itemId: 0,
		text: 'Flair',
		rarity: 'uncommon'
	},
	{
		id: 18,
		itemId: 0,
		text: 'Foam',
		rarity: 'limited'
	},
	{
		id: 19,
		itemId: 0,
		text: 'Freckle',
		rarity: 'common'
	},
	{
		id: 20,
		itemId: 0,
		text: 'Hex',
		rarity: 'uncommon'
	},
	{
		id: 21,
		itemId: 0,
		text: 'Hypnotic',
		rarity: 'uncommon'
	},
	{
		id: 22,
		itemId: 0,
		text: 'Jester',
		rarity: 'rare'
	},
	{
		id: 23,
		itemId: 0,
		text: 'Lode',
		rarity: 'rare'
	},
	{
		id: 24,
		itemId: 0,
		text: 'Malachite',
		rarity: 'limited'
	},
	{
		id: 25,
		itemId: 0,
		text: 'Marbled',
		rarity: 'common'
	},
	{
		id: 26,
		itemId: 0,
		text: 'Morph',
		rarity: 'limited'
	},
	{
		id: 27,
		itemId: 0,
		text: 'Myrid',
		rarity: 'limited'
	},
	{
		id: 28,
		itemId: 0,
		text: 'Noxtide',
		rarity: 'uncommon'
	},
	{
		id: 29,
		itemId: 0,
		text: 'Paint',
		rarity: 'common'
	},
	{
		id: 30,
		itemId: 0,
		text: 'Paisley',
		rarity: 'limited'
	},
	{
		id: 31,
		itemId: 0,
		text: 'Patchwork',
		rarity: 'limited'
	},
	{
		id: 32,
		itemId: 0,
		text: 'Peregrine',
		rarity: 'common'
	},
	{
		id: 33,
		itemId: 0,
		text: 'Rosette',
		rarity: 'uncommon'
	},
	{
		id: 34,
		itemId: 0,
		text: 'Saddle',
		rarity: 'uncommon'
	},
	{
		id: 35,
		itemId: 0,
		text: 'Safari',
		rarity: 'common'
	},
	{
		id: 36,
		itemId: 0,
		text: 'Sarcophagus',
		rarity: 'rare'
	},
	{
		id: 37,
		itemId: 0,
		text: 'Saturn',
		rarity: 'uncommon'
	},
	{
		id: 38,
		itemId: 0,
		text: 'Seraph',
		rarity: 'uncommon'
	},
	{
		id: 39,
		itemId: 0,
		text: 'Shimmer',
		rarity: 'rare'
	},
	{
		id: 40,
		itemId: 0,
		text: 'Sludge',
		rarity: 'limited'
	},
	{
		id: 41,
		itemId: 0,
		text: 'Spinner',
		rarity: 'limited'
	},
	{
		id: 42,
		itemId: 0,
		text: 'Striation',
		rarity: 'common'
	},
	{
		id: 43,
		itemId: 0,
		text: 'Stripe',
		rarity: 'common'
	},
	{
		id: 44,
		itemId: 0,
		text: 'Toxin',
		rarity: 'limited'
	},
	{
		id: 45,
		itemId: 0,
		text: 'Trail',
		rarity: 'limited'
	},
	{
		id: 46,
		itemId: 0,
		text: 'Weaver',
		rarity: 'limited'
	}
];

var tertiaryGenesArray = [
	{
		id: 0,
		itemId: 0,
		text: 'Basic',
		rarity: 'plentiful'
	},
	{
		id: 1,
		itemId: 0,
		text: 'Capsule',
		rarity: 'limited'
	},
	{
		id: 2,
		itemId: 0,
		text: 'Circuit',
		rarity: 'rare'
	},
	{
		id: 3,
		itemId: 0,
		text: 'Contour',
		rarity: 'common'
	},
	{
		id: 4,
		itemId: 0,
		text: 'Crackle',
		rarity: 'uncommon'
	},
	{
		id: 5,
		itemId: 0,
		text: 'Filigree',
		rarity: 'rare'
	},
	{
		id: 6,
		itemId: 0,
		text: 'Firebreather',
		rarity: 'limited'
	},
	{
		id: 7,
		itemId: 0,
		text: 'Firefly',
		rarity: 'limited'
	},
	{
		id: 8,
		itemId: 0,
		text: 'Flecks',
		rarity: 'limited'
	},
	{
		id: 9,
		itemId: 0,
		text: 'Gembond',
		rarity: 'uncommon'
	},
	{
		id: 10,
		itemId: 0,
		text: 'Ghost',
		rarity: 'uncommon'
	},
	{
		id: 11,
		itemId: 0,
		text: 'Glimmer',
		rarity: 'rare'
	},
	{
		id: 12,
		itemId: 0,
		text: 'Glowtail',
		rarity: 'rare'
	},
	{
		id: 13,
		itemId: 0,
		text: 'Keel',
		rarity: 'limited'
	},
	{
		id: 14,
		itemId: 0,
		text: 'Koi',
		rarity: 'rare'
	},
	{
		id: 15,
		itemId: 0,
		text: 'Lace',
		rarity: 'common'
	},
	{
		id: 16,
		itemId: 0,
		text: 'Okapi',
		rarity: 'uncommon'
	},
	{
		id: 17,
		itemId: 0,
		text: 'Opal',
		rarity: 'rare'
	},
	{
		id: 18,
		itemId: 0,
		text: 'Peacock',
		rarity: 'common'
	},
	{
		id: 19,
		itemId: 0,
		text: 'Points',
		rarity: 'common'
	},
	{
		id: 20,
		itemId: 0,
		text: 'Polkadot',
		rarity: 'limited'
	},
	{
		id: 21,
		itemId: 0,
		text: 'Ringlet',
		rarity: 'uncommon'
	},
	{
		id: 22,
		itemId: 0,
		text: 'Runes',
		rarity: 'uncommon'
	},
	{
		id: 23,
		itemId: 0,
		text: 'Scales',
		rarity: 'limited'
	},
	{
		id: 24,
		itemId: 0,
		text: 'Smirch',
		rarity: 'limited'
	},
	{
		id: 25,
		itemId: 0,
		text: 'Smoke',
		rarity: 'uncommon'
	},
	{
		id: 26,
		itemId: 0,
		text: 'Soap',
		rarity: 'rare'
	},
	{
		id: 27,
		itemId: 0,
		text: 'Sparkle',
		rarity: 'uncommon'
	},
	{
		id: 28,
		itemId: 0,
		text: 'Spine',
		rarity: 'uncommon'
	},
	{
		id: 29,
		itemId: 0,
		text: 'Stained',
		rarity: 'rare'
	},
	{
		id: 30,
		itemId: 0,
		text: 'Thylacine',
		rarity: 'common'
	},
	{
		id: 31,
		itemId: 0,
		text: 'Underbelly',
		rarity: 'common'
	},
	{
		id: 32,
		itemId: 0,
		text: 'Veined',
		rarity: 'limited'
	},
	{
		id: 33,
		itemId: 0,
		text: 'Wish',
		rarity: 'rare'
	}
];

var speciesArray = [
	{
		id: 0,
		text: 'Bogsneak',
		image: 'images/FR/species/bogsneak.png',
		rarity: 'uncommon'
	},
	{
		id: 1,
		text: 'Coatl',
		image: 'images/FR/species/coatl.png',
		rarity: 'rare'
	},
	{
		id: 2,
		text: 'Fae',
		image: 'images/FR/species/fae.png',
		rarity: 'plentiful'
	},
	{
		id: 3,
		text: 'Fathom',
		image: 'images/FR/species/fathom.png',
		rarity: 'uncommon'
	},
	{
		id: 4,
		text: 'Guardian',
		image: 'images/FR/species/guardian.png',
		rarity: 'plentiful'
	},
	{
		id: 5,
		text: 'Imperial',
		image: 'images/FR/species/imperial.png',
		rarity: 'limited'
	},
	{
		id: 6,
		text: 'Mirror',
		image: 'images/FR/species/mirror.png',
		rarity: 'plentiful'
	},
	{
		id: 7,
		text: 'Nocturne',
		image: 'images/FR/species/nocturne.png',
		rarity: 'limited'
	},
	{
		id: 8,
		text: 'Obelisk',
		image: 'images/FR/species/obelisk.png',
		rarity: 'uncommon'
	},
	{
		id: 9,
		text: 'Pearlcatcher',
		image: 'images/FR/species/pearlcatcher.png',
		rarity: 'common'
	},
	{
		id: 10,
		text: 'Ridgeback',
		image: 'images/FR/species/ridgeback.png',
		rarity: 'common'
	},
	{
		id: 11,
		text: 'Skydancer',
		image: 'images/FR/species/skydancer.png',
		rarity: 'uncommon'
	},
	{
		id: 12,
		text: 'Snapper',
		image: 'images/FR/species/snapper.png',
		rarity: 'common'
	},
	{
		id: 13,
		text: 'Spiral',
		image: 'images/FR/species/spiral.png',
		rarity: 'common'
	},
	{
		id: 14,
		text: 'Tundra',
		image: 'images/FR/species/tundra.png',
		rarity: 'plentiful'
	},
	{
		id: 15,
		text: 'Wildclaw',
		image: 'images/FR/species/wildclaw.png',
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

function formatResultGenes(state) {
	if (!state.id) {
		return state.text;
	}

	var $state = $('<div class="d-flex align-items-center"><span> ' + state.text + '</span></div>');
	return $state;
}
function formatSelectionGenes(state) {
	if (!state.id) {
		return state.text;
	}

	var $state = $('<div class="d-flex align-items-center"><span></span></div>');

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
	$('#parent-one-primary-gene').select2({
		placeholder: 'Primary gene',
		data: primaryGenesArray,
		dropdownCssClass: 'gene-dropdown',
		selectionCssClass: 'gene-result',
		templateResult: formatResultGenes,
		templateSelection: formatSelectionGenes
	});
	$('#parent-one-secondary-color').select2({
		placeholder: 'Secondary color',
		data: colorsArray,
		dropdownCssClass: 'color-dropdown',
		selectionCssClass: 'color-result',
		templateResult: formatResultColors,
		templateSelection: formatSelectionColors
	});
	$('#parent-one-secondary-gene').select2({
		placeholder: 'Secondary gene',
		data: secondaryGenesArray,
		dropdownCssClass: 'gene-dropdown',
		selectionCssClass: 'gene-result',
		templateResult: formatResultGenes,
		templateSelection: formatSelectionGenes
	});
	$('#parent-one-tertiary-color').select2({
		placeholder: 'Tertiary color',
		data: colorsArray,
		dropdownCssClass: 'color-dropdown',
		selectionCssClass: 'color-result',
		templateResult: formatResultColors,
		templateSelection: formatSelectionColors
	});
	$('#parent-one-tertiary-gene').select2({
		placeholder: 'Tertiary gene',
		data: tertiaryGenesArray,
		dropdownCssClass: 'gene-dropdown',
		selectionCssClass: 'gene-result',
		templateResult: formatResultGenes,
		templateSelection: formatSelectionGenes
	});

	$('#parent-two-specie').select2({
		placeholder: 'Specie',
		data: speciesArray,
		dropdownCssClass: 'specie-dropdown',
		selectionCssClass: 'specie-result',
		templateResult: formatResultSpecies,
		templateSelection: formatSelectionSpecies
	});
	$('#parent-two-primary-color').select2({
		placeholder: 'Primary color',
		data: colorsArray,
		dropdownCssClass: 'color-dropdown',
		selectionCssClass: 'color-result',
		templateResult: formatResultColors,
		templateSelection: formatSelectionColors
	});
	$('#parent-two-primary-gene').select2({
		placeholder: 'Primary gene',
		data: primaryGenesArray,
		dropdownCssClass: 'gene-dropdown',
		selectionCssClass: 'gene-result',
		templateResult: formatResultGenes,
		templateSelection: formatSelectionGenes
	});
	$('#parent-two-secondary-color').select2({
		placeholder: 'Secondary color',
		data: colorsArray,
		dropdownCssClass: 'color-dropdown',
		selectionCssClass: 'color-result',
		templateResult: formatResultColors,
		templateSelection: formatSelectionColors
	});
	$('#parent-two-secondary-gene').select2({
		placeholder: 'Secondary gene',
		data: secondaryGenesArray,
		dropdownCssClass: 'gene-dropdown',
		selectionCssClass: 'gene-result',
		templateResult: formatResultGenes,
		templateSelection: formatSelectionGenes
	});
	$('#parent-two-tertiary-color').select2({
		placeholder: 'Tertiary color',
		data: colorsArray,
		dropdownCssClass: 'color-dropdown',
		selectionCssClass: 'color-result',
		templateResult: formatResultColors,
		templateSelection: formatSelectionColors
	});
	$('#parent-two-tertiary-gene').select2({
		placeholder: 'Tertiary gene',
		data: tertiaryGenesArray,
		dropdownCssClass: 'gene-dropdown',
		selectionCssClass: 'gene-result',
		templateResult: formatResultGenes,
		templateSelection: formatSelectionGenes
	});
});

// ========== ACTIONS ==========

$('#generateBreedingChart').on('click', function () { 

	var parentOne = {
		'name' : $('#parent-one-name').val(),
		'specie' : speciesArray.find(specie => specie.id == $('#parent-one-specie').val()),
		'primary-color' : colorsArray.find(color => color.id == $('#parent-one-primary-color').val()),
		'primary-gene' : primaryGenesArray.find(gene => gene.id == $('#parent-one-primary-gene').val()),
		'secondary-color' : colorsArray.find(color => color.id == $('#parent-one-secondary-color').val()),
		'secondary-gene' : secondaryGenesArray.find(gene => gene.id == $('#parent-one-secondary-gene').val()),
		'tertiary-color' : colorsArray.find(color => color.id == $('#parent-one-tertiary-color').val()),
		'tertiary-gene' : tertiaryGenesArray.find(gene => gene.id == $('#parent-one-tertiary-gene').val())
	};

	var parentTwo = {
		'name' : $('#parent-two-name').val(),
		'specie' : speciesArray.find(specie => specie.id == $('#parent-two-specie').val()),
		'primary-color' : colorsArray.find(color => color.id == $('#parent-two-primary-color').val()),
		'primary-gene' : primaryGenesArray.find(gene => gene.id == $('#parent-two-primary-gene').val()),
		'secondary-color' : colorsArray.find(color => color.id == $('#parent-two-secondary-color').val()),
		'secondary-gene' : secondaryGenesArray.find(gene => gene.id == $('#parent-two-secondary-gene').val()),
		'tertiary-color' : colorsArray.find(color => color.id == $('#parent-two-tertiary-color').val()),
		'tertiary-gene' : tertiaryGenesArray.find(gene => gene.id == $('#parent-two-tertiary-gene').val())
	};

	$('#parentOneResult .name strong').text(parentOne['name']);
	$('#parentOneResult img').attr('src', websiteUrl + '/' + parentOne['specie']['image']);

	$('#parentOneResult .primary-color .color-square').css('background-color', parentOne['primary-color']['color']);
	$('#parentOneResult .primary-color .color-name').text(parentOne['primary-color']['text']);
	$('#parentOneResult .primary-gene .gene-name').text(parentOne['primary-gene']['text']);

	$('#parentOneResult .secondary-color .color-square').css('background-color', parentOne['secondary-color']['color']);
	$('#parentOneResult .secondary-color .color-name').text(parentOne['secondary-color']['text']);
	$('#parentOneResult .secondary-gene .gene-name').text(parentOne['secondary-gene']['text']);

	$('#parentOneResult .tertiary-color .color-square').css('background-color', parentOne['tertiary-color']['color']);
	$('#parentOneResult .tertiary-color .color-name').text(parentOne['tertiary-color']['text']);
	$('#parentOneResult .tertiary-gene .gene-name').text(parentOne['tertiary-gene']['text']);



	$('#parentTwoResult .name strong').text(parentTwo['name']);
	$('#parentTwoResult img').attr('src', websiteUrl + '/' + parentTwo['specie']['image']);

	$('#parentTwoResult .primary-color .color-square').css('background-color', parentTwo['primary-color']['color']);
	$('#parentTwoResult .primary-color .color-name').text(parentTwo['primary-color']['text']);
	$('#parentTwoResult .primary-gene .gene-name').text(parentTwo['primary-gene']['text']);

	$('#parentTwoResult .secondary-color .color-square').css('background-color', parentTwo['secondary-color']['color']);
	$('#parentTwoResult .secondary-color .color-name').text(parentTwo['secondary-color']['text']);
	$('#parentTwoResult .secondary-gene .gene-name').text(parentTwo['secondary-gene']['text']);

	$('#parentTwoResult .tertiary-color .color-square').css('background-color', parentTwo['tertiary-color']['color']);
	$('#parentTwoResult .tertiary-color .color-name').text(parentTwo['tertiary-color']['text']);
	$('#parentTwoResult .tertiary-gene .gene-name').text(parentTwo['tertiary-gene']['text']);

	if (parentOne['primary-color']['id'] <= parentTwo['primary-color']['id']) {
		for (var i = parentOne['primary-color']['id']; i <= parentTwo['primary-color']['id']; i++) { 
			$('.results-block .colors-list.primary').append('<div class="color-square" style="background:' + colorsArray[i]['color'] + ';"></div>');
		}
	}
	else { 
		for (var i = parentTwo['primary-color']['id']; i <= parentOne['primary-color']['id']; i++) { 
			$('.results-block .colors-list.primary').append('<div class="color-square" style="background:' + colorsArray[i]['color'] + ';"></div>');
		}
	}

	if (parentOne['secondary-color']['id'] <= parentTwo['secondary-color']['id']) {
		for (var i = parentOne['secondary-color']['id']; i <= parentTwo['secondary-color']['id']; i++) { 
			$('.results-block .colors-list.secondary').append('<div class="color-square" style="background:' + colorsArray[i]['color'] + ';"></div>');
		}
	}
	else { 
		for (var i = parentTwo['secondary-color']['id']; i <= parentOne['secondary-color']['id']; i++) {
			$('.results-block .colors-list.secondary').append('<div class="color-square" style="background:' + colorsArray[i]['color'] + ';"></div>');
		}
	}

	if (parentOne['tertiary-color']['id'] <= parentTwo['tertiary-color']['id']) {
		for (var i = parentOne['tertiary-color']['id']; i <= parentTwo['tertiary-color']['id']; i++) { 
			$('.results-block .colors-list.tertiary').append('<div class="color-square" style="background:' + colorsArray[i]['color'] + ';"></div>');
		}
	}
	else { 
		for (var i = parentTwo['tertiary-color']['id']; i <= parentOne['tertiary-color']['id']; i++) { 
			$('.results-block .colors-list.tertiary').append('<div class="color-square" style="background:' + colorsArray[i]['color'] + ';"></div>');
		}
	}
});