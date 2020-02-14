import React from 'react';
import Profile from './Profile'
import {connect} from 'react-redux'

import {getStatus, getUserProfile, updateStatus} from '../../../Redux/profile-reducer';
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {


    componentDidMount(props) {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizeduserId
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

    }



    render() {


        return (

            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
}


let mapStateToProps = (state) => ({

    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizeduserId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
        withRouter,
        withAuthRedirect,
)(ProfileContainer);


