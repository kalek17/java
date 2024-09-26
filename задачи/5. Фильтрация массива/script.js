let arr = [31, 10, 'chicken', 9, 'fish', 10];
let delarr = arr.filter(item => typeof item === 'string');
console.log(delarr);

let arr1 = [31, 10, 'chicken', 9, 'fish', 10];
let delarr1 = arr1.filter(item => item === 10);
console.log(delarr1);