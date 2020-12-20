var socket = io();
var socketid = ''
socket.on('connect', function() {
    socket.emit('begin_chat', "joined");
    socketid = socket.id
});

socket.on('rockPositions', function(data) {
    startRockPos = data[0]
    generatedRocks = data[1]
});



function sendPlace(data){
  stuff = [data, socketid]
  socket.emit('sendPlace', stuff)
}

socket.on('recievePlace', function(data) {
    dataRecieved += 1
    //console.log(data[0]+" "+data[1])
    otherPlayerPosition.push(data)
    if(data[2]!=0){
console.log("array coordiantes")
    }
    
    /*
    try{
      santa2.x = data[0]
      //santa2.setVelocityX(data[2]/5)
      //santa2.setVelocityY(data[3]/5)
      var santa2Position = data[1] - totalDistanceFromTop
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
    } catch {
      //window.alert(data[1])
      //console.log(data[1] - totalDistanceFromTop)
    }*/
    //recieveCoords()
});

function sendShoot(movex, movey, santax, santay){
  //debug shooting rock

  var stuff = [[movex, movey, santax, santay], socketid]
  socket.emit('sendShoot', stuff)
}

socket.on('recieveShoot', function(data) {
  if(p2AllowShooting){
    createBullet(data[2], data[3], data[0], data[1])
  }
});
function santaDied(){
  var stuff = [true, socketid]
  socket.emit('santaDied', stuff)
}

socket.on('santa2Died', function(data) {
  bulletCollisionSanta2()
});

function gameFinished(){
  var stuff = [true, socketid]
  socket.emit('gameOver', stuff)
}