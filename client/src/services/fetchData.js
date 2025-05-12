

export default async function fetchData(apiName) {
    const baseURL = "http://localhost:3000/api/";

    try {
        const response = await fetch(baseURL + apiName);
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }


}