import Link from "next/link";
import React,{useState,useEffect} from "react";
import styled from 'styled-components'


const ListMenu = styled.ul`
   
    color:white;
    font-size:2em;
    
    
    .list_1{
       color:white;
        margin: 10px 0 0 10px;
        &>ul, &>input{
            display:none;
        }
       &>input:checked+ul{
           display: block;
       }
            &>ul>.list_2{
                 color:yellow;
                 margin: 0 0 0 10px;
                  &>ul, &>input{
                        display:none;
                    }
                   &>input:checked+ul{
                        display:block;
                   }
                   &>ul>.list_3{
                    margin: 0 0 0 10px;
                    &>a{
                    color:rgba(245,245,245,1);
                   } 
                   }
            }
    }
   
`

export default function MenuLibrary({menu=[]}) {

    let [menus,setMenu] = useState(menu)
    if(menus.length===0){
        (async ()=>{
            let response = await fetch('http://localhost:3000/api/libraryList')
            let menu = await response.json()
            setMenu(menu)
        })()
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return (

        <ListMenu>
            {menus.map(i => {

                let ri = getRandomInt(10000)
                return (
                    <li className={'list_1'}>
                        <label htmlFor={`s${ri}`}  ><span>{i.name}</span></label>
                        <input type={'checkbox'} id={`s${ri}`} checked/>
                        <ul>
                            {i.list.sort(function(a, b){
                                let nameA=a.frame.toLowerCase(), nameB=b.frame.toLowerCase()
                                if (nameA < nameB) //сортируем строки по возрастанию
                                    return -1
                                if (nameA > nameB)
                                    return 1
                                return 0 // Никакой сортировки
                            }).map(r => {
                                let rie = getRandomInt(10000)
                                return (
                                    <li className={'list_2'}>
                                        <label htmlFor={`s${rie}`} ><span>{r.frame}</span></label>
                                        <input type="checkbox" id={`s${rie}`}/>
                                        <ul>
                                            {r.list.sort().map(e =>
                                                <li className={'list_3'}>
                                                    <Link href={`/library/[id]`} as={`/library/${e}`}>
                                                        <a>{e}</a>
                                                    </Link>
                                                </li>
                                            )}
                                        </ul>
                                    </li>
                                )
                                })}
                        </ul>
                    </li>
                )
            })
            }
        </ListMenu>
    )
}
// <li>{r.frame}</li>
// {r.list.map(e =>
//     <li>
//         <Link href={`/library/[id]`} as={`/library/${e}`}>
//             <a>{e}</a>
//         </Link>
//     </li>
// )}



// {i.list.map(r => {
//         console.log(r)
//         return <>
//             <lable forHtml={r.id}>
//                 <input type="checkbox" id={r.id}/>
//                 <span>{r.frame}</span>
//             </lable>
//             <ul>
//                 <li>1</li>
//             </ul>
//         </>
//     }
// )
// }



// border: 1px solid red;
//
// &>ul>.list_2{
//     border: 1px solid blue
//     &>ul>.list_3{
//         border: 1px solid green
//     }
// }




//
// {i.list.map(r => {
//     let ris = getRandomInt(10000)
//     return (
//         <li className={'list_2'}>
//             <label htmlFor={`s=${ris}`}>
//                 <input type={'checkbox'} id={`s=${ris}`}/>
//                 <span>{r.frame}</span>
//             </label>
//             <ul>
//                 {
//                     r.list.map(e => {
//                         return (
//                             <li className={'list_3'}>
//                                 {e}
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </li>
//     )
// })
// }
