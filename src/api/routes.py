"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
from api.models import db, User, Dog, Favorite
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

import stripe
import json
import os

# This is your test secret API key.
stripe.api_key = 'sk_test_51NayjnEUm1DxO23PM9j7fdHphp0egAyUyCmmn8liG8rmwvjHK7rSGE8cEejGPtpvxcUIvVq8OD8YsMtirO02LYJn00LUgNkExN'

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if not email or not password:
        return jsonify({ "msg": "No password or email present." }), 400
    
    new_user = User(email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    response_body = {
        "msg": "User created"
    }
    return jsonify(response_body), 201

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for email and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad email or password"}), 401
    
    # create a new token with the user id inside
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    
    return jsonify({"id": user.id, "email": user.email }), 200

@api.route('/dog', methods=['GET'])
def handle_get_all_dog():
    all_dog = Dog.query.all()
    print(all_dog)
    result = list(map(lambda item: item.serialize(), all_dog))
    return jsonify(result), 200

@api.route('/dog/<int:id>', methods=['GET'])
def handle_get_one_dog(id):
    dog = Dog.query.get(id)
    if dog:
        return jsonify (dog.serialize()), 200
    else:
        return jsonify ({"message" : "Dog not found"}), 404
    
@api.route('/favorite', methods=['GET'])
def handle_get_all_favorite():
    all_favorite = Favorite.query.all()
    print(all_favorite)
    result = list(map(lambda item: item.serialize(), all_favorite))
    return jsonify(result), 200

@api.route('/favorite/<int:id>', methods=['GET'])
def handle_get_one_favorite(id):
    favorite = Favorite.query.get(id)
    if favorite:
        return jsonify (favorite.serialize()), 200
    else:
        return jsonify ({"message" : "Favorite not found"}), 404
    
@api.route('/user/favorite/<int:id>', methods=['GET'])
def handle_user_favorites(id):
    user = User.query.get(id)
    if user:
        favorites = user.favorites
        return jsonify([favorite.serialize() for favorite in favorites])
    else:
        return jsonify({'message': 'User not found'}), 404
    
@api.route('/favorite/dog/<int:id>', methods=['POST'])
def create_favorite_dog(id):
    data = request.get_json() 
    user_id = data.get('id') 
    
    user = User.query.get(user_id)  
    if user:
        dog = Dog.query.get(id) 
        if dog:
            new_favorite = Favorite(dog_id=dog.id, user_id=user.id)
            db.session.add(new_favorite)
            db.session.commit()
            
            return jsonify({'message': 'Favorite dog added successfully.'}), 200
        else:
            return jsonify({'message': 'Dog not found'}), 404
    else:
        return jsonify({'message': 'User not found'}), 404
    
@api.route('/favorite/dog/<int:id>', methods=['DELETE'])
def delete_favorite_dog(id):
    data = request.get_json() 
    user_id = data.get('id')  
    
    user = User.query.get(user_id)  
    if user:
        favorite = Favorite.query.filter_by(dog_id=id, user_id=user.id).first()  
        if favorite:
            db.session.delete(favorite)  
            db.session.commit()
            
            return jsonify({'message': 'Favorite deleted successfully.'}), 200
        else:
            return jsonify({'message': 'Favorite not found'}), 404
    else:
        return jsonify({'message': 'User not found'}), 404
    

app = Flask(__name__,
            static_url_path='',
            static_folder='public')

YOUR_DOMAIN = 'http://localhost:4242'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    'price': 'price_1Nbm35EUm1DxO23PiEszFwaO',
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=YOUR_DOMAIN + '?success=true',
            cancel_url=YOUR_DOMAIN + '?canceled=true',
        )
    except Exception as e:
        return str(e)

    return redirect(checkout_session.url, code=303)

if __name__ == '__main__':
    app.run(port=4242)
# this only runs if `$ python src/app.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    api.run(host='0.0.0.0', port=PORT, debug=False)

