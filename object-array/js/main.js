// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:
// Функція яка виведе всю інформацію про тварину. Функція яка виведе за скільки тварина зможе подолати 1000 км. 
// (врахуйте що тварина може рухатись не більше 12 годин у день). Функція яка зможе змінити назву тварини на більш детальну. 

let animal = {
	name: "Lion",
	weight: 180,
	age: 6,
	speed: 80
}

function descriptionAnimal (obj) {

	for (let key in obj) {
		console.log(`${key}: ${obj[key]}`)
	}

}

descriptionAnimal(animal);


function changeName(obj, name) {
	return obj.name = name;
}

changeName(animal, "Panthera leo senegalensis");

descriptionAnimal(animal);


function animalDistance () {

}

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. 
//    Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, 
//    зададуть назву фігури, переведуть значення з сантиметрів у метри.

let figure = {
	a: 10,
	b: 4,
	c: 4,
	d: 10,

	areaFigure: function () {
		let area = this.a * this.b;
		console.log(`Площа: ${area} квадратних см`);
		return area;
	},

	perimetrFigure: function () {
		let perimetr = (this.a + this.b) * 2;
		return console.log(`Периметр: ${perimetr} см`);
	},

	nameFigure: function (name) {
		this.name = name;
		console.log(this.name);
	},

	convertCentimeters: function (x) {
		let convertMetr = x / 100;
		console.log(`${x}cm = ${convertMetr} м`);
		return convertMetr;
	}


}

figure.areaFigure();
figure.perimetrFigure();
figure.nameFigure('прямокутник');
figure.convertCentimeters(figure.areaFigure());

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

// Виводимо список покупок - спочатку ті які є в магазині потім яких немає, 
// Виводимо список покупок які ми купили.
// Додаємо функцію яка дозволить купити продукт.
// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)
// Додаємо можливість збільшувати кількість товару.
// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

let products = {

  tomato: {

    count: 5,
    price: 50,
    buy: false,
    outOfstore: true

  },

  bread: {

    count: 2,
    price: 25,
    buy: true,
    outOfstore: false

  },

  potato: {

    count: 20,
    price: 30,
    buy: true,
    outOfstore: false

  },
  
  sausage: {

    count: 1,
    price: 80,
    buy: false,
    outOfstore: true

  },
  
  cheese: {

    count: 1,
    price: 100,
    buy: false,
    outOfstore: true

  },
  
  cucumbers: {

    count: 10,
    price: 35,
    buy: true,
    outOfstore: false

  }    

}


function productStore () {
	console.log(`В магазині є:`);

	for (let key in products) {

		if (products[key].outOfstore == false) {			
			console.log(key);
		}

	}
}

productStore();


function buyProducts () {
	console.log(`Ми купили:`);
	
	for (let key in products) {

		if (products[key].buy == true) {			
			console.log(key);
		}

	}
}

buyProducts();


// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. 
// Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

let users = [
	{
		name: "Yura",
		age: 55,
		hobby: ["films", "games", "hiking"],
		type: "Admin"

	},
	{
		name: "Dima",
		age: 26,
		hobby: ["films", "football"],
		type: "user"

	},
	{
		name: "Vlad",
		age: 32,
		hobby: ["teatr", "games", "hiking"],
		type: "Admin"

	},
	{
		name: "Dasha",
		age: 15,
		hobby: ["basketball", "games", "bike"],
		type: "user"

	}
];