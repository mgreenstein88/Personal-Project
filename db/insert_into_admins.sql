INSERT INTO admins
(email, password)
VALUES
($1, $2)

returning * ;
