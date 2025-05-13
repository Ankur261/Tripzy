import fetchData from './fetchData';

export async function bookFlight(body) {

    const result = await fetchData("bookings", body, "POST");
    return result;
}

export async function getUserBookings(userId) {
const url = "http://localhost:3000/api/bookings/";

    try {
         console.log(url + userId);
         console.log(JSON.stringify(userId));
        const response = await fetch(url + userId);
       
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}