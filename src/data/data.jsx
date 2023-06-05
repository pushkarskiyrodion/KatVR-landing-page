export const menuData = [
  {
    id: 1,
    classNameForTranslate: "menu__about",
    href: "/#about",
  },
  {
    id: 2,
    classNameForTranslate: "menu__tech",
    href: "/#tech",
  },
  {
    id: 3,
    classNameForTranslate: "menu__benefits",
    href: "/#benefits",
  },
  {
    id: 4,
    classNameForTranslate: "menu__contact",
    href: "/#contacts",
  },
];

export const languages = [
  {
    id: 1,
    value: "en",
    text: "En",
    classNameForTranslate: "page__english",
  },
  {
    id: 2,
    value: "ua",
    text: "Ua",
    classNameForTranslate: "page__ukrainian",
  },
];

export const answers = [
  {
    id: 1,
    classNameForTranslateText: "answers-text",
    classNameForTranslateTitle: "answers__first",
  },
  {
    id: 2,
    classNameForTranslateText: "answers-text",
    classNameForTranslateTitle: "answers__second",
  },
  {
    id: 3,
    classNameForTranslateText: "answers-text",
    classNameForTranslateTitle: "answers__third",
  },
  {
    id: 4,
    classNameForTranslateText: "answers-text",
    classNameForTranslateTitle: "answers__fourth",
  },
];

export const pictures = [
  {
    src: "./images/pictures/slide-image.png",
    id: 1,
  },
  {
    src: "./images/pictures/slide-image.png",
    id: 2,
  },
  {
    src: "./images/pictures/slide-image.png",
    id: 3,
  },
  {
    src: "./images/pictures/slide-image.png",
    id: 4,
  },
  {
    src: "./images/pictures/slide-image.png",
    id: 5,
  },
];

export const placeOrderInputs = [
  {
    id: 1,
    classNameForTranslate: "firstName",
    name: "firstName",
    isEmpty: false,
    type: "text",
    errorText: "Name should be 3-16 characters and include only letters",
    classNameForTranslateError: "nameError",
    pattern: "^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{3,16}$",
  },
  {
    id: 2,
    classNameForTranslate: "lastName",
    name: "lastName",
    isEmpty: false,
    type: "text",
    pattern: "^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{3,16}$",
    errorText: "Name should be 3-16 characters and include only letters",
    classNameForTranslateError: "nameError",
  },
  {
    id: 3,
    classNameForTranslate: "email",
    name: "email",
    isEmpty: false,
    type: "email",
    errorText: "Please, enter correct data",
    pattern: "^[a-zA-Z0-9]+@[a-zA-Z0-9.]+$",
    classNameForTranslateError: "emailError",
  },
  {
    id: 4,
    classNameForTranslate: "phone",
    name: "phone",
    isEmpty: false,
    type: "number",
    pattern: "^[0-9]{5,16}$",
    errorText: "Should be 5-16 characters and only digits",
    classNameForTranslateError: "phoneError",
  },
  {
    id: 5,
    classNameForTranslate: "country",
    name: "country",
    isEmpty: false,
    children: null,
  },
  {
    id: 6,
    classNameForTranslate: "city",
    name: "city",
    isEmpty: false,
    children: null,
  },
  {
    id: 7,
    classNameForTranslate: "shipAddres__first",
    isEmpty: false,
    name: "shipAddres__first",
    type: "text",
  },
  {
    id: 8,
    classNameForTranslate: "shipAddres__second",
    name: "shipAddres__second",
    isEmpty: false,
    type: "text",
  },
];

export const benefits = [
  {
    id: 1,
    src: "./images/compatible.svg",
    titleClassName: "benefits__compatible",
    textClassName: "benefits__compatible-text",
  },
  {
    id: 2,
    src: "./images/pc-control-panel.svg",
    titleClassName: "benefits__control",
    textClassName: "benefits__control-text",
  },
  {
    id: 3,
    src: "./images/wireless-sensors.svg",
    titleClassName: "benefits__wireless",
    textClassName: "benefits__wireless-text",
  },
];

export const touchIcons = [
  {
    nameOfClass: "techspecs__touch--sensor",
    id: 1,
  },
  {
    nameOfClass: "techspecs__touch--connection",
    id: 2,
  },
  {
    nameOfClass: "techspecs__touch--batterries",
    id: 3,
  },
];

export const productPhotos = [
  {
    src: "./images/pictures/image-b.png",
    id: 1,
  },
  {
    src: "./images/pictures/image-b.png",
    id: 2,
  },
];
