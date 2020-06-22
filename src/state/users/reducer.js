import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS } from './types';

const INITIAL_STATE = {
    total: 0,
    data: [],
    isLoading: false,
    error: '',
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case FETCH_USERS:
            return { ...state, isLoading: true };
        case FETCH_USERS_SUCCESS:
            return { ...state, isLoading: false, ...payload };
        case FETCH_USERS_ERROR:
            return { ...state, isLoading: false, error: payload };
        default:
            return state;
    }
};
