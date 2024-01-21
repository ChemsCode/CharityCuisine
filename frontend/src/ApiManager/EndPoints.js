const ENDPOINTS = {

    HELLO_WORLD: () => '/hello',
    ALL_RESTAURANTS: () => '/restaurant/all_restaurants',
    ALL_FOODS: (restaurant_id) => '/restaurant/all_foods/' + restaurant_id,
    RESTAURANT_INFO: (restaurant_id) => '/restaurant/info/' + restaurant_id,
    UPLOAD_IMAGE: () => '/models/upload',
    ALL_FOOD_BANKS: () => '/banks/all_food_banks',
    ADD_FOOD_BANK: () => '/banks/add_food_bank',
    ADD_RESTAURANT: () => '/restaurant/add_restaurant',
    ALL_ORDERS: () => '/restaurant/restaurant_order_info',
    
}

export default ENDPOINTS;