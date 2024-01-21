from flask import Blueprint, request, jsonify, make_response
import os
from dotenv import load_dotenv  
from supabase import create_client

bp = Blueprint('foodBanks', __name__, url_prefix='/banks')

# PostgreSQL connection parameters
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

@bp.route('/all_food_banks', methods=['GET'])
def get_all_food_banks():
    supabase = create_client(url, key)
    data, count = supabase.table('foodbank').select('*').execute()
    return make_response(jsonify(data), 200)

