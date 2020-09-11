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
            '/libraryPage/side=HTML5&page=Simple': {page: '/libraryPage',query:{ side:"HTML5",page:'Simple' }},
            '/libraryPage/side=CSS3&page=Simple': {page: '/libraryPage',query:{ side:"CSS3",page:'Simple' }},
            '/libraryPage/side=SASS&page=Simple': {page: '/libraryPage',query:{ side:"SASS",page:'Simple' }},
            '/libraryPage/side=React&page=Native': {page: '/libraryPage',query:{ side:"React",page:'Native' }},
            '/libraryPage/side=Native&page=Simple': {page: '/libraryPage',query:{ side:"Native",page:'Simple' }},
        }
    }
    })
)



