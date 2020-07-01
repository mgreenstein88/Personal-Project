INSERT INTO athletes
(number, name, position, year, town, isWomens, sport_name)
VALUES 
($1, $2, $3, $4, $5, $6, $7)
returning *;

