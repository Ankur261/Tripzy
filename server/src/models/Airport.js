import mongoose from "mongoose";

const airportSchema = new mongoose.Schema({
    name: String,
    code: String,
    city: String,
    country: String
});

const Airport = mongoose.model('Airport', airportSchema);
export default Airport;