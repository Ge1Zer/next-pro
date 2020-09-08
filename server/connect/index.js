const m = require('mongoose')
    , model = m.model , Schema = m.Schema

const terms = new Schema({
    name:String
    ,number:Number
})

const work = new Schema({
    tittle:String
    ,text:String
    ,negative:String
    ,positive:String
    ,number:Number
})

const library = new Schema({
    tittle:String
    ,text:String
    ,negative:String
    ,positive:String
    ,particular:String
    ,number:Number
})
let listModel={
    Terms:model('Terms',terms)
    ,Work:model('Work',work)
    ,Library:model('Library',library)
}

module.exports = listModel

