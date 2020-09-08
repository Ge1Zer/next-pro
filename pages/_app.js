import React from "react";
import App from 'next/app';
import './css/style.css'


import AppWith from "../lib/connect-redux";
import {Provider} from "mobx-react";

class MyApp extends App {
    render () {
        const {Component, pageProps,mobxStore} = this.props

        return (
            <Provider store={mobxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default AppWith(MyApp)
