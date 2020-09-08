import MenuLibrary from "../../components/library/LibraryMenu";
import React from "react";
import LibraryPageCurrent from "../../components/library/LibraryPageCurrent";
import LibraryPageDefault from "../../components/library/LibraryPageDefault";
import Layout from "../../components/Layout";
import styled from 'styled-components'
import Library_back from "../../components/Library_back";


let LibraryPage_style = styled.div`

  width: 100%;
  height: 100%;
  color:white;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-areas:"menu page" ;
    
  &>div{
    margin: 1%;
    background: rgba(100,100,100,0.6)}
     border-radius: 10px;

  &>.menu_library_style{
    grid-area: menu;
    border-right: 1px solid orange;
   
  }
  &>.page_style{
    grid-area: page;
    overflow:auto;
  }
}


@media (max-width : 768px) {

    grid-template: 1fr/9fr 3fr;
    grid-template-areas: "page menu";
     &>div{
    margin: 2%;
    }
  
}


  
`

export default function LibraryPage({menu, page}) {
    return (
        <Library_back>
            <Layout>
                <LibraryPage_style>
                    <div className="menu_library_style">
                        <MenuLibrary menu={menu}/>
                    </div>
                    <div className="page_style">
                        {
                            page
                                ? <LibraryPageCurrent page={page} />
                                : <LibraryPageDefault/>
                        }
                    </div>
                </LibraryPage_style>
            </Layout>
        </Library_back>

    )
}
LibraryPage.getInitialProps= async ({query})=>{

    let resp,page;
    let response = await fetch('/api/libraryList')
    let menu = await response.json()

//================page=======>
    if(query){
        resp = await fetch( `/api/libraryPage?page=`+query.id)
        page = await resp.json()
    }
//=============================================>

    return{
        page,menu
    }
}
