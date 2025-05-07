/**В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вам нужно вернуть наибольшее и наименьшее число.

Примеры
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Примечания
Все номера действительны Int32, нет необходимости их проверять.
Во входной строке всегда будет хотя бы одно число.
Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым. */
export class Kata {
    static highAndLow(numbers: string): string {
      const numSplit = numbers.split(" ");
      if (numSplit.length < 2) numSplit.concat(numSplit);
      const arr = numSplit.sort((a, b) => Number(a) - Number(b));
      return `${arr.slice(-1)} ${arr[0]}`;
    }
  }
  console.log(Kata.highAndLow("1 1 1 1"));
  
//   export class Kata {
//     static highAndLow(numbers: string): string {    
//       const numberList = numbers.split(' ').map(Number);   
//       return `${Math.max(...numberList)} ${Math.min(...numberList)}`;
//     }
//   }