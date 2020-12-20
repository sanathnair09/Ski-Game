class EndScene extends Phaser.Scene {
    
    constructor() {
        super({key:"EndScene"});
        
    }
    preload(){
        this.load.image("BG", "static/assets/gamescene/BG.png");
    }
    create(){
        // centering background
        var background = this.add.image(0,0, "BG")
        let scaleX = config.width / background.width
        let scaleY = config.height / background.height
        let scale = Math.max(scaleX, scaleY)
        background.setOrigin(0,0)
        background.setScale(1)

        // centering game over text
        const x = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const y = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        const text = this.add.text( x,y, "Game Over!", { fontSize: 50, color: 'white' } ).setOrigin(0.5);
        var p1Score = "Final Score: " + (p1Points - p1HitCounter)
        var p2Points = "Final Score: " + (p2Points - p2HitCounter)
        const results = this.add.text( x,y+50, p1Score , { fontSize: 50, color: 'white' } ).setOrigin(0.5);
        // retry text
        var retry = this.add.text(x,y+100, "Play Again?", { fontSize: 50, color: 'white' }).setOrigin(0.5);
        retry.setInteractive();

        // retry button clicked
        retry.on("pointerdown", () => {
            p1Points = 0;
            p2Points = 0;
            rocks.length = 0;
            this.scene.stop("StartScene");
            this.scene.stop("GameScene");
            this.scene.stop("EndScene");
            this.scene.start('StartScene');
        })
        gameFinished()

    }
    update(){

    }
    end(){
        //this.scnee swtih it 
    }
}