---

title: Установка Typescript
description:  Последовательность установки Typescript на MacOS

---

<div class="navi"><nav id="navi"><!-- js --></nav></div>

# Развертывание Typescript

<span id="typescript-img" class="img" onclick="imgResize()">![Кого подключать](assets/svg/comp-start.svg)</span>

    MAC OS

Проверяем в терминале присутствие NPM командой: 


    npm -v

Устанавливаем TypeScript командой: 

    sudo npm -g install typescript

Устанавливаем Node.js с сайта https://nodejs.org/en/ версию current.

Открываем Terminal.app по адресу директории проекта и вводим команду:

    npm init -y

Далее вводим команду конфигурации для TypeScript:

    tsc --init

Таким образом в проект должны добавиться два файла:

- package.json
- tsconfig.json

Пишите код и запускайте его командой:

    tsc // без аргументов 
    

<br>

[…назад](buki-bukmarki.md)•||||•||||•[далее…](buki-problems-ts.md)

<br>


<span id="comp-end-img" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>
