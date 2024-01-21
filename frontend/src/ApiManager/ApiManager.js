import ApiMethods from "./ApiMethods"
import ENDPOINTS from "./EndPoints"
import { API_URL } from '@env';

const BASE_URL = API_URL

class ApiManager{
    static helloWorld = () => {
        const url = BASE_URL + ENDPOINTS.HELLO_WORLD();
        return ApiMethods.get(url);
    }
    
    static allRestaurants = () => {
        const url = BASE_URL + ENDPOINTS.ALL_RESTAURANTS();
        return ApiMethods.get(url);
    }

    static allFoods = (restaurant_id) => {
        const url = BASE_URL + ENDPOINTS.ALL_FOODS(restaurant_id);
        return ApiMethods.get(url);
    }

    static restaurantInfo = (restaurant_id) => {
        const url = BASE_URL + ENDPOINTS.RESTAURANT_INFO(restaurant_id);
        return ApiMethods.get(url);
    }
}

export default ApiManager;