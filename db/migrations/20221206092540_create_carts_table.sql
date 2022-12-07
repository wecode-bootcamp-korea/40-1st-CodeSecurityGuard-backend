-- migrate:up
CREATE TABLE carts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    status_id INT NOT NULL, 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP, 
    CONSTRAINT carts_user_id_fkey FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT carts_product_id_fkey FOREIGN KEY(product_id) REFERENCES products(id),
    CONSTRAINT carts_status_id_fkey FOREIGN KEY(status_id) REFERENCES statuses(id)
);

-- migrate:down
DROP TABLE carts;
