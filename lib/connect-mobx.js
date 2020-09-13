import Work from "../store/work";

import React from "react";
import App from 'next/app'
import Menu from "../store/menu";

export let getOrCreateStore=()=>{

    if (typeof window === 'undefined')
      return {
        work:new Work(),
        menu:new Menu()
    }

    if (!window['_STORE']) {

        window['_STORE'] = {
            work:new Work(),
            menu:new Menu()
        }
    }
    return window['_STORE']
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
