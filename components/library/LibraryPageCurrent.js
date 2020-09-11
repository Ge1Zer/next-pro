import styled from 'styled-components'
import React from "react";


let LibraryPageCurrent_style = styled.div`
#key{

  width: 100%;
  min-height: 40px;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-end;
  background: orange;

  &>p{
   color:black;
   margin: 0 40px 0 0;
   border-bottom: 1px solid black;
  }
}
#name{
  font-size: 3em;
  width: 100%;
  height: 10%;

  display: flex;

  justify-content: center;
  align-items: center;
}
#text{
  font-size: 1.5em;
  width: 90%;

  margin: 0 auto;
  &>p{
    text-align: justify;
    line-height: 150%;
  }
}
#photo{
  width: 90%;
  margin: 0 auto;
}

.library_list_photo{
    &>img{
        margin:1%;
        width:99%;
        height:99%;

    }
}
`

let LibraryPageCurrent;
export default LibraryPageCurrent=({page})=>{

    return (
        <LibraryPageCurrent_style>
            <div id={'key'}><p>{page.keySide}</p></div>
            <div id={'name'}><p>{page.keyPage}</p></div>
            <div id={'text'}><p>{page.content.text}</p></div>
            <div className={'library_list_photo'} id={'photo'}>
                {
                    page.content.ListPhoto.photo.map(i =>
                        <img src={i.img} alt={'d'}/>
                    )
                }
            </div>
        </LibraryPageCurrent_style>
    )
}
