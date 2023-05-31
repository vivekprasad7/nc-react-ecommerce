export const authReducer = (state, action) => {
    switch(action.type){
        case"SET_AUTH_LOADING":
        return{...state, authLoading : action.payload}
        case"SET_ISLOGGEDIN":
        return{...state, isLoggedIn : action.payload}
        case"SET_USER":
        return{...state, user: action.payload}
        case"SET_TOKEN":
        return{...state, token: action.payload}
        case"SET_ERROR":
        return{...state, error : action.payload}
        default:
            return state;
    }
}