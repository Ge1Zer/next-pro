import styled from 'styled-components'
import React from "react";


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
        <Library_back_style img={require('./video/depositphotos_261698250-stock-illustration-rock-paintings-background-seamless-pattern.jpg')}>
            <div className={'back'}/>
            <div className={'font_side'}>{children}</div>
        </Library_back_style>

    )
}
export default Library_back;
