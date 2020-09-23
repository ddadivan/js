// 1.  Знайдіть суму всіх цифр від 1 до 100.

let sum = 0;

for(let i = 0; i <= 100; i++) {
	sum += i; 
}

alert(sum);

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
	alert(arr[i]);
}

//3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

let numbers = [-1, 22, 3, 44, 5];

let max = numbers[0];


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) max = numbers[i];
}

console.log(max);


// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. 
//    Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

for( let i = 0; i <= 9; i++ ) {
	let result = 8 * i;
	console.log(`8 * ${i} = ${result}`);
}

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

let arrNum = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arrNum.length; i++) {
	if(i > 3 && i < 10) {
		console.log(i);
	}
}

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , 
//    провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

let confirmation = true;

if (confirmation) {

	 while(confirmation) {

		let num1 = +prompt('Введіть число');

		let num2 = +prompt('Введіть друге число');

		let sign = prompt('Введіть знак математичної операції');

		switch(sign) {
			case "+": alert(num1 + num2);
			break;

			case "*": alert(num1 * num2);
			break;

			case "/": alert(num1 / num2);
			break;

			case "-": alert(num1 - num2);
			break;
		}	

		confirmation = confirm('Бажаєте повторити?');
		
	}
	
} else {
	confirmation == false;
}
