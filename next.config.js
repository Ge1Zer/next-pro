const withVideos = require('next-videos')
const withImages = require('next-images')


module.exports = withVideos(withImages({
    assetDirectory: 'static'
    , webpack(config, options) {return config}
    ,env: {
        baseUrl: process.env.BASE_URL || process.env.VERCEL_URL,
    }
    ,exportPathMap() {
        return {
            '/': {page: '/'},
            '/i': {page: '/i'},
            '/work': {page: '/work'},
            '/library': {page: '/library'},
            '/library/side=HTML5&page=Simple': {page: '/library',query:{ side:"HTML5",page:'Simple' }},
            '/library/side=CSS3&page=Simple': {page: '/library',query:{ side:"CSS3",page:'Simple' }},
            '/library/side=SASS&page=Simple': {page: '/library',query:{ side:"SASS",page:'Simple' }},
            '/library/side=React&page=Native': {page: '/library',query:{ side:"React",page:'Native' }},
            '/library/side=Native&page=Simple': {page: '/library',query:{ side:"Native",page:'Simple' }},
        }
    }
    })
)



