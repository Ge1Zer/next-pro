const withVideos = require('next-videos')
const withImages = require('next-images')


module.exports = withVideos(withImages({
    assetDirectory: 'static'
    , webpack(config, options) {return config}
    ,exportPathMap() {
        return {
            '/': {page: '/'},
            '/i': {page: '/i'},
            '/work': {page: '/work'},
            '/library': {page: '/library'},
            '/library/libraryPage': {page: '/libraryPage',query:{ side:"HTML5",page:'Simple' }},
            '/library/libraryPage': {page: '/libraryPage',query:{ side:"CSS3",page:'Simple' }},
            '/library/libraryPage': {page: '/libraryPage',query:{ side:"SASS",page:'Simple' }},
            '/library/libraryPage': {page: '/libraryPage',query:{ side:"React",page:'Native' }},
            '/library/libraryPage': {page: '/libraryPage',query:{ side:"Native",page:'Simple' }},
        }
    }
    })
)



