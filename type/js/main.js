// 1. Проекспериментувати з типами даних. 

// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. 
//    Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 

let currencyExchange = +prompt("Введіть сумму");

let convertDollar = confirm("Бажаєте конвертувати гривню в доллари?");

let convertEur = confirm("Бажаєте конвертувати гривню в евро?");

let convertGold = confirm("Бажаєте конвертувати гривню в золото?");

let convertPetrol = confirm("Бажаєте конвертувати гривню в нефть?");

const DOLLAR = 28;

const EUR = 33;

const GOLD = 0.0000200;

const PETROL = 56; //просто написав, бо не знайшов ціну до гривні

if ( convertDollar == true ) {

	let sumDollar = currencyExchange * DOLLAR;

	alert(`Сума в Долларах: ${sumDollar}`);

}

if ( convertEur == true ) {

	let sumEur = currencyExchange * EUR;

	alert(`Сума в Евро: ${sumEur}`);

}

if ( convertGold == true ) {

	let sumGold = currencyExchange * GOLD;

	alert(`Сума в Золото: ${sumGold}`);

}

if ( convertPetrol == true ) {

	let sumPetrol = currencyExchange * PETROL;

	alert(`Сума в Нафті: ${sumPetrol}`);

}




// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, 
//    більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 

let sumUser = +prompt('Введіть сумму замовлення');

if ( sumUser < 500 ) {
	let finalSum = sumUser * 1 / 100;
	alert(sumUser - finalSum);
}

if ( sumUser >= 500 && sumUser < 1000 ) {
	let final = sumUser * 5 / 100;
	alert(sumUser - final);
}

if ( sumUser >= 1000 ) {
	let finalCost = sumUser * 10 / 100;

	let totalAmount = sumUser - finalCost;

	alert(`Сума замовлення: ${totalAmount}, Ви отримуэте подарунковий сертификат на 200 грн`);
	 
}

// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, 
//    якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 

let question_1 = prompt("Напишіть столицю Угорщіни");

let question_2 = prompt("Напишіть столицю України");

let question_3 = prompt("Напишіть столицю Туреччини");

let question_4 = prompt("Напишіть столицю Чехії");

let question_5 = prompt("Напишіть столицю Голландії");


let scores = 0;

let bonusScore;

if ( question_1.toLowerCase() == 'будапешт' ) {

	scores++;

}

if ( question_2.toLowerCase() == 'київ' ) {

	scores++;

}

if ( question_3.toLowerCase() == 'анкара' ) {

	scores++;

}

if ( question_4.toLowerCase() == 'прага' ) {

	scores++;

}

if ( question_5.toLowerCase() == 'амстердам' ) {

	scores++;

}

if (scores == 5) {
	scores++;
	alert(`Ви отримали ${scores} балів`);
} else {
	alert(`Ви отримали ${scores} балів`);
}


// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 





// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.

let button = prompt("Введіть від від 1 до = ");

switch(button) {
    case "1" : alert("!");
        break;
    case "2" : alert("@");
        break;
    case "3": alert("#");
        break;
    case "4" : alert("$");
        break;
    case "5" : alert("%");
        break;
    case "6" : alert("^");
        break;
    case "7" : alert("&");
        break;
    case "8" : alert("*");
        break;
    case "9" : alert("(");
        break;
    case "0" : alert(")");
        break;
    case "-" : alert("_");
        break;
    case "=" : alert("+");
        break;
}