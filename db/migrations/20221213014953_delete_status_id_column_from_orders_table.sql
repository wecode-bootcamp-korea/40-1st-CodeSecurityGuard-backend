-- migrate:up
ALTER TABLE orders
DROP FOREIGN KEY orders_status_id_fkey;

ALTER TABLE orders
DROP COLUMN status_id;

-- migrate:down

