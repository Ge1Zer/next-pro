const withVideos = require('next-videos')
const withImages = require('next-images')


module.exports =
    withVideos(
        withImages(
            {assetDirectory: 'static',
                webpack(config, options) {return config}
            }
        )
    )



