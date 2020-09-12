export default function (req,res){
    let LibraryList = [
        {
            name:'HTML', list:[
                { frame:'HTML5',list:['Simple'] },
            ]
        },
        {
            name:'CSS', list:[
                { frame:'CSS3',list:['Simple'] },
                { frame:"SASS",list:['Simple'] }
            ]
        },
        {
            name:'JS', list:[
                { frame:'React',list:['Native'] },
                { frame:'Native',list:['Simple'] }
            ]
        }
    ]

    let library=[ ...LibraryList]
    res.json(library)
}
