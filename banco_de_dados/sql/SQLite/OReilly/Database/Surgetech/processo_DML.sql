INSERT INTO attendee (first_name, last_name, phone, email, vip) 
VALUES ('Elon', 'Musk', 11999990001, 'elon@tesla.com', 1);

INSERT INTO attendee (first_name, last_name, phone, email, vip) 
VALUES ('Jeff', 'Bezos', 11999990002, 'jeff@amazon.com', 1);

INSERT INTO attendee (first_name, last_name, phone, email, vip) 
VALUES ('Dev', 'Junior', 11999990003, 'dev@gmail.com', 0);


-- O banco gera ID 1 automaticamente. (Vinculado ao Elon, ID 1)
INSERT INTO company (name, description, primary_contact_attendee_id) 
VALUES ('Tesla', 'Carros Elétricos', 1);

-- O banco gera ID 2 automaticamente. (Vinculado ao Jeff, ID 2)
INSERT INTO company (name, description, primary_contact_attendee_id) 
VALUES ('Amazon', 'E-commerce e Cloud', 2);


INSERT INTO room (floor_number, seat_capacity) VALUES (1, 50); -- Sala ID 1
INSERT INTO room (floor_number, seat_capacity) VALUES (2, 200); -- Sala ID 2



-- Apresentação da Tesla (ID 1) na Sala 1
INSERT INTO presentation (start_time, end_time, booked_company_id, booked_room_id) 
VALUES (1000, 1100, 1, 1); 

-- Apresentação da Amazon (ID 2) na Sala 2
INSERT INTO presentation (start_time, end_time, booked_company_id, booked_room_id) 
VALUES (1400, 1500, 2, 2);


-- Ingresso para palestra 1
INSERT INTO presentation_attendance (presentation_id, attendee_id) 
VALUES (1, 3);

-- Ingresso para palestra 2
INSERT INTO presentation_attendance (presentation_id, attendee_id) 
VALUES (2, 3);


SELECT * FROM attendee;
SELECT * FROM company;
SELECT * FROM presentation;
SELECT * FROM presentation_attendance;
SELECT * FROM room;

