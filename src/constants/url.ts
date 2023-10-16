export const BASE_URL_DEVELOPMENT = "http://localhost:5173"
export const BASE_URL_BE_DEVELOPMENT = "http://localhost:8080"
export const BASE_URL_STAGING = "https://back-end-ematee.vercel.app"
export const HEROKU_SERVER = "https://emate-af7e6f8fb027.herokuapp.com";

export const BASE_URL = HEROKU_SERVER

export const URL_ENDPOINT = {
    HOME: '/',
    LOGIN: '/login',
    USER : '/user',
    USER_DETAIL : '/user/:userId',
    WALLET: "/wallet",
    REQUEST_CASH:"/request-cash",
    ORDER:"/order",

}
export const API_ENDPOINT_QUERY = {
    USER_DETAIL: '/getDetail/:userId',
    RECHARGE_WALLET: '/recharge/:userId',
    WITHDRAW_WALLET: '/withdraw/:userId',
    GET_ALL_REQUEST_COIN: "/requestCoin/all",
    GET_REVENUE_ADMIN: "/revenue/rangeDate",
    GET_COURSE_BY_USER: "/course/mentor",
    GET_ALL_ORDERS: "/order",
    GET_ORDER_DETAIL: "/order/:orderId",
    APPROVE_REQUEST: "/requestCoin",
    GET_ALL_REPORT_LIST: "/revenue/parameters",
    GET_REVENUE_BY_DATE: "/revenue/rangeDate"

}