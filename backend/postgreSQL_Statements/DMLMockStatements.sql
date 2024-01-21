-- Additional mock data for Restaurant
INSERT INTO Restaurant (name, opening_hour, closing_hour, location, rating)
VALUES
('Pasta Paradise', '10:00', '22:00', '111 Noodle Street, Pastaville', 4.8),
('Canned Delights', '09:00', '18:00', '222 Preserve Lane, Tinville', 4.3),
('The Veggie Patch', '07:00', '15:00', '333 Greens Road, Farmtown', 4.6),
('Rice Bowl', '11:00', '21:00', '444 Grain Ave, Ricetown', 4.4),
('Tuna Town', '12:00', '20:00', '555 Ocean Drive, Fishtown', 4.5);

-- Additional mock data for FoodItem
INSERT INTO FoodItem (name, type, quantity)
VALUES
('Spaghetti Aglio e Olio', 'pasta', 15),
('Green Bean Casserole', 'vegetables', 20),
('Kidney Beans', 'beans', 30),
('Canned Corn', 'canned', 25),
('Basmati Rice', 'rice', 40),
('Canned Tuna', 'tuna', 50);

-- Additional mock data for Orders
INSERT INTO Orders (date)
VALUES
('2024-01-23'),
('2024-01-24'),
('2024-01-25');

-- Additional mock data for FoodBank
INSERT INTO FoodBank (name, location)
VALUES
('Food Helpers Haven', '123 Aid Avenue, Charitytown'),
('Hope Food Repository', '456 Donation Drive, Supportcity');

-- Additional mock data for Rest_Food
-- Note: food_id should be unique, so each food item belongs to one restaurant
INSERT INTO Rest_Food (restaurant_id, food_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Additional mock data for Bank_Food
-- Note: food_id should be unique, so each food item belongs to one food bank
INSERT INTO Bank_Food (fb_id, food_id)
VALUES
(1, 6);

-- Additional mock data for Order_Food
-- Note: food_id should be unique, so each food item belongs to one order
INSERT INTO Order_Food (order_id, food_id)
VALUES
(4, 1),
(5, 2),
(6, 3);
