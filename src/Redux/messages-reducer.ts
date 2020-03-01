const ADD_MESSAGE = 'ADD-MESSAGE';

type UserArrType = {
    id: number,
    name: string
}

type DialogArrType = {
    id: number,
    message: string
}

let initialState = {
    UserArr: [
        {id: 1, name: "Иванов Иван"},
        {id: 2, name: "Петр Петрович"},
        {id: 3, name: "Олег Юрьевич"},
        {id: 4, name: "Дядька Черномор"},
        {id: 5, name: "Василий Шустрый"},
        {id: 6, name: "Конь Буденый"},
    ] as Array<UserArrType>,
    DialogArr: [
        {id: 1, message: "Это"},
        {id: 2, message: "Какой-то"},
        {id: 3, message: "Очень странный"},
        {id: 4, message: "Диалог"},
        {id: 5, message: "Для теста"},
    ] as Array<DialogArrType>,
}

export type InitialStateType = typeof initialState


const messageReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let body = action.newMessageText;

            return {
                ...state,
                DialogArr: [...state.DialogArr, {id: 6, message: body}]
            }

        }

        default:
            return state

    }
}

type AddMessageCreatorActionType = {
    type: typeof ADD_MESSAGE,
    newMessageText: string
}


export const addMessageCreator = (newMessageText: string): AddMessageCreatorActionType => ({type: ADD_MESSAGE, newMessageText})


export default messageReducer;