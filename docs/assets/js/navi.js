

mass = {
	"Азъ": "az",
	"Переменная": "az-peremennaya",
	"Объект": "az-object",
	"Соглашение": "buki",
	"Букмарки": "buki-bukmarki",
	"Настройки": "buki-set",
	"VIM": "vedi-vim",
	"День": "dobro-day",
}



// Возвращает HTML строку 
function toNavi() {

	htmlString = "";

	for (const key in mass) {
		if (Object.hasOwnProperty.call(mass, key)) {
			const element = mass[key];
			htmlString += `<div class="navi-item"><a href="${element}">${key}</a> </div>`
		}
	}

	cday = new Date().getDate();


	htmlString += `<div class="navi-item" style="background: #CCBAAC;transform: rotate(0deg); margin-left:0em"><a href="https://a374ru.github.io/aprakos.ru/currentday/APRAKOS/index.html" style="color:#ffd" ><b>${cday}</b></a></div>`
	return htmlString;

}

// Встраивает элемент в документ HTML-страницу
function navi() {
	document.title = "YSTM";
	document.getElementById('navi').innerHTML = toNavi();
}


navi();