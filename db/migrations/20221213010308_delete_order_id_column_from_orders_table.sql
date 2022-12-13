-- migrate:up
ALTER TABLE orders
DROP COLUMN order_id;

-- migrate:down

