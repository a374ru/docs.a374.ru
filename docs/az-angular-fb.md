<div class="navi"><nav id="navi"><!-- js --></nav></div>

# <span style="color: #e34234;">Ангуляр енд Фаербэйс

<span id="az1-img" class="img" onclick="imgResize()">![img](assets/svg/comp-angular-fb.svg)</span>

	Development

## <span style="color: #7C9655;">Разворот проекта

Нам нужно запустить проект `Angular CLI`. Подключить к проекту базу данных `Firebase`. Настроить `connect` и обработку сообщений в базе данных с помощью `Google` аккаунтf. Ниже приводится последовательные шаги развертывания приложения `Angular 15`.


### <span style="color: #2C87BF;">Что нам нужно

1. Аккаунт `Google`.
2. Аккаунт `Firebase`.
3. Настройки указанные в документациях приложений.
4. Умение пользоваться `Angular CLI`  и менеджером `NPM`.
5. Редакор кода.
6. Название проекта, лучше бы, совпадало с именем БД.

### <span style="color: #e34234;">Запуск

>Все действия выполняются в терминале…

1. Установите `Angular CLI`.
1. Создайте проект командой: `ng new projectName`.
2. <span style="color: #e34234;">Установите `FireBase`  командой: `npm install -g firebase-tools`.
3. Активируйтесь  командой: `firebase login`.
4. Добавьте в проект директорию `src/environments` и в нее **два файла** с именами `environment.ts` и `environment.prod.ts` и внесите в файлы код указанный далее:

```ts
// environment.prod.ts
export const environment = {
	production: true
}
```

```ts
// environment.ts
export const environment = {
	production: false
}
```

6. Установите пакет `NPM` командой: `ng add angular/fire`. При настройке пакета выберите `Firestore` и нужную `DB` или создайте новую `DataBase` следуя подсказкам в консоле. В предлагаемом меню выьерите пункт `( • ) Firestore`.

<span style="color: #7C9655;">Полсе выполнения выше указанных инструкций у вас должен быть настроенный проект `Angular` с подключенной БД `Firebase`. Проверте настройки базы в файле `environment.ts`.

>Далее изучайте операции `CRUD` для данной БД.

<br>

[…на главную](/)

<br>

<span id="az2-img-2" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>
