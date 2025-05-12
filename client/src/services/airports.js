import fetchData from './fetchData';

export async function getAirports() {

    const result = await fetchData("airports");
    return result ;
}