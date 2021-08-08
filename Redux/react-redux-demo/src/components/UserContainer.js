import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers();
    }, []);
    
    console.log("userData", userData);
    
    return userData.user.loading ? (
        <h2>Loading...</h2>
    ) : userData.user.error ? (
        <h2>{userData.error}</h2>
    ) :
    (
        <div>
            <h2>User List: </h2>
            <p>
                {
                    userData && 
                    userData.user && 
                    userData.user.users && 
                    userData.user.users.map(user => <p>{user.name}</p>)
                }
            </p>
        </div>
    )
}

// step 1
const mapStateToProps = state => {
    return {
        userData: state
    }
}

// step 2 
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect (
    mapStateToProps, 
    mapDispatchToProps
)(UserContainer)
