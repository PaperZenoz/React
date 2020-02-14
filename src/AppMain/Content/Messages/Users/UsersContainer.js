import React from 'react';

import Users from "./Users";
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
        UserArr: state.messagesPage.UserArr
    }

}


const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;




