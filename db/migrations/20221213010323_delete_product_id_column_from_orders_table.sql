-- migrate:up
ALTER TABLE orders
DROP FOREIGN KEY orders_images_product_id_fkey;

ALTER TABLE orders
DROP COLUMN product_id;

-- migrate:down

