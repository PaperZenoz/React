import React from 'react';
import profileReducer, {addPostActionCreater, deletePost} from "./profile-reducer";

let state = {
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

}


test('new post should be added', () => {
    let action = addPostActionCreater("samurai")
    let newState = profileReducer(state, action)
    expect(newState.PostArr.length).toBe(7)

});

test('must be samurai', () => {
    let action = addPostActionCreater("samurai")
    let newState = profileReducer(state, action)
    expect(newState.PostArr[6].text).toBe("samurai")

});


test('after deleting', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.PostArr.length).toBe(5)

});


test('incorrect id', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.PostArr.length).toBe(6)

});








