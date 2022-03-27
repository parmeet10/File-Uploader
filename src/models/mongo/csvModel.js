import mongoose from "mongoose";
const { Schema } = mongoose;
const csvSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const CSV = mongoose.model("CSV",csvSchema)
export default CSV;