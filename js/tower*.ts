/*Построить башню в форме пирамиды, как массив/список строк, заданных положительным целым числом number of floors. Блок башни представлен "*"символом.

Например, башня с 3этажами выглядит так:

[
  "  *  ",
  " *** ", 
  "*****"
]
А башня с 6этажами выглядит вот так:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]*/

export const towerBuilder = (nFloors: number): string[] => {
    if (nFloors === 1) return ["*"];
    const size: number = 2 * (nFloors - 1) + 1;
    const arr: string[] = [];
    for (let i = 1; i <= size; i += 2) {
      const spaceString = " ".repeat((size - i) / 2);
      arr.push(`${spaceString}${"*".repeat(i)}${spaceString}`);
    }
    return arr;
  };
  
  towerBuilder(3);
  
//   export const towerBuilder = (nFloors: number): string[] => {
//     return Array.from({ length: nFloors }, (_, index) => {
//       const spaces = " ".repeat(nFloors - 1 - index);
//       return `${spaces}${"*".repeat(index * 2 + 1)}${spaces}`;
//     });
//   };
  
// export const towerBuilder = (nFloors: number): string[] => {
//     const tower = [];
//     for (let i = 1, nStars = 1; i <= nFloors; i++, nStars += 2) {
//       tower.push(" ".repeat(nFloors - i) + "*".repeat(nStars) + " ".repeat(nFloors - i));
//     }
//     return tower;
//   }