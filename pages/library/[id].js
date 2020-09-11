import MenuLibrary from "../../components/library/LibraryMenu";
import React from "react";
import LibraryPageCurrent from "../../components/library/LibraryPageCurrent";
import Layout from "../../components/Layout";
import Library_back from "../../components/Library_back";
import LibraryPage_style from "../../components/library/LibraryPage_style";




export default function LibraryPage({menu, page}) {
    return (
        <Library_back>
            <Layout>
                <LibraryPage_style>
                    <div className="menu_library_style">
                        <MenuLibrary menu={menu}/>
                    </div>
                    <div className="page_style">
                        <LibraryPageCurrent page={page} />
                    </div>
                </LibraryPage_style>
            </Layout>
        </Library_back>

    )
}
LibraryPage.getInitialProps= async ({query})=>{

    let resp,page;
    let response = await fetch(`${process.env.baseUrl}/api/libraryList`)
    let menu = await response.json()

//================page=======>
        resp = await fetch( `${process.env.baseUrl}/api/libraryPage?`+query.id)
        page = await resp.json()
//=============================================>

    return{
        page,menu
    }
}
