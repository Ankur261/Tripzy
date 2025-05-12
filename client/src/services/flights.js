import fetchData from './fetchData';

export async function getFlightList() {

    const result = await fetchData("flights");
    return result ;
}