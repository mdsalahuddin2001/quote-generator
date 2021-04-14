// Selecting Elements
const newAyahBtn = document.getElementById('new-ayah')
// Fetching Data from API
const getAyah = (language, tid) => {
  const url = `https://api.quran.com/api/v4/verses/random?language=${language}&translations=${tid}`
  fetch(url)
    .then((res) => res.json())
    .then((ayah) => console.log(ayah))
    .catch((e) => console.log(e))
}
newAyahBtn.addEventListener('click', () => getAyah(bn, 162))
