-- migrate:up
CREATE TABLE orders (
    id INT NOT NULL AUTO_INCREMENT,
    order_random_id VARCHAR(200) NOT NULL,
    user_id INT NOT NULL,
    status_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    amount DECIMAL NOT NULL,
    address VARCHAR(1000) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(status_id) REFERENCES statuses(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE orders
