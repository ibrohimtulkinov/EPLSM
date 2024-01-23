import axios from "axios";


export const baseUrl = "https://api.eplsm.uz/"


const instance = axios.create({
    baseURL: baseUrl + "api/"
})

export default instance