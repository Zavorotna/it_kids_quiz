const QUESTIONS_COUNT = 60;

let questionBank = [
  {id:1, topic:"HTML", question:"HTML — це...", options:["Мова розмітки","Мова програмування","Браузер","Сервер"], correct:0, explanation:"HTML – це мова розмітки веб-сторінок."},
  {id:2, topic:"HTML", question:"Який тег створює посилання на сторінці?", options:["Посилання","Зображення","Абзац","Заголовок"], correct:0, explanation:"Тег <a> створює гіперпосилання."},
  {id:3, topic:"HTML", question:"CSS розшифровується як...", options:["Комп'ютерні стилі","Системні стилі","Каскадні стилі","Контролер стилів"], correct:2, explanation:"CSS - каскадні таблиці стилів."},
  {id:4, topic:"HTML", question:"Що таке контент елемента?", options:["Відкриваючий тег","Наповнення елемента","Елемент","База даних"], correct:1, explanation:"Контент -  це наповнення елемента, який в даному випадку звичайний текст."},
  {id:5, topic:"HTML", question:"Яким тегом зробити текст жирним?", options:["<span>","<i>","<p>","<b>"], correct:3, explanation:"<b> - тег, який робить текст жирним."},
  {id:6, topic:"HTML", question:"Для чого потрібні атрибути HTML-тега?", options:["Посилання на статтю","Додаткова інформацію про елемент","посилання на зображення","універсальний контейнер"], correct:1, explanation:"Атрибути містять додаткову інформацію про елемент, яка не відображається."},
  {id:7, topic:"HTML", question:"Яким тегом додати зображення на сторінку?", options:["<span>","<i>","<img>","<div>"], correct:2, explanation:"Елемент img використовується для вставки зображення на сторінку."},
  {id:8, topic:"HTML", question:"Чи потрібен закриваючий тег для <img>?", options:["Так, має","Ні, не має"], correct:1, explanation:"Елемент img НЕ МАЄ ЗАКРИВАЮЧОГО ТЕГА"},
  {id:9, topic:"HTML", question:"Які два обов'язкові атрибути має тег <img>?", options:["csr, alt","src, apt","href","src, alt"], correct:3, explanation:"img містить в собі два обов'язкових атрибута: src, alt"},
  {id:10, topic:"HTML", question:"Скільки разів можна використати <h1> на одній сторінці?", options:["Безліч","3","1","0"], correct:2, explanation:"На сторінці може знаходитись тільки 1 тег h1"},
  {id:11, topic:"HTML", question:"Який тег є універсальним блочним контейнером?", options:["<ul>","<div>","<p>","<h1-h6>"], correct:1, explanation:"<div> - універсальний контейнер, яким можна поєднати декілька елементів, відділивши їх від іншого контенту. "},
  {id:12, topic:"HTML", question:"Яким тегом створити нумерований список?", options:["<ul>","<li>","<ol>","<list>"], correct:2, explanation:"<ol> - нумерований список"},
  {id:13, topic:"HTML", question:"Яким тегом створити маркований список?", options:["<ul>","<li>","<ol>","<list>"], correct:0, explanation:"<ul> - маркований список"},
  {id:14, topic:"HTML", question:"Дочірні елементи — це...", options:["елементи, які огортають поточний елемент","елементи які знаходяться на одному рівні вкладеності","елементи, які знаходяться всередині будь-якого тега","елементи, які знаходяться за межами будь-якого тега"], correct:2, explanation:"Дочірні елементи - елементи, які знаходяться всередині будь-якого тега."},
  {id:15, topic:"HTML", question:"Батьківські елементи — це...", options:["елементи, які огортають поточний елемент","елементи які знаходяться на одному рівні вкладеності","елементи, які знаходяться всередині будь-якого тега","елементи, які знаходяться за межами будь-якого тега"], correct:0, explanation:"Батьківські елементи - елементи, які огортають поточний елемент."},
  {id:16, topic:"HTML", question:"Сусідні елементи — це...", options:["елементи, які огортають поточний елемент","елементи які знаходяться на одному рівні вкладеності","елементи, які знаходяться всередині будь-якого тега","елементи, які знаходяться за межами будь-якого тега"], correct:1, explanation:"Сусідні елементи - елементи які знаходяться на одному рівні вкладеності."},
  {id:17, topic:"HTML", question:"У якому рядку лише строкові теги?", options:["<span>, <i>, <div>, <a>","<i>, <b>, <img>, <a>","<p>, <div>, <ul>, <li>, <ol>, <h1-h6>","<b>, <a>, <p>, <i>"], correct:1, explanation:"Строкові елементи: <b>, <i>, <a>, <img>"},
  {id:18, topic:"HTML", question:"Яке з тверджень описує блочну поведінку елемента?", options:["спеціальна поведінка батьківського контейнера, яка вказує, як саме повинні вести себе його дочірні елементи","ширина рівна ширині контенту, вертикальні відступи ігноруються","ширина по замовчуванню 100%, допускаються відступи.","видаляє елемент з сайту, але залишає його в розмітці"], correct:2, explanation:"блочна поведінка - ширина по замовчуванню 100%, допускаються відступи"},
  {id:19, topic:"HTML", question:"У якому рядку лише блочні теги?", options:["<span>, <i>, <div>, <a>","<i>, <b>, <img>, <a>","<p>, <div>, <ul>, <li>, <ol>, <h1-h6>","<b>, <a>, <p>, <i>"], correct:2, explanation:"Блочні елементи: <div>, <h1>-<h6>, <p>, <ul>, <li>"},
  {id:20, topic:"HTML", question:"Яким тегом підключити зовнішній CSS-файл?", options:["<script>","<style>","<link>","<css>"], correct:2, explanation:"Тег <link> використовується для підключення зовнішнього CSS файлу."},
  {id:21, topic:"HTML", question:"Яка CSS-властивість змінює колір тексту?", options:["background","font-color","color","text-style"], correct:2, explanation:"Стиль color змінює колір тексту."},
  {id:22, topic:"HTML", question:"Яка CSS-властивість змінює розмір шрифту?", options:["font-size","font-color","color","text-style"], correct:0, explanation:"Стиль font-size змінює розмір тексту."},
  {id:23, topic:"HTML", question:"Яка CSS-властивість задає гарнітуру шрифту?", options:["family","font-family","family-font","text-align"], correct:1, explanation:"Стиль font-family задає сімейство шрифту."},
  {id:24, topic:"HTML", question:"Якою CSS-властивістю можна підкреслити або перекреслити текст?", options:["text-transform","line-height","text-decoration:","font"], correct:2, explanation:"Стиль text-decoration відповідає за оформлення тексту лінією."},
  {id:25, topic:"HTML", question:"font-size: 7px, line-height: 14px — яке значення line-height у em?", options:["0","line-height не коректний, тому не враховужмо","2","1.5"], correct:2, explanation:"Значення у висоти рядка буде 2em"},
  {id:26, topic:"HTML", question:"Від чого залежить одиниця em?", options:["цукерок","ширини тексту","розміру тексту батьківського елемента","ковбаси"], correct:2, explanation:"Відносна одиниця em залежить від розміру тексту батьківського елемента"},
  {id:27, topic:"HTML", question:"Від чого залежить одиниця rem?", options:["розміру тексту тега html","висоти тексту","розміру тексту батьківського елемента","погоди"], correct:0, explanation:"Відносна одиниця rem залежить від розміру тексту тега html"},
  {id:28, topic:"HTML", question:"Від чого залежить значення у відсотках (%)?", options:["розміру тексту тега html","висоти тексту","розміру тексту батьківського елемента","розміру батьківського елемента"], correct:3, explanation:"Відносна одиниця % залежить від розміру батьківського елемента"},
  {id:29, topic:"HTML", question:"Якою властивістю вирівняти текст по центру?", options:["align-items: center;","text-decoration: center;","font-weight: center;","text-align: center;"], correct:3, explanation:"text-align: center;"},
  {id:30, topic:"HTML", question:"Яка CSS-властивість задає колір фону елемента?", options:["background-color","color","bg","font-background"], correct:0, explanation:"background-color задає колір фону."},
  {id:31, topic:"HTML", question:"Яка CSS-властивість задає розмір фонового зображення?", options:["background-color","background-position","bg","background-size"], correct:3, explanation:"background-size задає розмір фону."},
  {id:32, topic:"HTML", question:"Яка властивість задає ширину елемента?", options:["height","size","width","max-width"], correct:2, explanation:"width задає ширину елемента."},
  {id:33, topic:"HTML", question:"Яка властивість задає висоту елемента?", options:["height","width","size","min-height"], correct:0, explanation:"height задає висоту елемента."},
  {id:34, topic:"HTML", question:"Що відбувається з елементом при display:block?", options:["Робить елемент строковим","Приховує елемент","Робить елемент блочним","Робить гнучкий контейнер"], correct:2, explanation:"display: block робить елемент блочним."},
  {id:35, topic:"HTML", question:"Що відбувається з елементом при display:inline?", options:["Робить елемент строковим","Робить елемент блочним","Приховує елемент","Додає рамку"], correct:0, explanation:"display: inline робить елемент строковим."},
  {id:36, topic:"HTML", question:"Що особливого в display:inline-block порівняно з inline?", options:["Поєднує властивості inline і block","Приховує елемент","Робить flex контейнер","Робить елемент абсолютним"], correct:0, explanation:"inline-block дозволяє задавати width/height, але елемент залишається в рядку."},
  {id:37, topic:"HTML", question:"Що відбувається з елементом при display:none?", options:["Приховує елемент повністю","Робить прозорим","Зменшує розмір","Робить строковим"], correct:0, explanation:"display: none повністю видаляє елемент з потоку документа."},
  {id:38, topic:"HTML", question:"Якою властивістю задати товщину рамки?", options:["border-style","outline","frame","border-width"], correct:3, explanation:"border-width задає товщину рамки елемента."},
  {id:39, topic:"HTML", question:"Якою властивістю вибрати тип рамки (суцільна, пунктир)?", options:["border","border-color","border-style","stroke"], correct:2, explanation:"border-style задає стиль рамки елемента."},
  {id:40, topic:"HTML", question:"Для чого використовують border-radius?", options:["Змінює колір рамки","Закруглює кути","Змінює ширину","Приховує рамку"], correct:1, explanation:"border-radius закруглює кути елемента."},
  {id:41, topic:"HTML", question:"Яка CSS-властивість робить текст жирним?", options:["font-weight","font-style","text-bold","font-strong"], correct:0, explanation:"font-weight: bold робить текст жирним."},
  {id:42, topic:"HTML", question:"Яка CSS-властивість робить текст курсивним?", options:["font-weight","font-style","italic","text-decoration"], correct:1, explanation:"font-style: italic робить текст курсивним."},
  {id:43, topic:"HTML", question:"Яке значення display перетворює елемент на flex-контейнер?", options:["display: block","display: flex","position: flex","flex: 1"], correct:1, explanation:"display: flex створює flex-контейнер."},
  {id:44, topic:"HTML", question:"Яка flex-властивість вирівнює елементи по горизонталі?", options:["align-items","justify-content","flex-direction","gap"], correct:1, explanation:"justify-content вирівнює елементи по головній осі (горизонтально за замовчуванням)."},
  {id:45, topic:"HTML", question:"Яка flex-властивість вирівнює елементи по вертикалі?", options:["align-items","justify-content","flex-wrap","order"], correct:0, explanation:"align-items вирівнює елементи по поперечній осі."},
  {id:46, topic:"HTML", question:"Як розташовуються елементи при flex-direction:column?", options:["Розташовує елементи в ряд","Розташовує елементи в колонку","Приховує елементи","Робить адаптив"], correct:1, explanation:"column розташовує елементи зверху вниз."},
  {id:47, topic:"HTML", question:"Якою властивістю встановити фонове зображення?", options:["background-image","img-src","background-src","image"], correct:0, explanation:"background-image задає фонове зображення."},
  {id:48, topic:"HTML", question:"Яке початкове значення flex-direction?", options:["column","row","row-reverse","column-reverse"], correct:1, explanation:"За замовчуванням flex-direction: row."},
  {id:49, topic:"HTML", question:"Яке початкове значення flex-wrap?", options:["wrap","nowrap","wrap-reverse","inherit"], correct:1, explanation:"За замовчуванням flex-wrap: nowrap."},
  {id:50, topic:"HTML", question:"Що відбувається з flex-елементами при flex-wrap:wrap?", options:["Забороняє перенос","Переносить елементи на новий рядок","Вирівнює по центру","Робить колонку"], correct:1, explanation:"wrap дозволяє елементам переноситись на новий рядок."},
  {id:51, topic:"HTML", question:"Що задає gap у flex-контейнері?", options:["Задає внутрішній відступ","Задає відстань між елементами","Задає зовнішній відступ","Змінює ширину"], correct:1, explanation:"gap задає відстань між flex-елементами."},
  {id:54, topic:"HTML", question:"Яке значення justify-content розташовує елементи по центру?", options:["start","center","flex-end","space-between"], correct:1, explanation:"justify-content: center вирівнює елементи по центру."},
  {id:55, topic:"HTML", question:"Яка властивість задає внутрішній відступ елемента?", options:["margin","padding","gap","spacing"], correct:1, explanation:"padding задає внутрішній відступ."},
  {id:56, topic:"HTML", question:"Яка властивість задає зовнішній відступ елемента?", options:["margin","padding","gap","border"], correct:0, explanation:"margin задає зовнішній відступ."},
  {id:57, topic:"HTML", question:"Яка скорочена запис margin: 10px по вертикалі і 20px по горизонталі?", options:["margin: 10px 20px;","margin: 20px 10px;","margin: 10px;","margin: 10px 20px 30px;"], correct:0, explanation:"Перші значення — вертикальні, другі — горизонтальні."},
  {id:59, topic:"HTML", question:"Коли спрацьовує псевдоклас :hover у a:hover?", options:["Створює посилання","Стилізує посилання при наведенні","Видаляє посилання","Робить текст жирним"], correct:1, explanation:"a:hover застосовує стилі при наведенні на посилання."},
  {id:60, topic:"HTML", question:"Який з цих селекторів найсильніший за специфічністю?", options:["div","class (.box)","id (#box)","*"], correct:2, explanation:"ID має більшу специфічність ніж class і тег."},
  {id:62, topic:"HTML", question:"Навіщо використовують !important?", options:["Видаляє стиль","Підвищує вагу стилю","Робить стиль анімацією","Додає hover"], correct:1, explanation:"!important підвищує пріоритет стилю."},
  {id:63, topic:"HTML", question:"Який з цих тегів є семантичним і з'явився в HTML5?", options:["<div>","<section>","<font>","<center>"], correct:1, explanation:"<section> — семантичний тег HTML5."},
  {id:64, topic:"HTML", question:"Яким семантичним тегом позначити блок навігації?", options:["<nav>","<navigation>","<menu>","<aside>"], correct:0, explanation:"<nav> використовується для навігаційних посилань."},
  {id:65, topic:"HTML", question:"Яким тегом позначити підвал сторінки?", options:["<bottom>","<footer>","<section>","<end>"], correct:1, explanation:"<footer> — це підвал сторінки."},
  {id:66, topic:"HTML", question:"Яким тегом позначити шапку сторінки?", options:["<header>","<top>","<head>","<title>"], correct:0, explanation:"<header> — це шапка сторінки або секції."},
  {id:68, topic:"HTML", question:"Яке початкове значення align-items у flex?", options:["stretch","center","flex-start","baseline"], correct:0, explanation:"За замовчуванням align-items: stretch."},
  {id:69, topic:"HTML", question:"Що робить align-items:stretch з flex-елементами?", options:["Вирівнює по центру","Розтягує елементи по висоті","Переносить рядок","Змінює ширину"], correct:1, explanation:"stretch розтягує елементи по поперечній осі."},
  {id:71, topic:"HTML", question:"Яку фігуру намалює цей код? <div style='width:100px; height:50px; background:red;'></div>", options:["Червоний квадрат 100x50","Червоний прямокутник 100x50","Порожній блок","Помилка"], correct:1, explanation:"Блок матиме ширину 100px і висоту 50px — це прямокутник."},
  {id:72, topic:"HTML", question:"Якого кольору буде текст? <p style='color:blue;'>Hello</p>", options:["Синій текст Hello","Червоний текст","Текст зникне","Жирний текст"], correct:0, explanation:"color: blue зробить текст синім."},
  {id:73, topic:"HTML", question:"Що станеться з елементом? <div style='display:none;'>Text</div>", options:["Текст буде прозорий","Текст буде прихований повністю","Текст стане маленьким","Текст стане inline"], correct:1, explanation:"display:none повністю приховує елемент."},
  {id:74, topic:"HTML", question:"Чи спрацює width:200px для inline-елемента? <div style='display:inline; width:200px;'>Box</div>", options:["Ширина стане 200px","Ширина не застосовується","Елемент стане block","Елемент зникне"], correct:1, explanation:"Для inline-елементів width не працює."},
  {id:75, topic:"HTML", question:"Чи спрацює width:200px тут? <div style='display:inline-block; width:200px;'>Box</div>", options:["Ширина 200px застосовується","Ширина не працює","Елемент зникне","Стане flex"], correct:0, explanation:"inline-block дозволяє задавати width і height."},
  {id:76, topic:"HTML", question:"Що з'явиться навколо блоку? <div style='border:2px solid black;'></div>", options:["Рамка 2px чорна","Текст стане чорним","Фон стане чорним","Нічого"], correct:0, explanation:"border створює рамку товщиною 2px чорного кольору."},
  {id:77, topic:"HTML", question:"Яку фігуру намалює цей код? <div style='border-radius:50%; width:100px; height:100px; background:red;'></div>", options:["Червоний квадрат","Червоне коло","Овал","Прямокутник"], correct:1, explanation:"border-radius:50% робить коло при рівній ширині та висоті."},
  {id:78, topic:"HTML", question:"Де опиняться елементи? <div style='display:flex; justify-content:center;'><div>1</div><div>2</div></div>", options:["Елементи зліва","Елементи справа","Елементи по центру горизонтально","Елементи по вертикалі"], correct:2, explanation:"justify-content:center вирівнює по горизонталі."},
  {id:79, topic:"HTML", question:"Де опиниться елемент? <div style='display:flex; align-items:center; height:100px;'><div>1</div></div>", options:["Елемент по центру вертикально","Елемент по центру горизонтально","Елемент зліва","Елемент розтягнеться"], correct:0, explanation:"align-items:center вирівнює по вертикалі (поперечна вісь)."},
  {id:80, topic:"HTML", question:"Що з'явиться між елементами? <div style='display:flex; gap:20px;'><div>1</div><div>2</div></div>", options:["Між елементами 20px відступу","Внутрішній відступ 20px","Рамка 20px","Нічого не зміниться"], correct:0, explanation:"gap додає відстань між flex-елементами."},
  {id:81, topic:"HTML", question:"Яким стане текст? <p style='font-weight:bold;'>Text</p>", options:["Курсивний текст","Жирний текст","Підкреслений текст","Звичайний текст"], correct:1, explanation:"font-weight:bold робить текст жирним."},
  {id:82, topic:"HTML", question:"Яким стане текст? <p style='text-decoration:underline;'>Text</p>", options:["Жирний текст","Підкреслений текст","Курсив","Перекреслений"], correct:1, explanation:"underline додає підкреслення."},
  {id:83, topic:"HTML", question:"Який відступ з'явиться? <div style='margin:20px;'></div>", options:["Внутрішній відступ 20px","Зовнішній відступ 20px","Рамка 20px","Ширина 20px"], correct:1, explanation:"margin додає зовнішній відступ."},
  {id:84, topic:"HTML", question:"Що змінить padding? <div style='padding:20px; background:red;'>Text</div>", options:["Зовнішній відступ","Текст відступить всередині блоку","Рамка 20px","Текст стане червоним"], correct:1, explanation:"padding додає внутрішній відступ."},
  {id:85, topic:"HTML", question:"Якого кольору буде посилання? <a href='#' style='color:red;'>Link</a>", options:["Червоне посилання","Синє посилання","Жирне посилання","Посилання зникне"], correct:0, explanation:"color:red змінює колір тексту посилання."},
  {id:86, topic:"HTML", question:"Яке початкове значення position у всіх елементів?", options:["relative","absolute","static","fixed"], correct:2, explanation:"За замовчуванням всі елементи мають position: static."},
  {id:87, topic:"HTML", question:"Що дозволяє position:relative?", options:["Видаляє елемент","Дозволяє зміщувати елемент відносно його початкового місця","Прикріплює до вікна","Робить елемент flex"], correct:1, explanation:"position: relative дозволяє зміщувати елемент відносно його початкового положення."},
  {id:88, topic:"HTML", question:"Відносно чого позиціонується position:absolute?", options:["Відносно найближчого батьківського з position","Позиціонує відносно body","Приховує елемент","Робить inline"], correct:0, explanation:"absolute позиціонується відносно найближчого батька з position ≠ static."},
  {id:89, topic:"HTML", question:"До чого прив'язується position:fixed?", options:["Фіксує елемент відносно вікна браузера","Фіксує в контейнері","Ховає елемент","Робить flex"], correct:0, explanation:"position: fixed прив'язує елемент до вікна браузера."},
  {id:91, topic:"HTML", question:"Яка властивість зміщує елемент від верхнього краю?", options:["left","top","right","bottom"], correct:1, explanation:"top задає відступ від верхнього краю."},
  {id:92, topic:"HTML", question:"Яка властивість зміщує елемент від лівого краю?", options:["top","right","left","center"], correct:2, explanation:"left задає відступ від лівого краю."},
  {id:93, topic:"HTML", question:"Для чого потрібен z-index?", options:["Змінює прозорість","Керує порядком накладання елементів","Змінює ширину","Змінює позицію"], correct:1, explanation:"z-index керує тим, який елемент буде поверх інших."},
  {id:94, topic:"HTML", question:"Де розміщує контент псевдоелемент ::before?", options:["Перед контентом елемента","Після контенту","Ховає контент","Додає рамку"], correct:0, explanation:"::before вставляє віртуальний елемент перед контентом."},
  {id:95, topic:"HTML", question:"Де розміщує контент псевдоелемент ::after?", options:["Після контенту елемента","Перед контентом","Видаляє текст","Додає margin"], correct:0, explanation:"::after вставляє віртуальний елемент після контенту."},
  {id:96, topic:"HTML", question:"Без якої властивості ::before і ::after не відображаються?", options:["display","content","position","text"], correct:1, explanation:"Без властивості content псевдоелементи не відображаються."},
  {id:97, topic:"HTML", question:"Що буде результатом коду? .box::before {content:'★';}", options:["Зірка перед текстом","Зірка після тексту","Нічого","Текст стане жирним"], correct:0, explanation:"::before додає символ перед контентом елемента."},
  {id:98, topic:"HTML", question:"Що буде результатом коду? .box::after {content:'✔';}", options:["Галочка перед текстом","Галочка після тексту","Текст зникне","Рамка"], correct:1, explanation:"::after додає символ після контенту."},
  {id:99, topic:"HTML", question:"Що буде результатом коду? .box{position:relative;} .child{position:absolute; top:0; left:0;}", options:["child буде у верхньому лівому куті box","child буде у центрі","child зникне","child стане flex"], correct:0, explanation:"absolute позиціонується відносно батька з position: relative."},
  {id:100, topic:"HTML", question:"Що буде результатом коду? .box{position:fixed; bottom:0;}", options:["Елемент прикріпиться до низу екрана","Елемент буде в центрі","Елемент стане inline","Елемент зникне"], correct:0, explanation:"fixed закріплює елемент відносно вікна браузера."},
  {id:101, topic:"HTML", question:"Що вибирає псевдоселектор :first-child?", options:["Перший дочірній елемент батьківського","Останній елемент","Всі елементи","Елемент з id"], correct:0, explanation:":first-child вибирає перший дочірній елемент батьківського контейнера."},
  {id:102, topic:"HTML", question:"Що вибирає псевдоселектор :last-child?", options:["Останній дочірній елемент","Перший елемент","Всі елементи","Видаляє елемент"], correct:0, explanation:":last-child вибирає останній дочірній елемент."},
  {id:103, topic:"HTML", question:"Який елемент вибирає :nth-child(3)?", options:["Третій елемент серед сусідів","Кожен третій елемент","Перші три елементи","Всі елементи"], correct:0, explanation:":nth-child(3) вибирає третій елемент серед сусідів."},
  {id:104, topic:"HTML", question:"Що означає odd у :nth-child(odd)?", options:["Парні елементи","Непарні елементи","Перший елемент","Останній елемент"], correct:1, explanation:"odd означає непарні елементи: 1,3,5,7..."},
  {id:105, topic:"HTML", question:"Що означає even у :nth-child(even)?", options:["Непарні елементи","Всі елементи","Парні елементи","Перший елемент"], correct:2, explanation:"even означає парні елементи: 2,4,6,8..."},
  {id:106, topic:"HTML", question:"Що вибирає селектор div > p?", options:["Всі p всередині div","Тільки прямі дочірні p у div","Сусідні p","Всі p на сторінці"], correct:1, explanation:"> вибирає тільки прямі дочірні елементи."},
  {id:107, topic:"HTML", question:"Що вибирає селектор div + p?", options:["Всі p після div","Перший p одразу після div","Всі p всередині div","Останній p"], correct:1, explanation:"+ вибирає перший сусідній елемент після div."},
  {id:108, topic:"HTML", question:"Що вибирає селектор div ~ p?", options:["Всі p після div на тому ж рівні","Тільки перший p","Всі p всередині div","Останній p"], correct:0, explanation:"~ вибирає всі сусідні p після div на одному рівні."},
  {id:109, topic:"HTML", question:"Який елемент вибере li:first-child?", options:["Перший li у списку","Останній li","Всі li","Кожен другий li"], correct:0, explanation:"first-child вибере перший елемент li серед сусідів."},
  {id:110, topic:"HTML", question:"Який елемент вибере li:nth-child(2)?", options:["Другий li у списку","Кожен другий li","Останній li","Перший li"], correct:0, explanation:"nth-child(2) вибирає другий елемент серед сусідів."},
  {id:111, topic:"HTML", question:"Батьківський блок — 400px, ширина дочірнього — 50%. Скільки пікселів?", options:["50px","200px","400px","залежить від padding"], correct:1, explanation:"50% від 400px = 200px."},
  {id:112, topic:"HTML", question:"Що станеться з position:absolute якщо жоден батько не має position?", options:["Елемент позиціонується відносно body","Не спрацює","Елемент зникне","Стане inline"], correct:0, explanation:"absolute позиціонується відносно найближчого предка або body."},
  {id:113, topic:"HTML", question:"Чи спрацює z-index на елементі з position:static?", options:["Так, працює","Ні, не працює","Змінює колір","Приховує елемент"], correct:1, explanation:"z-index працює тільки з position, окрім властивості static."},
  {id:116, topic:"HTML", question:"В чому суть box-sizing:border-box?", options:["padding додається до width","width включає padding","width ігнорується","margin змінюється"], correct:1, explanation:"width включає padding і border."},
  {id:117, topic:"HTML", question:"Що дорівнює width:100vw?", options:["100% батьківського контейнера","Ширина вікна браузера","Ширина контенту","Нічого"], correct:1, explanation:"vw = viewport width."},
  {id:120, topic:"HTML", question:"Що задає min-width?", options:["Мінімальну ширину елемента","Максимальну ширину","Фіксовану ширину","Ігнорує width"], correct:0, explanation:"Задає мінімальну ширину."},
  {id:121, topic:"HTML", question:"Чи коректно вкласти <div> всередину <a>?", options:["Так, нічого не станеться","Помилка синтаксису","Некоректна розмітка","Стане inline"], correct:2, explanation:"a — строковий, не повинен містити block елементи всередині."},
  {id:123, topic:"HTML", question:"Що переможе в конфлікті: !important чи inline-стиль?", options:["inline-стиль","!important","Однаково","Залежить від браузера"], correct:1, explanation:"!important перекриває навіть inline."},
  {id:126, topic:"HTML", question:"Що зробить margin:0 auto з блоком фіксованої ширини?", options:["Відцентрує блок по горизонталі","Виставить зліва","Виставить справа","Нічого"], correct:0, explanation:"Центрує блок."},
  {id:135, topic:"HTML", question:"Для чого використовують gap у flex?", options:["Відступ як margin","Відстань між flex-елементами","Внутрішній відступ","Нічого"], correct:1, explanation:"Відстань між елементами."},
  {id:136, topic:"HTML", question:"Чи спрацює top:0 на елементі без властивості position?", options:["Так, спрацює","Ні, не спрацює","Зміститься","Помилка"], correct:1, explanation:"top працює тільки з position."},
  {id:205, topic:"HTML", question:"Яким атрибутом задається адреса переходу в тезі <a>?", options:["src","href","alt","link"], correct:1, explanation:"href задає адресу гіперпосилання в тезі <a>."},
  {id:208, topic:"HTML", question:"Яким тегом позначити основний вміст сторінки?", options:["<main>","<body>","<content>","<article>"], correct:0, explanation:"<main> містить основний унікальний контент сторінки."},
  {id:210, topic:"HTML", question:"Яким тегом позначити бічну панель сторінки?", options:["<side>","<aside>","<panel>","<nav>"], correct:1, explanation:"<aside> використовується для бічного або допоміжного контенту."},
  {id:211, topic:"HTML", question:"Як розташуються елементи при display:flex; flex-direction:column?", options:["Елементи в рядок","Елементи в колонку зверху вниз","Елементи по діагоналі","Елементи зникнуть"], correct:1, explanation:"flex-direction:column розташовує елементи зверху вниз."},
  {id:212, topic:"HTML", question:"Як працює justify-content:space-between?", options:["Елементи по центру","Крайні до країв, рівні проміжки між елементами","Рівний відступ навколо кожного","Всі елементи зліва"], correct:1, explanation:"space-between: перший — зліва, останній — справа, рівні проміжки між."},
  {id:213, topic:"HTML", question:"Як працює justify-content:space-around?", options:["Елементи до країв","Рівний відступ між елементами, крайні до країв","Рівний відступ навколо кожного елемента","Всі елементи по центру"], correct:2, explanation:"space-around додає рівні відступи навколо кожного елемента."},
  {id:214, topic:"HTML", question:"Як працює justify-content:space-evenly?", options:["Рівні відступи між усіма, включаючи краї","Елементи до країв","Елементи по центру","Елементи зліва"], correct:0, explanation:"space-evenly — рівні проміжки між усіма, включно з краями контейнера."},
  {id:220, topic:"HTML", question:"Які елементи вибирає селектор .box .item?", options:["Тільки прямий дочірній .item","Будь-який .item всередині .box","Сусідній .item","Тільки перший .item"], correct:1, explanation:"Пробіл між селекторами вибирає всіх нащадків (не тільки прямих)."},
  {id:221, topic:"HTML", question:"Що overflow:hidden робить з контентом що виходить за межі?", options:["Обрізає контент, що виходить за межі","Видаляє елемент","Додає скрол","Приховує весь елемент"], correct:0, explanation:"overflow:hidden обрізає контент, що виходить за межі блоку."},
  {id:222, topic:"HTML", question:"Коли overflow:scroll показує смугу прокрутки?", options:["Приховує контент","Видаляє елемент","Завжди, навіть якщо контент вміщується","Ніколи"], correct:2, explanation:"overflow:scroll додає полоси прокрутки завжди."},
  {id:223, topic:"HTML", question:"Коли overflow:auto додає смугу прокрутки?", options:["Завжди","Тільки коли контент виходить за межі","Приховує контент","Ніколи"], correct:1, explanation:"auto додає скрол лише якщо контент виходить за межі."},
  {id:224, topic:"HTML", question:"Що відбувається з місцем елемента при visibility:hidden?", options:["Місце зникає","Місце залишається, елемент невидимий","Змінюється прозорість","Зменшується розмір"], correct:1, explanation:"visibility:hidden ховає елемент, але місце в потоці залишається."},
  {id:225, topic:"HTML", question:"Яка головна різниця між display:none і visibility:hidden?", options:["Немає різниці","none забирає місце, hidden залишає","none залишає місце, hidden забирає","Обидва однакові"], correct:1, explanation:"display:none забирає елемент з потоку. visibility:hidden — ховає, але місце залишається."},
  {id:226, topic:"HTML", question:"Що відбувається з місцем елемента при opacity:0?", options:["Місце зникає","Елемент прозорий але місце залишається","Ховає як visibility:hidden","Розмір зменшується"], correct:1, explanation:"opacity:0 — повністю прозорий, але місце займає і події спрацьовують."},
  {id:227, topic:"HTML", question:"Який вигляд курсора задає cursor:pointer?", options:["Звичайна стрілка","Курсор-рука (вказівник)","Курсор зникає","Збільшений курсор"], correct:1, explanation:"cursor:pointer показує іконку руки при наведенні — зазвичай для кнопок."},
  {id:228, topic:"HTML", question:"Для чого потрібна властивість transition?", options:["Плавна анімація зміни CSS-властивостей","Змінює позицію","Задає колір","Робить flex"], correct:0, explanation:"transition плавно анімує зміну CSS властивостей."},
  {id:231, topic:"HTML", question:"У якому тезі HTML знаходиться <title>?", options:["<body>","<head>","<header>","<html>"], correct:1, explanation:"<title> знаходиться в <head> і задає назву вкладки браузера."},
  {id:232, topic:"HTML", question:"За що відповідає meta charset='UTF-8'?", options:["Назва сторінки","Кодування символів сторінки","Мова сторінки","Автор сторінки"], correct:1, explanation:"charset вказує кодування — UTF-8 підтримує латиницю і кирилицю."},
  {id:235, topic:"HTML", question:"В чому різниця між <strong> і <b>?", options:["Немає різниці","<strong> семантично важливий, <b> — лише жирний стиль","<b> важливіше","<strong> тільки стиль"], correct:1, explanation:"<strong> має семантичне значення важливості, <b> — лише візуальна жирність."},
  {id:236, topic:"HTML", question:"В чому різниця між <em> і <i>?", options:["<em> семантичне наголошення, <i> лише стиль","Немає різниці","<i> важливіше","<em> лише стиль"], correct:0, explanation:"<em> має семантичне значення наголосу, <i> — лише курсив."},
  {id:237, topic:"HTML", question:"Навіщо потрібен атрибут alt у <img>?", options:["Посилання на зображення","Текст якщо зображення не завантажилось","Розмір зображення","Стиль зображення"], correct:1, explanation:"alt — текст який показується якщо зображення не завантажилось; важливий для доступності."},
  {id:238, topic:"HTML", question:"Що означає тег <tr> в таблиці?", options:["Рядок таблиці","Стовпець таблиці","Клітинка таблиці","Заголовок таблиці"], correct:0, explanation:"<tr> — рядок таблиці (table row)."},
  {id:239, topic:"HTML", question:"Що означає тег <td> в таблиці?", options:["Рядок таблиці","Клітинка з даними","Заголовок клітинки","Підвал таблиці"], correct:1, explanation:"<td> — клітинка таблиці (table data)."},
  {id:240, topic:"HTML", question:"Що означає тег <th> в таблиці?", options:["Рядок таблиці","Звичайна клітинка","Клітинка-заголовок таблиці","Підвал таблиці"], correct:2, explanation:"<th> — клітинка заголовка, текст у ній жирний і по центру за замовчуванням."},
  {id:241, topic:"HTML", question:"Що text-transform:uppercase робить з текстом?", options:["Робить текст маленьким","Робить весь текст великими літерами","Робить першу літеру великою","Прибирає текст"], correct:1, explanation:"uppercase робить всі літери великими."},
  {id:243, topic:"HTML", question:"Що задає letter-spacing?", options:["Відстань між словами","Відстань між літерами","Висоту рядка","Розмір шрифту"], correct:1, explanation:"letter-spacing задає відстань між окремими літерами."},
  {id:244, topic:"HTML", question:"Що відбувається при white-space:nowrap?", options:["Прибирає пробіли","Текст не переноситься на новий рядок","Текст стає прозорим","Ховає текст"], correct:1, explanation:"nowrap забороняє перенос рядка — текст залишається в один рядок."},
  {id:245, topic:"HTML", question:"Що показує text-overflow:ellipsis коли текст не вміщується?", options:["Ховає текст","Показує '...' замість обрізаного тексту","Розтягує контейнер","Переносить текст"], correct:1, explanation:"ellipsis показує '...' коли текст виходить за межі елемента."},
  {id:247, topic:"HTML", question:"Як задати внутрішній відступ тільки зверху 10px?", options:["padding: 10px 0 10px 0;","padding-top: 10px;","padding: top 10px;","margin-top: 10px;"], correct:1, explanation:"padding-top задає відступ тільки зверху."},
  {id:248, topic:"HTML", question:"Порядок значень у padding: 10px 20px 30px 40px?", options:["top:10 right:20 bottom:30 left:40","top:40 right:30 bottom:20 left:10","top:10 left:40 рівно","Рівний з усіх сторін"], correct:0, explanation:"Порядок: top → right → bottom → left (за годинниковою стрілкою)."},
  {id:249, topic:"HTML", question:"Порядок значень у padding: 10px 20px 30px?", options:["top:10 right/left:20 bottom:30","top:10 right:20 bottom:30 left:10","top:30 right:20 bottom:10","Рівний"], correct:0, explanation:"3 значення: top, right і left однакові, bottom."},
  {id:250, topic:"HTML", question:"Яке background-size заповнює весь елемент зберігаючи пропорції?", options:["contain","cover","100%","auto"], correct:1, explanation:"cover — фон покриває весь елемент, може трохи обрізатись."},
  {id:251, topic:"HTML", question:"Яке background-size показує повне зображення без обрізки?", options:["cover","contain","fill","auto"], correct:1, explanation:"contain — повне зображення, можуть бути порожні місця по краях."},
  {id:252, topic:"HTML", question:"Що робить з фоном background-repeat:no-repeat?", options:["Зображення повторюється","Зображення не повторюється","Зображення розтягується","Зображення зникає"], correct:1, explanation:"no-repeat — фонове зображення не повторюється."},
  {id:253, topic:"HTML", question:"Що робить background-position:center з фоновим зображенням?", options:["Зміщує вправо","Центрує фонове зображення","Переміщує вниз","Нічого"], correct:1, explanation:"center розміщує фонове зображення по центру елемента."},
  {id:255, topic:"HTML", question:"Що додає до елемента властивість box-shadow?", options:["Рамку","Тінь блока","Фон","Outline"], correct:1, explanation:"box-shadow додає тінь до блочного елемента."},
  {id:256, topic:"HTML", question:"Що додає до тексту властивість text-shadow?", options:["Тінь блока","Тінь тексту","Рамку","Outline"], correct:1, explanation:"text-shadow додає тінь безпосередньо до тексту."},
  // {id:257, topic:"HTML", question:"Що робить transform:rotate(45deg)?", options:["Переміщує елемент","Повертає елемент на 45 градусів","Масштабує елемент","Приховує елемент"], correct:1, explanation:"rotate повертає елемент на вказаний кут за годинниковою стрілкою."},
  // {id:258, topic:"HTML", question:"Що робить transform:scale(2)?", options:["Переміщує в 2 рази","Збільшує в 2 рази","Повертає","Зменшує в 2 рази"], correct:1, explanation:"scale(2) збільшує елемент вдвічі відносно його центра."},
  // {id:259, topic:"HTML", question:"Що робить transform:translateX(50px)?", options:["Переміщує по вертикалі","Переміщує по горизонталі на 50px","Повертає","Масштабує"], correct:1, explanation:"translateX переміщує елемент по горизонтальній осі."},
  {id:260, topic:"HTML", question:"Що означає одиниця vh в CSS?", options:["Ширина вікна","Відсоток від висоти вікна браузера","Висота елемента","Відсоток від батька"], correct:1, explanation:"vh = viewport height — відсоток від висоти видимої частини вікна."},
  {id:261, topic:"HTML", question:"Скільки це — 100vh?", options:["100% від батька","Повна висота вікна браузера","100px","100% від тега html"], correct:1, explanation:"100vh = повна висота видимої частини вікна браузера."},
  {id:262, topic:"HTML", question:"Для чого потрібен медіа-запит (@media)?", options:["Запит до сервера","Стилі залежно від умов екрана","Анімація","CSS змінна"], correct:1, explanation:"@media дозволяє застосовувати стилі залежно від розміру чи типу пристрою."},
  {id:263, topic:"HTML", question:"Коли спрацює @media (max-width:768px)?", options:["Коли ширина більше 768px","Коли ширина до 768px включно","Коли висота до 768px","Завжди"], correct:1, explanation:"max-width:768px — стилі застосовуються коли ширина ≤ 768px."},
  {id:264, topic:"HTML", question:"Коли спрацює @media (min-width:768px)?", options:["Коли ширина менше 768px","Коли ширина від 768px і більше","Коли висота від 768px","Завжди"], correct:1, explanation:"min-width:768px — стилі застосовуються коли ширина ≥ 768px."},
  // {id:265, topic:"HTML", question:"Що таке display:grid?", options:["Flex контейнер","Двовимірна сіткова розмітка","Таблиця","Звичайний блок"], correct:1, explanation:"display:grid — двовимірна сіткова розмітка по рядках і стовпцях."},
  {id:278, topic:"HTML", question:"Що задає max-height?", options:["Фіксовану висоту","Мінімальну висоту","Максимальну допустиму висоту","Початкову висоту"], correct:2, explanation:"max-height задає максимальну допустиму висоту елемента."},
  {id:279, topic:"HTML", question:"Що зробить margin:auto з блоком фіксованої ширини?", options:["Відступ 0","Горизонтальне центрування блоку","Вертикальне центрування","Видалення блоку"], correct:1, explanation:"margin: auto рівномірно розподіляє вільний простір з обох боків — центрує."},
  {id:283, topic:"HTML", question:"В чому суть box-sizing:border-box?", options:["padding додається до width збільшуючи розмір","width включає padding і border","width ігнорується","margin змінюється"], correct:1, explanation:"border-box: ширина включає padding і border — зручна модель."},

  {id:300, topic:"HTML", question:"Яке значення text-decoration додає лінію під текстом?", options:["overline","line-through","underline","none"], correct:2, explanation:"text-decoration:underline додає підкреслення під текст."},
  {id:301, topic:"HTML", question:"Яке значення text-decoration малює лінію крізь текст?", options:["underline","overline","line-through","none"], correct:2, explanation:"text-decoration:line-through малює лінію крізь текст."},
  {id:302, topic:"HTML", question:"Яке значення text-transform робить першу літеру слова великою?", options:["uppercase","lowercase","capitalize","none"], correct:2, explanation:"capitalize робить першу літеру кожного слова великою."},
  {id:303, topic:"HTML", question:"За що відповідає властивість line-height?", options:["Відстань між літерами","Висоту рядка тексту","Розмір шрифту","Колір тексту"], correct:1, explanation:"line-height задає висоту рядка — відстань між рядками тексту."},
  {id:304, topic:"HTML", question:"Де розташовуються елементи при justify-content:flex-start?", options:["По центру","В кінці","На початку головної осі","Розтягуються"], correct:2, explanation:"flex-start — елементи збираються на початку (зліва при row)."},
  {id:305, topic:"HTML", question:"Де розташовуються елементи при justify-content:flex-end?", options:["На початку","По центру","В кінці головної осі","Рівні проміжки"], correct:2, explanation:"flex-end — елементи збираються в кінці (справа при row)."},
  {id:306, topic:"HTML", question:"Куди притискає елементи align-items:flex-start при flex-direction:row?", options:["До верху контейнера","Розтягує","По центру вертикалі","До низу"], correct:0, explanation:"flex-start притискає елементи до верху контейнера (при row)."},
  {id:307, topic:"HTML", question:"Як вирівнює елементи align-items:center?", options:["Розтягує","Притискає вгору","По центру поперечної осі","Притискає вниз"], correct:2, explanation:"align-items:center вирівнює елементи по центру поперечної осі."},
  {id:308, topic:"HTML", question:"Яке значення border-style малює рамку з рисок (пунктир)?", options:["dotted","solid","dashed","double"], correct:2, explanation:"dashed — пунктирна рамка з рисок."},
  {id:309, topic:"HTML", question:"Яке значення border-style малює рамку з маленьких крапок?", options:["dashed","solid","double","dotted"], correct:3, explanation:"dotted — рамка з маленьких крапок."},
  {id:310, topic:"HTML", question:"Що таке одиниця vw в CSS?", options:["Висота вікна","Ширина елемента","Відсоток від ширини вікна браузера","Відсоток від батька"], correct:2, explanation:"vw = viewport width — відсоток від ширини видимої частини вікна."},
  {id:311, topic:"HTML", question:"html має font-size:10px. Скільки пікселів дорівнює 1rem?", options:["12px","16px","10px","1px"], correct:2, explanation:"1rem = розмір шрифту тега html, тому 1rem = 10px."},
  {id:312, topic:"HTML", question:"Який тег позначає окремий пункт списку?", options:["<ul>","<ol>","<list>","<li>"], correct:3, explanation:"<li> — це окремий елемент списку, використовується і в ul, і в ol."},
  {id:313, topic:"HTML", question:"Який рівень заголовка найбільший і найважливіший?", options:["Найменший заголовок h6","Найбільший заголовок h1","Підзаголовок h2","Жирний текст"], correct:1, explanation:"<h1> — найбільший і найважливіший заголовок, один на сторінку."},
  {id:314, topic:"HTML", question:"Якою властивістю задати колір рамки?", options:["border-width","border-style","border-color","border-radius"], correct:2, explanation:"border-color задає колір рамки елемента."},
  {id:315, topic:"HTML", question:"Що дає margin:0 елементу?", options:["Внутрішній відступ 0","Прибирає всі зовнішні відступи","Ширина 0","Рамка прибрана"], correct:1, explanation:"margin:0 прибирає зовнішні відступи з усіх боків."},
  {id:316, topic:"HTML", question:"Що означає opacity:0.5?", options:["Елемент зникне","Елемент напівпрозорий","Елемент збільшиться","Колір стане сірим"], correct:1, explanation:"opacity:0.5 — елемент видимий наполовину."},
  {id:317, topic:"HTML", question:"Яке значення text-align розтягує текст по всій ширині рядка?", options:["center","right","left","justify"], correct:3, explanation:"justify розтягує рядки тексту по всій ширині блоку."},
  {id:318, topic:"HTML", question:"Як розташовуються елементи при flex-direction:row-reverse?", options:["В колонку","Зліва направо","Справа наліво","Приховані"], correct:2, explanation:"row-reverse — елементи в рядок, але у зворотньому порядку."},
  {id:319, topic:"HTML", question:"Що зробить border:none з рамкою?", options:["Рамка стане прозорою","Рамка повністю зникне","Рамка стане тонкою","Нічого не зміниться"], correct:1, explanation:"border:none повністю прибирає рамку елемента."},
  {id:320, topic:"HTML", question:"Що станеться з елементом? <div style='opacity:0;'>Text</div>", options:["Текст зникне і місце звільниться","Текст прозорий але місце залишається","Текст стане сірим","Елемент зникне з потоку"], correct:1, explanation:"opacity:0 робить елемент прозорим, але він залишається в потоці."},
  {id:321, topic:"HTML", question:"Де опиниться дочірній блок? <div style='display:flex; flex-direction:column; align-items:center;'><div>1</div></div>", options:["Зліва","По центру горизонтально","По центру вертикально","Зникне"], correct:1, explanation:"При column головна вісь — вертикальна, align-items центрує по горизонталі."},
  {id:322, topic:"HTML", question:"Яким стане текст? <p style='text-transform:uppercase;'>hello</p>", options:["hello","Hello","HELLO","hELLO"], correct:2, explanation:"uppercase робить всі літери великими."},
  {id:323, topic:"HTML", question:"Яка повна ширина блоку? <div style='width:200px; padding:20px; box-sizing:border-box;'></div>", options:["240px","200px","160px","220px"], correct:1, explanation:"border-box: padding входить у width, тому загальна ширина = 200px."},
  {id:324, topic:"HTML", question:"Куди зміститься блок? <div style='position:relative; top:20px;'></div>", options:["Вниз на 20px відносно свого місця","Зникне","Прикріпиться до верху сторінки","Стане абсолютним"], correct:0, explanation:"relative+top зміщує елемент відносно його початкового положення."},
  {id:325, topic:"HTML", question:"Що відбудеться зі списком? <ul style='list-style:none;'><li>A</li></ul>", options:["Список з крапками","Список без маркерів","Нумерований список","Список зникне"], correct:1, explanation:"list-style:none прибирає маркери зі списку."},
];


