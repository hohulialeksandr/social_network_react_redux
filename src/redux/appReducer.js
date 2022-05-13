import { getUserData } from './authReducer'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': 
        return {
            ...state,
            initialized: true
        }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getUserData())

    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;