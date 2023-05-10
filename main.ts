namespace SpriteKind {
    export const conan = SpriteKind.create()
    export const Valeria = SpriteKind.create()
    export const subotai = SpriteKind.create()
    export const conansword = SpriteKind.create()
    export const protection = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Conan1, 0, -47)
})
sprites.onOverlap(SpriteKind.conan, SpriteKind.Food, function (sprite, otherSprite) {
	
})
sprites.onDestroyed(SpriteKind.conan, function (sprite) {
    if (true) {
        Conan2 = sprites.create(assets.image`conan`, SpriteKind.Player)
        tiles.placeOnRandomTile(Conan2, assets.tile`myTile3`)
    }
    controller.moveSprite(Conan2, 100, 23)
    scene.cameraFollowSprite(Conan2)
    Conan2.setStayInScreen(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.conan, assets.tile`myTile2`, function (sprite, location) {
    sprites.destroy(Conan1)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.conan, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(-1)
})
let Conan2: Sprite = null
let Conan1: Sprite = null
scene.setBackgroundColor(1)
scene.cameraFollowSprite(Conan1)
tiles.setCurrentTilemap(tilemap`level`)
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
Valeria1.follow(Conan1, 0.5)
subotai1.follow(Conan1, 0.5)
scene.cameraFollowSprite(Conan1)
tiles.placeOnRandomTile(subotai1, assets.tile`myTile1`)
tiles.placeOnRandomTile(Valeria1, assets.tile`myTile1`)
tiles.placeOnRandomTile(Conan1, assets.tile`myTile1`)
controller.moveSprite(Conan1, 50, 23)
let sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . . 9 . . . . . . . 
    . . . . . . . 6 6 6 . . . . . . 
    . . . . . . . . 6 . . . . . . . 
    . . . . . . . . 6 . . . . . . . 
    `, SpriteKind.Food)
Conan1.setStayInScreen(true)
let thulsa_doom = sprites.create(img`
    . . . . . 6 6 6 6 6 . . . . . . 
    . . . . . 6 e e e 6 . . . . . . 
    . 9 . . . 6 5 e 5 6 . . . . . . 
    . 9 . . . 6 e e e 6 . . . . . . 
    . 9 . . . 6 6 6 6 6 . . . . . . 
    . 9 . . . . 6 6 6 . . . . . . . 
    . 9 . e e 6 6 2 6 6 e e . . . . 
    . 9 . e e 6 6 6 6 6 e e . . . . 
    . 9 . e e 6 6 6 6 6 e e . . . . 
    . 9 e e e 6 6 6 6 6 e e e . . . 
    . 6 . e e 6 6 6 6 6 e e . . . . 
    . 6 . . . 6 6 6 6 6 . . . . . . 
    . 6 . . . e e e e e . . . . . . 
    . 6 . . . e e . e e . . . . . . 
    . 6 . . . e e . e e . . . . . . 
    . 6 . . e e e . e e e . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(thulsa_doom, assets.tile`myTile4`)
