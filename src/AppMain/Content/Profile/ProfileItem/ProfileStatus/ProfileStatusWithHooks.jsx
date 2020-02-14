import React, {useState, useEffect} from 'react';
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])



    return (
        <div className={s.wrap}>
            {!editMode &&
            <div>
                <p onClick={activateMode}>{props.status || "Тут мог быть ваш статус"}</p>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}></input>
            </div>
            }
        </div>
    );

}


export default ProfileStatusWithHooks;






