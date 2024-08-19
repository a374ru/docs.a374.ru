---

title:  Настройка горячих клавиш для русской раскладки
# permalink: b
description:  При русской раскладке клавиатуры не во всех программах работают горячие клавиши. Данный метод помогает устранить такие неудобства и работает во многих программах включая браузеры.

---


<div class="navi"><nav id="navi"><!-- js --></nav></div>

#  Горячие клавиши для русской раскладки

<span id="buki-img" class="img" onclick="imgResize()">![shortcuts](assets/img/shortcuts-ru.png)</span>

	MAC OS

<details>
<summary>Полезные ссылки</summary>
<p><a href="https://github.com/a374ru/keyboard-shortcuts-ru-macos/tree/7cd290b6c75bc78eff5fd7bd19f38fc831a06fd1">Репозиторий GITHUB.</a></p>
<p>По ссылке выше вы можете склонировать репозиторий и запустить установку скрипта в терминале командой:  <code>make install</code></p>

</details>

### Проблема

 Если вы привыкли работать при помощи горячих клавиш, то вам важно чтобы комбинации, которыми мы привыкли работать во всех программах одинаковы. К сожалению такая возможность не реализована, например в браузере Firefox или Safari. Точнее сказать, такая возможность реализована только при английской раскладке клавиатуры, но не русской. При русской раскладке все горячие клавиши не работают. Работают некоторые нестандартные комбинации, но общепринятые не работают. Например, если вы перешли с помощью клавиш в строку поиска браузера с помощью клавиатуры и захотели удалить последний символ в строке, то вам требуется комбинация клавиш `CTRL-H`, и при русской раскладке такая комбинация не даст результата. 

 
### Решение

 Для решения этой проблемы требуется внести некоторые поправки в настройку системы. К счастью это делается просто в терминале одной строкой.

```sh
curl "https://raw.githubusercontent.com/a374ru/keyboard-shortcuts-ru-macos/main/dist-install.sh" -o /tmp/k-dist-install.sh && bash /tmp/k-dist-install.sh
```


<br>


<span id="comp-end-img" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>
<!--ystm_start-->
<br>

 |||| 
 |:---|:---:|---:| 
 [← назад](pokoy-proval.md)|[ 🔝 ](#)|[далее →](slovo-server.md) 

 <br>
<!--ystm_end-->