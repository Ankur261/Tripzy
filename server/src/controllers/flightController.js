import Flight from "../models/Flight.js";

export const createFlight = async (request, response) =>{
    try {
        const flight = new Flight(request, response);
        await flight.save();
        response.status(200).json(flight);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

export const getAllFlights = async (request, response) =>{
    try {
        const flights = await Flight.find();
        response.json(flights);
    } catch (error) {
        response.status(500).json({ error: error.message});
    }
};