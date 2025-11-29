SELECT * FROM STATION_DATA;

SELECT * FROM STATION_DATA WHERE year = 2010; --DML filtrando pelo ano

SELECT * FROM STATION_DATA WHERE year != 2010; --DML filtrando pelo ano diferente de 2010

SELECT * FROM STATION_DATA WHERE year BETWEEN 2005 AND 2010; --uso do filtro com condição entre condição (BETWEEN/AND)

SELECT * FROM STATION_DATA WHERE year = 2010 OR year = 2005; --uso do filtro com condição OU condição (OR)

SELECT * FROM STATION_DATA WHERE year IN (2006,2007,2008); --uso do filtro com condição dentro do que foi determinaro (...)

SELECT * FROM STATION_DATA WHERE month % 2 != 0; -- Meses impares do ano

SELECT * FROM STATION_DATA WHERE report_code = '515EFF'; -- Procurando tupla específica

SELECT * FROM STATION_DATA WHERE length(report_code) <= 6; -- verifica se todos report_code tem 6 caracteres

SELECT * FROM STATION_DATA WHERE report_code LIKE 'A%'; --filtrando todas as tuplas da coluna'report_code' que iniciam com A

SELECT * FROM STATION_DATA WHERE report_code LIKE 'A_D%';--filtrando todas as tuplas da coluna'report_code' que iniciam com A e a segunda letra D

SELECT * FROM STATION_DATA WHERE TORNADO AND HAIL; -- filtra todas as tuplas da coluna TORNADO e HAIL que são verdadeiras

SELECT * FROM STATION_DATA WHERE NOT TORNADO AND HAIL; -- filtra todas as tuplas da coluna que TORNADO é falso e HAIL que é verdadeiras

SELECT * FROM STATION_DATA WHERE TORNADO AND NOT HAIL; -- filtra todas as tuplas da coluna que TORNADO é verdadeiras e HAIL é falso

SELECT * FROM STATION_DATA WHERE snow_depth IS NULL; --filra as tuplas com dados nulos da coluna snow_depth

SELECT * FROM STATION_DATA WHERE snow_depth IS NOT NULL; --filra as tuplas com dados não nulos da coluna snow_depth

SELECT * FROM STATION_DATA WHERE coalesce(precipitation, 0) <= 0.5; -- mameira elegante de atribuir ovalor nulo igual a 0 para conseguir rastrear valores <= 0.5

SELECT report_code, coalesce(precipitation, 0) AS rainfall FROM STATION_DATA; -- Maneira elegante de selecionar tabelas e formatar valores nulo como 0

SELECT * FROM STATION_DATA WHERE rain = 1 AND temperature <= 32 OR snow_depth > 0; --Maneira errada de agrupar condições, o sgbd esta sujeito a errar devido a ambiguidade!

SELECT * FROM STATION_DATA WHERE (rain = 1 AND temperature <= 32) OR snow_depth > 0; -- Maneira correta de agrupar condições



