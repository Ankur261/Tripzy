import Airport from '../models/Airport.js';

export const createAirport = async (request, response) => {
    try {
        const airport = new Airport(request.body);
        await airport.save();
        response.status(200).json(airport);
    } catch (error) {
        response.status(400).json({ error: error.message });
    }
};

export const getAllAirports = async (request, response) => {
    try {
        const airports = await Airport.find();
        response.json(airports);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};