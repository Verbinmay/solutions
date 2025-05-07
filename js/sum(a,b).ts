/**Даны два целых числа aи b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните aили b.

Примечание: a и bне заказываются!

Примеры (a, b) -> вывод (объяснение)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Ваша функция должна возвращать только число, а не объяснение того, как вы это число получили. */

export function getSum(a: number, b: number): number {
    if (a === b) return a;
    let min = Math.min(a, b);
    const max = Math.max(a, b);
    let result = 0;
    while (min <= max) {
      result += min;
      min++;
    }
    return result;
  }
  
  getSum(-1, 2);
  
//   export function getSum(a: number, b: number): number {
//     if (a > b) [a, b] = [b, a];
//     if (a === b) return a;
//     return a + getSum(a + 1, b);
//   }