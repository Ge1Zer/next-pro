import styled from 'styled-components'
import React from "react";
import Layout from "../Layout";


let LibraryPageDefault_style = styled.div`
  font-size:3em;
  height:100%;
  display: flex;
 
  justify-content: center;
  align-items: center;
  align-content: center;
  &>p{
    text-align: center ;
    &>h2{
        color:rgb(182,10,255);
    }
  }

`

export default function PageDefault(){

    return(
        <Layout>
            <LibraryPageDefault_style>
                <p>The library is temporarily <h2>closed</h2></p>
            </LibraryPageDefault_style>
        </Layout>
    )
}
