function createBackground(object) {
    background = object.add.tileSprite(0, 0, config.width, config.height, 'background');
    let scaleX = config.width / background.width
    let scaleY = config.height / background.height
    let scale = Math.max(scaleX, scaleY)
    background.setOrigin(0, 0)
    background.setScale(1)
}

function createSanta(object) {
    santa = object.physics.add.sprite(config.width / 2, config.height / 2, "normal1");
    santa.setScale(0.15)
    santa.setBounce(0.2);
    santa.setCollideWorldBounds(true);
}

function enableKeyboard(object) {
    object.key_A = object.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    object.key_D = object.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    object.key_W = object.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    object.key_S = object.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    object.key_ESC = object.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
}

function generateRocks(object) {
    object.physics.world.setBoundsCollision();
    rockGroup = object.physics.add.group();
    for (var x = 0; x < rockCount; x++) {
        var rock = object.physics.add.sprite(startRockPos[x][0], startRockPos[x][1] + config.height, 'rock');
        rock.setScale(0.15)
        rockGroup.add(rock)
        rocks.push(rock)
    }
}

function enableShooting(object) {
    bullets = object.physics.add.group();
    object.input.on('pointerdown', function (cursor) {
        if (Date.now() - lastThrow > fireRate && allowShooting) {
            var bullet = object.physics.add.sprite(santa.x, santa.y, 'bullet')
            bullet.setScale('0.05')
            bullet.setBounce(0.2)
            bullets.add(bullet)
            object.physics.moveTo(bullet, cursor.x, cursor.y, fireSpeed);
            lastThrow = Date.now()
            setTimeout(function () {
                bullet.destroy()
            }, 5000)
            var distanceFromTop = santa.y + totalDistanceFromTop
            sendShoot(cursor.x, cursor.y, santa.x, distanceFromTop)
        } else {
        }
    }, object)
    allowShooting = true;
}
