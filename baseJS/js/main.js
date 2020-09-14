// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».

let year = +prompt("Cкільки вам років?");
alert(`Привіт мені - " ${year} " років`);


// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років.

const YEARNOW = 2020;

let userYear = +prompt("Якого ви року народження?");

alert(YEARNOW - userYear);


// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.

let a = +prompt('Введіть довжину сторони a');

let b = +prompt('Введіть довжину сторони b');

let c = +prompt('Введіть довжину сторони c');

alert(a + b + c);


// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі).
let radius = +prompt("Введіть радіус кола");

alert(2 * radius * Math.PI);


// 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.
let userSpeed = 50;

let time = +prompt("Скільки часу вам їхати?");

alert(userSpeed * time);


// 6. Реалізуємо конвертер кілометрів в милі і навпаки

let mile = 0.621371;

let kilometr = 1.60934;

let kilometrUser = +prompt("Введіть кілометри");

let convertKm = kilometrUser * mile;

alert(`${convertKm} миль в ${kilometrUser} км`);



let mileUser = +prompt("Введіть милі");

let convertMile = mileUser * kilometr;

alert(`${convertMile} км в ${mileUser} миль `);


// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. 
//   Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.

let userCard = +prompt("Скільки коштів на вашій картці?");

let petrolCost = +prompt("Ціна бензину?");

let petrolUser = userCard / petrolCost;

let userMoney = userCard % petrolCost;



alert(`Ви можете придбати ${petrolUser} літрів бензина, залишок на картці: ${userMoney} грн `);
