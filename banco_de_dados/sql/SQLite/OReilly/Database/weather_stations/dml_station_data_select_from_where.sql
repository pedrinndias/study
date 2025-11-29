--
-- File generated with SQLiteStudio v3.4.17 on sáb nov 29 08:28:49 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: STATION_DATA
CREATE TABLE STATION_DATA (station_number INTEGER, report_code VARCHAR, year INTEGER, month INTEGER, day INTEGER, dew_point DECIMAL, station_pressure DECIMAL, visibility DECIMAL, wind_speed DECIMAL, temperature DECIMAL, precipitation DECIMAL, snow_depth DECIMAL, fog BOOLEAN, rain BOOLEAN, hail BOOLEAN, thunder BOOLEAN, tornado BOOLEAN);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
