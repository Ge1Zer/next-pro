import Layout from "../../components/Layout";
import Library_back from "../../components/library/Library_back";
import styled from "styled-components";
import React, {useEffect, useState} from 'react';
import MenuLibrary from "../../components/library/LibraryMenu";
import LibraryPage_style from "../../components/library/LibraryPage_style";
import {inject, observer} from "mobx-react";


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

let LibraryPage;
export default LibraryPage=({pag})=>{

    return (
        <Library_back>
            <Layout>
                <LibraryPage_style>
                    <div className="menu_library_style">
                        <MenuLibrary/>
                    </div>
                {pag?<LibraryPageCurrent_style>
                    <div id={'key'}><p>{pag.keySide }</p></div>
                    <div id={'name'}><p>{pag.keyPage}</p></div>
                    <div id={'text'}><p>{pag.content.text }</p></div>
                    <div className={'library_list_photo'} id={'photo'}>
                        {pag.content.ListPhoto.photo.map(i => <img src={i.img} alt={'d'}/>)}
                    </div>
                </LibraryPageCurrent_style>
                :<LibraryPageDefault_style>
                        <p>The library is temporarily <h2>closed</h2></p>
                    </LibraryPageDefault_style>
                }
                </LibraryPage_style>
            </Layout>
        </Library_back>

    )

}


LibraryPage.getInitialProps = async ({query})=>{
    let pag, r;
    if(query.id === 'home'){
        pag=undefined
    }else{
        pag = await fetch( `/api/libraryPage?key=`+query.id).then(i=>i.json())
    }





    return{
      pag:pag,
    }
}


