import {inject, observer} from "mobx-react";
import React, {useEffect} from "react";
import styled from "styled-components";
import Work_item from './work/Work_item'


const Work_style = styled.div`
height:auto;

    &>div:nth-child(even){
     -webkit-filter: brightness(80%);
            filter: brightness(80%);
            
        flex-flow: row-reverse nowrap;
         background: rgba(102,102,102,1);
         
         &:hover{
          -webkit-filter: brightness(100%);
            filter: brightness(100%);
         }
      
    }
      &>div:nth-child(odd){
         background: rgba(255,165,0,1);
        -webkit-filter: brightness(80%);
            filter: brightness(80%);
            
 &:hover{
          -webkit-filter: brightness(100%);
            filter: brightness(100%);
         }
    }
@media (max-width : 768px) {
  &>div:nth-child(even){           
        flex-flow: column nowrap;
  }
}
`


let Work_Page;
export default Work_Page = inject('store')(observer((props) => {

    useEffect(() => {
        props.store.work.getListWork()
    }, [])

    return (
        <Work_style>
            {
                props.store.work.work.map(i =>
                    <Work_item i={i}/>
                )
            }
        </Work_style>
    )

}))

