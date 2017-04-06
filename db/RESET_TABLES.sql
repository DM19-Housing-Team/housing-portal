----------- clean from bottom up to clear out the foreign key dependencies, then rebuild from top
-----------  inherit from campus, apartment from building, room from apartment

DELETE FROM room;
ALTER SEQUENCE room_id_seq RESTART WITH 1;

DELETE FROM apartment;
ALTER SEQUENCE apartment_id_seq RESTART WITH 1;

DELETE FROM building;
ALTER SEQUENCE building_id_seq RESTART WITH 1;

DELETE FROM cohort;
ALTER SEQUENCE cohort_id_seq RESTART WITH 1;

DELETE FROM users;
ALTER SEQUENCE users_id_seq RESTART WITH 1;

DELETE FROM campus;
ALTER SEQUENCE campus_id_seq RESTART WITH 1;


INSERT INTO campus
(location_name, street_address, city, state, country, post_code)
VALUES
('Provo', '560 S. 100 W.', 'Provo', 'Utah', 'United States of America', '84601'),
('Salt Lake', '341 S. Main St.', 'Salt Lake City', 'Utah', 'United States of America', '84111'),
('Dallas', '500 S. Ervay St. Suite 101', 'Dallas', 'Texas', 'United States of America', '75201');

INSERT INTO users
(campus_id, first_name, last_name, email)
VALUES
(1, 'Bri', 'Rios', 'bri@devmount.in'),
(1, 'J', 'Robber', 'jeremy@devmount.in'),
(1, 'Jeremy', 'Gray', 'jaygraygray@devmount.in');

INSERT INTO cohort
(campus_id, name, start_date, end_date)
VALUES
(1, 'DM-01x', '1999-06-01', '1999-08-30'),
(1, 'DM-02x', '1999-06-29', '1999-09-27'),
(1, 'DM-03x', '1999-07-17', '1999-10-15'),
(1, 'DM-04x', '1999-08-14', '1999-08-30'),
(1, 'DM-05x', '1999-09-02', '1999-11-30'),
(1, 'DM-06x', '1999-09-30', '1999-12-31'),
(2, 'DM-01y', '1999-06-01', '1999-08-30'),
(3, 'DM-01z', '1999-06-01', '1999-08-30');

INSERT INTO building
(campus_id, street_address, city, state, country, post_code)
VALUES
(1, '575 S. 200 W.', 'Provo', 'Utah', 'United States of America', '84601'),
(1, '777 S. Temple St.', 'Provo', 'Utah', 'United States of America', '84777');

INSERT INTO apartment
(building_id, apartment_number, preferred_gender, over_21)
VALUES
(1, '101', 'M', 'true'),
(1, '102', 'M', 'false'),
(1, '201', 'F', 'true'),
(1, '204', 'M', 'true'),
(2, '109', 'M', 'true'),
(2, '111', 'F', 'true'),
(2, '210', 'M', 'true'),
(2, '212', 'F', 'false');

INSERT INTO room
(apartment_id, number_of_beds)
VALUES
(1, 2),
(1, 1),
(1, 2),
(2, 2),
(2, 2),
(3, 2),
(3, 1),
(3, 2),
(4, 1),
(4, 1),
(5, 2),
(5, 2),
(5, 2),
(6, 1),
(6, 2),
(6, 1),
(7, 2),
(7, 1),
(7, 2),
(8, 1),
(8, 2),
(8, 1);