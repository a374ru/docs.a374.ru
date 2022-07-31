/**
 *  Словарь доступных страниц ссылок.
 * Добавили страницу – добавили строку в словарь.
 * 
 */
pageDict = {
	"dobro-day": "Сий День",
	// "fert-font":"О шрифте",
	"az": "Азъ",
	"vedi-documents": "Docs",
	"slovo-server": "Сервер",
	"kakw-colors": "Цветы",
	"az-assets": "Вложения",
	"glagol-git": "GIT",
	"billing": "Билинг",
	"pokoy-proval": "Провал",
	"buki-set": "Настройки",
	"az-peremennaya": "Переменная",
	"az-object": "Объект",
	"buki": "Соглашение",
	"buki-bukmarki": "Букмарки",
	"vedi-vim": "VIM",
	// "buki-problems-ts": "Проблемы",
	// "slovo-shell": "Шелл",
	"tako-type": "Типы данных",
	"search": "Поиск на"

}

/**
 * Ключ текущей просматриваемой страницы
 */
keyDay = "";

/**
 * Функция разбирает  URL текущей страницы
 * проверяет имя на присутствие в массиве 
 * 
 * @returns строку с именем текущей страницы.
 */


function namePage() {

	stringTabTitle = 'a374.ru';
	str = document.URL.split('/').pop().split('.')[0];
	if (str != "") {

		for (const key in pageDict) {
			if (Object.hasOwnProperty.call(pageDict, key)) {
				if (key === str) {

					keyDay = key;

					namePageTab = pageDict[key];

					stringTabTitle = `${namePageTab} ••• ${document.location.hostname}`;
				}

			}

		}
	}

	return stringTabTitle;
}

/**
 * Функция составляет меню из словаря
 * 
 * @returns HTML строку
 */
function toNavi() {

	counter = 1;
	htmlString = "";
	rnd = Math.floor(Math.random() * (5 - 2)) + 2;

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
		//Максимум и минимум включаются
	}

	for (const key in pageDict) {

		if (Object.hasOwnProperty.call(pageDict, key) && key != keyDay && counter % getRandomIntInclusive(5, 1) && counter < 10 && key != 'dobro-day') {
			const element = pageDict[key];
			htmlString += `<div class="navi-item"><a href="${key}">${element}</a> </div>`;
		}
		this.counter += 1;

	}

	cday = new Date().getDate();

	htmlString += `<div class="navi-item" id="day"><span id="dobro-day"><a href="dobro-day">День</a> </span><span class="number-day" id="number-day"><a href="https://a374ru.github.io/aprakos.ru/currentday/APRAKOS/index.html">${cday}</a></span></div><div class="navi-item" id="search"><a href="search-result">🔍</a></div>`
	return htmlString;

}

// Встраивает элемент в документ HTML-страницу
function navi() {
	document.title = namePage();
	document.getElementById('navi').innerHTML = toNavi();
}

navi();
count = 1;
function imgResize() {

	if (count % 2) {

		document.querySelector('img').style = 'transform: rotate(2deg); width: 100%; transition: .3s';

	} else {

		document.querySelector('img').style = 'transform: rotate(0deg)';

	}

	count = count + 1;


	console.log(count);

}

