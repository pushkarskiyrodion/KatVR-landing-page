export const translate = (lang, keys) => {
  let result = translation[lang];
  for (const key of keys) {
    result = result[key];
  }
  return result;
};

const translation = {
  en: {
    ENGLISH_LANGUAGE: "English",
    UKRAINIAN_LANGUAGE: "Ukrainian",
    HEADER_TITLE: "The New Start of",
    HEADER_ABOUT:
      "Discover the most comprehensive VR Locomotion system,and unlock infinite motion in any games on any platforms!",
    MENU: {
      ABOUT: "About",
      TECH: "Tech",
      BENEFITS: "Benefits",
      CONTACTS: "Contacts",
      LANGUAGE: "Language",
      FAQ: "FAQ",
      HELP: "Help",
      MORE: "More",
    },
    HELP: {
      TITLE: "How we can",
      TITLE_SECONDARY: "help",
      TITLE_END: "you?",
      TEXT: "Welcome to our help center. Our goal is to make the process of getting acquainted and purchase as easy and pleasant as possible. Need help with your KAT VR loco product? Many product questions can be resolved by reviewing our Product Support",
      PLEASE: "Please also feel free to",
      DIRECTLY:
        "directly should you need anything further. We`re happy to help.",
      CONTACT: "Contact Us",
      WARANTY: "Where to go for a warranty",
      SERVICE_POLICE: "Service Policy",
      INSTRUCTION: "Instruction manual",
    },
    MORE: {
      TITLE: "More Than",
      TITLE_SECONDARY: "Gaming",
      SUBTITLE: "This also made for people who are interested in...",
      EDUCATION: {
        TITLE: "Education",
        TEXT: "Create aducational simulations, trainings and much more with unlimited virtual space and minimum physical space",
      },
      ESTATE: {
        TITLE: "Real Estate",
        TEXT: "Desighn architectural projects in a deeply realistic environment allowing visitors to freely walk around, and feel their vibe",
      },
      FITNESS: {
        TITLE: "Fitness",
        TEXT: "Combine business with pleasure, and discover countless ways to stay fit while playing your favorite VR Games!",
      },
      SOCIAL: {
        TITLE: "Social Interactions",
        TEXT: "Hang out with your friends in the virtual world when you can`t meet space requirements",
      },
    },
    ABOUT: {
      TITLE: "About",
      TITLE_SECONDARY: "Product",
      TEXT: "KAT loco is a foot-based VR locomotion system that gives complete physical control over lower-body actions, allowing you to freely walk, run, and carry out just any other movement in virtual reality.",
      HELLO: "Hello,",
      SUBTITLE: "Nice to meet",
      SUBTITLE_SECONDARY: "you",
      SUBTEXT:
        "KAT VR is an independent company dedicated to the research, development, and sales of VR Locomotion products and solutions. Founded in 2013, we have quickly grown to become one of the world's leading professional suppliers of VR games' & simulations' equipment",
    },
    TECH: {
      TITLE: "Tech",
      TITLE_SECONDARY: "Specs",
      CONNECTION: {
        TITLE: "Connection",
        TEXT: `Wireless: Bluetooth 4.2<br /> Signal range: 5m Receiver<br /> USB 2.0 and above`,
      },
      SENSOR: {
        TITLE: "Sensor",
        TEXT: "Weight: 35g/1.23oz each<br />Dimension: 50mm/1.97in<br />24mm/0.94in<br />Light: LED lights",
      },
      BATTERY: {
        TITLE: "Battery",
        TEXT: "Type: Lthium-lon polymer batteries <br /> Capacity: 370mAh <br />Battery life: 10h of continuous use 150 hours on stand by<br />Charging: Fast charging - 1 hour<br />Charging voltage and current: 5V = 0.5A",
      },
    },
    BENEFITS: {
      TITLE: "Why",
      TITLE_SECONDARY: "KAT LOCO",
      COMPATIBLE: {
        TITLE: "Universally compatible",
        TEXT: "KAT Loco offers universal compatibility across all major VR headsets and platforms allowing you to play any VR game with support for FreeLocomotion",
      },
      CONTROL: {
        TITLE: "VR/PC Control panel",
        TEXT: "Our Multifunctional Software allows for quick access to KAT Loco's control panel both from a computer desktop, and directly from your VR headset.",
      },
      WIRELESS: {
        TITLE: "Wireless Sensors",
        TEXT: "What makes it even more advanced, KAT Loco is entirely wireless, and comes with a complete system of algorithms, super durable batteries and more!",
      },
    },
    CONTACTS: {
      QUESTIONS: "Have any questions?",
      TITLE: "Get in",
      TITLE_SECONDARY: "Touch",
      REPLY: "Our manager will reply you within 15 minutes",
      US: "Contact Us",
    },
    FAQ: {
      TITLE: "Frequently asked",
      TITLE_SECONDARY: "questions",
      FIRST_QUESTION: "What makes KAT loco different from other systems?",
      SECOND_QUESTION: "Will it decrease my motion sickness?",
      THIRD_QUESTION: "Which VR headsets is it compatible with?",
      FOURTH_QUESTION: "Is it compatible with Oculus Quest?",
      ANSWER:
        "Despite being approached from many different angles, all traditional VR Locomotion systems including roomscale, teleportation, and free locomotion failed to provide an optimal solution capable of integrating high immersion with convenience. KAT loco does all of that without repeating their flaws.",
    },
    ORDER_COMPLETE: {
      TEXT: "Your order has been placed and is being processed. You will recive an email with the order details",
      TITLE: "Thank you for",
      TITLE_SECONDARY: "your",
      TITLE_END: "order",
    },
    SENT_MESSAGE: {
      TITLE: "Thank",
      TITLE_SECONDARY: "you",
      TEXT: "Your message has been succesfully submitted. Our manager will reply you within 15 minutes",
    },
    CARD: {
      NUMBER: "Card Number",
      HOLDER: "Cardholder Name",
      EXPIRATION: "Expiration Date",
    },
    ERROR: {
      FILL: "You need to fill in each field",
      REQUEST_FIRST: "Something went wrong. ",
      REQUEST_SECOND: "Please choose another country",
      NAME: "Name should be 3-16 characters and include only letters",
      PHONE: "Should be 12 characters",
      EMAIL: "Please, enter correct data",
      INPUT_FILL: "Please, fill in this field",
    },
    NEXT_BUTTON: "Next",
    PREV_BUTTON: "Previous",
    BUY_NOW: "Buy Now",
    QUANTITY: "Quantity",
    PRICE: "Price",
    PLACE_ORDER: "Place Order",
    PAY: "Pay",
    COMPLETED: "Order Complete",
    PURCHASE: "Purchase",
    NAME: "Name",
    EMAIL: "Email",
    PHONE: "Phone",
    MESSAGE: "Message",
    FIRST_NAME: "First Name",
    LAST_NAME: "Last Name",
    COUNTRY: "Country",
    CITY: "City",
    SHIPADDRESS_FIRST: "Shipping Address 1",
    SHIPADDRESS_SECOND: "Shipping Address 2",
    PLACEHOLDER_CITY: "Choose a city",
    PLACEHOLDER_COUNTRY: "Choose a country",
    BACK_TO_HOMEPAGE: "Back to homepage",
  },
  ua: {
    ENGLISH_LANGUAGE: "Англійська",
    UKRAINIAN_LANGUAGE: "Українська",
    HEADER_TITLE: "Новий початок",
    HEADER_ABOUT:
      "Відкрийте для себе найбільш комплексну систему віртуальної реальності VR Locomotion та розблокуйте безмежний рух у будь-яких іграх на будь-яких платформах!",
    MENU: {
      ABOUT: "Про нас",
      TECH: "Технічні характеристики",
      BENEFITS: "Переваги",
      CONTACTS: "Контакти",
      LANGUAGE: "Мова",
      FAQ: "FAQ",
      HELP: "Допомога",
      MORE: "Більше",
    },
    HELP: {
      TITLE: "Як ми можемо",
      TITLE_SECONDARY: "допомогти",
      TITLE_END: "Вам?",
      TEXT: "Ласкаво просимо до нашого центру допомоги. Нашою метою є зробити процес ознайомлення та покупки якомога простішим і приємнішим. Потрібна допомога з вашим продуктом KAT VR Loco? Багато питань щодо продукту можна вирішити, переглянувши",
      PLEASE: "Будь-ласка, також не соромтеся",
      DIRECTLY:
        "безпосередньо, якщо вам знадобиться щось більше. Ми раді допомогти",
      CONTACT: "Звертатися до нас",
      WARANTY: "Звернутися за гарантією",
      SERVICE_POLICE: "Політика обслуговування",
      INSTRUCTION: "Посібник з експлуатації",
    },
    MORE: {
      TITLE: "Більше ніж",
      TITLE_SECONDARY: "Гра",
      SUBTITLE: "Це також призначено для людей, які зацікавлені у...",
      EDUCATION: {
        TITLE: "Освіта",
        TEXT: "Створюйте освітні симуляції, тренінги та багато іншого з необмеженим віртуальним простором та мінімальним фізичним простором.",
      },
      ESTATE: {
        TITLE: "Нерухомість",
        TEXT: "Проектуйте архітектурні проекти в дуже реалістичному середовищі, що дозволяє відвідувачам вільно переміщатися та відчувати їх атмосферу.",
      },
      FITNESS: {
        TITLE: "Фітнес",
        TEXT: "Поєднуйте бізнес з задоволенням та відкрийте безліч способів підтримувати форму, граючи у свої улюблені VR-ігри!",
      },
      SOCIAL: {
        TITLE: "Соціальні взаємодії",
        TEXT: "Відпочивайте з друзями у віртуальному світі, коли не вдається відповідати вимогам щодо простору для зустрічей.",
      },
    },
    ABOUT: {
      TITLE: "Про",
      TITLE_SECONDARY: "Продукт",
      TEXT: "KAT loco - це система віртуального переміщення на основі рухів ніг, яка надає повний фізичний контроль над рухами нижньої частини тіла, дозволяючи вам вільно ходити, бігати та виконувати будь-який інший рух у віртуальній реальності.",
      HELLO: "Привіт,",
      SUBTITLE: "Раді познайомитися з",
      SUBTITLE_SECONDARY: "Вами",
      SUBTEXT:
        "KAT VR - незалежна компанія, що присвячена дослідженню, розробці та продажу продуктів і рішень з віртуального переміщення (VR Locomotion). Заснована в 2013 році, ми швидко стали одним з провідних світових постачальників професійного обладнання для VR-ігор та симуляцій.",
    },
    TECH: {
      TITLE: "Технічні",
      TITLE_SECONDARY: "Характеристики",
      CONNECTION: {
        TITLE: "Підключення",
        TEXT: "Бездротове: Bluetooth 4.2<br /> Діапазон сигналу: 5м<br /> Приймач: USB 2.0 і вище",
      },
      SENSOR: {
        TITLE: "Датчик",
        TEXT: "Вага: 35 г / 1,23 унції кожного<br />Розмір: 50 мм / 1,97 дюйми<br />24 мм / 0,94 дюйми<br />Світло: світлодіодні лампи",
      },
      BATTERY: {
        TITLE: "Акумулятор",
        TEXT: "Тип: акумулятори на основі літій-іонного полімеру <br /> Ємність: 370 мАг <br /> Час роботи від акумулятора: 10 годин безперервного використання, 150 годин в режимі очікування <br /> Зарядка: Швидка зарядка - 1 година <br /> Напруга та струм зарядки: 5В = 0,5А",
      },
    },
    BENEFITS: {
      TITLE: "Чому саме",
      TITLE_SECONDARY: "KAT LOCO",
      COMPATIBLE: {
        TITLE: "Універсальна сумісність",
        TEXT: "KAT Loco забезпечує універсальну сумісність з усіма основними VR-гарнітурами та платформами, що дозволяє вам грати в будь-яку VR-гру з підтримкою вільного переміщення.",
      },
      CONTROL: {
        TITLE: "Панель керування VR/PC",
        TEXT: "Наше багатофункціональне програмне забезпечення дозволяє швидкий доступ до панелі керування KAT Loco як з робочого столу комп'ютера, так і безпосередньо з вашої VR-гарнітури.",
      },
      WIRELESS: {
        TITLE: "Бездротові датчики",
        TEXT: "Що робить його ще більш передовим, KAT Loco повністю бездротовий і поставляється з повною системою алгоритмів, надзвичайно міцними акумуляторами та багато іншого!",
      },
    },
    CONTACTS: {
      QUESTIONS: "Є якісь питання?",
      TITLE: "Звʼяжіться з",
      TITLE_SECONDARY: "Нами",
      REPLY: "Наш менеджер відповість вам протягом 15 хвилин.",
      US: "Звʼязатися",
    },
    FAQ: {
      TITLE: "Питання що часто",
      TITLE_SECONDARY: "задаються",
      FIRST_QUESTION: "Чим відрізняється KAT loco від інших систем?",
      SECOND_QUESTION: "Чи зменшить це відчуття рухомої хвороби?",
      THIRD_QUESTION: "З якими VR-гарнітурами воно сумісне?",
      FOURTH_QUESTION: "Чи сумісний він з Oculus Quest?",
      ANSWER:
        "Незважаючи на те, що досягалося з різних підходів, всі традиційні системи переміщення у віртуальній реальності, включаючи системи масштабу кімнати, телепортації та вільного переміщення, не змогли забезпечити оптимального рішення, яке б поєднувало високу погруженість з комфортом. KAT loco здійснює все це, уникнувши їх недоліків.",
    },
    ORDER_COMPLETE: {
      TEXT: "Ваше замовлення було прийнято і обробляється. Ви отримаєте електронного листа з деталями замовлення.",
      TITLE: "Дякуємо Вам за",
      TITLE_SECONDARY: "ваше",
      TITLE_END: "замовлення",
    },
    SENT_MESSAGE: {
      TEXT: "Ваше повідомлення було успішно надіслано. Наш менеджер відповість вам протягом 15 хвилин.",
      TITLE: "Дякую",
      TITLE_SECONDARY: "Вам",
    },
    CARD: {
      NUMBER: "Номер картки",
      HOLDER: "Ім'я власника",
      EXPIRATION: "Термін придатності",
    },
    ERROR: {
      FILL: "Ви повинні заповнити кожне поле",
      REQUEST_FIRST: "Щось пішло не так",
      REQUEST_SECOND: "Виберіть будь-ласка іншу країну",
      NAME: "Ім'я повинно містити від 3 до 16 символів і складатися тільки з літер.",
      PHONE: "Повинен складатися з 12 символів",
      EMAIL: "Будь-ласка, введіть правильні дані.",
      INPUT_FILL: "Будь-ласка заповніть це поле",
    },
    NEXT_BUTTON: "Наступна",
    PREV_BUTTON: "Попередня",
    BUY_NOW: "Придбати Зараз",
    QUANTITY: "Кількість",
    PRICE: "Ціна",
    PLACE_ORDER: "Замовлення",
    PAY: "Оплата",
    COMPLETED: "Виконано",
    NAME: "Ім'я",
    EMAIL: "Пошта",
    PHONE: "Телефон",
    MESSAGE: "Повідомлення",
    FIRST_NAME: "Ім'я",
    LAST_NAME: "Прізвище",
    COUNTRY: "Країна",
    CITY: "Місто",
    SHIPADDRESS_FIRST: "Адреса доставки 1",
    SHIPADDRESS_SECOND: "Адреса доставки 2",
    PLACEHOLDER_CITY: "Виберіть Ваше місто",
    PLACEHOLDER_COUNTRY: "Виберіть Вашу країну",
    PURCHASE: "Придбати",
    BACK_TO_HOMEPAGE: "Повернутися на головну",
  },
};
