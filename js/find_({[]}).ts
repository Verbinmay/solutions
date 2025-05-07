/**Напишите функцию, которая принимает строку фигурных скобок и определяет, является ли порядок фигурных скобок допустимым. Она должна возвращать true, является ли строка допустимой, а falseесли нет.

Эта Ката похожа на Ката «Допустимые скобки» , но вводит новые символы: скобки []и фигурные скобки {}. Спасибо @arnedagза идею!

Все входные строки будут непустыми и будут состоять только из круглых и фигурных скобок: ()[]{}.

Что считается действительным?
Строка фигурных скобок считается действительной, если всем фигурным скобкам соответствует правильная фигурная скобка.

Примеры
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */
export function validBraces(braces: string): boolean {
    const dic: { [key: string]: string } = {
      "]": "[",
      ")": "(",
      "}": "{",
    };
    const opened: Array<string> = [];
    let result = true;
    braces.split("").forEach((a) => {
      if (!dic[a]) {
        opened.push(a);
      } else if (dic[a] === opened.splice(-1)[0]) {
        opened.unshift();
      } else {
        result = false;
      }
    });
  
    return result && opened.length===0;
  }
  
  validBraces('([{}])')
  
//   export function validBraces(braces: string): boolean {
//     [...braces].forEach(() => braces = braces.replace('()', '').replace('{}', '').replace('[]', ''))
//     return !braces;
//   }
  