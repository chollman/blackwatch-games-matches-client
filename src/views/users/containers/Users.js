import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Users from '../components/Users';
import { fetchUsers } from '../../../state/users/actions';

const UsersContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return <Users users={users} />;
};

export default UsersContainer;
