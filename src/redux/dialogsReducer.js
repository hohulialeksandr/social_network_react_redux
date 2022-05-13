const initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.newMessage }]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessage) => ({type: 'SEND_MESSAGE', newMessage})
export default dialogsReducer;