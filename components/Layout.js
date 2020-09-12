import Head from "next/head";
import styled from 'styled-components'
import Menu from "./Menu";

let Content = styled.div`
height:96%;
    @media (max-width : 768px) {
     height:100%;
    }
`

export default function Layout({children}){
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                      rel="stylesheet"/>
            </Head>
            <Menu />
            <Content>
                {children}
            </Content>
        </>

    )
}
