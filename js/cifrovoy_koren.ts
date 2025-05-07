

/*Цифровой корень — это рекурсивная сумма всех цифр числа.

Учитывая n, возьмите сумму цифр числа n. Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, пока не получится однозначное число. Входными данными будет неотрицательное целое число.

Примеры
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
export const digitalRoot = (n:number):number => {
    const makeArr = (numb:number):number[] => numb.toString().split('').map(Number)
    
    
    function req(array:number[]):number{
      if(array.length<=1) return array[0]
      const [a,...res] = array
      return a + req(res)
    }
      const res = req(makeArr(n))
    return makeArr(res).length>1? digitalRoot(res):res
    };
    
    digitalRoot(942)

    // export const digitalRoot = (n:number):number => {
    //   if(n < 10) return n
    
    //   return digitalRoot(
    //     n.toString()
    //       .split("")
    //       .map(i => parseInt(i))
    //       .reduce((a, b) => a + b, 0)
    //   )
    // };