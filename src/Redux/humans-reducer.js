const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    UserArr: [
        {
            id: 1,
            name: "Иванов Иван"
        },
        {
            id: 2,
            name: "Петр Петрович"
        },
        {
            id: 3,
            name: "Олег Юрьевич"
        },
        {
            id: 4,
            name: "Дядька Черномор"
        },
        {
            id: 5,
            name: "Василий Шустрый"
        },
        {
            id: 6,
            name: "Конь Буденый"
        },
    ],
    DialogArr: [
        {id: 1, message: "Это"}, {id: 2, message: "Какой-то"}, {id: 3, message: "Очень странный"}, {
            id: 4,
            message: "Диалог"
        }, {id: 5, message: "Для теста"},
    ],
    newMessageText: "Samurai"
}


const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.message
            }

        }

        case ADD_MESSAGE: {
            let body = state.newMessageText;

            return {
                ...state,
                newMessageText: '',
                DialogArr: [...state.DialogArr, {id: 6, message: body}]
            }

        }

        default:
            return state

    }
}


export const addMessageCreator = () => ({type: ADD_MESSAGE})


export const onMessageChangeCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    message: body
})


export default messageReducer;