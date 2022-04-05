import axios from 'axios';
const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://full-stack-developer-server.herokuapp.com/api/tuits';
// set REACT_APP_API_BASE in netlify's setting
// const API_BASE = process.env.REACT_APP_API_BASE;
// const TUITS_API = `${API_BASE}/tuits`;


export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}


export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data
}

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    // console.log("tuits from server");
    // console.log(tuit);
    return response.data;
}