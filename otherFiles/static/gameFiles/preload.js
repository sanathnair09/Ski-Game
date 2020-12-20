function preload() {
    //santa animation spritesheets
    // this.load.spritesheet("santa", "static/assets/gamescene/walkingLeft.png",{
    //   frameWidth: 934,
    //   frameHeight: 631
    // });
    // this.load.spritesheet("santa_right", "static/assets/gamescene/walkingRight.png",{
    //   frameWidth: 934,
    //   frameHeight: 631
    // });

    // this.load.spritesheet("santa2_left", "static/assets/gamescene/walkingLeft2.png",{
    //   frameWidth: 934,
    //   frameHeight: 631
    // });
    // this.load.spritesheet("santa2_right", "static/assets/gamescene/walkingRight2.png",{
    //   frameWidth: 934,
    //   frameHeight: 631
    // });

    // this.load.spritesheet("santa_dead", "static/assets/gamescene/dead.png",{
    //   frameWidth: 934,
    //   frameHeight: 631
    // });

    // this.load.spritesheet("santa2_dead", "static/assets/gamescene/dead2.png",{
    //   frameWidth: 934,
    //   frameHeight: 631
    // });

    //images
    this.load.image("background", "static/assets/gamescene/snow.jpg");
    this.load.image("rock", "static/assets/gamescene/rock.png");
    this.load.image("bullet", "static/assets/gamescene/balls/01.png");
    this.load.image('tree', "static/assets/gamescene/Tree_1.png");

    //player 1
    this.load.image("normal1", "static/assets/gamescene/normal.png");
    this.load.image("slow1", "static/assets/gamescene/slow.png");
    this.load.image("right1", "static/assets/gamescene/right.png");
    this.load.image("left1", "static/assets/gamescene/left.png");
    // this.load.spritesheet("dead1", "static/assets/gamescene/dead.png", {
    //     frameWidth: 512, 
    //     frameHeight: 512,
    // })
    this.load.image("p1Frame1", "static/assets/gamescene/p1Frames/frame1.png")
    this.load.image("p1Frame2", "static/assets/gamescene/p1Frames/frame2.png")
    this.load.image("p1Frame3", "static/assets/gamescene/p1Frames/frame3.png")
    this.load.image("p1Frame4", "static/assets/gamescene/p1Frames/frame4.png")
    this.load.image("p1Frame5", "static/assets/gamescene/p1Frames/frame5.png")
    this.load.image("p1Frame6", "static/assets/gamescene/p1Frames/frame6.png")
    this.load.image("p1Frame7", "static/assets/gamescene/p1Frames/frame7.png")
    this.load.image("p1Frame8", "static/assets/gamescene/p1Frames/frame8.png")
    this.load.image("p1Frame9", "static/assets/gamescene/p1Frames/frame9.png")
    this.load.image("p1Frame10", "static/assets/gamescene/p1Frames/frame10.png")
    this.load.image("p1Frame11", "static/assets/gamescene/p1Frames/frame11.png")
    this.load.image("p1Frame12", "static/assets/gamescene/p1Frames/frame12.png")


    //player 2
    this.load.image("normal2", "static/assets/gamescene/normal2.png");
    this.load.image("slow2", "static/assets/gamescene/slow2.png");
    this.load.image("right2", "static/assets/gamescene/right2.png");
    this.load.image("left2", "static/assets/gamescene/left2.png");
    this.load.spritesheet("dead2", "static/assets/gamescene/dead2.png", {
        frameWidth: 512, 
        frameHeight: 512,
    })
}
