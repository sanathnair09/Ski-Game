function update(time, delta) {
    //movement actions
    gameMovement(this)
    
    //update rock positions
    updateRocks(this)

    //move background
    background.tilePositionY += gameSpeed;
    totalDistanceFromTop += gameSpeed;

    //check if santa died
    checkDeath(this)
    
    //revive if dead
    revivePlayer(this)

    //send coord to server
    //console.log('sending coors')
    sendCoords()
    recieveCoords()
    
    //santa2.setVelocity(-100)
    //santa2.setAcceleration(0)
    if(otherPlayers && false){ //true means that they are in frame
        santa2.x = otherPlayers[0]
        santa2.y = otherPlayers[1]
    }


    updateScoreText()
}