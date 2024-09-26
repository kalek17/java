//Метод slice
console.log('Метод slice')
let fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear'];
let citrus = fruits.slice(2, 4);
console.log(citrus);

let numbers = [1, 2, 3, 4, 5];
let copy = numbers.slice();
console.log(copy); 


let numbers1 = [1, 2, 3, 4, 5];
let lastnumbers1 = numbers1.slice(-3);
console.log(lastnumbers1);


//Метод splice
console.log('Метод splice')
let arr = ['apple', 'banana', 'orange', 'grape'];
let splicearr = arr.splice(1, 2);
console.log(splicearr); 

let arr1 = ['red', 'blue', 'green'];
let splicearr1 = arr1.splice(1, 1, '2', 'purple'); 
console.log(arr1); 


//Метод map
console.log('Метод map')
const arr2 = [1, 2, 3, 4, 5];
const doublearr2 = arr2.map(num => num * 2);
console.log(doublearr2); 

const arr3 = ['Alice', 'Bob', 'Charlie'];
const upperarr3 = arr3.map(name => name.toUpperCase());
console.log(upperarr3); 


//Метод for
console.log('Метод for')
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

const colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


//Метод foreach
console.log('Метод foreach')
let arr4 = [1, 2, 3, 4, 5];
let foreackarr4 = arr4.forEach(function(number){
  console.log(number);
});

let arr5 = ["hello", "world", "javascript"];
let foreacharr5 =arr5.forEach(function(word){
  console.log(word.toUpperCase());
});


//Метод filter
console.log('Метод filter')
const arr6 = [1, 6, 8, 3, 9, 4];
const filterarr6= arr6.filter(num => num > 5);
console.log(filterarr6); 

const arr7 = ["apple", "banana", "orange", "kiwi"];
const filterarr7 = arr7.filter(word => word.length > 3);
console.log(filterarr7); 


//Метод reduce
console.log('Метод reduce')
const arr8 = [1, 2, 3, 4, 5];
const reducearr8 = arr8.reduce((acc, current) => acc + current);
console.log(reducearr8);

const arr9 = ['Hello', ' ', 'world', '!'];
const reducearr9 = arr9.reduce((acc, current) => acc + current);
console.log(reducearr9);

const arr10 = [10, 5, 8, 12, 3];
const reducearr10 = arr10.reduce((acc, current) => Math.max(acc, current));
console.log(reducearr10); 


//Метод sort
console.log('Метод sort')
let arr11 = ['яблоко', 'банан', 'апельсин', 'груша'];
let sortarr11 = arr11.sort();
console.log(sortarr11); 

let arr12 = [5, 2, 8, 1];
let sortarr12 = arr12.sort((a, b) => a - b);
console.log(sortarr12); 


//Метод some
console.log('Метод some')
const arr14 = [1, 2, -3, 4, 5];
const somearr14 = arr14.some(num => num < 0);
console.log(somearr14); 

const arr15 = ['banana', 'orange', 'apple', 'grape'];
const somearr15 = arr15.some(fruit => fruit.includes('apple'));
console.log(somearr15); 

const arr16 = ['hello', 'world', 'javascript', 'goodbye'];
const somearr16 = arr16.some(word => word.length > 5);
console.log(somearr16); 

//Метод everey
console.log('Метод every')
const arr17 = [1, 2, 3, 4, 5];
const everyarr17 = arr17.every(item => typeof item === 'number');
console.log(everyarr17); 

const arr18 = [2, 4, 6, 8, 9];
const everyarr18 = arr18.every(item => item % 2 === 0);
console.log(everyarr18);

const arr19 = [2, 4, 6, 8, 9];
const everyarr19 = arr19.every(item => item > 0);
console.log(everyarr19); 


