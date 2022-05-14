import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Preloader from '../../Shared/Preloader/Preloader';

const Protected = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();


    if (loading) {
        return <Preloader />
    }

    if (!user) {

        return <Navigate to="/singIn" state={{ from: location }} replace />;
    }


    return children;

};

export default Protected;