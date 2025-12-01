CREATE TABLE attendee(
    attendee_id     INTEGER                   NOT NULL            CONSTRAINT pk_attendee_id PRIMARY KEY AUTOINCREMENT,
    first_name      VARCHAR(50)               NOT NULL,
    last_name       VARCHAR(50)               NOT NULL,
    phone           INT                                           CONSTRAINT uk_phone UNIQUE,
    email           VARCHAR(50)                                   CONSTRAINT uk_email UNIQUE,
    vip             BOOLEAN                   NOT NULL
    
);

CREATE TABLE company(
    company_id      INTEGER                   NOT NULL            CONSTRAINT pk_company_id PRIMARY KEY,
    name            VARCHAR(50)               NOT NULL            CONSTRAINT uk_name UNIQUE,
    description     VARCHAR(50),
    primary_contact_attendee_id     INT   NOT NULL,
    CONSTRAINT fk_primary_contact_attendee_id FOREIGN KEY (primary_contact_attendee_id) REFERENCES attendee(attendee_id)
);

CREATE TABLE room(
    room_id         INTEGER                   NOT NULL            CONSTRAINT pk_room_id PRIMARY KEY AUTOINCREMENT,
    floor_number    INT                       NOT NULL,
    seat_capacity   INT                       NOT NULL 
);

CREATE TABLE presentation(
    presentation_id   INTEGER                 NOT NULL            CONSTRAINT pk_presentation_id PRIMARY KEY AUTOINCREMENT,
    start_time        INT                     NOT NULL,
    end_time          INT                     NOT NULL,
    booked_company_id INT                     NOT NULL,
    booked_room_id    INT                     NOT NULL,
    CONSTRAINT fk_booked_company_id FOREIGN KEY (booked_company_id) REFERENCES company(company_id),
    CONSTRAINT fk_booked_room_id FOREIGN KEY (booked_room_id) REFERENCES room(room_id)
);

CREATE TABLE presentation_attendance(
    ticket_id         INTEGER                     NOT NULL            CONSTRAINT pk_ticket_id PRIMARY KEY AUTOINCREMENT,
    presentation_id   INT                     NOT NULL,
    attendee_id       INT                     NOT NULL,
    CONSTRAINT fk_presentation_id    FOREIGN KEY (presentation_id)     REFERENCES presentation(presentation_id)
    CONSTRAINT fk_attendee_id        FOREIGN KEY (attendee_id)         REFERENCES attendee(attendee_id)

);


    