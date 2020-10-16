import React, {useEffect} from "react";
import { fetchUsers } from "../redux";
import {connect} from "react-redux";

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers();
    }, []);
    return userData.loading ? ( <h2> Loading... </h2> ) :
        userData.error ? ( <h2> { userData.error } </h2> )
            : (
                <div>
                    <h1> User List </h1>
                    {
                        userData && userData.users && userData.users.map( (user) => <p> { user.name } </p> )
                    }
                </div>
            )
}

function mapStateToProps(state) {
    return {
        userData: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: function() {
            dispatch(fetchUsers());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)