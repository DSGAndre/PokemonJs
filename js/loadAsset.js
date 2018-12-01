window.onload = init;


var assetsToLoadURLs = {

    imagePikachuF: { url: './assets/img/front/pikachuF.png' },
    imagePikachuB: { url :'./assets/img/back/pikachuB.png'},

    imageSalemecheF: { url: './assets/img/front/salamecheF.png' },
    imageSalemecheB: { url: './assets/img/back/salamecheB.png' },

    imageCarapuceF: { url: './assets/img/front/carapuceF.png' },
    imageCarapuceB: { url: './assets/img/back/carapuceB.png' },

    imageBulbizarreF: { url: './assets/img/front/bulbizarreF.png' },
    imageBulbizarreB: { url: './assets/img/back/bulbizarreB.png' },

    imageCaninosF: { url: './assets/img/front/caninosF.png' },
    imageCaninosB: { url: './assets/img/back/caninosB.png' },

    imageChetiflorF: { url: './assets/img/front/chetiflorF.png' },
    imageChetiflorB: { url: './assets/img/back/chetiflorB.png' },

    imageMiaoussF: { url: './assets/img/front/miaoussF.png' },
    imageMiaoussB: { url: './assets/img/back/miaoussB.png' },

    imageEvoliF: { url: './assets/img/front/evoliF.png' },
    imageEvoliB: { url: './assets/img/back/evoliB.png' },

    imageHypotrempeF: { url: './assets/img/front/hypotrempeF.png' },
    imageHypotrempeB: { url: './assets/img/back/hypotrempeB.png' }, 

    imageTaupiqueurF: { url: './assets/img/front/taupiqueurF.png' },
    imageTaupiqueurB: { url: './assets/img/back/taupiqueurB.png' },

    battleSong: { url: './assets/mp3/battleSong.mp3', buffer: true, loop: true, volume: 0.7 }
   
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
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
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