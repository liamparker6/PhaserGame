class Item{
    collectible;
    constructor(posX,posY){
        this.posX = posX
        this.posY = posY
    }
    makeSprite(scene){
        this.collectible = scene.physics.add.sprite(this.posX,this.posY,'Present')
        scene.physics.add.collider(this.collectible, layer);
        scene.physics.add.overlap(this.collectible,main.player, hitCollectible, null, scene);
    }
}