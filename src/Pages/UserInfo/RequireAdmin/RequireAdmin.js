import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Preloader from '../../Shared/Preloader/Preloader';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    let location = useLocation();


    if (loading || adminLoading) {
        return <Preloader />
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/singIn" state={{ from: location }} replace />;
    }


    return children;

};

export default RequireAdmin;