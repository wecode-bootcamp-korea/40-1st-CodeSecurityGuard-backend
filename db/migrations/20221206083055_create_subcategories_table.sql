-- migrate:up
CREATE TABLE sub_categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(category_id) REFERENCES categories(id)
);
-- migrate:down
DROP TABLE sub_categories;
