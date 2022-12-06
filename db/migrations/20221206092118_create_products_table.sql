-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    brand_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    price DECIMAL NOT NULL,
    discounted_price DECIMAL NULL,
    sub_category_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id),
    FOREIGN KEY(brand_id) REFERENCES brands(id),
    FOREIGN KEY(sub_category_id) REFERENCES sub_categories(id)
);

-- migrate:down
DROP TABLE products;
