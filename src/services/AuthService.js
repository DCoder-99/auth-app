import axios from 'axios';
import React from 'react'

const API_DOMAIN = "https://authmeeting.atviettelsolutions.com/vmp/";
const API_MAP = {
    ROOM: {
        JOIN_NOW: API_DOMAIN + "rooms/event/room-now"
    },
    USER: {
        GET_USER_TOKEN: API_DOMAIN + "get-user-token",
    },
    AUTH: {
        LOGIN: API_DOMAIN + "login",
        REFRESH_TOKEN: API_DOMAIN + "auth/refresh"
    }
}


const axiosClient = axios.create({
    headers: {
        'content-type': 'application/json',
    }
});


axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    }
)

class AuthService {
    login(data) {
        return axiosClient.post(API_MAP.AUTH.LOGIN, data)
    }
}

export default new AuthService();