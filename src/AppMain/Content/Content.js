import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import s from './Content.module.css';
import Music from './Music/Music';
import News from './News/News';
import Settings from './Settings/Settings';
import HumansContainer from './Humans/HumansContainer';
import Login from "./Login/Login";
import {withSuspence} from "../../hoc/withSuspence";


const Messages = React.lazy(() => import('./Messages/Messages'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));


const Content = () => {

    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                <Switch>
                    <Route render={withSuspence(ProfileContainer)} path='/profile/:userId?'/>
                    <Route render={withSuspence(Messages)} path='/messages'/>
                    <Route render={() => <HumansContainer/>} path='/humans'/>
                    <Route render={() => <Music/>} path='/music'/>
                    <Route render={() => <News/>} path='/news'/>
                    <Route render={() => <Settings/>} path='/settings'/>
                    <Route render={() => <Login/>} path='/login'/>

                    <Route render={() => <div>404 NOT FOUND</div>} path='*'/>


                </Switch>

            </div>
        </div>
    );
}

export default Content;








