import React from 'react';
import s from './Content.module.css';
import AddPost from './Profile/AddPost/AddPost';
import Post from './Profile/Post/Post';


const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.wrapper}>

                <AddPost />
                <Post text='React (иногда React.js или ReactJS) — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.' name='Иванов Иван' like='1'/>
                <Post text='React разрабатывается и поддерживается Facebook, Instagram и сообществом отдельных разработчиков и корпораций.' name='Петр Петрович' like='2'/>
                <Post text='React может использоваться для разработки одностраничных и мобильных приложений.' name='Олег Юрьевич' like='10'/>
                <Post text='Его цель — предоставить высокую скорость, простоту и масштабируемость. ' name='Дядька Черномор' like='3'/>
                <Post text='В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как Redux.' name='Василий Шустрый' like='15'/>
                <Post text='А это ещё одно сообщение.' name='Конь Буденый' like='40'/>
            </div>
        </div>
    );
}


export default Content;




