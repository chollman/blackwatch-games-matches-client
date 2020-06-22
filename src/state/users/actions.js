import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './types';
import reqres from '../../apis/reqres';

export const fetchUsers = () => async dispatch => {
    dispatch({ type: FETCH_USERS });
    try {
        const response = await reqres.get('/users?per_page=12');
        dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({
            type: FETCH_USERS_ERROR,
            payload: error.message,
        });
    }
};
