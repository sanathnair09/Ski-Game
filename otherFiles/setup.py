from flask import Flask
from flask_socketio import SocketIO


#setup 
template_dir = "../templates"
static_dir = "../static"
app = Flask(__name__,template_folder=template_dir)
app.config['SECRET_KEY'] = 'asdfasldfjalskdjfasdf'
socketio = SocketIO(app, cors_allowed_origins='*')
