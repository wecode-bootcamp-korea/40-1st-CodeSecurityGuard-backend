-- migrate:up
CREATE TABLE product_images (
    id INT NOT NULL AUTO_INCREMENT,
    profile_image VARCHAR(1000) NULL,
    info_image VARCHAR(1000) NULL,
    detail_image VARCHAR(1000) NULL,
    product_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE products_images;
