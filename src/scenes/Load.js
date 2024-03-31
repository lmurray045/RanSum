class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }
    preload() {
        // add title text
        this.add.bitmapText(globalWidth / 2, (globalHeight / 2) - 32, 'dogica_font', 'RanSum', 20).setOrigin(0.5)
        this.add.bitmapText(globalWidth / 2, globalHeight / 2 + 32, 'dogica_font', 'Click to Start', 15).setOrigin(0.5)
        //this.add.bitmapText(globalWidth / 2, (globalHeight / 2) + 60, 'dogica_font', 'Press P for Player Controls', 7).setOrigin(0.5)
    }

    create() {

    }
}