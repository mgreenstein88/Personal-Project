INSERT INTO degree
(type, name)
VALUES 
($1, $2)
returning *;