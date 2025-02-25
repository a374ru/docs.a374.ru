---

title: Обновление Angular
description: Памятка по обновлению Angular, или как лучше пользоваться обновлениями CLI
# permalink: update-angular

---


<div class="navi"><nav id="navi"><!-- js --></nav></div>

# **Обновление** **Angular** <span style="color: #e34234;">CLI

<span id="comp-start-img" class="img" onclick="imgResize(77)">![image-top](assets/svg/comp-angular.svg)</span>

###### MAC OS, Terminal

<details>
  <summary>Необходимые удобства</summary>
  <p><a href="#nvm">Настройка менеджера версий: <code>NVM</code></a></p>
  <p></p>



</details>

### **NG UPDATE** или как лучше пользоваться обновлениями `Angular` 

## <span style="color: #8F7161;"> Локальный Ангуляр</span>

Если проект уже готов или клонирован с `github`, тогда не нужно пытаться его обновлять и повышать версионность проекта. В **90%** случаев этому локальному проекту не требуется обновление. Это может оказаться затратной операцией и по времени и по синтаксису. Просто выполните в терминале команду:

```sh
npm i
```

и пользуйтесь той версией, которая будет установлена для данного проекта.


<span style="color: #e34234;">**Важно**:
Если вы используете менеджер `NVM` и использовали команду `nvm use …`, тогда вы должны запускать скрипты `NG` через команды `NPM` примерно так: `npm run serve --o` и тд.</span>

## Глобальный ангуляр

 1. Проверте версию глобальную `CLI Angular`. Для этого в терминале перейдите в каталог, в котором не установлен проект Ангуляр и введите `ng v`. Вы должны увидеть версии пакетов.
2. Если вас не устраивает глобальная версия `CLI Angular`, удалите ее так: 

	```sh
	npm uninstall -g @angular/cli
	npm cache verify
	```

1. Обновите `NODE.JS` и `NPM` до последних версий так:

	```sh
	sudo npm cache clean -f
	sudo npm install -g n
	sudo n stable
	```

1. Установите глобально последнюю версию `Angular`. Вместо же слова `latest` можете указать нужную вам версию `Angular`. Документация вам в помощь, так как определенные версии могут требовать определенных версий `NPM`.

	```sh
	npm install -g @angular/cli@latest 
	```


1. Если вы не хотите ничего менять, а просто захотите создать **новый** локальный проект с последней версией `Angular`, тогда создайте проект с текущей глоббальной версией и обновите ее по порядку до нужной, не перескакивая через версии. <span style="color: #e34234;">Пункт №3 должен быть выполнен в любом случае</span>.

	```sh
	ng update @angular/core@13 @angular/cli@14
	```


	```sh
	ng update @angular/core@14 @angular/cli@15
	```

и так далее…

## <span id="nvm">Настройка `NVM`</span>

`NVM` - это менеджер управления версиями установленных пакетов `NODE JS`. Подробнее <a href="https://github.com/nvm-sh/nvm#readme">здесь…</a>

Если у Вас был установлен `node js` прямо через установщик-инсталятор без `NVM`, то вам нужно <span style="color: #7C9655;">удалить и зачистить все предыдущие настройки и пакеты,</span> и далее установить все необходимое с помощью менеджера `NVM` и переключаться между разными версиями `NODE JS` устанавливая нужную версию по умолчанию глобально.

<span style="color: #e34234;">ВАЖНО!!!</span> Для мака должны быть установлены инструменты `Xcode - Command Line Tools`, так:

```sh
xcode-select --install
```

### Удаляем все папки `node js` и `npm` в терминале так:

```sh
sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}

rm -rf ~/.npm

```

### Устанавливаем менеджер версий `NVM`


<span style="color: #8F7161;">Ссылку на свежую версию лучше взять у самого `NVM`

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

…после того как переключатель версий `NVM` установлен, можно загружать любую версию `NODE JS`, например так:

```sh
nvm install 16.20.2
```

### Смотрим версии и устанавливаем нужную версию если их более одной

```sh
nvm list
```

```sh
nvm use 16.20.2
```

<span style="color: #e34234;">Если не работает, тогда нужно перезагрузить терминал и ввести команду:

><span style="color: #9a8200a8;">Чтобы запустить проект в `angular cli` требуется выполнить эту команду в терминале вашего редактора.

```sh
. ~/.nvm/nvm.sh
```


<span style="color: #F29849;">Справка:</span> …все папки для удаления ненужных версий ноды ищите в корне домашней директории по адресам: 
- для `NPM` путь: `~/.npm/` 
- для `NVM` путь: `~/.nvm/`



<br>


<br>

<span id="comp-end-img" class="img" onclick="imgResize()">![image-bottom](assets/svg/comp-end.svg)</span>


<script src="assets/js/navi.js"></script>
<!--ystm_start-->
<br>

 |||| 
 |:---|:---:|---:| 
 [← назад](az-angular-fb.md)|[ 🔝 ](#)|[далее →](az-apr-ts.md) 

 <br>
<!--ystm_end-->
