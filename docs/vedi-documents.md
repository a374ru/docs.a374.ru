

# УПРАВЛЕНИЕ ДОКУМЕНТАЦИЕЙ

![image-top](https://1.bp.blogspot.com/-x5l0olq9E1o/YHarZgC6qzI/AAAAAAAAGdw/S9GF99vL8T0C7TmrNn445LevDG3AJCP3wCK4BGAYYCw/s400/icon_512x512-762681.png)


### MARKDOWN ДОКУМЕНТАЦИЯ

Простая документация, которая не описывает код, ведётся в файлах `Markdown`. 
Такую документацию нужно ввести самым простым способом. Размещается такую документацию лучше на `GitHub`. Этот документация пример такого размещения. Редактируется все в одной папке в одном редакторе.

Документация размещается таким способом чтобы она максимально было читаема в одном репозитории на сервере `GitHub` в любом отделе включая подмодуль `Wiki`, также на web-сайте `GitHub Pages`, также на сторонем сайте публикации. Один раз публикуем и в трёх местах получаем отличный результат. Эта документация размещена на `GitHub-Pages` и на сервере `ReadTheDocs`. Также она просто читается в самом РЕПОЗИТОРИИ и имеет рабочие ссылки во всех проектах. 

Если вам понадобиться подключить `GitHub-WIKI`, то просто подключите модуль и перенесите туда содержимое директории `docs`. Важно помнить, что вики парсит только `Markdown` разметку и все настройки `yaml` или `Jekyll` будут показаны как есть. Но `GitHub-WIKI` это независимый модуль, который никак не связан с основным проектом, поэтому в нем можно смело редактировать доки. Но `GitHub-WIKI` не должен являться исходником документации.  

<span style="color: #e34234;">Исключением является ссылка `…на главную`, она не работает только в репозитории в файлах.</span>

## <span style="color: #7C9655;">ЧТО НЕ НУЖНО ДЕЛАТЬ!</span>

1. <span style="color: #e34234;">Не нужно</span> подключать к документации на GitHub `Jekiyll`, `GitHub` автоматом парсит файлы `Markdown` и может применять к ним настройки `yaml`.

1. <span style="color: #e34234;">Не нужно</span> использовать файл `_config.yaml`.

1. <span style="color: #e34234;">Не нужно</span> генерировать навигацию `Jekyll`. Вся навигация отлично генерируется сервисом `ReadTheDocs`.

1. <span style="color: #e34234;">Не нужно</span> использовать разметку `yaml` в файле readme.md в директории `docs`.

1. <span style="color: #8F7161;">Не наращивайте деревьев, за большим садом сложно следить. Много веток, много листьев с кодом и т.д..


### КОДОВАЯ ДОКУМЕНТАЦИЯ

Документация по коду получится вести только с использованием генераторов документации для выбранного языка рпограммирования. 

Лучше всего вести документирование проекта прямо в исходниках без генерации доков. Если понадобится документация по коду можно позже привлечь сборщик и собрать уже подготовленную документацию. Документация кода требует очень частых правок и много времени, поэтому целесообразно и очень выгодно документировать локально в самом коде.

### КАРТИНКИ ДОКОВ

Снабжайте документацию `Markdown` любыми картинками. Самое главное память взгляда. Ум устает от символов и очень хорошо запоминает картинки и общие виды. Картинки должны быть расположены на отдельном надежном неплатном сервере. Сама документация никогда не должна располагаться на только платном ресурсе. Самый лучший вариант комбинированные услуги размещения материалов.

### УКАЗАТЕЛЬ ДОКОВ

Указатель места расположения ресурсов служит доменное имя. Домен не должен располагаться на ресурсе материалов. Домен додлжен работать и настраиваться как отдельный указатель на отдельном сервере и не более того. Это просто нужный вам или ненужный добный указатель.

### ЕЩЕ ВАЖНОЕ

При размещении документации и ее подготовки к публикации нужно учитывать корректность отображения ее при авто переводе, мобильном авто переводе и просто удобо-читаемости на мелких гаджетах, также на старых гаджетах и другие настройки, которые обычно все сразу не учтешь, а потом очень сложно что-то внедрить или переделывать. 

<span style="color: #F29849;">Продуманное вначале сильно облегчает будущее **про**думанному **про**граммисту.

<br>

[…на главную](/)

<br>

![image-bottom](https://1.bp.blogspot.com/-wFaMiAHx-Y8/YG3EaVrCDFI/AAAAAAAAGZY/IYjO6zFHW5wjj4I_HrssCIShQpMxWMHlgCLcBGAsYHQ/s800/IMG_2094.PNG)

