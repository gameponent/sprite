window.onload = function () {

    var canvas = require('canvas');
    var tile = require('tile');
    var sprite = require('sprite');

    var screen = new canvas.Canvas({width: 500, height: 500});
    var layer = new canvas.Layer();
    screen.root.addLayer({layer: layer});

    tile.load({url: '/static/assets/tilesets', success: function (options) {
        var tilesets = options.tilesets;
        var aladdin = tilesets.aladdin;

        aladdin.load({success: function () {
            var aladdinSprite = new sprite.Sprite({tileset: aladdin, animation: 'run', x: 100, y: 100});
            layer.addView({view: aladdinSprite});

            function loop() {
                aladdinSprite.step();
                screen.draw();
                requestAnimationFrame(loop);
            }

            requestAnimationFrame(loop);
        }});
        
    }});

};