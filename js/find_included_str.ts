/*Даны два массива строк a1и a2возвращен отсортированный rв лексикографическом порядке массив строк, a1являющихся подстроками строк a2.

Пример 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

возвращается["arp", "live", "strong"]

Пример 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

возвращается[]

Примечания:
Массивы записываются в "общей" нотации. Смотрите "Ваши тестовые случаи" для примеров на вашем языке.
В Shell bash a1и a2являются строками. Возвращаемое значение — строка, в которой слова разделены запятыми.
Внимание: в некоторых языках rне должно быть дубликатов.*/

export function inArray(a1: string[], a2: string[]): string[] {

    const arr  = new Set<string>
    a2.forEach((at)=>{
      a1.forEach((af)=>{
        if(at.includes(af)) arr.add(af)
      })
    })
  return Array.from(arr).sort((a,b)=>{return a>b?1:-1})
  }
  inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]);
  
//   export function inArray(a1: string[], a2: string[]): string[] {
//     return a1.filter(substr => a2.some(word => word.includes(substr))).sort()
//   }