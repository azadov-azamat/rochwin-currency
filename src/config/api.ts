import axios from "axios";

export const uriNbu = 'https://cbu.uz/uz'
export const uriForex = 'https://api.fastforex.io'

export const http_nbu = axios.create({
    baseURL: uriNbu,
    headers: {
        Accept: "application/json"
    }
})
export const http_forex = axios.create({
    baseURL: uriForex,
    headers: {
        Accept: "application/json"
    }
})