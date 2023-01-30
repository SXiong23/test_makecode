namespace SpriteKind {
    export const Fireball = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const FireSource = SpriteKind.create()
}
sprites.onCreated(SpriteKind.FireSource, function (sprite) {
    sprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    while (info.life() > 0) {
        projectile = sprites.createProjectileFromSprite(assets.image`fireball`, mySprite, 50, 0)
        info.changeLifeBy(-1)
        info.changeScoreBy(1)
        pause(1000)
    }
    info.stopCountdown()
})
sprites.onOverlap(SpriteKind.Fireball, SpriteKind.FireSource, function (sprite, otherSprite) {
    info.changeLifeBy(5)
    otherSprite.destroy()
})
let fireSource: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`fireball`, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
mySprite.setStayInScreen(true)
info.setLife(15)
info.startCountdown(5)
game.onUpdateInterval(500, function () {
    fireSource = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 . . 5 . . . . . 
        . . 2 . . . . 2 2 5 . . . . . . 
        . . 2 . . . . 2 2 2 . . . . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . 2 f 2 2 2 2 f 2 . . . . . . 
        . . 2 2 f 2 2 f 2 2 . . . . . . 
        . . 2 2 2 f f 2 2 2 . . . . . . 
        . . 2 2 2 f f 2 2 2 . . . . . . 
        . . 2 2 2 f f 2 2 2 . . . . . . 
        . . 2 2 2 f f 2 2 2 . . . . . . 
        . . 2 2 f 2 2 f 2 2 . . . . . . 
        . . 2 f 2 2 2 2 f 2 . . . . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FireSource)
})
