from app import create_app, db
from flask_migrate import Migrate, MigrateCommand
from app.models import User

import sys

app = create_app()

migrate = Migrate(app, db)


@app.shell_context_processor
def make_shell_context():
    return dict(app=app, db=db, user=User)

if __name__ == '__main__':
    # Check if the "--debug" or "-d" option is provided
    if "--debug" in sys.argv or "-d" in sys.argv:
        app.debug = True  # Enable debug mode if the option is provided

    with app.app_context():
        db.create_all()
    app.run()
