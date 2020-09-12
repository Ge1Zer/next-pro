export default function (req,res){
    let LibraryList = [
        {
            name:'HTML', list:[
                { frame:'HTML5',list:[{link:'Simple',key:'CRf7RmRVh'}] },
            ]
        },
        {
            name:'CSS', list:[
                { frame:'CSS3',list:[{link:'Simple',key:'AF1VB48f7'}] },
                { frame:"SASS",list:[{link:'Simple',key:'Itq07G2gY'}] }
            ]
        },
        {
            name:'JS', list:[
                { frame:'React',list:[{link:'Native',key:'v8tfJU0Nc'}] },
                { frame:'Native',list:[{link:'Simple',key:'uLMSEIQsB'}] }
            ]
        }
    ]

    let library=[ ...LibraryList]
    res.json(library)
}





