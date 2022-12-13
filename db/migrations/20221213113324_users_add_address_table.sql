-- migrate:up
ALTER TABLE users ADD address varchar(1000) NOT NULL

-- migrate:down

