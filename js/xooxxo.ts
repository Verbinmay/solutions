/** Проверьте, содержит ли строка одинаковое количество символов 'x' и 'o'. Метод должен возвращать логическое значение и быть нечувствительным к регистру. Строка может содержать любой символ.

Примеры ввода/вывода:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

export function xo(str: string): boolean {
    return (
      str
        .toLowerCase()
        .split("")
        .reduce((acc, n) => {
          return n === "o" ? acc + 1 : n === "x" ? acc - 1 : acc;
        }, 0) === 0
    );
  }
  console.log(xo("dx"));
  
  //export function xo(str: string) {
//   const xlen = str.toLowerCase().split('').filter(x => x === 'x').length;
//   const olen = str.toLowerCase().split('').filter(o => o === 'o').length;
//   return xlen === olen;
// }