CREATE TABLE admins (
    admin_id SERIAL PRIMARY KEY,
    email TEXT,
    password TEXT
)

CREATE TABLE athletes(
    player_id SERIAL PRIMARY KEY,
    number INT,
    name TEXT,
    position TEXT,
    year INT,
    town TEXT,
    isWomens BOOLEAN,
    sport_name TEXT REFERENCES sports(sport_name)
)

CREATE TABLE sports (
    sport_id SERIAL PRIMARY KEY,
    isWomens BOOLEAN,
    sport_name TEXT
)

CREATE TABLE degree (
    degree_id SERIAL PRIMARY KEY,
    type TEXT,
    name TEXT
)