// Login Actions
export const handleLogin = () => {
    return {
        type: 'HANDLELOGIN',
    }
}

export const handleLogout = () => {
    return {
        type: 'HANDLELOGOUT',
    }
}

// Toast Actions
export const toastLoginSuccessfullyMessage = () => {
    return {
        type: 'TOASTLOGINSUCCESSFULLYMESSAGE',
    }
}

export const toastLoginFailedMessage = () => {
    return {
        type: 'TOASTLOGINFAILEDMESSAGE',
    }
}

export const toastLogoutMessage = () => {
    return {
        type: 'TOASTLOGOUTMESSAGE',
    }
}