-- Drop the public schema and all of its contents
DROP SCHEMA public CASCADE;

-- Recreate the public schema
CREATE SCHEMA public;

-- Table for Restaurant
CREATE TABLE Restaurant (
    restaurant_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    opening_hour TIME,
    closing_hour TIME,
    location TEXT,
    rating DECIMAL(2, 1)
);

-- Table for FoodItem
CREATE TABLE FoodItem (
    food_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) CHECK (type IN ('pasta', 'canned', 'beans', 'canned', 'vegetables', 'rice', 'tuna')),
    quantity INT,
    taken BOOLEAN NOT NULL DEFAULT FALSE
);

-- Table for Order
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    date DATE NOT NULL
);

-- Table for FoodBank
CREATE TABLE FoodBank (
    fb_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location TEXT
);

-- Associative table for Restaurant and FoodItem
CREATE TABLE Rest_Food (
    restaurant_id INT NOT NULL,
    food_id INT NOT NULL,
    CONSTRAINT pk_Rest_Food PRIMARY KEY (food_id),
    CONSTRAINT fk_Restaurant
        FOREIGN KEY (restaurant_id) 
        REFERENCES Restaurant (restaurant_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_FoodItem
        FOREIGN KEY (food_id) 
        REFERENCES FoodItem (food_id)
        ON DELETE CASCADE
);

-- Associative table for FoodBank and FoodItem
CREATE TABLE Bank_Food (
    fb_id INT NOT NULL,
    food_id INT NOT NULL,
    CONSTRAINT pk_Bank_Food PRIMARY KEY (food_id),
    CONSTRAINT fk_FoodBank
        FOREIGN KEY (fb_id) 
        REFERENCES FoodBank (fb_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_FoodItemBank
        FOREIGN KEY (food_id) 
        REFERENCES FoodItem (food_id)
        ON DELETE CASCADE
);

-- Associative table for Order and FoodItem
CREATE TABLE Order_Food (
    order_id INT NOT NULL,
    food_id INT NOT NULL,
    CONSTRAINT pk_Order_Food PRIMARY KEY (food_id),
    CONSTRAINT fk_Order
        FOREIGN KEY (order_id) 
        REFERENCES Orders (order_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_FoodItemOrder
        FOREIGN KEY (food_id) 
        REFERENCES FoodItem (food_id)
        ON DELETE CASCADE
);
