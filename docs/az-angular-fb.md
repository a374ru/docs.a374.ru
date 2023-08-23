---

title: Angular + Firebase и их настройка
description: Angular + Firebase и их настройка. Запуск, установка эмулятора Firebase

---


<div class="navi"><nav id="navi"><!-- js --></nav></div>

# <span style="color: #e34234;">Энгуларъ + Огонёкъ

<span id="az1-img" class="img" onclick="imgResize()">![img](assets/svg/comp-angular-fb.svg)</span>

	Development

<details>
  <summary>Нужные команды</summary>
  <p>Запуск проекта ангуляр: <code>ng s -o</code></p>
  <p>Выбор проекта для fdb: <code>firebase use --add</code></p>
  <p>Запуск эмулятора fdb: <code>firebase emulators:start --only firestore</code></p>
  <p>Аутенцификация fdb: <code>firebase login</code></p>
  <p>Порт интерфейса: <code> 4000 </code></p>
  <p></p>



</details>


## <span style="color: #7C9655;">Разворот проекта

Нам нужно запустить проект `Angular CLI`. Подключить к проекту базу данных `Firebase`. Настроить `connect` и обработку сообщений в базе данных с помощью `Google` аккаунт. 
Установить локальный эмулятор `Firebase` и настроить разработку с локальной тестовой ФБД.
Ниже приводится последовательные шаги развертывания приложения `Angular 15`.


### <span style="color: #2C87BF;">Что нам нужно

1. Аккаунт `Google`.
2. Аккаунт `Firebase`.
3. Настройки указанные в документациях приложений.
4. Умение пользоваться `Angular CLI`  и менеджером `NPM`.
5. Редакор кода.
6. Название проекта, лучше бы, совпадало с именем БД.

## <span style="color: #e34234;">Запуск

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

<span style="color: #7C9655;">Полсе выполнения выше указанных инструкций у вас должен быть настроенный проект `Angular` с подключенной онлайн БД `Firebase`. Проверте настройки базы в файле `environment.ts`.

>Далее изучайте операции `CRUD` для данной БД.

## <span style="color: #e34234;">Настройка Эмулятора БД 

	Firebase

Ознакомтесь с документацией для эмулятора [здесь…](https://firebase.google.com/docs/emulator-suite?hl=ru) Нужно иметь общие представления о продукте.

Если **проект** настроен как показано выше и он работает, то можно приступить к настройке эмулятора. Эмулятор умеет выполнять все операции облачного сервиса `firebase` только локально. 

><span style="color: #e34234;">Далее все операции для текущего каталога в терминале:

1. Установка эмулятора: `curl -sL firebase.tools | bash`
2. Инициализируйте текущий проект: `firebase init`
3. Запуск **неподключенного** к проекту эмулятора: `firebase emulators:start`

## Настройка текущего проекта для взаимодействия с запущенным эмулятором или в ином случае с `web version Firestore` в интеренете.

<span style="color: #2C87BF;">Редакция файла `environment.ts`:

```ts
export const environment = {
  firebase: {
    projectId: 'project-name',
    appId: 'x:xxxxxxxxxx:web:xxxxxxxxxxxxxxx',
    storageBucket: 'project-name.appspot.com',
    apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    authDomain: 'project-name.firebaseapp.com',
    messagingSenderId: 'xxxxxxxxxx',
  },

  // для пользования эмулятора FDB добавляется эта строка
   ///////////////
	useEmulators: true,
   //////////////

  production: false

}
```

<span style="color: #2C87BF;">Редакция файла `environment.prod.ts`:

```ts
export const environment = {

// И эта строка добавляется
   ///////////////////
	useEmulators: false,
   ///////////////////

	production: true
}

```

<span style="color: #2C87BF;">Редакция файла `app.module.ts`:

В данной настройке используется объект `Firestore` добавленный в импортах. В методе провайдере `provideFirestore()` подключается эмулятор на определенном по умолчанию порте:8080 **локального хостинга**. Если же вы запустите проект без эмулятора, то проект сконектится с `Friebase` на **веб-хостинге** согласно методу `getFirestore()`.



```ts
 provideFirestore(() => {
      let firestore: Firestore;
      if (environment.useEmulators) { firestore = initializeFirestore(getApp(), { experimentalForceLongPolling: true, });
    connectFirestoreEmulator(firestore, 'localhost', 8080);
      } else {
        firestore = getFirestore();
      }
      return firestore;
    }),

```

><span style="color: #e34234;">После изменения кода в методе `provideFirestore()` появятся ошибки, тогда обновите импорты, добавив нужные классы и методы вверху страницы.

## Отредактируйте строку запуска в файле проекта `package.json`

```json
"start": "firebase emulators:exec --project=ascript --ui 'ng s -o'"
```

Запустите проект с эмулятором `Firebase` командой: `npm start`.

Должно сработать. Конечно не с первого раза! Как обычно. Не поленитесь потратьте время на изучение документации настройки проектов `Firebase`.



<br>

|<--------|••••••|-------->|
|:---|:---:|---:|
|<--------|••••••|-------->|
|:---|:---:|---:|
[…назад](az.md)|[вверх](#)|[далее…](az-angular.md)


<br>

<span id="az2-img-2" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>
