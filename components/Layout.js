import React, {useEffect, useState} from "react"
import Link from "next/link";
import Head from "next/head";
import {inject, observer} from "mobx-react";
import Menu from "./Menu";
import styled from 'styled-components'

let Content = styled.div`
height:96%;
    @media (max-width : 768px) {
     height:100%;
    }
`

let Layout
export default Layout = inject('store')(observer((props) => {

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
                        {props.children}
                </Content>
            </>

        )
    })
)


// {
//     props.store.admin.status
//         ? <div className={'loginIndex'}>
//             Admin
//         </div>
//         : <div className={'loginIndex noEnter'}>
//             <div onClick={() => entry(!AdminPanel)}>noAdmin</div>
//             <div className={AdminPanel ? 'admin_panel' : 'admin_panel disable'}>
//                 <div>
//                     <form>
//                                             <span><input spellCheck={false} type={'text'} onChange={inputChange}
//                                                          value={InputLogin}/></span>
//                         <span><button name={'login'} onClick={login}
//                                       type={"button"}>L</button></span>
//                     </form>
//                 </div>
//
//             </div>
//         </div>
// }
//

// const Button = styled.a`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;
//
//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: black;
//   `}
// `
