from flask import Blueprint, request, jsonify, make_response
import os
from dotenv import load_dotenv  
from supabase import create_client

bp = Blueprint('restaurant', __name__, url_prefix='/restaurant')

# PostgreSQL connection parameters
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

@bp.route('/all_restaurants', methods=['GET'])
def get_all_restaurants():
    supabase = create_client(url, key)
    data, count = supabase.table('restaurant').select('*').execute()
    return make_response(jsonify(data), 200)

# select food_id from rest_food where restaurant_id = --add selected rest id HEADER
@bp.route('/all_foods/<restaurant_id>', methods=['GET'])
def get_all_foods(restaurant_id):
    supabase = create_client(url, key)
    data, count = supabase.table('rest_food').select('*').eq('restaurant_id', restaurant_id).execute()
    return make_response(jsonify(data), 200)

# select name, rating from restaurant 
@bp.route('/restaurant_info/<restaurant_id>', methods=['GET'])
def get_restaurant_info(restaurant_id):
    supabase = create_client(url, key)
    data, count = supabase.table('restaurant').select('name, rating').eq('restaurant_id', restaurant_id).execute()
    return make_response(jsonify(data), 200)

@bp.route('/add_restaurant', methods=['POST'])
def add_restaurant():
    supabase = create_client(url, key)
    data = request.get_json()
    supabase.table('restaurant').insert(data).execute()
    return make_response(jsonify(data), 200)

@bp.route('/restaurant_order_info/<restaurant_id>', methods=['GET'])
def get_restaurant_order_info(restaurant_id):
    supabase = create_client(url, key)
    data, count = supabase.table('orders').select(('order_id, date, restaurant_id')).eq('restaurant_id', '1').execute()
    name, x = supabase.table('restaurant').select('name').eq('restaurant_id', '1').execute()

    x, items = data

    for item in items:
        print("item", item)
        item['restaurant_name'] = name[1][0]['name']

    return make_response(jsonify(item), 200)