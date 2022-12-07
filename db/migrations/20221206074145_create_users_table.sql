-- migrate:up
 CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password binary(60) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    point DECIMAL(10,2) NULL DEFAULT 10000000,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT users_email_ukey UNIQUE(email),
    CONSTRAINT users_phone_number_ukey UNIQUE(phone_number)
 );
-- migrate:down
DROP TABLE users;
