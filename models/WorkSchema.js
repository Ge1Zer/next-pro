import mongoose from 'mongoose'
const WorkSchema = new mongoose.Schema({
    id: Number,
    photo: Number,
    name: {
        type:String,
        maxlength: [200, 'Description cannot be more than 200 characters']
    },
    text: String,
    stack: Array,
    link: String,
})
export let WorkS = mongoose.models.WorkS || mongoose.model("WorkS", WorkSchema)

