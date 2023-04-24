namespace SpriteKind {
    export const conan = SpriteKind.create()
    export const Valeria = SpriteKind.create()
    export const subotai = SpriteKind.create()
    export const conansword = SpriteKind.create()
    export const protection = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.conan, SpriteKind.conansword, function (sprite, otherSprite) {
    if (true) {
        sprites.destroy(Conan1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Conan1, 0, -47)
})
sprites.onDestroyed(SpriteKind.conan, function (sprite) {
    mySprite = sprites.create(assets.image`conan`, SpriteKind.Player)
})
let mySprite: Sprite = null
let Conan1: Sprite = null
scene.setBackgroundColor(0)
scene.cameraFollowSprite(Conan1)
tiles.setCurrentTilemap(tilemap`level`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
Conan1 = sprites.create(assets.image`conan0`, SpriteKind.conan)
let Valeria1 = sprites.create(img`
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 3 3 3 5 . . f . . . 
    . . . . . 5 f 3 f 5 . f . . . . 
    . . . . . 5 3 3 3 5 f . . . . . 
    . . 3 3 3 2 f f f 2 3 3 3 . . . 
    . . 3 3 3 f 2 2 2 f 3 3 3 . . . 
    . . 3 3 . f f f f f . 3 3 . . . 
    . e e e . f f f f f . e e e . . 
    . . e e . f f f f f . e e . . . 
    . . . . 7 3 f f f 3 . . . . . . 
    . . . 7 . 3 f f f 3 . . . . . . 
    . . 7 . . 3 3 . 3 3 . . . . . . 
    . 7 . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Valeria)
let subotai1 = sprites.create(assets.image`subotai`, SpriteKind.subotai)
Valeria1.follow(Conan1)
subotai1.follow(Conan1)
controller.moveSprite(Conan1, 100, 100)
