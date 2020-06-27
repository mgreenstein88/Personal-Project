const initialState = {
    admin: {},
    isLoggedIn: false
}

const LOGIN_ADMIN = 'LOGIN ADMIN'
const LOGOUT_ADMIN = 'LOGOUT ADMIN'
const GET_ADMIN = 'GET ADMIN'

export function loginAdmin(admin){
    return {
        type: LOGIN_ADMIN,
        payload: admin
    }
}

export function logoutAdmin(){
    return {
        type: LOGOUT_ADMIN,
        payload: initialState
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ADMIN:
            return {...state, admin: action.pauload, isLoggedIn: true}
        case LOGOUT_ADMIN:
            return {...state, ...action.payload}
        default:
            return initialState
    }
}