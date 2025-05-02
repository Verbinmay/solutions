--Вам будет предоставлена ​​таблица numbers с одним столбцом number.
--Возвращает набор данных с двумя столбцами: number и is_even, где number содержит исходное входное значение, а is_even содержащий "Even"или "Odd"зависящий от number значений столбцов.
 SELECT 
    number,
    CASE 
        WHEN number % 2 = 0 THEN 'Even'
        ELSE 'Odd' 
    END AS is_even
FROM 
    numbers;