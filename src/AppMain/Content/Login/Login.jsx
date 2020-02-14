import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../../../common/FormsControls/FormsControl.module.css"


const LoginForm = ({handleSubmit, error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input, "text")}
                {createField("Password", "password", [required], Input, "password")}
                {createField("checkbox", "rememberMe", [], Input, "checkbox")}



                {error && <div className={s.sumError}>
                    {error}
                </div>
                }

                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'

})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Redirect to={"profile"}/>
    }


    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );


}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);








