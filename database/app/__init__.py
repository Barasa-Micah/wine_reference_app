# app.py
from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://g7_user:ycX2GKF7462Zv1QI2eravenwLVs65q6j@dpg-ckj9d2omccbs73fuu8k0-a.ohio-postgres.render.com/g7'


db = SQLAlchemy(app)


def create_app(): 
    CORS(app)

    CORS(app, origins="*")

    # db.init_app(app)

    
    # added import routes
    from app import routes

    return app
