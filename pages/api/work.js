export default function (req,res){
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



    let work=[ ...ListWork]
    work.map(i=>i.ListPhoto=img.filter(r=> r.id===i.photo.id)[0] )
    res.json(work)

}
