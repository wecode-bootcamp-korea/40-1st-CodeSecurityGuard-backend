-- migrate:up
ALTER TABLE orders
DROP COLUMN order_message;

-- migrate:down

