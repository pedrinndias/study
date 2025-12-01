--
-- File generated with SQLiteStudio v3.4.17 on dom nov 30 22:30:02 2025
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: attendee
DROP TABLE IF EXISTS attendee;

CREATE TABLE IF NOT EXISTS attendee (
    attendee_id INTEGER      NOT NULL
                             CONSTRAINT pk_attendee_id PRIMARY KEY AUTOINCREMENT,
    first_name  VARCHAR (50) NOT NULL,
    last_name   VARCHAR (50) NOT NULL,
    phone       INT          CONSTRAINT uk_phone UNIQUE,
    email       VARCHAR (50) CONSTRAINT uk_email UNIQUE,
    vip         BOOLEAN      NOT NULL
);

INSERT INTO attendee (attendee_id, first_name, last_name, phone, email, vip) VALUES (1, 'Elon', 'Musk', 11999990001, 'elon@tesla.com', 1);
INSERT INTO attendee (attendee_id, first_name, last_name, phone, email, vip) VALUES (2, 'Jeff', 'Bezos', 11999990002, 'jeff@amazon.com', 1);
INSERT INTO attendee (attendee_id, first_name, last_name, phone, email, vip) VALUES (3, 'Dev', 'Junior', 11999990003, 'dev@gmail.com', 0);

-- Table: company
DROP TABLE IF EXISTS company;

CREATE TABLE IF NOT EXISTS company (
    company_id                  INTEGER      NOT NULL
                                             CONSTRAINT pk_company_id PRIMARY KEY,
    name                        VARCHAR (50) NOT NULL
                                             CONSTRAINT uk_name UNIQUE,
    description                 VARCHAR (50),
    primary_contact_attendee_id INT          NOT NULL,
    CONSTRAINT fk_primary_contact_attendee_id FOREIGN KEY (
        primary_contact_attendee_id
    )
    REFERENCES attendee (attendee_id) 
);

INSERT INTO company (company_id, name, description, primary_contact_attendee_id) VALUES (1, 'Tesla', 'Carros Elétricos', 1);
INSERT INTO company (company_id, name, description, primary_contact_attendee_id) VALUES (2, 'Amazon', 'E-commerce e Cloud', 2);

-- Table: presentation
DROP TABLE IF EXISTS presentation;

CREATE TABLE IF NOT EXISTS presentation (
    presentation_id   INTEGER NOT NULL
                              CONSTRAINT pk_presentation_id PRIMARY KEY AUTOINCREMENT,
    start_time        INT     NOT NULL,
    end_time          INT     NOT NULL,
    booked_company_id INT     NOT NULL,
    booked_room_id    INT     NOT NULL,
    CONSTRAINT fk_booked_company_id FOREIGN KEY (
        booked_company_id
    )
    REFERENCES company (company_id),
    CONSTRAINT fk_booked_room_id FOREIGN KEY (
        booked_room_id
    )
    REFERENCES room (room_id) 
);

INSERT INTO presentation (presentation_id, start_time, end_time, booked_company_id, booked_room_id) VALUES (1, 1000, 1100, 1, 1);
INSERT INTO presentation (presentation_id, start_time, end_time, booked_company_id, booked_room_id) VALUES (2, 1400, 1500, 2, 2);
INSERT INTO presentation (presentation_id, start_time, end_time, booked_company_id, booked_room_id) VALUES (3, 1000, 1100, 1, 1);
INSERT INTO presentation (presentation_id, start_time, end_time, booked_company_id, booked_room_id) VALUES (4, 1400, 1500, 2, 2);

-- Table: presentation_attendance
DROP TABLE IF EXISTS presentation_attendance;

CREATE TABLE IF NOT EXISTS presentation_attendance (
    ticket_id       INTEGER NOT NULL
                            CONSTRAINT pk_ticket_id PRIMARY KEY AUTOINCREMENT,
    presentation_id INT     NOT NULL,
    attendee_id     INT     NOT NULL,
    CONSTRAINT fk_presentation_id FOREIGN KEY (
        presentation_id
    )
    REFERENCES presentation (presentation_id),
    CONSTRAINT fk_attendee_id FOREIGN KEY (
        attendee_id
    )
    REFERENCES attendee (attendee_id) 
);

INSERT INTO presentation_attendance (ticket_id, presentation_id, attendee_id) VALUES (1, 1, 3);
INSERT INTO presentation_attendance (ticket_id, presentation_id, attendee_id) VALUES (2, 2, 3);

-- Table: room
DROP TABLE IF EXISTS room;

CREATE TABLE IF NOT EXISTS room (
    room_id       INTEGER NOT NULL
                          CONSTRAINT pk_room_id PRIMARY KEY AUTOINCREMENT,
    floor_number  INT     NOT NULL,
    seat_capacity INT     NOT NULL
);

INSERT INTO room (room_id, floor_number, seat_capacity) VALUES (1, 1, 50);
INSERT INTO room (room_id, floor_number, seat_capacity) VALUES (2, 2, 200);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