// ── DOM refs ──────────────────────────────────────────────
const startBtn     = document.getElementById("startBtn");
const topicSelect  = document.getElementById("topicSelect");
const quizDiv      = document.getElementById("quiz");
const questionEl   = document.getElementById("question");
const optionsDiv   = document.getElementById("options");
const feedbackEl   = document.getElementById("feedback");
const nextBtn      = document.getElementById("nextBtn");
const backBtn      = document.getElementById("backBtn");
const resultDiv    = document.getElementById("result");

// Student name inputs (added in HTML)
const firstNameInput = document.getElementById("firstName");
const lastNameInput  = document.getElementById("lastName");

let selectedQuestions = [];
let currentIndex = 0;
let stats = [];

// ── Grading helper ────────────────────────────────────────
function calcGrade(percent) {
  if (percent === 0) return 0;
  // -1 бал за кожні розпочаті 2% відхилення від 100%
  // 100%→12, 98-99%→11, 96-97%→10, 94-95%→9, ...
  const raw = 12 - Math.ceil((100 - percent) / 2);
  return Math.max(1, raw);
}

// ── Start ─────────────────────────────────────────────────
startBtn.addEventListener("click", () => {
  const firstName = firstNameInput.value.trim();
  const lastName  = lastNameInput.value.trim();
  if (!firstName || !lastName) {
    alert("Будь ласка, введіть ім'я та прізвище!");
    return;
  }

  const checkedTopics = Array.from(
    topicSelect.querySelectorAll('input[type=checkbox]:checked')
  ).map(c => c.value);

  if (checkedTopics.length === 0) {
    alert("Оберіть хоча б одну тему!");
    return;
  }

  const pool = questionBank.filter(q => checkedTopics.includes(q.topic));
  const count = Math.min(QUESTIONS_COUNT, pool.length);
  selectedQuestions = pool.sort(() => 0.5 - Math.random()).slice(0, count);

  topicSelect.style.display = "none";
  quizDiv.style.display     = "block";
  currentIndex = 0;
  stats = [];
  showQuestion();
});

