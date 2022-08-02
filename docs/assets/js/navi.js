/**
 *  Словарь доступных страниц ссылок.
 * Добавили страницу – добавили строку в словарь.
 * 
 */
pageDict = {
	"dobro-day": "Сий День",
	"az": "Азъ",
	"fert-font": "О шрифте",
	"glagol-git": "GIT",
	"buki-set": "Настройки",
	"az-assets": "Вложения",
	"vedi-documents": "Docs",
	"billing": "Билинг",
	"vedi-vim": "VIM",
	"pokoy-proval": "Провал",
	"az-peremennaya": "Переменная",
	"az-object": "Объект",
	"buki": "Соглашение",
	"buki-bukmarki": "Букмарки",
	// "buki-problems-ts": "Проблемы",
	// "slovo-shell": "Шелл",
	"slovo-server": "Сервер",
	"tako-type": "Типы данных",
	"kakw-colors": "Цветы",
	"search": "Поиск на",
	"navi-page": "Оглавление",

}

navi_page = 'navi-page';

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
				if (key === str.substring(0, key.length)) {

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

	htmlString += `<div class="navi-item" id="day"><span id="dobro-day"><a href="dobro-day">День</a> </span><span class="number-day" id="number-day"><a href="https://a374ru.github.io/aprakos.ru/currentday/APRAKOS/index.html">${cday}</a></span></div><div class="navi-item" title="ПОИСК И НАВИГАЦИЯ" id="navi-page-search"><a href="navi-page#navi">√</a></div>`
	return htmlString;

}

// Встраивает элемент в документ HTML-страницу
function navi() {
	document.title = namePage();
	document.getElementById('navi').innerHTML = toNavi();
}

navi();

function rsz(rsz = 100, speed = 0.1) {

	let array = document.querySelectorAll('img');

	for (let index = 0; index < array.length; index++) {

		let item = array[index].style = `transform: rotate(0deg); width: ${rsz}%; transition: all ${speed}s ease .2s;`;

	}

}
count = 1;

function imgResize(par, speed) {


	if (count % 2) {
		rsz(par, speed);
		// alert();
	} else
		rsz(22); // ширина в `%` для `image` при втором клике

	count = count + 1;

}

/**
 * Генерирует список  ссылок на страницы и добавляет их на указанную страницу навигации
 * по `id="navi-page"`
*/
function naviPage() {
	list = "";

	for (const ii in pageDict) {

		if (ii != navi_page) {

			list += `
		
		<span class="navi-item" style="background: #ffffff88; padding: 0em 1em;margin: 1em 1em 0em 0em; line-height: 2"><a href="${ii}"> ${pageDict[ii]} </a></span>

		`}
	}
	naviDiv = "<span>" + list + "<span>";

	console.log(naviDiv);

	document.getElementById('navi-page').innerHTML = naviDiv;
}
if (keyDay == navi_page) {
	naviPage()
}