

console.log("world");
console.log(6+9);
// alert('snoska')
console.log("вывести текст2");
// вывести текст
function greet() {
    return("hello world!");
  };
  console.log(greet());

// проверить функцию делится ли на целое
console.log("проверить функцию делится ли на целое3");
function isDivideBy(number, a, b) {
  var number, a, b;
if(number % a == 0 && number % b == 0){
  return true;
}
else{
  return false;
}
}
console.log(isDivideBy(22, -2, 11));

// заглавная буква
console.log("заглавная буква4");
function capitalizeWord(word) {
  
  word = word[0].toUpperCase() + word.slice(1, word.length);  
  return word;
}
console.log(capitalizeWord('eftwdfgh hfhj'));

// столетие
function century(year) {
  if(year % 10 == 0){
    vec = year / 100;
    return Math.ceil(vec);
  }
  else{
    vec = (year / 100) + 1;
    return Math.floor(vec);
  }
}
console.log(century(11));

// стрелочная функция
// function century(year){
//   return  year % 10 == 0 ? Math.ceil((year / 100)) : Math.floor(((year / 100) + 1));
// }
// console.log(century2(11));

// в строку преобразование
function numberToString(num) {
  num = String(num);  
  return num;
}
console.log(numberToString(34));

let numberToString2 =  (num) => num = String(num);
console.log(numberToString2(34));

// строку в число

var stringToNumber = function(str){
return Number(str);
  
}
console.log(stringToNumber('345'));

// преобразовать в бинарное
function toBinary(n){
  let num = n.toString(2);
  return Number(num);
}
console.log(toBinary(23));

// целое число
function even_or_odd(number) {
  let cel = parseInt(number, 10);
  if(cel % 2 == 0){
return "Even";
  }
    return "Odd";
}
console.log(even_or_odd(44));

// заменить цифру
const fakeBin = (x) => {
  let num;
  let variable = [];
  num = x.split('')
  variable = num.map((item) => {
    if (item < 5) item = '0';
    else if (item >= 5) item = '1';
    return item;
  });
  return variable.join('');
  }
  // console.log(fakeBin(1267));

//  for (i = 0; i < x.length; i++){
//    x[i] < 5 ? str += '0' : str += '1';
//  }       
//  if(x[i]<5){
  // x.forEach(function(x, i) { if (x < 5) x[i] = 0; });

  function areaLargestSquare(r) {
  let rad = ((r*2)**2)/2;
      return Number(rad.toFixed(0)); 
  }
  console.log(areaLargestSquare(7)) ;

  // считает количество цифр
  function digits(n) {
    
      return n.toString().length;
  }
  console.log(digits(1120)) ;
  
  function opposite(number) {
    return(-number);
  }
  console.log(opposite(56));

// сравнение строк
  function solution(str, ending){
let data = str.includes(ending);
return  data;
      }
console.log(solution('abcde', 'abc'));

function solution2(str, ending){
  let data2 = str.endsWith(ending);
  return  data2;
        }
  console.log(solution2('abcde', 'cd'));


//  светофор
function updateLight(current) {
  let activelight = 0;
  const colorList = ["green", "yellow", "red"]
    if(current == colorList[activelight]){
      return colorList[activelight + 1];
    }
    else{
      activelight ++;
      if(current == colorList[activelight]){
        return colorList[activelight + 1];
      }
      else{
        activelight ++;
        return colorList[activelight = 0];
      }
    }
  }
  console.log(updateLight("yellow"));

// периметр фигуры
  // function perimeterSequence(a,n) {
  //  let fig = a * 4;
  //  return fig * n;
  // }
  // console.log(perimeterSequence(1, 5));

  
  function isPrime(num) {
    let flag = true;
    for (let i = 1; i < Math.abs(num); i++) {
    if (num = 0){
      flag = false;}
     if (Math.abs(num) == Math.abs(1)){
      flag = false;} 
      
     if (Math.abs(num) % i == 0) {
        flag = false;		
      }
    }
    return flag;
    } 
    console.log(isPrime(73));

