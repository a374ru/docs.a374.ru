<div class="navi"><nav id="navi"><!-- js --></nav></div>

# Первая установка и запуск `Django`

<span id="page-name-img" class="img" onclick="imgResize(88)">![image-top](assets/svg/django.svg)</span>


    MAC OS

Должен быть установлен язык `Python` и менеджер пакетов `pip`. Подробнее на сайте https://www.python.org/ .

<span style="color: #e34234;">**RRR**</span> – можно заменять на свои имена

## **`Step-doc`**

1. Выберите у себя на компьютере директорию для выполнения в ней всех указанных ниже шагов.

2. Установка рабочего пространства (Virtual ENVironment) `VENV` в выбранной директории.
3. Активация `VENV`.
4. Установка `Django` в активированном пространстве.
5. Генерация стартового модуля (две одноименные папки).
6. Запуск сервера для просмотра сгенерированного стартового проекта (модуля).

### 1. Команда установки виртуального пространства (окружения) для проекта `RRR`:

Перейдите в `ТЕРМИНАЛЕ` по адресу выбранной директории и выполните команду:

```sh
python3 -m venv 000
```

… далее в этой директории будет располагаться основной проект.

### 2. Команда активации виртуального окружения `000` для `MacOS`

```sh
cd 000
source bin/activate
```

### 3 .Установка пакета `Django`

В АКТИВИРОВАННОМ РЕЖИМЕ выведите список установленных пакетов менеджера - `pip`. Выполнив команду:

```sh
pip list
```

Если в списке пакетов нет пакета `Django`, тогда выполните локальную установку пакета `Django` для текущего проекта командой:

```sh
pip install Django
```

Пакет-ядро `Django` должен появится в списке `pip` менеджера.

### 4. Установка директории `RRR` и распаковка стартового САЙТА в одноименную папку. Первая папка `RRR` будет основной папкой проекта. Во второй ОДНОИМЕННОЙ папке `RRR` – она же модуль, она же приложение по умолчанию. Далее рядом с ней будут расположены и другие модули (иначе приложения).

```sh
django-admin startproject RRR
```

### 5. Тестовый ЗАПУСК сервера с установленным стартовым сайтом

Перейдите в сгенерированную директорию `RRR` и запустите сервер:

```sh
cd RRR
python3 manage.py runserver
```

! Установка проекта выполнена.

---

## После окончания работы

### Дективация сервера

    CTRL + C

### Деактивация рабочего пространства `VENV`

```sh
deactivate
```

Далее читайте официальную документацию Джанго и Пайтон.



<br>

[…на главную](/)

<br>

<span id="page-name-img" class="img" onclick="imgResize()">![image-bottom](assets/svg/comp-end.svg)</span>


<script src="assets/js/navi.js"></script>