// ── Show question ─────────────────────────────────────────
function showQuestion() {
  const q = selectedQuestions[currentIndex];
  questionEl.textContent = `Питання ${currentIndex + 1} / ${selectedQuestions.length}: ${q.question}`;
  optionsDiv.innerHTML   = "";
  feedbackEl.textContent = "";
  nextBtn.disabled       = true;

  const shuffled = q.options
  .map((opt, i) => ({ opt, i }))
  .sort(() => 0.5 - Math.random());

shuffled.forEach(({ opt, i }) => {
  const btn = document.createElement("button");
  btn.textContent = opt;
  btn.addEventListener("click", () => {
    const correct = i === q.correct;
    stats.push({ question: q.question, correct });
      feedbackEl.textContent =
        (correct ? "✅ Правильно! " : "❌ Не зовсім. ") + q.explanation;
      Array.from(optionsDiv.children).forEach(b => b.disabled = true);
      nextBtn.disabled = false;
    });
    optionsDiv.appendChild(btn);
  });
}

// ── Next ──────────────────────────────────────────────────
nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// ── Back ──────────────────────────────────────────────────
backBtn.addEventListener("click", () => {
  quizDiv.style.display     = "none";
  topicSelect.style.display = "block";
  resultDiv.style.display   = "none";
  nextBtn.disabled          = false;
});

