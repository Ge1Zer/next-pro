export default function (req,res){
    let LibraryList = [
        {
            name:'HTML', list:[
                { frame:'HTML5',list:[{link:'Simple',key:'tevi8'}] },
            ]
        },
        {
            name:'CSS', list:[
                { frame:'CSS3',list:[{link:'Simple',key:'4o90g'}] },
                { frame:"SASS",list:[{link:'Simple',key:'1b1qi'}] }
            ]
        },
        {
            name:'JS', list:[
                { frame:'React',list:[{link:'Native',key:'6iffi'}] },
                { frame:'Native',list:[{link:'Simple',key:'yzwra'}] }
            ]
        }
    ]

    let library=[ ...LibraryList]
    res.json(library)
}





