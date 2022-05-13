import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

const redusers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;