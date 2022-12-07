-- migrate:up
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    brand_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    thumbnail_image_url VARCHAR(1000) NULL,
    price DECIMAL(8,2) NOT NULL,
    discounted_price DECIMAL(8,2) NULL,
    sub_category_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT products_brand_id_fkey FOREIGN KEY(brand_id) REFERENCES brands(id),
    CONSTRAINT products_sub_category_id_fkey FOREIGN KEY(sub_category_id) REFERENCES sub_categories(id)
);

-- migrate:down
DROP TABLE products;
