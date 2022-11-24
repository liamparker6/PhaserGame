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
    characterMovement(scene, layer){
        
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
        if(Phaser.Input.Keyboard.JustDown(keyE)){
            ninja.push(new Ninjastar(this.player.x, this.player.y, main.player.flipX));
            ninja[ninja.length-1].spawnStar(scene, layer)
        }
    }
}





class Grunt{
    grunt;
    constructor(health, damage, positionX, positionY, isAlive){
        this.health = health
        this.damage = damage
        this.positionX = positionX
        this.positionY = positionY
        this.isAlive = isAlive
        this.tickUpdate = 0
        this.shootTimer = 0
        this.isMovingLeft = false
        this.speed = Math.floor(Math.random() * 60) +20;
    }
    makeSprite(scene, layer)
    {
        this.grunt = scene.physics.add.sprite(this.positionX, this.positionY,'Grunt').setScale(2);
        scene.physics.add.collider(this.grunt, layer);
        this.grunt.x = this.positionX;
        this.grunt.setAlpha(0.4)
        for (let i = 0; i < ninja.length; i++)
        {
            scene.physics.add.overlap(this.grunt, ninja[i].ninjastar, hitEnemy, null, scene);
        }
    }   
    movement(scene, layer){
        this.tickUpdate++
        if(this.isAlive == true && this.tickUpdate > this.speed && this.isMovingLeft == true){
            this.moveleft(scene, layer)
            this.isMovingLeft = false
            this.tickUpdate = 0

        }

        
        if(this.isAlive == true && this.tickUpdate > this.speed && this.isMovingLeft == false){
            this.moveright(scene, layer)
            this.isMovingLeft = true
            this.tickUpdate = 0

        }
    }
    moveleft(scene, layer){
        this.grunt.setVelocityX(-160);
        this.grunt.flipX = true;
        this.isShooting(scene, layer)
    }
    moveright(scene, layer){
        this.grunt.setVelocityX(160);
        this.grunt.flipX = false;
        this.isShooting(scene, layer)
    }

    isShooting(scene, layer){
        this.shootTimer++
        if(this.isAlive == true && this.shootTimer > 1){
            gruntBullets.push(new EnemyShot(enemies[i].grunt.x, enemies[i].grunt.y, enemies[i].grunt.flipX))
            gruntBullets[gruntBullets.length-1].makeSprite(scene, layer)
            this.shootTimer = 0 
        }
    }

    destroyMeNow(){
        this.grunt.destroy();
    }

    stopAlive(){
        //this.isAlive = false;
        //console.log(grunt.isAlive + "XXXX" + this.isAlive)
    }
}