//  Get decimal part of the given number
    function getDecimal(n){
      let abs = Math.abs(n);
       let x = (abs - Math.trunc(abs));
              let rouding = +x.toFixed(9);
           return rouding; // fix me 
    }
    console.log(getDecimal(-3.46))

    function getDercimal(n){
      return Math.abs(n%1);
    }
console.log(getDercimal(-3.46))

// Take an Arrow to the knee, Functionally
var ArrowFunc = function(arr) {  
   return arr.map(arr  => String.fromCharCode(arr)).join(''); 
}
console.log(ArrowFunc([84,101,115,116]));

// Тест RSscool
function toReadable(number) {
  let line =  number.toString().length; //количество цифр в числе
  console.log(line);
  // let replacement = line.split('').map(n => n < 5 ? 0 : 1).join('');
  // const numWords = требуется ( ' количество слов ' )   
 
  const amountInWords = number;
  
    var words = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 
    'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать',
     'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 
     'восемндцать', 'девятнадцать', 'двадцать', 'тридцать'];
      return amountInWords;
    }
    console.log(toReadable(321));
    let frt = 34;
    console.log(frt.toString(16));

// Тренировка с массивами
const array = [1,2,3,4]
let rarray = array.lastIndexOf(2)
console.log(rarray)
array.push(6,7,12)
console.log(array)
array.pop()
/console.log(array)
    
// test js
let i = 0; let c = 0; 
const str = 'Rolling Scopes School'; 
while (i < str.length) { 
  if (str[i] === 'o') { c++; } i++; } 
  console.log(c);

  console.log(Math.pow(2,4));

  console.log('после    ' + '    до');

  function getDercimal(n){
    return Math.abs(n%1);
  }
console.log(getDercimal(-3.46))

let d = 1 / 0;
    console.log(d);

    let f = 10; 
    while (f < 10) {
     f++;
    console.log(f) }

    console.log([1,2,3,4,5].length)

    let gt = 47;
    console.log(gt);

    a = ''; const b = 9; const h = null;
    console.log(!(a || !b && !h))

    console.log(typeof " ");

    console.log(Math.min(10, 222, -5, 0, '-33'));

    let s = 'fQhjhggf';
    console.log(s.toUpperCase());

    console.log("It's cool")

let drt;
let bnm;
    const getGreetingMessage = (name, message = 'Hello') => { 
 return drt = name + message;
// return bnm = message;
     }
console.log(getGreetingMessage("yyy"))

const getGreetingMessage2 = (name) => { 
  const message = 'Hello'; 
  return drt = name + message;
}
console.log(getGreetingMessage2("jkl67"))

// console.log(a);

// =====================
// Test JScript
let rew;
rew=("13px"<"14");
console.log(rew);


console.log(isNaN(Infinity));
console.log(Math.pow(2,4));


console.log(isNaN());

let name = "Vasia";
name.lenght = 50;
console.log(name.lenght = 50);

console.log(typeof(Infinity));




console.log([1,2,3,4,5].length);

console.log(String.fromCharCode(59));
console.log("1"+2);
// определить тип данных
let rs = 'true';
console.log(typeof(rs));

let v = 5; 
console.log(++v); 
console.log(v++);

console.log(3**3);

console.log(+'4' + +'5');
console.log(+79);

// определить тип данных
console.log(typeof('Hey'));
console.log(typeof(""));
console.log(typeof('Undefined'));
console.log(typeof("Hello"));
console.log(typeof(''));
console.log(typeof("null"));

for (let i = 0; i <= 4; i++) 
{console.log(++i);}

// последний символ в переменной
let message = "ghjut"
console.log(message[message.length - 1]);

console.log('4' * '9');

let x = ''; let n = 9; let m = null;
console.log(!!(!x || !n && !m));
console.log(!!(x || !n && !m));
console.log(!!(x || !n || m));
console.log(!(!x && n && !m));
console.log(!(x || !n && !m));

