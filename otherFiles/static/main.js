//global variables

//gameScene variables
var isMoving = false;
var santa
var rocks = []
var trees = []
var userGameSpeed = 1
var gameSpeed = userGameSpeed
var santa;
var background;

var movementSpeed = 500
var reviving = false;
var collider 
var bullets
var lastThrow = 10000
var fireRate = 200;
var fireSpeed = 1000
var allowShooting = false;
var p2AllowShooting = false;
var otherPlayers
var santa2
var startGame
var p1Score
var p2Score
var points
var pastOtherPlayers
var recievedData = 0
var otherPlayerPosition = []
var santaTexture

var rockCount = 4
var startRockPos;
var generatedRocks;
var rocks = []
var p1Points = 0;
var p2Points = 0;
var goal;
var rockCounter = 0;
var shootThat
var totalDistanceFromTop = 0
var dataSent = 0

var place = 1
var leader

var p1HitCounter = 0;
var p2HitCounter = 0;

var dataRecieved = 0 

//game variables 
var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0}
        }
    },
    scene: [StartScene, GameScene, EndScene]
};
var game = new Phaser.Game(config)

