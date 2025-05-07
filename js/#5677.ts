/*Обычно, когда вы что-то покупаете, вас спрашивают, верны ли номер вашей кредитной карты, номер телефона или ответ на самый секретный вопрос. Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, чтобы это было показано на экране. Вместо этого мы это маскируем.

Ваша задача — написать функцию maskify, которая изменяет все символы, кроме последних четырех, на '#'.

Примеры (вход -> выход):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/
export function maskify(cc: string): string {
    if(cc.length<=4) return cc;
      return '#'.repeat(cc.length - 4) + cc.slice(-4)
  }
//   export function maskify(cc: string): string {
//     return cc.length > 4? '#'.repeat(cc.length - 4) + cc.slice(-4): cc
// }  

// export function maskify(cc: string): string {
//     return cc.slice(-4).padStart(cc.length, '#')
// }