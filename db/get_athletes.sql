SELECT * FROM athletes
WHERE sport_name = $1
ORDER BY number ASC;
