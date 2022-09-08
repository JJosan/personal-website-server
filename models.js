import mongoose from "mongoose"

let models = {}

dbConnect()

// connecting to MongoDB database and creating data schema
async function dbConnect() {
    console.log("trying to connect to mongodb database")
    await mongoose.connect("mongodb+srv://user:pass@cluster0.uukke.mongodb.net/?retryWrites=true&w=majority")

    console.log("connected to the database!")

    // set up schemas and models
    const shoeSchema = new mongoose.Schema({
        Shoes : [[String, String]],
        LastUpdated : String
    })
    models.Shoe = mongoose.model("Shoe", shoeSchema)

    const poopSchema = new mongoose.Schema({
        name : String
    })
    models.Poop = mongoose.model("Poop", poopSchema)

    console.log("created db models and schemas")
}


export default models;