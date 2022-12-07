-- migrate:up
CREATE TABLE product_images (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    info_image_url VARCHAR(1000) NULL,
    detail_image_url VARCHAR(1000) NULL,
    product_id INT NOT NULL,
    CONSTRAINT product_images_product_id_fkey FOREIGN KEY(product_id) REFERENCES products(id)
);

-- migrate:down
DROP TABLE products_images;
