# app.py
from flask import Flask 
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ref_app_user:MTHL05kkxBXYY5YrTE7sapsEOP0kIwPI@dpg-ckiqatb6fquc739dcos0-a.ohio-postgres.render.com/ref_app'



db = SQLAlchemy(app)


def create_app(): 
    CORS(app)

    CORS(app, origins="*")

    # db.init_app(app)

    
    # added import routes
    from app import routes

    return app









