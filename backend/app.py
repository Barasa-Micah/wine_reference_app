# from flask import Flask, request, jsonify, render_template
# from flask_cors import CORS
# from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
# from app import app, db
# from app.models import User

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes
# jwt = JWTManager(app)

# # ... Define your routes for user registration and login as shown in your original code

# @app.route('/purchase', methods=['POST'])
# @jwt_required()  # Requires authentication
# def purchase():
#     data = request.get_json()
    
#     # Get the current user's identity from the JWT token
#     current_user = get_jwt_identity()
    
#     # You may want to validate the wine data sent in the request
#     wine_name = data.get('wine_name')
#     wine_price = data.get('wine_price')
    
#     # Assuming you have a User model with a 'balance' field in your database
#     user = User.query.filter_by(username=current_user).first()
    
#     if user:
#         # Check if the user has enough balance to make the purchase
#         if user.balance >= wine_price:
#             # Deduct the wine price from the user's balance
#             user.balance -= wine_price
            
#             # You should also add the purchased wine to the user's history or cart
#             # Example: user.purchased_wines.append({'name': wine_name, 'price': wine_price})
            
#             # Commit the changes to the database
#             db.session.commit()
            
#             return jsonify({"message": "Purchase successful!"}), 200
#         else:
#             return jsonify({"error": "Insufficient balance"}), 400
#     else:
#         return jsonify({"error": "User not found"}), 404

# if __name__ == '__main__':
#     app.run()
