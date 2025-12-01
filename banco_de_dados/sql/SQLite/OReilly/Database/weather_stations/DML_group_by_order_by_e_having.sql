SELECT COUNT(*) FROM STATION_DATA; --numero de registros(tuplas) da tabela

SELECT COUNT(*) FROM STATION_DATA WHERE tornado = 1; -- contando numero de tuplas com um filtro

SELECT year, COUNT(*) AS record_count FROM STATION_DATA WHERE tornado = 1 GROUP BY year; -- aqui nos selecionamos a coluna year e a coluna que nos criamos
--a partir da contagem(count), que inclusive renomeadmos para record_count, filtamos por anos em que tornado fosse 1 e separamos (group by) 
-- a contagem por anos

SELECT year, month, COUNT(*) AS record_count FROM STATION_DATA WHERE tornado = 1 GROUP BY year, month;-- aqui nos selecionamos a coluna year e a coluna que nos criamos
--a partir da contagem(count), que inclusive renomeadmos para record_count, filtamos por anos em que tornado fosse 1 e separamos (group by) 
-- a contagem por anos e com os meses ao lado

SELECT year, month, COUNT(*) AS record_count FROM STATION_DATA WHERE tornado = 1 GROUP BY 1, 2; --Aqui a ordem mostra os anos de forma crescente
--Percebe-se que ele pega em relação a ordem das colunas que especificamos no select

SELECT year, month, COUNT(*) AS record_count FROM STATION_DATA WHERE tornado = 1 GROUP BY 2, 1; -- Aqui ostra os meses de forma crescente (janeiro(1),
-- fevereiro(2)...

SELECT year, month, COUNT(*) AS record_count FROM STATION_DATA WHERE tornado = 1 GROUP BY year, month ORDER BY year, month; --aqui ordenamos a ordem
--que vai aparecer os meses em relação ao ano, entao primeiro aparece de ordem crescente todos os meses do ano que tambem aparece de forma crescente
-- e so vai passar para o proximo ano assim que finalizar todos os meses do certo ano organizado

SELECT year, month, COUNT(*) AS record_count FROM STATION_DATA WHERE tornado = 1 GROUP BY year, month ORDER BY year DESC, month DESC;--aqui ordenamos a ordem
--que vai aparecer os meses em relação ao ano, entao primeiro aparece de ordem decrescente todos os meses do ano que tambem aparece de forma decrecente
-- e so vai passar para o proximo ano assim que finalizar todos os meses do certo ano organizado

SELECT year, month, COUNT(snow_depth) AS record_snow_depth FROM STATION_DATA GROUP BY year, month ORDER BY year DESC, month DESC; -- aqui nos selecio-
--namos as colunas year, month e 'criamos' uma coluna que conta quantas vezez teve snow_depth no mes, ou seja, ela conta quantas vezes nao foi nulo
--e mostra de forma ordenada decrescente

SELECT year, month, round(AVG(temperature), 2) AS temperatura_media -- selecionei a coluna year, month e 'criamos' a coluna com valor arrendodado para
-- 2 casas decimais que faz a media da temperatura
    FROM STATION_DATA --semparamos a tabela que retiramos a coluna
    WHERE year >= 2000 -- filtramos o ano, a partir dos anos 2000
    GROUP BY year, month  --semparamos por ano e mes
    ORDER BY year DESC, month DESC; --ordenamos a seleção por ordem decrescente
    
SELECT year, SUM(snow_depth) AS total_snow -- selecionamos a coluna year e 'criamos' a columa com o somatorio de snow_depth e renomeamos ela para total_snow
    FROM STATION_DATA -- da tabela STATION_DATA
    WHERE year >=2000 --filtramos anos maiores igual a 2000
    GROUP BY year -- semparamos por ano, assim o somatorio sera de todos os meses do ano que no final resultara no somatorio total daqule ano
    ORDER BY year DESC; -- ordenamos por anos decrecente

SELECT year, -- selecionamos a coluna year que servira para organizar nossa view
    SUM(snow_depth) AS total_snow, -- 'criamos' uma coluna que é o somatorio das tuplas de snow_depth de todos os anos >= a 2000
    SUM(precipitation) AS total_precipitation, -- 'criamos' uma coluna que é o somatorio das tuplas de precipitação de todos os anos >= a 2000
    MAX(precipitation) AS max_precipitation -- 'criamos' uma coluna que é o max das tuplas de precipitação de todos os anos >= a 2000
    FROM STATION_DATA -- da tabela station_data
    WHERE year >= 2000 -- filtramos anos maiores iguais a 2000
    GROUP BY year -- separamos para oragnizar por ano
    ORDER BY year DESC; -- ordenamos os anos de forma decrescente

SELECT year, --seleciona coluna year que servirá para organizar nossa view
    SUM(precipitation) AS total_precipitation -- 'criamos a coluna totalprecipitation que é o somatorio das precipitações dos anos >= 2000
    FROM STATION_DATA --selecionamos a tabela
    WHERE year >= 2000 -- filtramos a coluna year
    GROUP BY year -- separamos para oragnizar a view por year's
    HAVING total_precipitation > 30 -- filtramos a coluna 'criada' no select para total de precipitações maiores que 30
    ORDER BY year DESC; -- ordenamos o ano de forma decrecente
     