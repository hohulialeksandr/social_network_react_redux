import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow, ...props }) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
            {
                users.map((u, ind) => <User user={u}
                    key={ind}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow} />)
            }
        </div>
    )
}

export default Users