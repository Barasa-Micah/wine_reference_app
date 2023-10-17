# from app import create_app, db
# from flask_migrate import Migrate
# from app.models import User

# import sys

# app = create_app()

# migrate = Migrate(app, db)



# def make_shell_context():
#     return dict(app=app, db=db, user=User)





# if __name__ == '__main__':
#     with app.app_context():
#     # Check if the "--debug" or "-d" option is provided
#         if "--debug" in sys.argv or "-d" in sys.argv:
#             app.debug = True  # Enable debug mode if the option is provided

#     app.run()

from app import create_app, db
from flask_migrate import Migrate
from app.models import User

app = create_app()
migrate = Migrate(app, db)

@app.shell_context_processor
def make_shell_context():
    return {
        'db': db,
        'User': User
    }

if __name__ == '_main_':
    with app.app_context():
        db.create_all()
        app.run(debug=True)


        