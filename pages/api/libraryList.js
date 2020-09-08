export default function (req,res){
    let LibraryList = [
        {
            name:'js', list:[
                { frame:'react',list:['useEffect','useState'] },
                { frame:'native',list:['variable','function'] }
            ]
        }
    ]

    let library=[ ...LibraryList]
    res.json(library)
}
