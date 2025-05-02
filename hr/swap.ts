/**
 * 🔹 Задание:
 * Реализуйте функцию `swap`, которая принимает массив и два индекса,
 * и меняет местами элементы, находящиеся по этим индексам.
 *
 * 🔍 Примеры:
 * swap([1, 2, 3], 0, 2) => [3, 2, 1]
 * swap(["a", "b", "c"], 1, 2) => ["a", "c", "b"]
 * swap([true, false], 0, 1) => [false, true]
 * swap([1, 2, 3], -1, 2) => [1, 2, 3] (индекс -1 недопустим)
 * swap([1, 2, 3], 1, 1) => [1, 2, 3]
 */

function swap(array: any[], index1: number, index2: number) {
  // Проверяем, что индексы в допустимых пределах
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    return;
  }

  // Если индексы одинаковые, ничего не делаем
  if (index1 === index2) {
    return;
  }

  // Меняем элементы местами
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
