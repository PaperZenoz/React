import React from "react";
import s from './FormsControl.module.css'
import {Field} from "redux-form";


const FormControl = ({input, meta: {touched, error}, children})=>{
    const hasError = touched && error


    return (
        <div className={s.wrap + " " + ( hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
}


export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;

    return <FormControl {...props}> <input {...input} {...props}/> </FormControl>

}

export const createField = (placeholder, name, validators, component, type) => (
    <div><Field placeholder={placeholder} name={name} validate={validators} component={component} type={type}/></div>)
