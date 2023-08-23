---

title: Обновление Angular
description: Памятка по обновлению Angular, или как лучше пользоваться обновлениями CLI

---


<div class="navi"><nav id="navi"><!-- js --></nav></div>

# **Обновление** **Angular** <span style="color: #e34234;">CLI

<span id="comp-start-img" class="img" onclick="imgResize(77)">![image-top](assets/svg/comp-angular.svg)</span>

	MAC OS, Terminal

### **NG UPDATE** или как лучше пользоваться обновлениями `Angular` 

## <span style="color: #8F7161;"> Локальный Ангуляр</span>

Если проект уже готов и клонируется с `github`, то не нужно пытаться его обновлять и повышать версионность проекта. В **90%** случаев этому локальному проекту не требуется обновление. Это может оказаться затратной операцией и по времени и по синтаксису. Просто выполните в терминале команду:

```sh
npm i
```

и пользуйтесь той версией, которая будет установлена для данного проекта.

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

<span style="color: #2C87BF;">и так далее…</span>



<br>

[…назад](az-angular-fb.md)•||||||•||||||•[далее…](az-apr-ts.md)


<br>

<span id="comp-end-img" class="img" onclick="imgResize()">![image-bottom](assets/svg/comp-end.svg)</span>


<script src="assets/js/navi.js"></script>