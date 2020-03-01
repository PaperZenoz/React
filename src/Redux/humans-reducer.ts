import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {HumansType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_HUMANS = 'SET_HUMANS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    humans: [] as Array<HumansType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
}

type InitialState = typeof initialState


const humansReducer = (state = initialState, action: any): InitialState => {


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

type FollowSuccessAT = {
    type: typeof FOLLOW,
    id: number
}
export const followSuccess = (id: number): FollowSuccessAT => ({type: FOLLOW, id})
type UnfollowSuccess = {
    type: typeof UNFOLLOW,
    id: number
}
export const unfollowSuccess = (id: number): UnfollowSuccess => ({type: UNFOLLOW, id})
type RequestHumansAT = {
    type: typeof SET_HUMANS,
    humans: Array<HumansType>
}
export const requestHumans = (humans: Array<HumansType>): RequestHumansAT => ({type: SET_HUMANS, humans})
type SetTotalUsersCountAT = {
    type: typeof SET_TOTAL_USERS_COUNT,
    count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountAT => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
type SetCurrentPageAT = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
type SetIsFetchingAT = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingAT => ({type: TOGGLE_IS_FETCHING, isFetching})


export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
export const getHumans = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(setIsFetching(true));

        let data = await usersAPI.getHumans(currentPage, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setCurrentPage(currentPage))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(requestHumans(data.items))
    }

}
const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {

    dispatch(toggleFollowingProgress(true, userId))

    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}
export const follow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}


export default humansReducer;