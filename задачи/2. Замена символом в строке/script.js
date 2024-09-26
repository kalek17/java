/*let str = 'Я изучаю JavaScript';
let arrstr = str.split('');
arrstr.splice(7, 1 , 'Q');
arrstr.splice(8, 11 , 'Frontend');
let arrstring = arrstr.toString();
console.log(arrstring); */

let str = 'Я изучаю JavaScript';
let restr = str.replace('ю', 'Q', 'JavaScript', 'Frontend');

console.log(restr);