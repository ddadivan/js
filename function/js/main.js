// 1. Напишіть функцію, що повертає куб числа.

function cube(a) {
	return Math.pow(a, 3);
}

console.log(cube(10));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

function numberFunc(a, b, c) {
	let result = (a + b) / c;
	return result;
}
console.log(numberFunc(5,3,2));

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

function weekDays(day) {

	switch(day) {
		case 1: console.log("Понеділок");
		break;

		case 2: console.log("Вівторок");
		break;

		case 3: console.log("Середа");
		break;

		case 4: console.log("Четвер");
		break;

		case 5: console.log("П'ятниця");
		break;

		case 6: console.log("Субота");
		break;

		case 7: console.log("Неділя");
		break;

		default : console.log("Введіть правильне число дня тижня");
		break;
	}

}

console.log(weekDays(3));

// 4. Реалізуйте функцію знаходження факторіала

 function factorial(num){
 	for(var i = num - 1; i > 0; i--){
      num *= i;
  	}
 	return num;     
}

console.log(factorial(7));

// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

// 6.  Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня". 

// 7. 4 відмінності ерров фанкшина від звичайної функції.

// 1. Ерров функції не можуть використовуватись для створення об'єктів
// 2. Відсутній arguments
// 3. Відсутній власний this
// 4. Не можуть бути визвані з new