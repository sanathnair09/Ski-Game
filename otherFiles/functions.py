import math
import random
from otherFiles.setup import *

# variables holding rock positions for the current game
startRock = []
generateRock = []

# generate the inital rock sequence for games if it has not been generated already 
def generateStart():
  if startRock == []:
    for x in range(0, 9):
      startingRock = [0,0]
      startingRock[0] = math.floor(random.randint(50,900))
      startingRock[1] = 100 + x*100
      startRock.append(startingRock)
 
  return startRock

# generate the random x positions for rest of the map if it has not been generated already     
def generateRandom():
  if generateRock == []:
    for y in range(10):
      for x in range(0,9):
        generateRock.append(math.floor(random.randint(50,900)))
  
  return generateRock

# function to generate all rocks on map
def generateLevel():
  return [generateStart(), generateRandom()]



