/** @format */

// Selecting Elements
const newAyahBtn = document.getElementById('new-ayah');
let bengali = document.getElementById('bn');
let english = document.getElementById('en');
let loader = document.querySelector('.loader-container');
let ayahContainer = document.getElementById('ayah-container');
let ayasInSura = [
	7,
	286,
	200,
	176,
	120,
	165,
	206,
	75,
	129,
	109,
	123,
	111,
	43,
	52,
	99,
	128,
	111,
	110,
	98,
	135,
	112,
	78,
	118,
	64,
	77,
	227,
	93,
	88,
	69,
	60,
	34,
	30,
	73,
	54,
	45,
	83,
	182,
	88,
	75,
	85,
	54,
	53,
	89,
	59,
	37,
	35,
	38,
	29,
	18,
	45,
	60,
	49,
	62,
	55,
	78,
	96,
	29,
	22,
	24,
	13,
	14,
	11,
	11,
	18,
	12,
	12,
	30,
	52,
	52,
	44,
	28,
	28,
	20,
	56,
	40,
	31,
	50,
	40,
	46,
	42,
	29,
	19,
	36,
	25,
	22,
	17,
	19,
	26,
	30,
	20,
	15,
	21,
	11,
	8,
	8,
	19,
	5,
	8,
	8,
	11,
	11,
	8,
	3,
	9,
	5,
	4,
	7,
	3,
	6,
	3,
	5,
	4,
	5,
	6,
];
let language = 'en';
let tid = 20;
// Fetching Data from API
const getAyah = (language, tid) => {
	loader.style.display = 'flex';
	let randomSura = Math.floor(Math.random() * 114 + 1);
	let randomAyah = Math.floor(
		Math.random() * parseInt(ayasInSura[randomSura - 1]) + 1,
	);

	console.log(`${randomSura}:${randomAyah}`);
	const url = `https://api.quran.com/api/v4/verses/by_key/${randomSura}:${randomAyah}?language=${language}&translations=${tid}`;
	fetch(url)
		.then((res) => res.json())
		.then((aya) => {
			showData(aya);
		});
};
const showData = ({ verse }) => {
	let ayah = document.getElementById('ayah');
	let verseNumber = document.getElementById('verse_number');
	ayah.innerHTML = verse.translations[0].text;
	verseNumber.innerHTML = verse.verse_key;
	loader.style.display = 'none';
	// console.log(verse, typeof verse);
	// const {translate} = aya;
};
newAyahBtn.addEventListener('click', () => getAyah(language, tid));
// Set Bangla Translation
bengali.addEventListener('click', () => {
	if (language === 'en') {
		language = 'bn';
		tid = 162;
		bengali.classList.add('active');
		english.classList.remove('active');
		getAyah(language, tid);
	}
});
// Set English Translation
english.addEventListener('click', () => {
	if (language === 'bn') {
		language = 'en';
		tid = 20;
		bengali.classList.remove('active');
		english.classList.add('active');
		getAyah(language, tid);
	}
});

window.addEventListener('load', () => {
	loader.style.display = 'none';
});
