

pageDict = {
	"Азъ": "az",
	"Переменная": "az-peremennaya",
	"Объект": "az-object",
	"Соглашение": "buki",
	"Букмарки": "buki-bukmarki",
	"Настройки": "buki-set",
	"VIM": "vedi-vim",
	"День": "dobro-day",
}


function namePage() {
	str = document.URL.split('/').pop();
	if (str != "") {
		str = str.split('.')[0];

		for (const key in pageDict) {
			if (Object.hasOwnProperty.call(pageDict, key)) {
				if (pageDict[key] == str) {

					namePageTab = key;

					return `${document.location.hostname} – ${namePageTab} | YS©TM`;


				} else {
					return `${document.location.hostname} | Главная страница | YS©TM`
				}
			}
		}


	}

}

// Возвращает HTML строку 
function toNavi() {

	htmlString = "";

	for (const key in pageDict) {
		if (Object.hasOwnProperty.call(pageDict, key)) {
			const element = pageDict[key];
			htmlString += `<div class="navi-item"><a href="${element}">${key}</a> </div>`
		}
	}

	cday = new Date().getDate();


	htmlString += `<div class="navi-item" style="background: #CCBAAC;transform: rotate(0deg); margin-left:0em"><a href="https://a374ru.github.io/aprakos.ru/currentday/APRAKOS/index.html" style="color:#ffd" ><b>${cday}</b></a></div>`
	return htmlString;

}

// Встраивает элемент в документ HTML-страницу
function navi() {
	document.title = namePage();
	document.getElementById('navi').innerHTML = toNavi();
}


navi();