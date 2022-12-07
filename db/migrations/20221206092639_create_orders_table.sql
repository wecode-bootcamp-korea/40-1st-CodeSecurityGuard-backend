-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(200) NOT NULL,
    user_id INT NOT NULL,
    status_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    address VARCHAR(1000) NOT NULL,
    order_message VARCHAR(200) NULL,
    CONSTRAINT orders_user_id_fkey FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT orders_status_id_fkey FOREIGN KEY(status_id) REFERENCES statuses(id),
    CONSTRAINT orders_product_id_fkey FOREIGN KEY(product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE orders
