/*
Создайте функцию, которая принимает положительное целое число и возвращает следующее большее число, которое можно получить путем перестановки его цифр. Например:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
Если цифры невозможно переставить так, чтобы получилось большее число, верните -1(или nilв Swift, Noneв Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
*/

const nums = [241243, 45235, 25, 52, 8023, 453, 6023085258621, 2017];
function nextBigger(n) {
  const arrOfNum = `${n}`.split("").map(Number);
  const maxNum = Number(
    [...arrOfNum]
      .sort((a, b) => {
        return b - a;
      })
      .join("")
  );
  
  if (n === maxNum) return -1;

  for (let i = arrOfNum.length - 1; i >= 1; i--) {
    if (arrOfNum[i] > arrOfNum[i - 1]) {
      const arrOfMin = arrOfNum.findLastIndex(
        (a) =>
          a ===
          Math.min(...arrOfNum.slice(i - 1).filter((a) => a > arrOfNum[i - 1]))
      );

      [arrOfNum[i - 1], arrOfNum[arrOfMin]] = [arrOfNum[arrOfMin], arrOfNum[i - 1]];

      return +[
        ...arrOfNum.slice(0, i),
        ...arrOfNum.slice(i).sort((a, b) => {
          return a - b;
        }),
      ].join("");
    }
  }
}

for (const num of nums) {
  console.log(`${num} => ${nextBigger(num)}\n`);
}


