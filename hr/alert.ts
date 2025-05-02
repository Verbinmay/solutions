const functions = [];
let i = 0;

while (i < 3) {
  functions.push(function() {
    console.log(i);
  });
  i++;
}

functions[0](); // Что выведет?
functions[1](); // ?
functions[2](); // ?
console.log(i); // ?


/*Область видимости переменной i:

Переменная i объявлена снаружи цикла (в глобальной области видимости).

Все функции в массиве functions захватывают одну и ту же переменную i по ссылке.

Как работает цикл:

Цикл while увеличивает i до 3, после чего условие i < 3 становится ложным.

К моменту вызова функций из массива цикл уже завершился, и i = 3.

Поведение функций:

Каждая функция при вызове обращается к текущему значению i (которое равно 3).

Это классический пример проблемы с замыканиями в циклах.*/
//--------------------

const functions = [];
let i = 0;

while (i < 3) {
  (function(j) {
    functions.push(function() {
      console.log(j);
    });
  })(i); // Передаем текущее значение i как параметр j
  i++;
}

functions[0](); // 0
functions[1](); // 1
functions[2](); // 2

//--------------------
const test = function() {
  let a = 10;
  console.log(a);
};

test();
console.log(a); // Что будет выведено здесь?
/*Первый console.log выведет 10

Второй console.log вызовет ReferenceError, так как переменная 'a' существует только внутри функции test*/
//--------------------
const outer = function() {
  let x = 5;
  
  const inner = function() {
    let y = 10;
    console.log(x + y);
  };
  
  inner();
  console.log(y); // Что будет здесь?
};

outer();
/*inner() выведет 15 (5 + 10)
Второй console.log вызовет ReferenceError, так как 'y' существует только внутри inner()*/
//--------------------

const createCounter = function() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
};

const counter = createCounter();
console.log(counter()); // Что выведет?
console.log(counter()); // А это?
console.log(count); // И это?

/*
Первый console.log выведет 1

Второй console.log выведет 2

Третий console.log вызовет ReferenceError, так как 'count' доступен только внутри замыкания*/
//--------------------
const funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function() {
    console.log(i);
  };
}

funcs[0](); // Что выведет?
funcs[1](); // ?
funcs[2](); // ?

/* Все вызовы выведут 3, потому что:

var создает одну переменную на весь цикл

К моменту вызова функций цикл уже завершился и i = 3 */

//--------------------

const funcs = [];

for (let i = 0; i < 3; i++) {
  funcs[i] = function() {
    console.log(i);
  };
}

funcs[0](); // Что теперь?
funcs[1](); // ?
funcs[2](); // ?

/*Вызовы выведут 0, 1, 2 соответственно, потому что:

let создает новую переменную для каждой итерации цикла

Каждая функция сохраняет свою копию i */