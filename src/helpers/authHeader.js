export function authHeader() {
    // return authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('token'));

    if (user && token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
}
