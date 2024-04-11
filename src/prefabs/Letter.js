class Letter extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, letter) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)

        //attributes
        this.letter = letter


        this.setInteractive({
            draggable: true
        })


    }
}