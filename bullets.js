class Ninjastar{
    ninjastar;
    constructor(x,y, isRight){
        this.x = x
        this.y = y
        this.isRight = isRight
    }
    spawnStar(scene, layer){
        this.ninjastar = scene.physics.add.sprite(this.x,this.y,'Star').setScale(1/4)
        scene.physics.add.collider(this.ninjastar, layer, hitWall, null, scene)

        this.ninjastar.setGravity(0,-1400)
        for (let i = 0; i < enemies.length; i++)
        {
            scene.physics.add.overlap(this.ninjastar, enemies[i].grunt, hitEnemy, null, scene);
        }
    }
    bulletMovement(){
        if(this.isRight){
            this.ninjastar.setVelocityX(-480)
        }
        else{
            this.ninjastar.setVelocityX(480)
        }
        this.ninjastar.flipX = !this.ninjastar.flipX;
    }
}

class EnemyShot{
    enemyShot;
    constructor(x,y, isRight){
        this.x = x
        this.y = y
        this.isRight = isRight
    }
    makeSprite(scene, layer){
        this.enemyShot = scene.physics.add.sprite(this.x,this.y,'Star').setScale(1/4)
        scene.physics.add.collider(this.enemyShot, layer, hitWall, null, scene)
        this.enemyShot.setGravity(0,-1400)
        for (let i = 0; i < enemies.length; i++)
        {
            scene.physics.add.overlap(this.enemyShot, main.player, hitPlayer, null, scene);
        }
    }
    shotMovement(){
        if(this.isRight){
            this.enemyShot.setVelocityX(-480)
        }
        else{
            this.enemyShot.setVelocityX(480)
        }
        this.enemyShot.flipX = !this.enemyShot.flipX;
    }
}