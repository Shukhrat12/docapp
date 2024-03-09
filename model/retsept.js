import mongoose from "mongoose";

const retseptSchema = mongoose.Schema({
    dorini_nomi: {
        type: String,
        required: true
    },
    dozasi: {
        type: String,
         required: true
    },
    kunlik_takrorlanishi: {
        type: String,
        required: true
    },
    davomiyligi: {
        type: String,
        required: true
    },
    eslatma: {
        type: String
    }
})

export default mongoose.model("retsepts", retseptSchema)