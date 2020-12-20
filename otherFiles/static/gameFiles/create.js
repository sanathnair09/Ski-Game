function create() {


    //create background element
    createBackground(this)

    // debug fps
    //console.log(game.loop.actualFps)

    //score
    leader = this.add.text(0, 0, "Game Started", { fontSize: 40, color: 'black' })
    //create santa element
    createSanta(this)

    //multiplayer other santas
    santa2 = this.physics.add.sprite(-50, -50, 'normal2')
    santa2.setScale(0.15)
    santa2.setBounce(0.2);
    shootThat = this

    //create santa animations
    //createSantaAnimations(this, "santa_right", "santa", "santa")
    this.anims.create({
        key: "dead1",
        frames: [
            {key: "p1Frame1"},
            {key: "p1Frame2"},
            {key: "p1Frame3"},
            {key: "p1Frame4"},
            {key: "p1Frame5"},
            {key: "p1Frame6"},
            {key: "p1Frame7"},
            {key: "p1Frame8"},
            {key: "p1Frame9"},
            {key: "p1Frame10"},
            {key: "p1Frame11"},
            {key: "p1Frame12"},
        ],
        frameRate: 20,
        repeat: -1
    });

    //createSantaAnimations(this, "santa2_right", "santa2_left", "santa2")
    this.anims.create({
        key: "dead2",
        frames: this.anims.generateFrameNumbers("dead2"),
        frameRate: 20,
        repeat: -1
    });
    //add keyboard control
    enableKeyboard(this)

    //generate rocks
    generateRocks(this)

    //trees
    // treeGroup = this.physics.add.group();

    // for(var z = 0; z < 10; z++){
    //      var tree = this.physics.add.sprite(100,Math.random()*500, "tree");
    //      tree.setScale(0.3);
    //      treeGroup.add(tree);
    //      trees.push(tree);
    // }


    //santa shooting
    enableShooting(this)



    // collider
    this.physics.add.collider(santa, rockGroup, rockCollision);
    this.physics.add.collider(santa, bullets, bulletCollision);
    //this.physics.add.collider(santa2, bullets, bulletCollision);



    //DEBUG CHECKING FRAME RATE
    /*
    setTimeout(function () {
         console.log(dataRecieved / 10)
         
     }, 10000)

    setTimeout(function () {
        console.log(dataSent / 10)
    }, 10000)

    */
}