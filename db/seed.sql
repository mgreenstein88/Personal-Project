CREATE TABLE admins (
    admin_id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT
)

CREATE TABLE athletes (
    player_id SERIAL PRIMARY KEY,
    name TEXT,
    sport_id INT REFERENCES sports(sport_id),
    isWomens BOOLEAN
)

CREATE TABLE sports (
    sport_id SERIAL PRIMARY KEY,
    isWomens BOOLEAN,
    sport_name TEXT
)