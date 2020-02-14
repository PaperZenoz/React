import React from 'react';

import {connect} from 'react-redux'
import {follow, getHumans, setCurrentPage, toggleFollowingProgress, unfollow,} from '../../../Redux/humans-reducer';
import Humans from './Humans.jsx';
import Preloader from "../../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getHumansS,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../../Redux/humans-selectors";


class HumansContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;

        this.props.getHumans(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize, getHumans} = this.props;
        getHumans(pageNumber, pageSize)


    }

    render() {

        return <>
        {this.props.isFetching ?
            <Preloader/> : null

        }
        <Humans totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                humans={this.props.humans}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

//
// let mapStateToProps = (state) => {
//     return {
//         humans: state.humansPage.humans,
//         pageSize: state.humansPage.pageSize,
//         totalUsersCount: state.humansPage.totalUsersCount,
//         currentPage: state.humansPage.currentPage,
//         isFetching: state.humansPage.isFetching,
//         followingInProgress: state.humansPage.followingInProgress
//
//     }
// }


let mapStateToProps = (state) => {
    return {
        humans: getHumansS(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps, {getHumans, follow, unfollow, setCurrentPage, toggleFollowingProgress}),
)(HumansContainer)


