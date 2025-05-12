/*
Напишите функцию с именем sumIntervals/ sum_intervals, которая принимает массив интервалов и возвращает сумму всех длин интервалов. Перекрывающиеся интервалы следует учитывать только один раз.

Интервалы
Интервалы представлены парой целых чисел в виде массива. Первое значение интервала всегда будет меньше второго значения. Пример интервала: [1, 5]это интервал от 1до 5. Длина этого интервала равна 4.

Перекрывающиеся интервалы
Список, содержащий перекрывающиеся интервалы:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
Сумма длин этих 

Примеры:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Тесты с большими интервалами
Ваш алгоритм должен уметь обрабатывать большие интервалы. Все протестированные интервалы являются подмножествами диапазона [-1000000000, 1000000000].


*/

function sumIntervals(intervals: [number, number][]) {
    if (intervals.length === 1) return intervals[0][1] - intervals[0][0];
    
    const sortedArr = intervals.sort((a, b) => {
      return a[0] - b[0];
    });
    const newArr:[number,number][] = [];
    for (const [index, [start, end]] of sortedArr.entries()) {
      if (index > 0 && start <= newArr[newArr.length - 1][1]) {
        newArr.splice(newArr.length - 1, 1, [newArr[newArr.length - 1][0], Math.max(end,newArr[newArr.length - 1][1])]);
        continue;
      }
      newArr.push([start, end]);
    }
    return newArr.reduce((acc,curr)=>{
     return acc+(curr[1]-curr[0])
    },0)
  }
  
  sumIntervals(
  [
    [ -19, -9 ],  [ -19, -15 ],
    [ -18, -11 ], [ -16, -15 ],
    [ -13, -6 ],  [ -9, -3 ],
    [ -6, 0 ],    [ -3, 3 ],
    [ -2, 1 ],    [ 7, 14 ]
  ]
  );
  

//   const sumIntervals = (intervals) => {
//     intervals.sort((p, n) => p[1] - n[1]);

//     for (let i = 0; i < intervals.length-1; i++) {
//         if (intervals[i][1] > intervals[i+1][0]) {
//             intervals[i][0] = Math.min(intervals[i][0], intervals[i+1][0])
//             intervals[i][1] = intervals[i+1][1];
//             intervals.splice(i+1,1);
//             i = -1;
//         }
//     }
//     return intervals.reduce((a, v) => a + (v[1]-v[0]),0);
// }


  