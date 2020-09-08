import styled from 'styled-components'
import React from "react";


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

let LibraryPageDefault;
export default LibraryPageDefault=()=>{

    return(
        <LibraryPageDefault_style>

            <p>The library is temporarily <h2>closed</h2></p>


        </LibraryPageDefault_style>
    )
}
