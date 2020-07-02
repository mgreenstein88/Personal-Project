SELECT *
FROM athletes
JOIN sports ON sports.sport_name = athletes.sport_name
WHERE athletes.isWomens = true