INSERT INTO athletes
(name, sport_id, isWomens)
VALUES 
($1, $2, $3)
returning *;