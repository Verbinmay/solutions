/*Если перечислить все натуральные числа ниже 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, ниже переданного числа.
Кроме того, если число отрицательное, вернуть 0.
Примечание: если число кратно и 3, и 5, подсчитайте его только один раз . */

function solution(n) {
  if (n < 0) return 0;
  const a = Array.from({ length: n }, (_, i) => (!(i % 3) || !(i % 5) ? i : 0));
  return a.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(10)); // 23

/*solution(number) {
    if(number <= 0)
      return 0;
    return [...Array(number)]
      .map((_,i) => i)
      .filter((value, index) => index%3 === 0 || index%5 === 0)
      .reduce((a, b) => a + b, 0);
  }

  solution(n: number): number {
    return (--n < 0) ? 0 : (n % 3 === 0 || n % 5 === 0 ? n : 0) + this.solution(n);
  }
*/
