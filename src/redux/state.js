import  profileReducer  from './profileReducer'
import  dialogsReducer  from './dialogsReducer'

const store = {
    _state: {
        profile: {
            posts: [
                { id: 1, message: 'Lovers', likeCount: 12 },
                { id: 2, message: 'I`m fine', likeCount: 14 },
                { id: 3, message: 'Hi, how are you?', likeCount: 22 },
                { id: 4, message: 'My first post', likeCount: 30 },
            ],
            newPost: 'Legacy'
        },
        dialog: {
            dialogs: [
                { id: 1, name: 'Sasha' },
                { id: 2, name: 'Natasha' },
                { id: 3, name: 'Dima' },
                { id: 4, name: 'Mama' },
                { id: 5, name: 'Papa' },
                { id: 6, name: 'Kolya' },
                { id: 7, name: 'Olya' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I`m fine' },
                { id: 4, message: 'My names Figaro' },
                { id: 5, message: 'Good job' },
                { id: 6, message: 'Banana' },
            ],
            newMessage: 'Future'
        }
    },
    _rerender() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerender = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialog, action)

        this._rerender(this._state)
    }
}

export default store;