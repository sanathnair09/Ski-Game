

function gameMovement(key) {
    if (gameSpeed > 0) {
        if (key.key_W.isDown) {
            santa.setTexture("slow1")
            santa.setVelocityY(-movementSpeed);
            santaTexture = "slow2"
        } else if (key.key_S.isDown) {
            santa.setTexture("normal1")
            santa.setVelocityY(movementSpeed);
            santaTexture = "normal2"
        } else {
            santa.setVelocityY(0)
        }
        if (key.key_A.isDown) {
            santa.setTexture('left1')
            santa.setVelocityX(-movementSpeed);
            santaTexture = "left2"
        } else if (key.key_D.isDown) {
            santa.setTexture("right1")
            santa.setVelocityX(movementSpeed);
            santaTexture = "right2"
        } else {
            santa.setVelocityX(0)
        }  
        if(!key.key_W.isDown && !key.key_A.isDown &&!key.key_S.isDown &&!key.key_D.isDown){
          santa.setTexture("normal1")
          santa.setVelocity(0)
          santaTexture = "normal2"
        }
        if (key.key_ESC.isDown) {
            key.scene.stop()
            key.scene.start("EndScene")
        }
    }
}

function updateRocks(object) {
    for (var x = 0; x < rockCount; x++) {
        if (moveRocks(rocks[x], gameSpeed, x)) {
            object.scene.start('EndScene')
        }
    }
}

function revivePlayer(object) {
    if (reviving) {
        var santaX = santa.x
        var santaY = santa.y
        santa.destroy()

        //create santa element
        santa = object.physics.add.sprite(santaX, santaY, "normal1");
        santa.setScale(0.15)
        santa.setBounce(0.2);
        santa.setCollideWorldBounds(true);
        allowShooting = true
        reviving = false;

        //collisions
        setTimeout(function () {
            object.physics.add.collider(santa, rockGroup, rockCollision);
            object.physics.add.collider(santa, bullets, bulletCollision);
        }, 2000)//
    }
}

function sendCoords() {
  //console.log(santaTexture)
    sendPlace([santa.x, santa.y+totalDistanceFromTop+5*15, santa.body.velocity.x, santa.body.velocity.y, santaTexture])
    dataSent += 1
}

function updateScoreText() {
    if(place == 1){
        leader.setText("You are first")
    }else{
        leader.setText("You are second")
    }
}

function recieveCoords(){
  if(otherPlayerPosition.length > 0){
    santa2.x = otherPlayerPosition[0][0]
    //santa2.setVelocityX(otherPlayerPosition[0][2]/5)
    //santa2.setVelocityY(otherPlayerPosition[0][3]/5)
    var santa2Position = otherPlayerPosition[0][1] - totalDistanceFromTop
    if (santa2Position < -400 || santa2Position > config.height+400){
      santa2.y = -500
      p2AllowShooting = false
    } else {
      santa2.y = santa2Position
      p2AllowShooting = true
    }
    if(santa2Position > santa.y){
      place = 2
    } else {
      place = 1
    }      
    santa2.setTexture(otherPlayerPosition[0][4])
    console.log(otherPlayerPosition[0][4])
    //console.log(otherPlayerPosition[0][0]+" "+otherPlayerPosition[0][1])
    
    if(otherPlayerPosition[0][2]!=0){
    console.log("recieved coordinates")
    }
    otherPlayerPosition.shift()
  }
}