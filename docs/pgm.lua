-- Lua start
--[[
Программа выбирает все файлы markdown в директори и вставляет в конец
пагинацию по доступным файлам.
--]]
PathToFolder = "/Users/ibo7/web/docs.a374.ru/docs/"
Fpath = PathToFolder
Backward = "readme.md"
Forward = "readme.md"
Azbuka = { "az", "buki", "vedi", "glagol", "dobro", "esty", "givite", "zemlya", "zelo", "ige", "-i", "kakw", "ludie",
    "mislete", "nash", "on", "omega", "pokoy", "rci", "slovo", "tverdo", "uk", "fert", "her", "ot", "cii",
    "cherv", "sha", "shy", "er", "eri", "ery", "you", "ya", "us", "ksi", "psi", "w", "fita", "igica" }
Tbl = {}
Ys = 0;
Ye = 0

function Fazbuka(np)
    for _, value in pairs(Azbuka) do
        -- S:S ????? не работае условие
        if string.find(np, value) ~= nil then
            return true
        elseif np == "README.md" or np == "readme.md" then
            return true
        end
    end
end

local table_md = {}
for line in io.popen("ls " .. PathToFolder, "r"):lines() do
    if string.sub(line, -3) == ".md" then
        -- print(#t + 1 .. " – " .. line)
        if Fazbuka(line) then
            table_md[#table_md + 1] = line -- создание таюлицы имен файлов markdown
        end
    end
end

for index, namePage in ipairs(table_md) do
    print("ФАЙЛ ==-----------------=-> " .. namePage)

    -- S:S Требуется добавить удобное добавление исключаемых страниц для разных случаев


    Fpath = PathToFolder .. namePage

    -- init pagination references
    if index ~= 1 then
        Backward = table_md[index - 1]
    end
    if index ~= #table_md then
        Forward = table_md[index + 1]
    else
        Forward = "navi-page.md"
    end
    if table_md[index + 1] == "readme.md" then
        Forward = table_md[index + 2]
    end
    if table_md[index - 1] == "readme.md" then
        Backward = table_md[index-2]
    end
    ---[[
    if namePage == "README.md" or namePage == "readme.md" then
        Backward = "#"
        Forward = table_md[1]
    end
    -- ]]

    ------- 01.Чтение содержимого файла ------------------

    File = io.open(Fpath, "r")

    --  Cleaning the table of previos data
    Tbl = {}

    for lf in File:lines() do
        if lf ~= nil then
            table.insert(Tbl, lf)
        end
    end

    File:close()

    print('Количество строк в файле: ', #Tbl, "\n")

    ------ 02. Поиск мметок ---------------------------
    for i, v in pairs(Tbl) do
        if string.find(v, "ystm_start") then
            print(string.format("Найдено в линии: %i, метка: %s", i, v))
            Ys = i
        end

        if string.find(v, "ystm_end") then
            print(string.format("Найдено в линии: %i, метка %s", i, v))
            Ye = i
        end
    end

    ---------- 03. В новую таблицу ---------------

    NewTbl = {}
    for key, value in pairs(Tbl) do
        -- Добавляем содержимое файла в новую таблицу,
        -- исключая строки метки и что между ними.
        if key < Ys or key > Ye then
            table.insert(NewTbl, value)
        end
    end

    ----------- 04. Записываем в markdown ---------

    File2 = io.open(Fpath, "w")

    for _, value in pairs(NewTbl) do
        File2:write(value, "\n")
    end

    -- ===================================
    -- ===================================
    -- Шаблон пагинации для файлов `markdown`

    ---[[
    Template = "<!--ystm_start-->\n<br>\n\n |||| \n |:---|:---:|---:| \n [← назад](" .. Backward ..
        ")|[ 🔝 ](#)|[далее →](" .. Forward .. ") \n\n <br>\n<!--ystm_end-->\n"
    --]]
    -- Template = ""

    -- ===================================
    -- ===================================

    File2:write(Template)

    File2:close()

    File = io.open(Fpath, "r")
    -- f:write(Template)
    File:seek("set", 0)
    print("\n\nКОНТЕНТ ФАЙЛА\n")
    print(File:read("*a"))

    File:close()
end

for _, value in pairs(table_md) do
    print(value)
end

print("\n\t THE END !!!\n\n")
