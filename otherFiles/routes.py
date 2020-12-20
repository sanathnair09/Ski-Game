from flask import render_template, url_for, flash, redirect, request, jsonify
from flask_socketio import SocketIO, emit

from otherFiles.setup import *
from otherFiles.functions import *

# array to store all current players playing. Used in game over route to determine when everyone has left
allPlayers = []

# loads the html page for our game
@app.route("/")
@app.route("/main")
def about():
    return render_template('main.html', title='Game Page')

# tells the other players about the position of other players    
@socketio.on('sendPlace')
def sendPlace(data):
  socketio.emit('recievePlace', data[0], skip_sid=data[1], broadcast=True)

# tells all other players about the shooting position of another player
@socketio.on('sendShoot')
def sendShoot(data):
  socketio.emit('recieveShoot', data[0], skip_sid=data[1], broadcast=True)

# tells all other players about the death of one player
@socketio.on('santaDied')
def santaDied(data):
  socketio.emit('santa2Died', data[0], skip_sid=data[1], broadcast=True)

# first inital contact with the server on page load. Generates the level beforehand so that all players have the same map
@socketio.on('begin_chat')
def begin_chat(data):
  print(request.sid)
  allPlayers.append(request.sid)
  socketio.emit('rockPositions', generateLevel(), broadcast=True)

# clear the game info once everyone has left or the game is over for all players. 
@socketio.on('gameOver')
@socketio.on('disconnect')
def test_disconnect():
  allPlayers.remove(request.sid)
  if len(allPlayers) == 0:
    startRock = []
    generateRock = []
