import fetchData from './fetchData';

export async function checkEmail(email) {
    console.log(email)
    const result = await fetchData("auth/check", {email: email}, "POST");
    return result;
}

export async function register(body) {

    const result = await fetchData("auth/register", body, "POST");
    return result;
}

export async function logIn(body) {

    const result = await fetchData("auth/login", body, "POST");
    return result;
}