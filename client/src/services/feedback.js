import fetchData from './fetchData';

export async function feedback(body) {

    const result = await fetchData("feedback", body, "POST");
    return result ;
}