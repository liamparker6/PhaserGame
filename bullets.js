class Ninjastar{
    ninjastar;
    constructor(x,y, isRight){
        this.x = x
        this.y = y
        this.isRight = isRight
    }
    spawnStar(scene){
        this.ninjastar = scene.physics.add.sprite(this.x,this.y,'Star').setScale(1/4)
    }
    bulletMovement(){
        if(this.isRight){
            this.ninjastar.setVelocityX(-480)
            this.ninjastar.setVelocityY(-25)
        }
        else{
            this.ninjastar.setVelocityX(480)
            this.ninjastar.setVelocityY(-25)
        }
    }
}