import { FETCH_USERS } from './types';
import reqres from '../../apis/reqres';

export const fetchUsers = () => async dispatch => {
    const response = await reqres.get('/users');
    dispatch({ type: FETCH_USERS, payload: response.data });
};
