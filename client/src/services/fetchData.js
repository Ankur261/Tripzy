

export default async function fetchData(apiName, body, method) {
    const baseURL = "http://localhost:3000/api/";

    try {
         console.log(baseURL + apiName);
         console.log(JSON.stringify(body));
        const response = await fetch(baseURL + apiName, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: method ?? "GET",
            body: JSON.stringify(body)
        });
       
        const data = await response.json();
        return data;

    } catch (error) {
        console.log(error);
        throw error;
    }


}