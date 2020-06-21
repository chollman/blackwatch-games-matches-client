import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Users from '../components/Users';
import { fetchUsers } from '../../../state/users/actions';

const UsersContainer = ({ users }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return <Users users={users.data} />;
};

const mapStateToProps = state => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, {
    fetchUsers,
})(UsersContainer);
