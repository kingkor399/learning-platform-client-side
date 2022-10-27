import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthPorvider } from '../../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthPorvider);
    let location = useLocation();
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}}replace></Navigate>
    }
    return children;
};

export default PrivateRoute;