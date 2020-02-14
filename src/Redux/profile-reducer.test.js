import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    PostArr: [
        {
            text: "React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.",
            name: "Иванов Иван",
            like: "1",
            id: "1"
        }, {
            text: "React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.",
            name: "Петр Петрович",
            like: "2",
            id: "2"
        }, {
            text: "React может использоваться для разработки одностраничных и мобильных приложений.",
            name: "Олег Юрьевич",
            like: "10",
            id: "3"
        }, {
            text: "Его цель — предоставить высокую скорость, простоту и масштабируемость.",
            name: "Дядька Черномор",
            like: "3",
            id: "4"
        }, {
            text: "В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как Redux.",
            name: "Василий Шустрый",
            like: "15",
            id: "5"
        }, {
            text: "А это ещё одно сообщение.",
            name: "Конь Буденый",
            like: "40",
            id: "6"
        }
    ],
    newPostText: "Samurai",
    profile: null,
    status: ""

}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {


            let newPost = {
                text: action.newPostText,
                name: "Иванов Иван",
                like: "1"
            }


            return {
                ...state,
                PostArr: [...state.PostArr, newPost],
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


        default: {
            return state
        }

    }
}


export const addPostActionCreater = (newPostText) => ({type: ADD_POST, newPostText})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))

        }
    })
}


export const setStatus = (status) => ({type: SET_STATUS, status})


export default profileReducer;