//User actions
const REGISTER_USER = "REGISTER_USER";
const CHANGE_USER = "CHANGE_USER";
const LOGOUT = "LOGOUT";


export const registerUser = (user, email, password) => {
    return {
        type: REGISTER_USER,
        user,
        email,
        password
    }
}

export const changeUser = (user, email, password) => {
    return {
        type: CHANGE_USER,
        user,
        email,
        password
    }
}

export const logOut = () => {
    return {
        type: LOGOUT
    }
}

const initialState = {
    user: "",
    email: "",
    password: "",
    isLogged: false
}

//Reducers

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                user: action.user,
                email: action.email,
                password: action.password,
                isLogged: true
            }
        case CHANGE_USER:
            return {
                ...state,
                user: action.user,
                email: action.email,
                password: action.password,
                isLogged: true
            }
        case LOGOUT:
            return {
                ...state,
                isLogged: false
            }
        default:
            return state
    }
}