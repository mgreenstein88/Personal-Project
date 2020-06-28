import axios from 'axios'

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

export function getAdmin(){
    const admin = axios.get('/auth/admin')
    
    return {
        type: GET_ADMIN,
        payload: admin
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ADMIN:
            return {...state, admin: action.payload, isLoggedIn: true}
        case LOGOUT_ADMIN:
            return {...state, ...action.payload}
        case GET_ADMIN + '_PENDING':
            return state
        case GET_ADMIN + '_FULFILLED':
            return {...state, admin: action.payload.data, isLoggedIn: true}
        case GET_ADMIN + '_REJECTED':
            return initialState
        default:
            return initialState
    }
}