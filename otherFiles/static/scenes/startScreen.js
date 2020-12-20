class StartScene extends Phaser.Scene {
    
    constructor(){
        super({key: "StartScene"});
        this.userGameSpeed = 5;
    }

    preload(){
        this.load.image("BG", "static/assets/gamescene/BG.png");

    }
    create(){
        // general style
        var style = {
            alignSelf: 'center',
            fontSize: 50,
            color: 'white',
            //backgroundColor: 'lightgray',
            boundsAlignH: "center",
             boundsAlignV: "middle",
        }

        //style for easy button
        var styleE = {
            alignSelf: 'center',
            fontSize: 50,
            color: '#32CD32 ',
            //backgroundColor: 'lightgray',
            boundsAlignH: "center",
             boundsAlignV: "middle",
        }

        // style for med button
        var styleM = {
            alignSelf: 'center',
            fontSize: 50,
            color: 'orange',
            //backgroundColor: 'lightgray',
            boundsAlignH: "center",
             boundsAlignV: "middle",
        }
        
        // style for hard button
        var styleH = {
            alignSelf: 'center',
            fontSize: 50,
            color: 'red',
            //backgroundColor: 'lightgray',
            boundsAlignH: "center",
             boundsAlignV: "middle",
        }
        // creating background
        var background = this.add.image(0,0, "BG")
        let scaleX = config.width / background.width
        let scaleY = config.height / background.height
        let scale = Math.max(scaleX, scaleY)
        background.setOrigin(0,0)
        background.setScale(1)

        // centering welcome text
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const text = this.add.text(screenCenterX, screenCenterY, "Welcome to Ski game!", style).setOrigin(0.5);

        // placing the easy, med, hard button
        var xCoord = 100;
        var easy = this.add.text(screenCenterX/3+xCoord,screenCenterY+50, "Easy", styleE)
        easy.setInteractive();
        var med = this.add.text(easy.x+easy.width+30,screenCenterY+50, "Medium", styleM);
        med.setInteractive();
        var hard = this.add.text(med.x+med.width+30,screenCenterY+50, "Hard", styleH);
        hard.setInteractive();

        // when mode clicked
        easy.on('pointerdown', () => {
            userGameSpeed = 0.0000001;
            goal = 27
            rockCount = 3;
            gameSpeed = userGameSpeed
            this.scene.start("GameScene");
        });
        med.on('pointerdown', () => {
            userGameSpeed = 7
            goal = 50
            rockCount = 5;
            gameSpeed = userGameSpeed
            this.scene.start("GameScene");
        });
        hard.on('pointerdown', () => {
            userGameSpeed = 9
            goal = 63
            rockCount = 7;

            gameSpeed = userGameSpeed
            this.scene.start("GameScene");
        });
    }
    
}

