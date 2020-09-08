import styled from 'styled-components'
import React from "react";

const img=require("./file/back_Library.jpg")

const Library_back_style = styled.div`

 width:100%;
 height:100%;

& > .back {
    background: url(${({img})=>img}) repeat;
    -webkit-filter: brightness(20%);
    filter: brightness(20%);
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &>.font_side{
  position:relative;
  width:100%;
  height:100%;
   z-index:1;
  }

`



let Library_back = ({children})=>{
    return(
        <Library_back_style img={img}>
            <div className={'back'}/>
            <div className={'font_side'}>{children}</div>
        </Library_back_style>

    )
}
export default Library_back;
