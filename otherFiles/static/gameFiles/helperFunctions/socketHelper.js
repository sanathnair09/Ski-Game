
function createBullet(x, y, moveX, moveY) {
  var distanceFromTopA = y-totalDistanceFromTop
  var bullet = shootThat.physics.add.sprite(x, distanceFromTopA, 'bullet');
  bullet.setScale('0.05')
  bullet.setBounce(0.2)
  bullets.add(bullet)
  shootThat.physics.moveTo(bullet, moveX, moveY, fireSpeed);
  setTimeout(function () {
      bullet.destroy()
  }, 5000)
}