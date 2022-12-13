-- migrate:up
ALTER TABLE orders
DROP COLUMN address;

-- migrate:down

