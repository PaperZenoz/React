import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })

    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
            });

    }

    render() {
        return (
            <div className={s.wrap}>
                {!this.state.editMode &&
                <div>
                    <p onClick={this.activateEditMode}>{this.props.status || "Тут мог быть ваш статус"}</p>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                           onBlur={this.deactivateEditMode}></input>
                </div>
                }
            </div>
        );

    }
}


export default ProfileStatus;






