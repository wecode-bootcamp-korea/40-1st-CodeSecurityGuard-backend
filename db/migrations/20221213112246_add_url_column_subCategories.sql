-- migrate:up
ALTER TABLE sub_categories
ADD link VARCHAR(50) NULL;

-- migrate:down

