import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/image/images.png'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <div>
                <span>
                    <div>
                        <NavLink to={'/profile?id=' + user.id}>
                            <img src={user.photos.small != null
                                ? user.photo.small
                                : userPhoto} className={s.usersPhotos} alt='' />
                        </NavLink>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default User