let hty = "hghghghg";
console.log(typeof hty);

console.log((8 / 2 + 5 - -3 / 2));

console.log(10 % 52);

// module.exports = 
// function toReadable (number) {
// //  const arr = [];
// //   for (let i = 0; i < s.length; i+=number)
// //   arr.push(s.substring(i, i + len));
// //   // var arr = Array.from(number);
// return arr;
// }

// console.log(toReadable (12));
// var num = 12;
// alert(num % 4 == 0 && num % 6 == 0 ? 'Да' : 'Нет');

//   const arr = new Array(3).fill(5);
//   console.log(arr);

//   const mass = [4, 6, 9];
//   console.log(mass);

// // let a;
// // a = 5 % -2;
// // console.log(a);

// let a = 4, b = 7;

// console.log(Math.pow(2,4));

// let i = 10; while (i < 11) {
//   i++;
//   x = 33 + i;
//   }
//   console.log(x);

//   console.log(1 / 0);

  
//   for (let i = 0; i <= 5; i++) {
//     i++;
//   x = 1 + i;
//   }   
//   console.log(x);
  
//   console.log(7 * 3 + (4 / 2) - (8 + (2 - 1)));


//   // const getGreetingMessage = (name, 'Hello')};
//   // const getGreetingMessage = (name, message)(undefined, 'Hello') ;
//   const getGreetingMessage = (name, message = 'Hello');
//   // const getGreetingMessage = (name) => { const message = 'Hello'; }
//   console.log(getGreetingMessage);

//   let ig = 0; while (ig <= 3) {
//     console.log(ig); 
//     ig++;
//   }

//   // const max = (a, b) => (a == b ? a : b);
//   const max = (a, b) => (a > b ? a : b);
//   // const max = (a, b) => (a + b > a - b ? a : b);
// // const max = (a, b) => (a + b < a - b ? a : b)

//   console.log(max(27, 55)); 
  
// //   const max = (a, b) => (a == b ? a : b)

// // const max = (a, b) => (a > b ? a : b)

// // const max = (a, b) => (a + b > a - b ? a : b)

// const add = function (a, b) {
//   // return a + b;
// }
// console.log(add(10, 20));

// // let igor = 'Vasia'; 
// // igor[3] = 'y'; 
// // console.log(igor);

// // let qw = 0; let c = 0; const str = 'Rolling Scopes School'; 
// // while (qw < str.length, c < 5) { if (str[qw] === 'o') { c++; } qw++; } 
// // console.log(c);
// console.log(8 / 2 + 5 - -3 / 2);

// // console.log('Hey there!'

// console.log(4 % 2 === 0);

// console.log('после    ' + '    до');

// let nam = 'dima';
// // const greeting = 'Hello ${nam}';

// // const greeting = 'Hello ', nam;

// // const greeting = 'Hello nam';

// // const greeting = 'Hello ' + nam;

// const greeting = `Hello ${nam}`;
// console.log(greeting);

// const RS = 'rs'; console.log('css', RS, 'js');


// let nas = 'Vasia'; 
// nas.length = 50;
// console.log(nas, 'igor');


// console.log(Math.abs(Math.floor(-46.867)));

// a = '34';
// console.log(typeof a);

// // let first = 1; let second = 2;
// // let first = 1; first = 2;
// // let first = 1; let first = 2;
// // const first = 1; first = 2;
// const first = 1, second = 2;
// console.log(first);










// function isDivideBy[a, b, c] {
//    re1 = a % b;
//    re2 = a % c;
//   add = re1 + re2;
//     if(add = 0) {
//         return ('true');}
//      else (add > 0) {
//          return('false'); 
//         }
//         return add;        
//     }
//    console.log(add.values().next());
    
    
//    comparison = a / b; 
//    comparison2 = a / c;
//    return(isDivideBy());
   
//    }
//    console.log(islnteger.comparison(10, 2, 3));