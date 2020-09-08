import I from "../store/i";
import Library from "../store/library";
import Work from "../store/work";

import React from "react";
import App from 'next/app'
import Admin from "../store/admin";

let StoreVariable;

export let getOrCreateStore=()=>{

    if (typeof window === 'undefined')
      return {
        i:new I(),
        library:new Library(),
        work:new Work(),
        admin:new Admin()
    }

    if (!window['_STORE']) {

        window['_STORE'] = {
            i:new I(),
            library:new Library(),
            work:new Work(),
            admin:new Admin()
        }
    }
    return window['_STORE']
    // if (!StoreVariable) {
    //
    //     StoreVariable = {
    //         i:new I(),
    //         library:new Library(store),
    //     }
    // }
    //
    // return StoreVariable
}



export default function AppWith(App){

    return class AppWithMobx extends React.Component {

        static async getInitialProps (appContext) {

            const mob = getOrCreateStore()
            appContext.ctx.mobxStore = mob

            let appProps = await App.getInitialProps(appContext)
            return {
                ...appProps, mob

            }
        }

        render() {
            return <App {...this.props} mobxStore={getOrCreateStore()}/>
        }
    }
}




// const StoreContext = React.createContext();
//
// export function StoreProvider(props) {
//     return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
// }
//
// export function useMobxStores() {
//     return React.useContext(StoreContext);
// }
// Library:new Library(store.Library),
// LibraryStore:new LibraryStore(store.LibraryStore)
// Library:new Library(store.Library),
// LibraryStore:new LibraryStore(store.LibraryStore)
// if (!window['_STORE']) {
//
//     window['_STORE'] = {
//         i:new I(),
//         library:new Library(store),
//     }
// }
//
// return window['_STORE']
