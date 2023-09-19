---

title: Пакетный менеджер NVM (NODE JS)
description: Управление и настройка пакетного менеджера NVM
# permalink: nvm

---

<div class="navi"><nav id="navi"><!-- js --></nav></div>

# Менеджер `NVM`

<span id="az1-img" class="img" onclick="imgResize()">![img](assets/svg/comp-start.svg)</span>

<details>
  <summary>Нужные команды</summary>
  <p>Запуск NVM: <code>. ~/.nvm/nvm.sh</code></p>
 
  <p></p>

</details>

## Иногда не работает

После ознакомления [здесь…](https://github.com/nvm-sh/nvm) и установки менеджера по инструкции производителя, в старых операционных системах `Mac OS` не всегда держится по умолчанию нужная версия `NVM` и случается, что не запускаются команды `NPM`. То есть не запускается сервер, бд, ангуляр и др.. Это все-таки локальный менеджер версий и такое поведение нормально. Для каждой директории проекта свой экземпляр `NODE JS`.

При таких обстоятельствах нужно указать системе нужное окружение командой в терминале проекта (то есть выполнить команду `bash` в директории проекта):

```sh
. ~/.nvm/nvm.sh
```



<br>

[…назад](nash-ncal.md)|[вверх](#)|[далее…](pokoy-proval.md)

<br>

<span id="az2-img-2" class="img" onclick="imgResize()">![img](assets/svg/comp-end.svg)</span>

<script src="assets/js/navi.js"></script>
