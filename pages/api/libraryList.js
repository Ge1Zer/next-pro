export default function (req,res){
    let LibraryList = [
        {
            name:'HTML', list:[
                { frame:'HTML5',list:[{link:'Simple',key:'VOUDdmKDsMCVDWSzAJv'}] },
            ]
        },
        {
            name:'CSS', list:[
                { frame:'CSS3',list:[{link:'Simple',key:'6MmEiiuZtDUt1GlRwpP'}] },
                { frame:"SASS",list:[{link:'Simple',key:'DIeWGEzQWjIqJQZRTZk'}] }
            ]
        },
        {
            name:'JS', list:[
                { frame:'React',list:[{link:'Native',key:'xzBOGKJ16PXMKyBtGQ9'}] },
                { frame:'Native',list:[{link:'Simple',key:'ytt8YykPr9WE1iUjp2n'}] }
            ]
        }
    ]

    let library=[ ...LibraryList]
    res.json(library)
}
