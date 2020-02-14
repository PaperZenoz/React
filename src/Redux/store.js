// import messageReducer from './messages-reducer'
// import profileReducer from './profile-reducer'
//
//
// let store = {
//     _state: {
//         messagesPage: {
//             UserArr: [
//                 {
//                     id: 1,
//                     name: "Иванов Иван"
//                 },
//                 {
//                     id: 2,
//                     name: "Петр Петрович"
//                 },
//                 {
//                     id: 3,
//                     name: "Олег Юрьевич"
//                 },
//                 {
//                     id: 4,
//                     name: "Дядька Черномор"
//                 },
//                 {
//                     id: 5,
//                     name: "Василий Шустрый"
//                 },
//                 {
//                     id: 6,
//                     name: "Конь Буденый"
//                 },
//             ],
//             DialogArr: [
//                 {id: 1, message: "Это"}, {id: 2, message: "Какой-то"}, {id: 3, message: "Очень странный"}, {
//                     id: 4,
//                     message: "Диалог"
//                 }, {id: 5, message: "Для теста"},
//             ],
//             newMessageText: "Samurai"
//         },
//
//         profilePage: {
//             PostArr: [
//                 {
//                     text: "React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.",
//                     name: "Иванов Иван",
//                     like: "1"
//                 }, {
//                     text: "React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.",
//                     name: "Петр Петрович",
//                     like: "2"
//                 }, {
//                     text: "React может использоваться для разработки одностраничных и мобильных приложений.",
//                     name: "Олег Юрьевич",
//                     like: "10"
//                 }, {
//                     text: "Его цель — предоставить высокую скорость, простоту и масштабируемость.",
//                     name: "Дядька Черномор",
//                     like: "3"
//                 }, {
//                     text: "В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как Redux.",
//                     name: "Василий Шустрый",
//                     like: "15"
//                 }, {
//                     text: "А это ещё одно сообщение.",
//                     name: "Конь Буденый",
//                     like: "40"
//                 }
//             ],
//             newPostText: "Samurai"
//         }
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer (this._state.profilePage, action);
//         this._state.messagesPage = messageReducer(this._state.messagesPage, action);
//
//         this._callSubscriber(this._state)
//     }
//
//
// }
//
//
// window.store = store;
// export default store;