import {createSelector} from "reselect";

const getHumansSelector = (state) => {
    return state.humansPage.humans
}


export const getHumansS = createSelector(getHumansSelector, (users) => {
    return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.humansPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.humansPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.humansPage.currentPage
}

export const getIsFetching = (state) => {
    return state.humansPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.humansPage.followingInProgress
}
