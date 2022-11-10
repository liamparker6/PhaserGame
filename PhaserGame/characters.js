class Player{
    player;     
    constructor(health,collision,isAlive,positionX,positionY,damage){
        this.health = health
        this.collision = collision
        this.isAlive = isAlive
        this.positionX = positionX
        this.positionY = positionY
        this.damage = damage
    }
    makeSprite(scene)
    {
        this.player = scene.physics.add.sprite(main.positionX, main.positionY,'Character').setScale(2);
    }
    characterMovement(){
        //Instructions for character movements 
        if(keyW.isDown && this.player.body.onFloor()){
            this.player.setVelocityY(-800)
        }
        else if(keyD.isDown){
            this.player.setVelocityX(200)
            this.player.flipX = false;
        }
        else if(keyA.isDown){
            this.player.flipX = true;
            this.player.setVelocityX(-200)
        }
        else{
            this.player.setVelocityX(0)
        }
    }
}





class Grunt{
    grunt;
    constructor(health, damage, positionX, positionY,isAlive){
        this.health = health
        this.damage = damage
        this.positionX = positionX
        this.positionY = positionY
        this.isAlive = isAlive
        this.tickUpdate = 0
        this.isMovingLeft = false
    }
    makeSprite(scene)
    {
        this.grunt = scene.physics.add.sprite(enemy.positionX, enemy.positionY,'Grunt').setScale(2);
    }
    movement(){
        this.tickUpdate++

        if(this.isAlive == true && this.tickUpdate > 60 && this.isMovingLeft == true){
            this.moveleft()
            this.isMovingLeft = false
            this.tickUpdate = 0

        }

        
        if(this.isAlive == true && this.tickUpdate > 60 && this.isMovingLeft == false){
            //setTimeout(this.moveleft,2000)
            //setTimeout(this.moveright,2000)
            //setTimeout(this.movement,2000)
            this.moveright()
            this.isMovingLeft = true
            this.tickUpdate = 0

        }
    }
    moveleft(){
        this.grunt.setVelocityX(-160);
        this.grunt.flipX = true;
    }
    moveright(){
        this.grunt.setVelocityX(160);
        this.grunt.flipX = false;
    }
}






