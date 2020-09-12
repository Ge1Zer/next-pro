import Layout from "../../components/Layout";
import PageCurrent from "../../components/library/PageCurrent";
import PageDefault from "../../components/library/PageDefault";


export default function LibraryPage({page}){
    return page ? <PageCurrent page={page}/>:<PageDefault />
}
LibraryPage.getInitialProps = async ({query})=>{
    let r;
    query.id === 'home'?r=undefined:r=query.id
    return{
      page:r
    }
}
