import React from 'react';
import './App.css';
import AppMain from './AppMain/AppMain';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {BrowserRouter, withRouter} from "react-router-dom";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import {compose} from "redux";
import store from "./Redux/redux-store";


class App extends React.Component {
    cactchAllUnhandledErrors = (promiseRejectionEvent) =>{

    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.cactchAllUnhandledErrors);
    }

    componentWillUnmount(){
        window.removeEventListener("unhandledrejection", this.cactchAllUnhandledErrors);

    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>

        }


        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <AppMain/>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const SamuraiApp = (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiApp;