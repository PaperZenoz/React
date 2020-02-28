import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "b21a427e-73ef-4a06-841a-f4eb58a98aec",
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
    },

    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image', photoFile)

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    },

    saveProfile(profile){
        return instance.put('profile', profile)

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

    login(email, password, rememberMe = false, сaptcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, сaptcha})
    },

    logout(){
        return instance.delete(`auth/login`)

    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    },
}

