export default function Page({page}){
    return(
        <>
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

        </>
    )
}
Page.getInitialProps = async ({query})=>{
    let r;
    query.id === 'home'?r=undefined:r=query.id
    return{
      page:r
    }
}
