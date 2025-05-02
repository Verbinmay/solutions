/**
 * 🔹 Задание:
 * Вам необходимо отредактировать данный код, используя TypeScript Generic, 
 * чтобы сделать классы сортировки обобщёнными и избавиться от всех ошибок в тестах (ошибки анализатора в редакторе).
 * 
 * ❗ Важно:
 * - Писать реализацию классов сортировки НЕ нужно.
 * - Реализацию методов тоже НЕ нужно писать.
 * - Требуется только корректная типизация с использованием Generic.
 */

interface SortingMethod<T> {
    sort(array: T[]): T[];
}

class BubbleSort<T> implements SortingMethod<T> {
    sort(array: T[]): T[] {
        return [] as T[];
    }
}

class QuickSort<T> implements SortingMethod<T> {
    sort(array: T[]): T[] {
        return [] as T[];
    }
}

class MergeSort<T> implements SortingMethod<T> {
    sort(array: T[]): T[] {
        return [] as T[];
    }
}

class Sort<T> {
    constructor(
        public array: T[],
        private readonly method: SortingMethod<T>,
    ) { }

    sort(): T[] {
        return this.method.sort(this.array);
    }
}

class SortLimited<T extends number | string> {
    constructor(
        public array: T[],
        private readonly method: SortingMethod<T>,
    ) { }

    sort(): T[] {
        return this.method.sort(this.array);
    }
}



// КОД НИЖЕ МЕНЯТЬ ЗАПРЕЩЕНО!!!:

// Суть тестов в том, что бы избавиться от всех ошибок в тестах

// Тесты:

// Тест 1: Проверка работы с числовым массивом
{
    const array: number[] = [5, 2, 9, 1];
    const sorter = new Sort<number>(array, new QuickSort<number>());
    const sortedArray = sorter.sort();
}

// Тест 2: Проверка работы со строковым массивом
{
    const array: string[] = ['apple', 'orange', 'banana'];
    const sorter = new Sort<string>(array, new MergeSort<string>());
    const sortedArray = sorter.sort();
}

// Тест 3: Попытка использовать метод сортировки с несовместимым типом (должна быть ошибка)
{
    const array: number[] = [1, 2, 3];
    // @ts-expect-error
    const sorter = new Sort<number>(array, new BubbleSort<string>()); // Ошибка типизации
}

// Тест 4: Проверка работы с пользовательскими типами
{
    interface Person {
        name: string;
        age: number;
    }

    const array: Person[] = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
    ];

    // Действительно, похоже SortingMethod зачем-то нужен... но зачем?
    class PersonSort implements SortingMethod<Person> {
        sort(array: Person[]): Person[] {
            // Сортировка по возрасту
            return array.sort((a, b) => a.age - b.age);
        }
    }

    const sorter = new Sort<Person>(array, new PersonSort());
    const sortedArray = sorter.sort();
}

// Тест 5: Ограничение типа через extends
{
    class SortLimited<T extends number | string> {
        // SortingMethod всё-таки нужно реализовать, но каков смысл, не только же чтобы убрать ошибки в тестах?
        constructor(public array: T[], private method: SortingMethod<T>) { }

        sort(): T[] {
            return this.method.sort(this.array);
        }
    }

    const numberArray = [1, 2, 3];
    const stringArray = ['a', 'b', 'c'];

    const numberSorter = new SortLimited<number>(numberArray, new QuickSort<number>());
    const stringSorter = new SortLimited<string>(stringArray, new MergeSort<string>());

    interface Person {
        name: string;
    }

    const personArray: Person[] = [{ name: 'Charlie' }];
    // @ts-expect-error
    const personSorter = new SortLimited<Person>(personArray, new BubbleSort<Person>()); // Ошибка типизации
}

// Тест 6: Проверка соответствия типов массива и метода сортировки
{
    const array: number[] = [1, 2, 3];
    // @ts-expect-error
    const sorter = new Sort<number>(array, new MergeSort<string>()); // Ошибка типизации
}

// Тест 7: Проверка возвращаемого типа метода sort()
{
    const array: number[] = [3, 2, 1];
    const sorter = new Sort<number>(array, new BubbleSort<number>());
    const sortedArray = sorter.sort();

    // Проверяем, что sortedArray имеет тип number[]
    function expectNumberArray(input: number[]) { }
    expectNumberArray(sortedArray);
}

// Тест 8: Проверка метода сортировки на соответствие интерфейсу SortingMethod<T>
{
    class InvalidSortMethod {
        sort(array: number[]): string {
            return 'invalid';
        }
    }

    const array: number[] = [1, 2, 3];
    // @ts-expect-error
    const sorter = new Sort<number>(array, new InvalidSortMethod()); // Ошибка типизации
}

// Тест 9: Проверка типов элементов массива
{
    const array = [1, 'two', 3]; // Массив с разными типами
    // @ts-expect-error
    const sorter = new Sort<number>(array, new BubbleSort<number>()); // Ошибка типизации
}

// Тест 10: Использование разных методов сортировки с одинаковым типом
{
    const array: number[] = [9, 7, 5];
    const sorter1 = new Sort<number>(array, new BubbleSort<number>());
    const sorter2 = new Sort<number>(array, new QuickSort<number>());
    const sorter3 = new Sort<number>(array, new MergeSort<number>());

    sorter1.sort();
    sorter2.sort();
    sorter3.sort();
}