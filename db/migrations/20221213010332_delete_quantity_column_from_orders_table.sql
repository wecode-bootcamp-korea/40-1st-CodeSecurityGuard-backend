-- migrate:up
ALTER TABLE orders
DROP COLUMN quantity;

-- migrate:down

