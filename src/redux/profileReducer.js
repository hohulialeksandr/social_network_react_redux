import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const initialState = {
    posts: [
        { id: 1, message: 'Lovers', likeCount: 12 },
        { id: 2, message: 'I`m fine', likeCount: 14 },
        { id: 3, message: 'Hi, how are you?', likeCount: 22 },
        { id: 4, message: 'My first post', likeCount: 30 },
    ],
    profile: null,
    status: 'Future Legacy'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({ type: 'ADD_POST', newPostText })
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile })
export const setStatus = (status) => ({ type: 'SET_STATUS', status })
export const savePhotoSuccess = (photos) => ({ type: 'SAVE_PHOTO_SUCCESS', photos })

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('editProfile', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer;