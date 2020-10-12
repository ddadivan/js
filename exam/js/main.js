//1.    Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

let arrNumbers = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7];

console.log(Math.max.apply(null, arrNumbers));

//2.    Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

let arr = ["test", 12, undefined, null, -5, "javascript", "1", false, true, 0 , "!"];

for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "string") {
        console.log(arr[i]);
    }
}

//3.    Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – 
//Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);

let users = [
    {
        name: "Yura", 
        age: 55, 
        hobby: ["football", "ski", "hiking"], 
        type: "Admin"
    }, 

    {
        name: "Yulian", 
        age: 28, 
        hobby: ["films", "games", "hiking"], 
        type: "user"
    }, 

    {
        name: "Taras", 
        age: 38, 
        hobby: ["hunting", "TV", "javascript"], 
        type: "user"
    }
]

for (let key in users) {
    if ( users[key].type == "user" ) {
        console.log(users[key]);
    }
}

for (let j in users) {
    
    // for (let item of users[j].hobby) {
    //     if(users[j].hobby[item] == "hiking") {
    //         console.log(users[j])
    //     }
    // } 

    for(let item = 0; item <users[j].hobby.length; item++ ) {
        if(users[j].hobby[item] == "hiking") {
             console.log(users[j])
         }
    }
}

function jobUser () {
    let job = prompt("Якщо бажаэте додати поле Job, введіть значення");

    for (i in users ) {
        users[i].job = job;
    }
}

jobUser();



//4.    Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.



//5.    https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами.


