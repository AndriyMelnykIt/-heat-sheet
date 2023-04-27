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
