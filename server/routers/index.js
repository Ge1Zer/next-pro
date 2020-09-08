const exp = require('express')
    , routers = exp.Router()
    , {Library, Terms, Work} = require('../connect/index')


let getRandomInt=(max)=>(
    Math.floor(Math.random() * Math.floor(max))
)
//=======================================================>
let ListWork = [
    {
        id:1,
        photo:{id:10},
        name:'text',
        text:'10Lolkasdgflagafkldsgf лорфлдывоарфл фловра фвлфовар ak;djhf;akhd ',
        negative:'kjhda;kjhk;fjasdf',
        positive:'kjshdkjshdfjkg'
    },
    {
        id:2,
        photo:{id:20},
        name:'text',
        text:'20Lolkasdgflagafkldsgf лорфлдывоарфл фловра фвлфовар ak;djhf;akhd ',
        negative:'kjhda;kjhk;fjasdf',
        positive:'kjshdkjshdfjkg'
    },
    {
        id:3,
        photo:{id:30},
        name:'text',
        text:'30Lolkasdgflagafkldsgf лорфлдывоарфл фловра фвлфовар ak;djhf;akhd ',
        negative:'kjhda;kjhk;fjasdf',
        positive:'kjshdkjshdfjkg'
    },{
        id:4,
        photo:{id:30},
        name:'text',
        text:'30Lolkasdgflagafkldsgf лорфлдывоарфл фловра фвлфовар ak;djhf;akhd ',
        negative:'kjhda;kjhk;fjasdf',
        positive:'kjshdkjshdfjkg'
    },

]
let LibraryList = [
    {
        name:'js', list:[
            { frame:'react',list:['useEffect','useState'] },
            { frame:'native',list:['variable','function'] }
        ]
    }
]
let LibraryPage = [
    {
        id:'1', keyWord:'useEffect', content:{
            name:'name page',
            text:'jhgjlgdljkss;kjad',
            photo:{id:11}
        }
    },{
        id:'2', keyWord:'function', content:{
            name:'name page function',
            text:'function jhgjlgdljkss;kjad',
            photo:{id:22}
        }
    },{
        id:'3', keyWord:'useState', content:{
            name:'name page useState',
            text:'function jhgjlgdljkss;kjad',
            photo:{id:22}
        }
    },{
        id:'4', keyWord:'variable', content:{
            name:'name page variable',
            text:'function jhgjlgdljkss;kjad',
            photo:{id:22}
        }
    }
]
//=======================================================>
let img=[
    {id:10, photo:[
        {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
    {id:20,  photo:[
        {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
    {id:30,  photo:[
        {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
    {id:40,  photo:[
        {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
    {id:50,  photo:[
        {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
    {id:11, photo:[
            {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
    {id:22,  photo:[
            {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
    {id:33,  photo:[
            {id:1, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:2, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:3, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
            ,{id:4, img:'https://wallpaperscave.ru/images/original/18/06-02/abstract-colors-53631.jpg'}
        ]},
]
//=======================================================>

routers.post('/login',(req,res)=>{
    let login = req.body.login
    console.log(req.cookies.login)
    if(login==='1'){
        res.cookie('login','yes')
        res.header('Access-Control-Allow-Credentials: true')
        res.json({status:true,text:'all good'})

        res.send()
    }else if(req.cookies.login){
        res.json({status:true,text:'user not found'})
    }else {
        res.json({status:false,text:'user not found'})
    }
})
routers.get('/work',(req,res)=>{
    let work=[ ...ListWork]
    work.map(i=>i.ListPhoto=img.filter(r=> r.id===i.photo.id)[0] )
    res.json(work)
})
routers.get('/libraryList',(req,res)=>{
    console.log('menus')
    let library=[ ...LibraryList]
    res.json(library)
})
routers.get('/libraryPage',(req,res)=>{
    console.log('query',JSON.stringify(req.query.page))
    let num = req.query.page
    let library=[ ...LibraryPage]
    let elem = library.filter(i=>i.keyWord===num)
    elem[0].content.ListPhoto=img.filter(r=>r.id===elem[0].content.photo.id)[0]
    res.json(elem[0])
})



module.exports = routers;
