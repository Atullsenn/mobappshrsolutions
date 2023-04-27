import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState = null;

const loginSuccessfully = () => {
    toast.success('Login Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    return null
};

const loginFailed = () => {
    toast.error('Login Failed', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    return null
};

const logout = () => {
    toast.warn('Logout Successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    return null
};

const ToastMessage = (state = initialState, action) => {
    switch (action.type) {
        case "TOASTLOGINSUCCESSFULLYMESSAGE": return state = loginSuccessfully();
        case "TOASTLOGINFAILEDMESSAGE": return state = loginFailed();
        case "TOASTLOGOUTMESSAGE": return state = logout();
        default: return state;
    }
}

export default ToastMessage