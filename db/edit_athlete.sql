UPDATE athletes
SET name = $1, sport_id = $2, isWomens = $3
WHERE player_id = $4
returning *;