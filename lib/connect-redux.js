import Work from "../store/work";

import React from "react";
import App from 'next/app'

export let getOrCreateStore=()=>{

    if (typeof window === 'undefined')
      return {
        work:new Work()
    }

    if (!window['_STORE']) {

        window['_STORE'] = {
            work:new Work()
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
