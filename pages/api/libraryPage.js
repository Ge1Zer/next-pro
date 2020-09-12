export default function (req,res){
    let LibraryPage = [
        {
            id: '1', keySide: 'HTML5', keyPage: 'Simple',key:'tevi8', content: {
                name: 'HTML5',
                text: 'HyperText Markup Language',
                photo: {id: 11}
            }
        }, {
            id: '2', keySide: 'CSS3', keyPage: 'Simple',key:'4o90g', content: {
                name: 'CSS3',
                text: 'Cascading Style Sheets',
                photo: {id: 21}
            }
        }, {
            id: '3', keySide: 'SASS', keyPage: 'Simple',key:'1b1qi', content: {
                name: 'SASS/LESS',
                text: 'Syntactically Awesome Stylesheets',
                photo: {id: 31}
            }
        }, {
            id: '4', keySide: 'Native', keyPage: 'Simple',key:'6iffi', content: {
                name: 'JS Native',
                text: 'JavaScript Native',
                photo: {id: 41}
            }
        }, {
            id: '4', keySide: 'React', keyPage: 'Native',key:'yzwra', content: {
                name: 'React',
                text: 'A JavaScript library for building user interfaces',
                photo: {id: 51}
            }
        }
    ]

    let img = [
        {
            id: 11, photo: [
                {id: 1, img: 'https://img3.goodfon.ru/original/2048x1200/0/e7/html5-html-hyper-text-markup.jpg'}
            ]
        },
        {
            id: 21, photo: [
                {id: 1, img: 'https://fb.ru/misc/i/gallery/59435/2872074.jpg'}
            ]
        },
        {
            id: 31, photo: [
                {id: 1, img: 'https://miro.medium.com/max/1200/1*6zW9HxeJH_UPxHJcI4h5dQ.png'}
            ]
        },
        {
            id: 41, photo: [
                {id: 1, img: 'https://www.andyshora.com/img/posts/og-js.png'}
            ]
        },

        {
            id: 51, photo: [
                {id: 1, img: 'https://media.proglib.io/wp-uploads/2018/03/react-native-tutorials.png'}
            ]
        },
    ]

    let library=[ ...LibraryPage]
    let elem = library.filter(i=>i.key===req.query.key)
    elem[0].content.ListPhoto=img.filter(r=>r.id===elem[0].content.photo.id)[0]
    res.json(elem[0])
}
