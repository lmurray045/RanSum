class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }
    preload() {
        this.load.spritesheet('letters', './assets/letters.png', {
            frameWidth: 45,
            frameHeight: 45,
            startFrame: 0,
            endFrame: 26
        })
    }

    create() {
        this.input.on('drag', (pointer, gameObject, dragX, dragY) =>
        {

            gameObject.x = dragX;
            gameObject.y = dragY;

        })
        this.input.on('drop', (pointer, gameObject, dropZone) =>
        {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;

            gameObject.input.enabled = false;

        });


        //drop zones
        const zone = this.add.zone(500, 300, 300, 300).setRectangleDropZone(100, 100) 

        //visual representation
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height)

        //letters
        this.a = new Letter(this, 100, 100, 'letters', 0, "A")

    }
    
    update() {
        
    }
}