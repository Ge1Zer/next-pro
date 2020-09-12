import React, {useEffect} from "react";
import Layout from "../../components/Layout";
import Work_item from "../../components/work/Work_item";
import {inject, observer} from "mobx-react";
import styled from "styled-components";

const Work_style = styled.div`
    
    height:auto;

    &>div:nth-child(even){
            -webkit-filter: brightness(50%);
            filter: brightness(50%);
           
            flex-flow: row-reverse nowrap;
            background: rgba(255,165,0,1);
         
         &:hover{
            transition: filter 0.5s linear;
            -webkit-filter: brightness(100%);
            filter: brightness(100%);
         }
      
    }
      &>div:nth-child(odd){
            background: rgba(255,165,0,1);
            -webkit-filter: brightness(50%);
            filter: brightness(50%);
            
         &:hover{
            transition: filter 0.5s linear;
            -webkit-filter: brightness(100%);
            filter: brightness(100%);
         }
    }
@media (max-width : 768px) {
  &>div:nth-child(even){           
        flex-flow: column-reverse nowrap;
  }
}
`

let Work;
export default Work = inject('store')(observer((props) => {

        useEffect(() => {
            props.store.work.getListWork()
        }, [])

        return (
            <Layout>
                <Work_style>
                    {props.store.work.work.map(i =>
                        <Work_item i={i}/>
                    )
                    }
                </Work_style>
            </Layout>
        )
    }
))
