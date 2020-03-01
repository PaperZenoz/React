import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {PhotosType, PostArrType, ProfileType} from "../types/types";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'




let initialState = {
    PostArr: [
        {
            text: "React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.",
            name: "Иванов Иван",
            like: 1,
            id: 1
        }, {
            text: "React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.",
            name: "Петр Петрович",
            like: 2,
            id: 2
        }, {
            text: "React может использоваться для разработки одностраничных и мобильных приложений.",
            name: "Олег Юрьевич",
            like: 10,
            id: 3
        }, {
            text: "Его цель — предоставить высокую скорость, простоту и масштабируемость.",
            name: "Дядька Черномор",
            like: 11,
            id: 50
        }, {
            text: "В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как Redux.",
            name: "Василий Шустрый",
            like: 6,
            id: 5
        }, {
            text: "А это ещё одно сообщение.",
            name: "Конь Буденый",
            like: 40,
            id: 6
        }
    ]as Array<PostArrType>,
    newPostText: "Samurai",
    profile: null as ProfileType | null,
    status: "",
}

export type InitialStateType = typeof initialState



const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {


            let newPost = {
                text: action.newPostText,
                name: "Иванов Иван",
                like: "1"
            }


            return {
                ...state,
                PostArr: [...state.PostArr, newPost] as Array<PostArrType>,
                newPostText: ''
            }
        }


        case  SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case  SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                PostArr: state.PostArr.filter(p => p.id != action.id)

            }
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos: action} as ProfileType


            }
        }


        default: {
            return state
        }

    }
}


type AddPostActionCreaterActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const addPostActionCreater = (newPostText: string): AddPostActionCreaterActionType => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile})






export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch:any) => {
    let response = await  profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))

        }

}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos))

    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("editprofile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}





type SetStatusAT = {
    type: typeof SET_STATUS,
    status: string
}
export const setStatus = (status: string): SetStatusAT => ({type: SET_STATUS, status})
type DeletePostAT = {
    type: typeof DELETE_POST,
    id: number
}
export const deletePost = (id: number): DeletePostAT => ({type: DELETE_POST, id})
type SavePhotoSuccess = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccess => ({type: SAVE_PHOTO_SUCCESS, photos})


export default profileReducer;