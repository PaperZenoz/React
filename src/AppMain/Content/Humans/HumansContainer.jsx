import React from 'react';

import {connect} from 'react-redux'
import {followAC, unfollowAC, setHumansAC, setCurrentPageAC, setTotalUsersCountAC} from "../../../Redux/humans-reducer";
import * as axios from 'axios';
import Humans from "./Humans";


class HumansAPIContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setHumans(response.data.items)




        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setHumans(response.data.items)
        })

    }

    render() {



        return <Humans totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} humans={this.props.humans} follow={this.props.follow} unfollow={this.props.unfollow}/>
    }

}



let mapStateToProps = (state) => {
    return {
        humans: state.humansPage.humans,
        pageSize: state.humansPage.pageSize,
        totalUsersCount: state.humansPage.totalUsersCount,
        currentPage: state.humansPage.currentPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },

        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },

        setHumans: (humans) => {
            dispatch(setHumansAC(humans))

        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }

}


const HumansContainer = connect(mapStateToProps, mapDispatchToProps)(HumansAPIContainer);

export default HumansContainer;




