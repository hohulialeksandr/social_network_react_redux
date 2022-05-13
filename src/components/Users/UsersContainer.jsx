import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../redux/usersReducer'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize } = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return <div>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress} />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })
)(UsersContainer)