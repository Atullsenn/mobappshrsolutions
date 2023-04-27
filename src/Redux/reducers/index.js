import handleLoginLogout from "./LoginLogout";
import ToastMessage from "./ToastMessage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    handleLoginLogout,
    ToastMessage,
})

export default rootReducer;