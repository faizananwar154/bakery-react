import {FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./userTypes";

const initialState = {
    loading: false,
    users: [],
    error: ''
};

function userReducer(prevState = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...prevState,
            loading: true,
        };
        case FETCH_USER_SUCCESS: return {
            ...prevState,
            loading: false,
            users: action.payload,
            error: ''
        };
        case FETCH_USER_FAILURE: return {
            ...prevState,
            loading: false,
            users: [],
            error: action.payload
        };
        default: return prevState;
    }
}

export default userReducer;
