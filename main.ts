let star = game.createSprite(1, 1)
for (let index = 0; index < 20; index++) {
    for (let index = 0; index < 2; index++) {
        star.move(1)
        basic.pause(200)
    }
    star.turn(Direction.Right, 162)
}
basic.forever(function () {
	
})
