const axios = require('axios');

export async function fetchCommunities() {
    let response = await axios.get("https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities")
    let data = await response
    return data;
}

export async function fetchHomes() {
    let response = await axios.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes')
    let data = await response
    return data;
}


