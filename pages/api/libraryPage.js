export default function (req,res){
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

    let num = req.query.page
    let library=[ ...LibraryPage]
    let elem = library.filter(i=>i.keyWord===num)
    elem[0].content.ListPhoto=img.filter(r=>r.id===elem[0].content.photo.id)[0]
    res.json(elem[0])
}
