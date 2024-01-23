//menu class inherits from phaser scenes 
class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene")
    }
    //load objects beforehand 
    preload(){
        this.load.image('rocket', './assets/rocket.png')
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png')
    }
    //makes an object
    create(){
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start('playScene')
    }
}