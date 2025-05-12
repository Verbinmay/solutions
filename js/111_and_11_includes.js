/*Напишите функцию, которая принимает два целых числа num1 и num2 возвращает 1 если в любом месте в встречается тройка цифр, num1 а в месте в встречается двойная та же цифра num2.

Если это не так, верните 0.

Примеры
451999277, 41177722899 -->  1 // num1 has straight triple 999s and num2 has straight double 99s
1222345, 12345 -->  0 // num1 has straight triple 2s but num2 has only a single 2
12345, 12345 -->  0
888, 77 --> 0 // num1 has three '8's, num2 has 2 '7's, but they are not the same digit
88888, 88888   --> 1 // more than 3 or 2 repetitions also count 
123123123, 123 --> 0 // '123' is not a single digit*/

function tripledouble(num1, num2) {
    if (num1 < 111 || num2 < 11) return 0;
    const a = `${num1}`.split("");
    let b = new Set();
    for (let i = 0, count = 0; i < a.length; i++) {
      if (i === 0) continue;
      if (a[i - 1] === a[i]) {
        count += 1;
      } else {
        count = 0;
      }
      if (count >= 2) {
        b.add(a[i].repeat(2));
        count = 0;
      }
    }
    for (const str of Array.from(b)) {
      if (`${num2}`.includes(str)) return 1;
    }
    return 0;
  }
  
  tripledouble(111, 88);
  

  //function tripledouble(num1, num2){
//   for(var i = 0; i < 10; i++){
//     triple = new RegExp (i + "{3}")
//     double = new RegExp (i + "{2}")
//     if(triple.test(num1) && double.test(num2)){
//        return 1
//     }
//   }
//   return 0
// }

// function tripledouble(num1, num2) {
//     let nums = [...Array(10).keys()];
      
//     return +nums.some(num => 
//       num1.toString().includes(num.toString().repeat(3)) &&
//       num2.toString().includes(num.toString().repeat(2))
//     );
//   }

// const tripledouble = (n, m)  => {
//   for (let i = 0; i <= 9; i++) 
//     if (n.toString().includes(i.toString().repeat(3)) &&
//         m.toString().includes(i.toString().repeat(2))) 
//     return 1;
//   return 0;
// }