// ── Result ────────────────────────────────────────────────
function showResult() {
  quizDiv.style.display   = "none";
  resultDiv.style.display = "block";

  const firstName    = firstNameInput.value.trim();
  const lastName     = lastNameInput.value.trim();
  const correctCount = stats.filter(s => s.correct).length;
  const total        = stats.length;
  const percent      = Math.round(correctCount / total * 100);
  const grade        = calcGrade(percent);

  // Grade emoji
  const gradeEmoji = grade === 12 ? "🏆" : grade >= 9 ? "🌟" : grade >= 6 ? "👍" : "📚";

  let html = `<h2>Тест завершено!</h2>`;
  html += `<p class="student-name">Студент: <strong>${lastName} ${firstName}</strong></p>`;
  html += `<p>Правильних відповідей: <strong>${correctCount}</strong> з <strong>${total}</strong> (${percent}%)</p>`;
  html += `<p class="grade">${gradeEmoji} Оцінка: <strong>${grade} / 12</strong></p>`;

  // Show wrong answers only if not 100%
  const wrongStats = stats.filter(s => !s.correct);
  if (wrongStats.length > 0) {
    html += `<p>Питання, на які відповіли неправильно:</p><ul>`;
    wrongStats.forEach(s => {
      html += `<li>${s.question}</li>`;
    });
    html += `</ul>`;
  }

  html += `<button id="retryBtn">Пройти ще раз</button>`;
  resultDiv.innerHTML = html;

  document.getElementById("retryBtn").addEventListener("click", () => {
    resultDiv.style.display   = "none";
    topicSelect.style.display = "block";
  });
}