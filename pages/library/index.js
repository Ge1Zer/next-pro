import LibraryPageDefault from "../../components/library/LibraryPageDefault";
import React from "react";
import Library_back from "../../components/Library_back";
import Layout from "../../components/Layout";
import MenuLibrary from "../../components/library/LibraryMenu";
import LibraryPage_style from "../../components/library/LibraryPage_style";

export default function Library({menu}){
    return(
        <Library_back>
            <Layout>
                <LibraryPage_style>
                    <div className="menu_library_style">
                        <MenuLibrary menu={menu}/>
                    </div>
                    <div className="page_style">
                        <LibraryPageDefault />
                    </div>
                </LibraryPage_style>
            </Layout>
        </Library_back>

    )
}
Library.getInitialProps= async ()=>{

    let response = await fetch('/api/libraryList')
    let menu = await response.json()

    return{
        menu
    }
}
