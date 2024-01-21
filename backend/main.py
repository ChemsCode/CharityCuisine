from flask import Flask, jsonify, make_response
from flask_cors import CORS
from dotenv import load_dotenv
from blueprints.modelBlueprint import bp as modelsBP
from blueprints.restaurantBlueprint import bp as restaurantBP
from blueprints.foodBankBlueprint import bp as foodBankBP

def create_app():
    load_dotenv()
    
    app = Flask(__name__)
    app.register_blueprint(modelsBP)
    app.register_blueprint(foodBankBP)
    app.register_blueprint(restaurantBP)

        
    # setup
    CORS(app, resources={r'/*': {'origins': '*'}})

    
    # hello world test
    @app.route('/hello')
    def hello():
        return make_response('hello world', 200)

    
    
    
    return app


app = create_app()

if __name__ == "__main__":
    print(" Starting app...")
    app.run(host="0.0.0.0", port=4200)
