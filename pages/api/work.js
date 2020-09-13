const knife = require('./../../components/file/knife-home.png')
const tokio = require('./../../components/file/tikio-ex.png')
const net = require('./../../components/file/home-network-page.png')
const ssr = require('./../../components/file/page-ssr.png')
const com = require('./../../components/file/company-page.png')

import MongooseGO from "../../lib/connect-mongoose";
import {WorkS} from "../../models/WorkSchema"

MongooseGO()
//========================================================>



//========================================================>

let img=[
    {id:10, photo:[
            {id:1, img:knife}
        ]},
    {id:20,  photo:[
            {id:1, img:tokio}
        ]},
    {id:30,  photo:[
            {id:1, img:net}
        ]},
    {id:40,  photo:[
            {id:1, img:ssr}
        ]},
    {id:50,  photo:[
            {id:1, img:com}
        ]},
]
// let ListWork = [
//     {
//         id:3,
//         photo:10,
//         name:'Knife Market',
//         text:'App creating only HTML CSS JS, for screen all size, how many items are left in stock, selection of items from the list, shopping cart.',
//         stack:['html(html5)', 'css(sass)', 'js(jquery)'],
//         link:'https://ge1zer.github.io/marketKnife',
//     },
//     {
//         id:4,
//         photo:20,
//         name:'Tokio',
//         text:'Simple(but very beautiful) landing page, with mobile version, slide.',
//         stack:['html(html5)', 'css(sass)', 'js(jquery)'],
//         link:'https://ge1zer.github.io/pageTokio',
//     },
//     {
//         id:2,
//         photo:30,
//         name:'Public Network(Multi-page website)',
//         text:'Bundles features: Backend-express, mongodb, nodemailer, cookie(registration with checking mail), Frontend-React, Redux, axios, search by tags and name(firstname, lastname), checking a new message within 1 minute(any time), create and deleted and exit room, adding at friend list, change data about you.',
//         stack:['Express', 'Mongodb','React', 'Redux', 'axios'],
//         link:'https://ge1zer.github.io/app-on-react',
//     },{
//         id:1,
//         photo:40,
//         name:'Portfolio',
//         text:'SSR(NextJS)-golden middle. Begun with Redux but the app was getting heavy.(but working)',
//         stack:['NextJS(SSR)', 'React', 'MobX', 'styled-components', 'SASS(at the layout stage)', '(mongoose)'],
//         link:'https://next-pro-mu.vercel.app',
//     },{
//         id:5,
//         photo:50,
//         name:'Business Landing',
//         text:'Simple(but very strict) landing page, it`s all mobile version, however look great.',
//         stack:['html(html5)', 'css(sass)', 'js(jquery)'],
//         link:'https://ge1zer.github.io/landing-page-for-companies',
//     }
// ]

export default async (req, res) => {

    let wo = await WorkS.find({}).lean()

    wo.map(i=>i.ListPhoto=img.filter(r=> r.id===i.photo)[0] )
    res.json(wo)
}


