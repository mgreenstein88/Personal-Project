UPDATE athletes
SET name = $1
WHERE player_id = $2
returning *;