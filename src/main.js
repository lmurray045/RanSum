//Liam Murray
//RanSum
//Description:
    //a word game that balances economy, strategy, and, of course, ransom notes.
    //can you discover the password?
//total hours: 
//Citations: 



        let config = {
            type: Phaser.AUTO,
            render: {
                pixelArt: true
            },
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true,
                }
            },
            //zoom: 2,
            width: 680,
            height: 440,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            scene: [Play, Load]
        }
        
        let game = new Phaser.Game(config)
        
        
        //set global measures
        globalWidth = 680
        globalHeight = 440