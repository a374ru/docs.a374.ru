---

title: "редактор кода nvchad"
# permalink: "nvchad"
description: "страница описание установки редактора кода neovim и nvchad"

---


<div class="navi"><nav id="navi"><!-- js --></nav></div>

# редактор nvchad

<span id="buki-img" class="img" onclick="imgresize()">![comp and vim](https://img.a374.ru/nvchad.png)</span>

	documentation

**настройка редактора nvchad**

***установка на `macos`***
---

для начало установите терминал, отличный от системного. системный терминал не может работать с определёнными настройками нужной нам программы. обычно все пользуются программой `iterm` или `iterm2`. версией, которая подходит для текущей операционной системы вашего компьютера.
    
для того, чтобы установить `nvchad` правильно, нужно обязательно чтобы присутствовали все зависимости, соответствующие тем, которые указаны в документации этой программы. обычно для установки программ используют менеджер `homebrew`, <span style="color:red">который иногда отказывается устанавливать программу по причине устарелости операционной системы</span>. в таком случае нужно воспользоваться другим менеджером установки, который называется `macport`.


`nvchad` устанавливается как надстройка над программой `neovim`, которую нужно установить в самом начале процесса. если у вас не самавя новая операционной системы, тогда воспользуйтесь менеджером установки `macport` и он корректно установит файлы программы на компьютер `macos`.

ты того, как нами будет установлен `nvchad`, нужно запустить базовый `neovim` в терминале `macos`. если вы увидите буффер приветствия значит программа запустилась, тогда можно устанавливать `nvchad`. справку по инсталляции программы можно просмотреть на сайте производителя. 

для того чтобы установить свою конфигурацию для удачно установленной программы, нужно зайти в папку конфигурации `neovim`, которая находится в корне вашего компьютера по такому пути:

```zsh
~/.config/nvim/
```

Внутри директории программы находится папка `lua`, в который находится папочка `custom`. Эта папка для настроек пользователя, Значение файлов которой перезаписывают дефолтные данные. 

```zsh
~/.config/nvim/lua/custom/
```

Удалите данные из папки `custom` и склонируйте в эту папку репозиторий `github` по этому адресу:

```zch
git@github.com:a374ru/custom.git
```

Комада клонирования:

```zsh
cd ~/.config/nvim/lua/; git clone git@github.com:a374ru/custom.git custom
```

Далее выполните в терминале команду:

```zsh
nvim
```

Если все прошло удачно, – поздравляем, Вы можете пользоваться интерфейсом `NvChad`!

><span style="color:blue">Важное замечание:</span> если вы захотите установить какую-то другую версию для `NeoVim`, тогда не удаляйте папку, а просто переименуйте её например так: `nvim` → `nvim.nvchad`. Теперь Вы можете устанавливать другие версии оболочек для программы `NeoVim`. Просто будет заново создана директория `nvim`, которая становится дефолтной в системе.




<br>

|<-------——|••••••|——------->|
|:---|:---:|---:|
[…назад](buki-set.md)|[вверх](#)|[далее…](dobro-day.md)

<br>


<span id="comp-end-img" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>