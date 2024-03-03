import mongoose from "mongoose";

const retseptSchema = mongoose.Schema({
    // dori: {
    //     type: String,
    //     required: true
    // },
    // doza: {
    //     type: String,
    //     required: true
    // },
    // takrorlanish: {
    //     type: String,
    //     required: true
    // },
    // davomiylik: {
    //     type: String,
    //     required: true
    // },
    // eslatma: {
    //     type: String
    // }

    dorini_nomi: String,
    dozasi: String,
    kunlik_takrorlanishi: String,
    davomiyligi: String,
    eslatma: String,
})

export default mongoose.model("retsepts", retseptSchema)