from app import app, db
from flask import request, jsonify, make_response
from flask_restful import Api, Resource, reqparse
from flask_jwt_extended import JWTManager, create_access_token , get_jwt_identity
from flask_jwt_extended.exceptions import NoAuthorizationError
from .models import User

api = Api(app)
app.config['JWT_SECRET_KEY'] = 'eafhahhlgurhaGJIJ'
jwt = JWTManager(app)


class UserRegistrationResource(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        parser.add_argument('phonenumber', type=str, required=False)
        args = parser.parse_args()

        # Check if the username or email already exists in the database
        if User.query.filter_by(username=args['username']).first() is not None:
            return {'message': 'Username already exists'}, 400
        if User.query.filter_by(email=args['email']).first() is not None:
            return {'message': 'Email already exists'}, 400

        # Create a new User instance and add it to the database
        new_user = User(
            username=args['username'],
            email=args['email'],
            password=args['password'],
            phonenumber=args['phonenumber']
        )
        db.session.add(new_user)
        db.session.commit()

        access_token = create_access_token(identity=new_user.id)

        return {
            'message': 'User registered successfully'
        }, 201


class UserLoginResource(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        args = parser.parse_args()

        user = User.query.filter_by(username=args['username']).first()

        if user and user.password == args['password']:
            access_token = create_access_token(identity=user.id)
            return {'access_token': access_token}, 200
        else:
            return {'message': 'Invalid credentials'}, 401


api.add_resource(UserLoginResource, '/login')
api.add_resource(UserRegistrationResource, '/register')

if __name__ == '__main__':
    app.run(debug=True)
