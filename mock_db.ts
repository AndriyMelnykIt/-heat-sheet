export const modules = [
  {
    id: 1,
    name: 'Internet',
    questions: [
      {
        id: '1_1',
        question: 'What is DNS?',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
      {
        id: '1_2',
        question: 'Прогресивний рендеринг',
        descriptions: [
          {
            code: false,
            label: 'Що таке прогресивний рендеринг?',
            description: 'Прогресивний рендеринг – це назва технологій, що використовуються для прискорення відтворення сторінок (зокрема, для зменшення часу завантаження), щоб показати користувачеві контент якнайшвидше. До того, як широкосмуговий інтернет поширився повсюдно, прогресивний рендеринг зустрічався досить часто.',
          },
        ],
      },
      {
        id: '1_3',
        question: 'Що таке прогресивний SSR?',
        descriptions: [
          {
            code: false,
            label: 'Прогресивний SSR?',
            description: `SSR (Server-Side Rendering) генерує повний HTML для сторінки на сервері у відповідь на запит (перехід по посиланню). Це дозволяє уникнути додаткових запитів даних, наповнення шаблонів на стороні клієнта, оскільки вони обробляються до того, як браузер отримує відповідь.`,
          },
        ],
      },
      {
        id: '1_4',
        question: 'Що таке потік документа?',
        descriptions: [
          {
            code: false,
            label: 'Що таке потік документа?',
            description: `Документний потік - це сукупність розподілених у часі і просторі документів, які рухаються по комунікаційним каналам від створювачів та виробників до користувачів.`,
          },
        ],
      },
      {
        id: '1_5',
        question: 'Різниця між адаптивним (adaptive) та чуйним (responsive) дизайнами?',
        descriptions: [
          {
            code: false,
            label: 'Responsive design',
            description: `За найпростішим визначенням, гнучкий дизайн використовує лише один макет веб-сторінки і «гнучко» змінюється так, щоб краще відповідати екрану користувача, будь то настільний комп’ютер, ноутбук, планшет чи мобільний телефон.
Якщо дивитися з більш технічного боку, то гнучкі веб-сторінки використовують CSS медіазапити та маркери розмірів (breakpoints; далі брейкпоінт) для коригування масштабу зображень, переносу (а також масштабування) тексту та інших елементів.`,
          },
          {
            code: false,
            label: 'Adaptive design',
            description: `Загалом вважається, що адаптивний дизайн — це фіксовані макети, які адаптуються до певних розмірів екрану. Коротко кажучи, у вас є кілька версій веб-сторінки, які відповідають якомусь пристрою, на відміну від однієї, статичної сторінки, яка виглядає однаково і змінює порядок (чи змінює розмір вмісту) на всіх пристроях.В адаптивному дизайні прийнято розробляти UI-макети для 6 найпоширеніших ширин екрану: 320, 480, 760, 960, 1200 і 1600 пікселів`,
          },
        ],
      },
      {
        id: '1_6',
        question: 'Різниця між Progressive Enhancement та Graceful Degradation?',
        descriptions: [
          {
            code: false,
            label: 'Graceful Degradation || Поступова Деградація',
            description: `Поступова деградація—це стратегія розробки, при якій ваш веб-інтерфейс першочергово призначений для перегляду в сучасних браузерах, тоді як в старих браузерах він відображатиметься з обмеженим набором можливостей, але, як мінімум, з базовим функціоналом. Якщо ми говорим про JavaScript, то це означає, що не весь функціонал може бути доступним, в силу відсутності підтримки окремих JS можливостей. Або ж, сайт функціонуватиме і за умови виключеного JS, але лише у базовому режимі. Щодо CSS, за відсутності підтримки тієї чи іншої CSS властивості, сайт функціонуватиме і матиме зрозумілий вигляд, але не такий красивий як у сучасному броузері, що підтримує останні можливості CSS`,
          },
          {
            code: false,
            label: 'Progressive enhancement || Прогресивне покращення',
            description: `Прогресивне покращення дивиться на проблему підтримки старих браузерів з протилежної сторони — розробка веб-інтерфейсу відбувається поетапно, від простого до складного. На кожному з етапів ми отримуємо завершений веб-інтерфейс, що з кожним етапом стає ще кращим, ще зручнішим. В результаті виходить ресурс, що працює у всіх браузерах.`,
          },
          {
            code: false,
            label: 'Основна відміннсть',
            description: `Основна відмінність між цими двома принципами це те, звідки починається розробка. Якщо починати розробку, орієнтуючись на найстаріший браузер зі списку тих, що повинен підтрумувати ваш продукт, а опісля додавати специфічний функціонал для новіших версій, то це — прогресивне покращення. Якщо ж починати створення веб-інтерфейсу під найновіші браузери, а потім просто ховати чи спрощувати деякі функціональності для старіших — це поступова деградація.`,
          },
        ],
      },
      {
        id: '1_7',
        question: 'Що таке кросбраузерність?',
        descriptions: [
          {
            code: false,
            label: 'Кросбраузерність',
            description: `Кросбраузерність сайту — це властивість сайту однаково відображатися та функціонувати у відповідності до поставленого завдання в усіх браузерах. Простіше кажучи, таку характеристику дають сайтам, дизайн яких однаковий як в Internet Explorer, так і в Google Chrome.`,
          },
        ],
      },
      {
        id: '1_8',
        question: 'Babel',
        descriptions: [
          {
            code: false,
            label: 'Що таке Babel? Навіщо він використовується?',
            description: `Babel — можливість писати код «нового стандарту» (з новим функціоналом) не хвилюючись, що цей новий функціонал може не підтримуватись браузерами.`,
          },
          {
            code: false,
            label: 'Що він робить?',
            description: `Babel бере написаний нами код з новим функціоналом та перетворює (транскомпілює) його в аналогічний код, але «старого зразка». Це робиться тому, що саме цей код, код «старого зразка», браузер розуміє без проблем.`,
          },
          {
            code: true,
            label: 'Put in next-gen JavaScript',
            description: `[1,2,3].map(n => n ** 2)`,
          },
          {
            code: true,
            label: 'Get Browser-compatible JavaScript out',
            description: `[1,2,3].map(function (n) {
  return Math.pow(n, 2);
}`,
          },
        ],
      },
      {
        id: '1_9',
        question: 'Різниця між feature detection, feature inference та аналізом рядка user-agent?',
        descriptions: [
          {
            code: false,
            label: 'Feature detection',
            description: `Feature detection - це визначення можливостей браузера чи пристрою, які можуть бути використані у веб-додатках за допомогою коду. Наприклад, перевірка на підтримку HTML5 або CSS3.`,
          },
          {
            code: false,
            label: 'Feature inference',
            description: `Feature inference - це визначення можливостей браузера чи пристрою, які не можуть бути прямо перевірені за допомогою коду. Наприклад, визначення підтримки WebGL на основі підтримки OpenGL.`,
          },
          {
            code: false,
            label: 'User-agent ',
            description: `User-agent string analysis - це аналіз інформації про браузер та операційну систему, яка передається в HTTP-запиті від браузера до веб-сайту. Це може допомогти веб-сайту визначити, як він повинен поводитися для даного користувача. Наприклад, відображення вмісту у форматі мобільного пристрою для мобільного браузера.`,
          },
        ],
      },
      {
        id: '1_10',
        question: 'Що таке Веб-компоненти та які технології в них використовуються?',
        descriptions: [
          {
            code: false,
            label: 'Feature detection',
            description: `Веб-компоненти (Web Components) - це стандартизований набір технологій веб-розробки, що дозволяють створювати перевикористовувані елементи інтерфейсу користувача (UI) зі своїм функціоналом, які можуть використовуватись в різних веб-додатках без необхідності копіювання та вставки коду.
            Веб-компоненти складаються з трьох технологій:
            Custom Elements - дозволяє розробникам створювати свої власні HTML-елементи зі своїми властивостями та методами. За допомогою цієї технології можна створити зручні, перевикористовувані компоненти зі своїм функціоналом.

Shadow DOM - дозволяє розробникам ізолювати стилі та логіку свого компонента від зовнішнього середовища. За допомогою Shadow DOM можна побудувати структуру компонента, яка буде недоступна для змін з зовнішнього коду, тим самим підвищивши безпеку та знизивши імовірність конфліктів між стилями та скриптами.

HTML Templates - дозволяє створювати шаблони HTML-коду, які можуть бути використані для створення нових елементів. Ця технологія дозволяє розробникам використовувати та маніпулювати зі складовими частинами елемента, що збільшує його перевикористовуваність.

Всі ці технології включаються в HTML-сторінку та забезпечують можливість створення веб-компонентів з уніфікованою структурою та поведінкою, що значно полегшує розробку та підтримку веб-додатків.`,
          },
        ],
      },
      {
        id: '1_11',
        question: 'Способи зменшення часу завантаження веб-сторінки?',
        descriptions: [
          {
            code: false,
            label: 'Способи зменшення часу завантаження веб-сторінки',
            description: `Компресія зображень: Зображення часто становлять більше половини завантаженого контенту на сторінці. Використовуючи інструменти для компресії зображень, наприклад, Adobe Photoshop, ImageOptim або TinyPNG, можна зменшити розмір файлу зображення без втрати якості.
Мінімізація коду: Використання засобів, таких як CSS минифікатори та JS компресори, дозволяє зменшити розмір коду сторінки, що зменшує час завантаження.
Кешування: Використання кешування для зберігання тимчасової копії веб-сторінки на стороні клієнта може зменшити кількість запитів на сервер та зменшити час завантаження сторінки для повторних відвідувань.
Комбінування та мінімізація запитів: За допомогою об'єднання декількох файлів CSS та JavaScript в один файл та їх минифікації можна зменшити кількість запитів на сервер та зменшити час завантаження.
Використання CDN: Використання CDN (Content Delivery Network) дозволяє розподілити завантаження ресурсів на кілька серверів, що знаходяться ближче до користувача, що допомагає зменшити час завантаження сторінки.
Видалення зайвого контенту: Видалення зайвого контенту, такого як сторонні скрипти та не використовуваний код, може допомогти зменшити розмір сторінки`,
          },
        ],
      },
      {
        id: '1_12',
        question: 'Особливості розробки мультимовних сайтів?',
        descriptions: [
          {
            code: false,
            label: 'Мультимовний сайт',
            description: `Мультимовний сайт – це вебресурс, адаптований для користувачів, що володіють різними мовами.
            Як реалізувати мультимовність на сайті?
            Різні домени
            Найочевидніший спосіб зробити мультимовність сайту – використовувати різні доменні імена. Наприклад, для України – .ua, для Польщі – .pl, для Чехії – .cz. І так далі.
            За допомогою категорій та папок
            В даному випадку на сайт встановлюється модуль мультимовності, створюються категорії та папки, куди копіюється контент. Подібним чином структура сайту реалізується в рамках одного піддомену, а отже, і вага теж зберігається.
            Параметри
Такий метод вважається спірним, і навіть Google його не рекомендує. Принцип у тому, що дані про мовну та регіональну приналежність вебресурсу передаються через параметр URL. Реалізація мультимовності здійснюється в рамках єдиного домену, але просувати сторінки з параметрами насправді безглуздо.
            `,
          },
        ],
      },
      {
        id: '1_13',
        question: 'Що таке Flash Of Unstyled Content (FOUC)? Як його уникнути?',
        descriptions: [
          {
            code: false,
            label: 'Що таке Flash Of Unstyled Content (FOUC)?',
            description: `Flash Of Unstyled Content (FOUC) - це проблема, коли сторінка завантажується без зовнішніх CSS стилів або з частково завантаженими стилями, що призводить до тимчасового зображення сторінки без стилів, а потім до зображення з правильним виглядом. Це може зіпсувати візуальний досвід користувачів та порушити дизайн сторінки.`,
          },
          {
            code: false,
            label: 'Як його уникнути?',
            description: `Щоб уникнути FOUC, можна використовувати такі підходи, як inline CSS, deferred loading of CSS, або використання preloading CSS. Inline CSS дозволяє браузеру відображати сторінку зі стилями, навіть якщо зовнішні стилі ще не завантажилися. Deferred loading дозволяє браузеру завантажувати стилі пізніше, коли основний зміст сторінки вже завантажено. Preloading CSS дозволяє браузеру завантажувати стилі раніше, ніж вони потрібні для відображення сторінки.`,
          },
        ],
      },
      {
        id: '1_14',
        question: 'Різниця між layout, painting та compositing?',
        descriptions: [
          {
            code: false,
            label: 'Різниця між layout, painting та compositing?',
            description: `
Layout, painting та compositing - це три різні етапи процесу відображення веб-сторінки в браузері. Кожен з цих етапів відповідає за певні аспекти відображення сторінки, і вони відбуваються послідовно один за одним. Ось короткий опис кожного з цих етапів:`,
          },
          {
            code: false,
            label: 'Layout (розміщення)',
            description: `Layout (розміщення): це перший етап відображення сторінки, коли браузер обчислює розміри та позиції кожного елемента на сторінці, враховуючи стиль та структуру HTML. Наприклад, браузер визначає, де повинен бути розміщений блок тексту та якого розміру повинен бути зображення.`,
          },
          {
            code: false,
            label: 'Painting (фарбування)',
            description: `Painting (фарбування): це другий етап відображення, коли браузер використовує розраховану розмітку та стилі для заповнення кольорами та тексту елементів сторінки. Цей етап включає фарбування фонів, текстів, зображень та інших елементів сторінки.`,
          },
          {
            code: false,
            label: 'Compositing (композиція)',
            description: `Compositing (композиція): це останній етап відображення, коли браузер об'єднує зображення та елементи сторінки в один зображення, яке потім відображається на екрані. Цей етап включає об'єднання шарів зображень, що містяться в окремих блоках`,
          },
          {
            code: false,
            label: 'Узагальнення',
            description: `Загалом, layout відповідає за розміщення елементів на сторінці, painting - за їхнє фарбування, а compositing - за об'єднання різних елементів та зображень в одне зображення. Кожен з цих етапів має важливу роль у відображенні веб-сторінок, і збій в будь-якому з них може призвести до проблем з відображенням сторінки в браузері`,
          },
        ],
      },
      {
        id: '1_15',
        question: 'Що таке Progressive Web Application?',
        descriptions: [
          {
            code: false,
            label: 'Що таке Progressive Web Application?',
            description: `Progressive Web Application (PWA) – це додаток, створений за допомогою веб-технологій і є гібридом звичайного веб-сайту, доступ до якого здійснюється через браузер (в тому числі і браузер мобільного додатка). Такі гібридні веб-додатки імітують досвід використання нативних додатків і мають максимально наближений до них зовнішній вигляд і юзабіліті.`,
          },
        ],
      },
      {
        id: '1_16',
        question: 'Що таке міжсайтовий скриптинг (XSS)?',
        descriptions: [
          {
            code: false,
            label: '',
            description: `Міжсайтовий скриптинг (Cross-Site Scripting або XSS) - це тип атаки на веб-додатки, який полягає в виконанні зловмисного скрипту в браузері користувача з метою отримання доступу до конфіденційної інформації або контролю над обліковим записом користувача. 

Атака XSS може бути виконана шляхом вставки зловмисного коду у веб-сторінку, яка відображається в браузері користувача. Наприклад, зловмисник може вставити скрипт у поле вводу на веб-сайті, який потім буде відображений іншим користувачам, які зайшли на цей сайт. Якщо користувачі введуть дані в це поле, то зловмисний скрипт може виконатися у їхньому браузері, що може призвести до витоку конфіденційної інформації або виконання дій від імені користувача без його дозволу. 

Для уникнення атак XSS веб-розробники можуть використовувати заходи безпеки, такі як валідація та екранування введених користувачем даних, використання безпечних HTTP кукі, використання Content Security Policy (CSP) та інших технологій. Крім того, користувачі повинні бути обережні при введенні своїх даних на невідомих веб-сайтах та уникати виконання незнайомих скриптів у своєму браузері.`,
          },
        ],
      },
      {
        id: '1_17',
        question: 'Що таке API?',
        descriptions: [
          {
            code: false,
            label: 'Що таке API?',
            description: `API — це посередник між програмами, який задає правила «спілкування». API (Application Programming Interface) — це набір готових класів, процедур, функцій, структур і констант, що надаються додатком (бібліотекою, сервісом) для використання в зовнішніх програмних продуктах (Вікіпедія). Своїми словами, API надає нам можливість використовувати чужі напрацювання в своїх цілях.`,
          },
        ],
      },
      {
        id: '1_18',
        question: 'Що таке CDN?',
        descriptions: [
          {
            code: false,
            label: ' CDN - це ...',
            description: `Мережа доставки вмісту (Content Delivery Network, або CDN) — це сукупність серверів, які доставляють вміст користувачеві.`,
          },
        ],
      },
      {
        id: '1_19',
        question: 'Що таке REST?',
        descriptions: [
          {
            code: false,
            label: 'Що таке REST?',
            description: `REST (скор. англ. Representational State Transfer, «передача репрезентативного стану») — підхід до архітектури мережевих протоколів, які надають доступ до інформаційних ресурсів. Був описаний і популяризований 2000 року Роєм Філдінгом, одним із творців протоколу HTTP.`,
          },
        ],
      },
      {
        id: '1_20',
        question: 'Що таке ip-адреса?',
        descriptions: [
          {
            code: false,
            label: 'Що таке ip-адреса?',
            description: `IP-адреса, адреса Ай-Пі — це ідентифікатор мережевого рівня, який використовується для адресації комп'ютерів чи пристроїв у мережах, які побудовані з використанням стеку протоколів TCP/IP. `,
          },
          {
            code: false,
            label: 'Як виглядає IP-адреса?',
            description: `У версії протоколу IPv4 IP-адреса має довжину 4 байти. В 4-й версії IP-адреса являє собою 32-бітове число. Зручною формою запису IP-адреси (IPv4) є запис у вигляді чотирьох десяткових чисел значенням від 0 до 255, розділених крапками, наприклад: 192.168.0.1. `,
          },
        ],
      },
      {
        id: '1_21',
        question: 'Різниця між host і domain?',
        descriptions: [
          {
            code: false,
            label: 'Різниця між host і domain?',
            description: `Хостинг — це місце, де зберігається сайт , Його файли і база даних. Домен — це ім'я сайту в інтернеті. Для повноцінної роботи сайту потрібен і хостинг, і домен.`,
          },
        ],
      },
      {
        id: '1_22',
        question: 'Що таке URL?',
        descriptions: [
          {
            code: false,
            label: 'Що таке URL?',
            description: `URL означає Уніфікований покажчик інформаційного ресурсу. Це рядок символів, що визначає адресу. Це найпоширеніший спосіб ідентифікації місця розташування ресурсу в World Wide Web (WWW).`,
          },
          {
            code: false,
            label: 'Що таке URI',
            description: `Визначає URI Уніфікований ідентифікатор ресурсу. Це рядок символів, що використовується для ідентифікації ресурсу в Інтернеті або за місцем розташування, або за ім'ям, або за обома.`,
          },
          {
            code: false,
            label: 'Основна відмінність',
            description: `Основна відмінність між URL і URI є те, що URL-адреса дозволяє ідентифікувати веб-ресурс тільки за його розташуванням, а URI дозволяє ідентифікувати веб-ресурс, використовуючи ім'я або місце розташування, або обидва.`,
          },
        ],
      },
      {
        id: '1_23',
        question: 'Чому очищувати кеш важливо? Як це можна зробити?',
        descriptions: [
          {
            code: false,
            label: 'Чому очищувати кеш важливо?',
            description: `Кеш - це тимчасове сховище, де зберігаються дані, які використовуються повторно для швидшого доступу до них. Кеш може містити збережені сторінки веб-сайту, зображення, стилі, скрипти та інші ресурси.`,
          },
          {
            code: false,
            label: 'Як це можна зробити?',
            description: `Використання клавіш Ctrl + Shift + Delete, щоб відкрити вікно очищення кешу у браузері.
У веб-браузері можна вибрати опцію «Очистити кеш» або «Очистити історію» в меню налаштувань.
У деяких браузерах можна використовувати розширення для очищення кешу та інших тимчасових файлів.
У некоторых ОС можна вибрати опцію "Очистити кеш" в меню налаштувань.
Застосування програм для очищення кешу, таких як CCleaner.`,
          },
        ],
      },
      {
        id: '1_24',
        question: 'Назвіть критичні етапи рендерингу?',
        descriptions: [
          {
            code: false,
            label: 'Назвіть критичні етапи рендерингу?',
            description: `Критичний рендеринговий шлях (Critical Rendering Path) - це процес відправки запиту до сервера за HTML, обчислення CSS стилів, обчислення та відображення DOM, обчислення та відображення CSSOM і злиття їх в один документ.
Layout - це процес обчислення положення та розмірів елементів на сторінці.
Painting - це процес перетворення обчисленого вигляду елементів на сторінці в пікселі.
Compositing - це процес складання відображення сторінки з оброблених шарів пікселів.
Усі ці етапи взаємодіють між собою, і якщо хоча б один з них займає дуже багато часу, це може призвести до затримок у відображенні сторінки, зниження продуктивності та погіршення користувацького досвіду. Тому оптимізація критичного рендерингового шляху та всіх цих етапів є важливою задачею для покращення продуктивності веб-сторінок.`,
          },
        ],
      },
      {
        id: '1_25',
        question: 'Що таке Core Web Vitals? Які основні метрики входять туди?',
        descriptions: [
          {
            code: false,
            label: 'Що таке Core Web Vitals? Які основні метрики входять туди?',
            description: `Core Web Vitals - це група основних метрик продуктивності веб-сторінок, які були визначені Google з метою покращення користувацького досвіду в Інтернеті. Ці метрики визначаються на основі того, як швидко сторінка завантажується, реагує на дії користувача та як зручно користуватися нею.

Основні метрики Core Web Vitals включають:

1. Largest Contentful Paint (LCP) - ця метрика вимірює час, який потрібно браузеру для відображення найбільшого контентного елементу на сторінці. Ідеальний час LCP - менше 2,5 секунд.

2. First Input Delay (FID) - ця метрика вимірює затримку між першим взаємодією користувача зі сторінкою (наприклад, кліком на кнопку) та відповіддю сторінки. Ідеальний час FID - менше 100 мс.

3. Cumulative Layout Shift (CLS) - ця метрика вимірює, наскільки динамічно змінюється макет сторінки під час її завантаження. Ідеальний показник CLS - менше 0,1.

Ці метрики вважаються основними, оскільки вони дозволяють оцінити швидкість завантаження сторінки, забезпечити реагування на дії користувача та уникнути змін макету сторінки під час завантаження. Оцінка Core Web Vitals є важливою для SEO, тому що Google використовує їх для розміщення веб-сторінок у пошукових результатах.`,
          },
        ],
      },
      {
        id: '1_26',
        question: 'Розкажіть про метрики Core Web Vitals?',
        descriptions: [
          {
            code: false,
            label: 'Розкажіть про метрики Core Web Vitals?',
            description: `Core Web Vitals - це набір метрик, які вимірюють кількісні показники взаємодії користувача з веб-сторінками, зокрема швидкість, стабільність та якість візуального відображення. Ці метрики були розроблені Google з метою покращення користувацького досвіду та сприяння оптимізації веб-сторінок.`,
          },
        ],
      },
      {
        id: '1_27',
        question: 'Різниця між preload, prefetch, preconnect та prerender?',
        descriptions: [
          {
            code: false,
            label: 'preload',
            description: `Цей метод використовується для попереднього завантаження важливих ресурсів сторінки, таких як шрифти, стилі, скрипти, зображення тощо. Використання цього методу дозволяє покращити швидкість завантаження сторінки, тому що браузер починає завантаження ресурсів ще до того, як вони будуть потрібні для відображення.`,
          },{
            code: false,
            label: 'prefetch',
            description: `Цей метод використовується для попереднього завантаження ресурсів, які будуть потрібні в майбутньому. Наприклад, якщо на сторінці є посилання на іншу сторінку, то можна використовувати prefetch, щоб попередньо завантажити цю сторінку та покращити її швидкість завантаження.`,
          },{
            code: false,
            label: 'preconnect',
            description: `Цей метод використовується для попередньої настройки з'єднання з сервером, який має надавати ресурси, щоб зменшити затримки. Наприклад, якщо на сторінці використовується сторонній шрифт або скрипт, можна використовувати preconnect, щоб підготувати з'єднання з сервером, який надаватиме ці ресурси, ще до того, як вони будуть потрібні.`,
          },{
            code: false,
            label: 'prerender',
            description: `Цей метод використовується для попереднього рендерингу сторінки, що дозволяє покращити її швидкість завантаження.`,
          },
        ],
      },
      {
        id: '1_28',
        question: 'Навіщо потрібен патерн PRPL?',
        descriptions: [
          {
            code: false,
            label: 'Навіщо потрібен патерн PRPL?',
            description: `PRPL (Push, Render, Pre-cache, Lazy-load) - це паттерн проектування, який допомагає забезпечити швидке завантаження веб-сторінок на мобільних пристроях. Він може бути особливо корисним для веб-додатків з великою кількістю коду та ресурсів, які потрібно завантажувати.

Основна ідея PRPL полягає в тому, щоб завантажувати сторінки якомога швидше та ефективніше. Завдяки PRPL можна використовувати попереднє завантаження, передварительне кешування та ліниве завантаження, щоб зменшити час завантаження сторінки та зменшити кількість запитів до сервера.

Патерн PRPL може бути особливо корисним для веб-додатків на мобільних пристроях, оскільки швидкість та ефективність завантаження сторінок на цих пристроях може бути обмеженою. Принцип PRPL допомагає забезпечити оптимальне використання ресурсів та мінімізувати час завантаження сторінок, що поліпшує користувацький досвід та забезпечує більш високу конверсію.`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Git',
    questions: [
      {
        id: '2_1',
        question: 'question 1',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
      {
        id: '2_2',
        question: 'question 2',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
      {
        id: '2_3',
        question: 'question 3',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'HTML',
    questions: [
      {
        id: '3_1',
        question: 'question 1',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
      {
        id: '3_2',
        question: 'question 2',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
      {
        id: '3_3',
        question: 'question 3',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'CSS',
    questions: [
      {
        id: '4_1',
        question: 'question 1',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
      {
        id: '4_2',
        question: 'question 2',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
      {
        id: '4_3',
        question: 'question 3',
        descriptions: [
          {
            code: false,
            label: 'What is DNS?',
            description: `The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.
            Each device connected to the Internet has a unique IP address which other machines use to find the device. DNS servers eliminate the need for humans to memorize IP addresses such as 192.168.1.1 (in IPv4), or more complex newer alphanumeric IP addresses such as 2400:cb00:2048:1::c629:d7a2 (in IPv6).`,
          },
          {
            code: false,
            label: 'How does DNS work?',
            description: `The process of DNS resolution involves converting a hostname (such as www.example.com) into a computer-friendly IP address (such as 192.168.1.1). An IP address is given to each device on the Internet, and that address is necessary to find the appropriate Internet device - like a street address is used to find a particular home. When a user wants to load a webpage, a translation must occur between what a user types into their web browser (example.com) and the machine-friendly address necessary to locate the example.com webpage.
            In order to understand the process behind the DNS resolution, it’s important to learn about the different hardware components a DNS query must pass between. For the web browser, the DNS lookup occurs "behind the scenes" and requires no interaction from the user’s computer apart from the initial request.`,
          },
          {
            code: true,
            label: 'Code',
            description: `
              import { useEffect, useState } from 'react';
              import { Module, Question } from '../interfaces';
              
              const useGetObjectById = ( array: (Question | Module)[], id : string): Module | Question | null => {
                const [result, setResult] = useState<Module | Question | null>(null);
              
                const getObjectById = (array: (Question | Module)[], idForSearch: string): void => {
                    for (let i = 0; i < array.length; i++) {
                      const obj = array[i];
                      if ("questions" in obj) {
                        const moduleObj = obj as Module;
                        getObjectById(moduleObj.questions, idForSearch);
                      }
                      if (obj.id === idForSearch) {
                        setResult(obj as Module | Question);
                        break;
                      }
                    }
                  }
              
                useEffect(() => {
                  getObjectById(array, id);
                }, [array, id]);
              
                return result;
              };
              
              export default useGetObjectById;
            `,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Princeples',
    questions: [
      {
        id: '5_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '5_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '5_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 6,
    name: 'ES5+, JavaScript',
    questions: [
      {
        id: '6_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '6_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '6_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 7,
    name: 'Webpack, Babel',
    questions: [
      {
        id: '7_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '7_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '7_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 8,
    name: 'Configuration project',
    questions: [
      {
        id: '8_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '8_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '8_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 9,
    name: 'React JS',
    questions: [
      {
        id: '9_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '9_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '9_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 10,
    name: 'Testing',
    questions: [
      {
        id: '10_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '10_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '10_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 11,
    name: 'Metodologies',
    questions: [
      {
        id: '11_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '11_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '11_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
  {
    id: 12,
    name: 'Practical  part',
    questions: [
      {
        id: '12_1',
        question: 'question 1',
        descriptions: [],
      },
      {
        id: '12_2',
        question: 'question 2',
        descriptions: [],
      },
      {
        id: '12_3',
        question: 'question 3',
        descriptions: [],
      },
    ],
  },
];
