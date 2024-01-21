from flask import Blueprint, request, jsonify, make_response
from ultralytics import YOLO
from PIL import Image

bp = Blueprint('models', __name__, url_prefix='/models')

model = None

@bp.route('/upload', methods=['POST'])
def predict():
    # grab image from form data
    file = request.files['image']
    file = Image.open(file)
    
    model = preload_model()
    
    results = model(file)
    response = {"canned vegetables": 0, "pasta": 0, "rice": 0, "tuna": 0, "canned beans": 0}
    
    for result in results:
        print("printing results")
        print(result.boxes.data)
        for box in result.boxes.data:
            if result.names[int(box[5])] == "canned vegetables":
                response["canned vegetables"] += 1
            elif result.names[int(box[5])] == "pasta":
                response["pasta"] += 1
            elif result.names[int(box[5])] == "rice":
                response["rice"] += 1
    
    return make_response(jsonify(response), 200)

  
def preload_model():
    model = YOLO("best.pt")
    return model
    