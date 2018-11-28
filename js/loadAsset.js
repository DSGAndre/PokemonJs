window.onload = init;


var assetsToLoadURLs = {

    imagePikachuF: { url: './img/front/pikachuF.png' },
    imagePikachuB: { url :'./img/back/pikachuB.png'},

    imageSalemecheF: { url: './img/front/salamecheF.png' },
    imageSalemecheB: { url: './img/back/salamecheB.png' },

    imageCarapuceF: { url: './img/front/carapuceF.png' },
    imageCarapuceB: { url: './img/back/carapuceB.png' },

    imageBulbizarreF: { url: './img/front/bulbizarreF.png' },
    imageBulbizarreB: { url: './img/back/bulbizarreB.png' },

    imageCaninosF: { url: './img/front/caninosF.png' },
    imageCaninosB: { url: './img/back/caninosB.png' },

    imageChetiflorF: { url: './img/front/chetiflorF.png' },
    imageChetiflorB: { url: './img/back/chetiflorB.png' },

    imageMiaoussF: { url: './img/front/miaoussF.png' },
    imageMiaoussB: { url: './img/back/miaoussB.png' },

    imageEvoliF: { url: './img/front/evoliF.png' },
    imageEvoliB: { url: './img/back/evoliB.png' },

    imageHypotrempeF: { url: './img/front/hypotrempeF.png' },
    imageHypotrempeB: { url: './img/back/hypotrempeB.png' }, 

    imageTaupiqueurF: { url: './img/front/taupiqueurF.png' },
    imageTaupiqueurB: { url: './img/back/taupiqueurB.png' }
    /*spriteSheetBunny: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/images/bunnySpriteSheet.jpg' },
    plop: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/plop.mp3', buffer: false, loop: false, volume: 1.0 },
    humbug: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/humbug.mp3', buffer: true, loop: true, volume: 1.0 },
    concertino: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/christmas_concertino.mp3', buffer: true, loop: true, volume: 1.0 },
    xmas: { url: 'https://mainline.i3s.unice.fr/mooc/SkywardBound/assets/sounds/xmas.mp3', buffer: true, loop: true, volume: 0.6 }*/
};

var loadedAssets;

function init() {
    // this call will load all assets
  loadAssets(startGame);
}

function startGame(assetsReadyToBeUsed) {
  
  loadedAssets = assetsReadyToBeUsed;
  start();

}

function loadAssets(callback) {
    // here we should load the sounds, the sprite sheets etc.
    // then at the end call the callback function           
    loadAssetsUsingHowlerAndNoXhr(assetsToLoadURLs, callback);
}

// You do not have to understand in details the next parts of the code...
// just use the above function

/* ############################
    BUFFER LOADER for loading multiple files asyncrhonously. The callback functions is called when all
    files have been loaded and decoded 
 ############################## */
function isImage(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null );
}

function isAudio(url) {
    return (url.match(/\.(mp3|ogg|wav)$/) != null);
}

function loadAssetsUsingHowlerAndNoXhr(assetsToBeLoaded, callback) {
    var assetsLoaded = {};
    var loadedAssets = 0;
    var numberOfAssetsToLoad = 0;

    // define ifLoad function
    var ifLoad = function () {
        if (++loadedAssets >= numberOfAssetsToLoad) {
            callback(assetsLoaded);
        }
        console.log("Loaded asset " + loadedAssets);
    };

    // get num of assets to load
    for (var name in assetsToBeLoaded) {
        numberOfAssetsToLoad++;
    }

    console.log("Nb assets to load: " + numberOfAssetsToLoad);

    for (name in assetsToBeLoaded) {
        var url = assetsToBeLoaded[name].url;
        console.log("Loading " + url);
        if (isImage(url)) {
            assetsLoaded[name] = new Image();

            assetsLoaded[name].onload = ifLoad;
            // will start async loading. 
            assetsLoaded[name].src = url;
        } else {
            // We assume the asset is an audio file
            console.log("loading " + name + " buffer : " + assetsToBeLoaded[name].loop);
            assetsLoaded[name] = new Howl({
                urls: [url],
                buffer: assetsToBeLoaded[name].buffer,
                loop: assetsToBeLoaded[name].loop,
                autoplay: false,
                volume: assetsToBeLoaded[name].volume,
                onload: function () {
                    if (++loadedAssets >= numberOfAssetsToLoad) {
                        callback(assetsLoaded);
                    }
                    console.log("Loaded asset " + loadedAssets);
                }
            }); // End of howler.js callback
        } // if

    } // for
} // function


