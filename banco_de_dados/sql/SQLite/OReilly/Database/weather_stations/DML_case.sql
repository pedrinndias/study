SELECT report_code, year, month, day, wind_speed, -- selecionamos as colunas
    CASE -- criamos um caso com 3 condições, este caso virará uma coluna 
        WHEN wind_speed >= 40 THEN 'HIGH'
        WHEN wind_speed >= 30 AND wind_speed < 40 THEN 'MODERATE'
        ELSE 'LOW'
    END AS wind_severity-- fim do caso e atribuindo nome ao caso
    FROM STATION_DATA --especificamos da tabela
    GROUP BY year, month, day, wind_speed --separamos para organizar
    ORDER BY year DESC, month DESC, day DESC, wind_speed DESC; --ordenamos
         

SELECT year, 
    CASE -- criamos um caso com 3 condições, este caso virará uma coluna 
        WHEN wind_speed >= 40 THEN 'HIGH'
        WHEN wind_speed >= 30 AND wind_speed < 40 THEN 'MODERATE'
        ELSE 'LOW'
    END AS wind_severity,
    COUNT(*) AS record_count
    FROM STATION_DATA
    GROUP BY 1, 2
    ORDER BY 1 DESC
        