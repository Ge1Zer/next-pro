import Layout from "../../components/Layout";

export default function LibraryPage({page}){
    return(
        <Layout>
            {
                page ?
                <>
                    page {page}
                </>
                :
                <>
                    page null
                </>
            }
        </Layout>
    )
}
LibraryPage.getInitialProps = async ({query})=>{
    let r;
    query.id === 'home'?r=undefined:r=query.id
    return{
      page:r
    }
}
