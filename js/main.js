// кликаем по кнопке - видим в alert-е то, что введено в поле поиска. 
// Не использовать onclick атрибут в разметке кода.

// Если ввести в поиск слово google и нажать кнопку НАЙТИ,
// то нужно показать в алерте “Yandex круче. Но это не точно”

let searchButtonEl;
let searchInputEl;
let searchButtonId = 'search_btn'
let searchInputId = 'search'
let testWord = 'google'
searchButtonEl = document.getElementById(searchButtonId);


searchButtonEl.addEventListener('click', onSearchButton);

function onSearchButton() {
  searchInputEl = document.getElementById(searchInputId);
  if (searchInputEl.value === testWord) {
    alert('Yandex круче. Но это не точно')
  } else {
    alert(searchInputEl.value + ' ' + humanList[0].name);
    superSumMaster();
  }
}


// Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age.
// При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве


human1 = {
  name: 'Ivan',
  age: 42,
}

human2 = {
  name: 'Uthred',
  age: 13,
}

human3 = {
  name: 'Boris',
  age: 22,
}

human4 = {
  name: 'Pjotor',
  age: 30,
}

let humanList = [human1, human2, human3, human4];


// Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел,
// переданных этой функции через параметры

function superSumMaster() {
  let number1 = Number(prompt('Введите первое число'));
  let number2 = Number(prompt('Введите второе число'));

  let numbers = [number1, number2];
  superSum(numbers);

  function superSum(number) {
    sum = number[0] + number[1];
    alert('Сумма чисел ' + sum);
  }
}


// Создать массив из чисел в перемешку (не отсортированы). 
// С помощью цикла for найти максимальный и минимальный элементы в массиве


let arrayNumbers = [9, 17, -8, 36, 0, 26, 3];

let min = arrayNumbers[0];
let max = arrayNumbers[0];

for (let i = 0; i < arrayNumbers.length; i++) {
  if (min > arrayNumbers[i]) {
    min = arrayNumbers[i];
  }

  if (max < arrayNumbers[i]) {
    max = arrayNumbers[i];
  }
}

console.log('Массив чисел: ' + arrayNumbers)
console.log('Минимальное число в массиве: ' + min);
console.log('Максимальное число в массиве: ' + max);


// Создать 2 переменные a и b… присвоить им любые значения.
// Потом программно поменять эти значения местами, не используя значениям напрямую


let a = "string";
let b = 333;

array = [a, b];

a = array[1];
b = array[0];

console.log('a = ' + a); // то что было изначально в b
console.log('b = ' + b); // то что было изначально в a


// Оформить алгоритм поиска максимального числа в массиве как функцию findMax
// (чтобы можно было передавать в неё любой массив чисел,
// а на выходе она возвращала нам максимальное число из массива)

let arrayNumbersF = [9, 17, -8, 36, 0, 26, 3, 1134, 234, 94832, 345, 3321];

findMax(arrayNumbersF);

function findMax(arrayNumbersF) {
  let maxF = arrayNumbersF[0];

  for (let i = 0; i < arrayNumbersF.length; i++) {
    if (maxF < arrayNumbersF[i]) {
      maxF = arrayNumbersF[i];
    }
  }
  console.log('Максимальное число из функции findMax ' + maxF);
}


// показать alert с результатом поиска не сразу, а через 3 секунды после нажатия 
// (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)