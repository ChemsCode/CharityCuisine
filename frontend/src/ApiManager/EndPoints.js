const ENDPOINTS = {

    HELLO_WORLD: () => '/hello',
    ALL_RESTAURANTS: () => '/restaurant/all_restaurants',
    ALL_FOODS: (restaurant_id) => '/restaurant/all_foods/' + restaurant_id,
    RESTAURANT_INFO: (restaurant_id) => '/restaurant/info/' + restaurant_id,
    
}

export default ENDPOINTS;