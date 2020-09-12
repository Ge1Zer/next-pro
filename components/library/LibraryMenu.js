import Link from "next/link";
import React,{useState,useEffect,useLayoutEffect} from "react";
import styled from 'styled-components'
import {inject, observer} from "mobx-react";


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

@inject('store')
@observer
export default class MenuLibrary extends React.Component{

  constructor(props) {
      super(props);

      this.getRandomInt=this.getRandomInt.bind(this)
  }
  componentDidMount() {
      this.props.store.menu.getListMenu()
  }


    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    render()
{


    return (

        <ListMenu>
            {this.props.store.menu.menu.map(i => {

                let ri = this.getRandomInt(10000)
                return (
                    <li className={'list_1'}>
                        <label htmlFor={`s${ri}`}><span>{i.name}</span></label>
                        <input type={'checkbox'} id={`s${ri}`} checked/>
                        <ul>
                            {i.list.sort(function (a, b) {
                                let nameA = a.frame.toLowerCase(), nameB = b.frame.toLowerCase()
                                if (nameA < nameB) //сортируем строки по возрастанию
                                    return -1
                                if (nameA > nameB)
                                    return 1
                                return 0 // Никакой сортировки
                            }).map(r => {
                                let rie = this.getRandomInt(10000)
                                return (
                                    <li className={'list_2'}>
                                        <label htmlFor={`s${rie}`}><span>{r.frame}</span></label>
                                        <input type="checkbox" id={`s${rie}`}/>
                                        <ul>
                                            {r.list.map(e =>
                                                <li className={'list_3'}>
                                                    <Link href={`/library/[id]`}
                                                          as={`/library/${e.key}`}><a>{e.link}</a></Link>
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
}}
