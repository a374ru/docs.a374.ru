<div class="navi"><nav id="navi"><!-- js --></nav></div>

# Развертывание Typescript

>Развертывание проекта на TS (mac os)

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

[…на главную](/)

<br>

<script src="assets/js/navi.js"></script>
