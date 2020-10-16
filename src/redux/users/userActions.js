import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAILURE } from './userTypes'
import axios from 'axios'

export function fetchUserRequest() {
    return {
      type: FETCH_USER_REQUEST
    };
}

export function fetchUserSuccess(users) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    };
}

export function fetchUserFailure(error) {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    };
}

export function fetchUsers() {
    return function(dispatch) {
        dispatch(fetchUserRequest());
        axios.get('http://localhost:4000/api/v1/blogs/')
            .then((response) => {
                const users = response.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch( (error) => {
                dispatch(fetchUserFailure(error.message));
            });
    }
}
