
/**
 *  словарь доступных страниц ссылок
 */
pageDict = {
	"dobro-day": "Сий День",
	"az": "Азъ",
	"az-peremennaya": "Переменная",
	"az-object": "Объект",
	"buki": "Соглашение",
	"buki-bukmarki": "Букмарки",
	"buki-set": "Настройки",
	"vedi-vim": "VIM",
	"pokoy-proval": "Провал",

}

/**
 * Функция разбирает  URL текущей страницы
 * проверяет имя на присутствие в массиве 
 * 
 * @returns строку с именем текущей страницы.
 */
function namePage() {

	stringTabTitle = 'Главная стр. | a374.ru';
	str = document.URL.split('/').pop();
	if (str != "") {

		for (const key in pageDict) {
			if (Object.hasOwnProperty.call(pageDict, key)) {
				if (key === str) {

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

	for (const key in pageDict) {

		if (Object.hasOwnProperty.call(pageDict, key) && counter < 9 && key != 'dobro-day') {
			const element = pageDict[key];
			htmlString += `<div class="navi-item"><a href="${key}">${element}</a> </div>`;
		}
		this.counter += 1;

	}

	cday = new Date().getDate();

	htmlString += `<div class="navi-item" id="dobro-day"><a href="dobro-day">День</a> </div><div class="navi-item" id="number-day"><a href="https://a374ru.github.io/aprakos.ru/currentday/APRAKOS/index.html" style="color:#ffd" >${cday}</a></div>`
	return htmlString;

}

// Встраивает элемент в документ HTML-страницу
function navi() {
	document.title = namePage();
	document.getElementById('navi').innerHTML = toNavi();
}


navi();