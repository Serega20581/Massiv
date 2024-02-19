//№1
function printElements(n) {
    const array = []; 
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }

    console.log(array);

    for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
            console.log(i, array[i]);
        }
    }
}

const n = 13; 
printElements(n);
//№2
function printEvenElements(b) {
    const array = []; 
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }

    console.log(array);

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(i,array[i]);
        }
    }
}


const b = 11; 
printEvenElements(b);
//№3
function firstLetter(arr) {
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
const a = ['В', 'лесу', 'родилась', 'елочка'];
const result = firstLetter(a);

console.log(result);
//№4
function swapLetters(str) {
    const swapWords = str.split(' ').map(word => {
        if (word.length > 1) {
            return word.slice(-1) + word.slice(1, -1) + word.charAt(0);
        } else {
            return word;
        }
    });

    return swapWords.join(' ');
}
const k = "В лесу родилась елочка";
const k1 = swapLetters(k);

console.log(k1);
//№5
const numbers = [5.3, -3.4, 7.6, -1.4, 0, 4.7, -2.5];

const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers);

const positiveCount = positiveNumbers.length;
console.log(positiveCount);

const negativeNumbers = numbers.filter(num => num < 0);
const productOfNegatives = negativeNumbers.reduce((acc, num) => acc * num, 1);
console.log(productOfNegatives);
//№6
function countInversions(arr) {
    let inversions = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                inversions++;
            }
        }
    }

    return inversions;
}

const arr = [24, 35, 29, 44, 8, 22, 4];
const inversionCount = countInversions(arr);
console.log(inversionCount);
//№7
function checkSame(team1, team2) {
    const set = new Set(team1);

    for (let height of team2) {
        if (set.has(height)) {
            return true;
        }
    }

    return false;
}


const team1Heights = [180, 175, 185, 170];
const team2Heights = [190, 165, 175, 180];

if (checkSame(team1Heights, team2Heights)) {
    console.log("Есть игроки одинакового роста в обеих командах.");
} else {
    console.log("Нет игроков одинакового роста в обеих командах.");
}
//№8
function hasDuplicate(arr) {
    const set = new Set();

    for (let num of arr) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;
}

const array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10) + 1);
}

console.log(array);

if (hasDuplicate(array)) {
    console.log("В массиве есть хотя бы одна пара совпадающих элементов.");
} else {
    console.log("В массиве нет пар совпадающих элементов.");
}
//№9
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;

for (let row of matrix) {
    for (let num of row) {
        sum += num;
    }
}

console.log("Двумерный массив:");
console.log(matrix);
console.log("Сумма всех элементов массива:", sum);
//№10
const l = [
    [5, 12, 3],
    [8, 20, 15],
    [6, 9, 10],
    [2, 7, 14]
];

let count = 0;

for (let row of l) {
    for (let num of row) {
        if (num < 10) {
            count++;
        }
    }
}

console.log("Двумерный массив:");
console.log(l);
console.log("Количество цифр, значение которых меньше 10:", count);
//№11
const h = [
    [5, 12, 3, 8],
    [8, 20, 15, 11],
    [6, 9, 10, 14],
    [2, 7, 14, 18]
];

let maxElement = h[0][0];
let maxRowIndex = 0;
let maxColIndex = 0;

for (let i = 0; i < h.length; i++) {
    for (let j = 0; j < h[i].length; j++) {
        if (h[i][j] > maxElement) {
            maxElement = h[i][j];
            maxRowIndex = i;
            maxColIndex = j;
        }
    }
}

console.log("Двумерный массив:");
console.log(h);
console.log("Индексы максимального элемента:", [maxRowIndex, maxColIndex]);