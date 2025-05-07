/**Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона.

Пример
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
Для выполнения этого задания необходимо вернуть правильный формат.

Не забудьте пробел после закрывающих скобок!
 */
export function createPhoneNumber(numbers: number[]): string {
    function num(a: number, b: number) {
      return `${numbers.slice(a, b).join("")}`;
    }
    return `(${num(0, 3)}) ${num(3, 6)}-${num(6, 10)}`;
  }
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  
//   export function createPhoneNumber(numbers: number[]): string {
//     return numbers
//         .join("")
//         .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// }