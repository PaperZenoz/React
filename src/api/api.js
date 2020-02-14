import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "3afa1832-01c3-40bd-839c-f087311901f1",
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'


})

export const profileAPI = {
    getProfile(id) {
        return instance.get('profile/' + id)
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },

    updateStatus(status) {
        return instance.put('profile/status/', {status})
    }
}


export const usersAPI = {
    getHumans(currentPage = 1, pageSize = 50) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/` + id)
    },
    unfollow(id) {
        return instance.delete(`follow/` + id)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout(){
        return instance.delete(`auth/login`)

    }
}

