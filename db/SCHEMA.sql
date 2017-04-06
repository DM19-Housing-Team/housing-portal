


--------------------------- CAMPUS table

CREATE TABLE campus(
   id SERIAL PRIMARY KEY,
   location_name VARCHAR(32),
   street_address TEXT,
   city TEXT,
   state VARCHAR(16),
   country VARCHAR(32),
   post_code VARCHAR(16)
);


--------------------------- USERS (ADMINS) table

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(31),
    last_name VARCHAR(31),
    email VARCHAR(63),
    campus_id INT REFERENCES campus(id)
);


--------------------------- COHORT table

CREATE TABLE cohort(
   id SERIAL PRIMARY KEY,
   campus_id INT REFERENCES campus(id),
   name VARCHAR(15),
   start_date DATE,
   end_date DATE
);


--------------------------- BUILDING table

CREATE TABLE building (
    id SERIAL PRIMARY KEY,
    campus_id INT REFERENCES campus(id),
    street_address TEXT,
    city TEXT,
    state VARCHAR(16),
    country VARCHAR(32),
    post_code VARCHAR(16)
);


--------------------------- APARTMENT table

CREATE TABLE apartment(
    id SERIAL PRIMARY KEY,
    building_id INT REFERENCES building(id),
    apartment_number VARCHAR(7),
    preferred_gender CHAR(1),
    over_21 BOOLEAN
);


--------------------------- ROOMS table

CREATE TABLE room(
    id SERIAL PRIMARY KEY,
    apartment_id INT REFERENCES apartment(id),
    number_of_beds INT
);


