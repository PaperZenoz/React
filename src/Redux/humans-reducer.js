import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_HUMANS = 'SET_HUMANS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    humans: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}


const humansReducer = (state = initialState, action) => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                humans: updateObjectInArray(state.humans, action.id, "id", {followed: true})
            }


        case UNFOLLOW:
            return {
                ...state,
                humans: updateObjectInArray(state.humans, action.id, "id", {followed: false})
            }


        case SET_HUMANS:
            return {...state, humans: action.humans}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }


        default:
            return state;

    }


}


export const followSuccess = (id) => ({type: FOLLOW, id})
export const unfollowSuccess = (id) => ({type: UNFOLLOW, id})
export const requestHumans = (humans) => ({type: SET_HUMANS, humans})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
export const getHumans = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));

        let data = await usersAPI.getHumans(currentPage, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setCurrentPage(currentPage))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(requestHumans(data.items))
    }

}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

    dispatch(toggleFollowingProgress(true, userId))

    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}


export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}


export default humansReducer;