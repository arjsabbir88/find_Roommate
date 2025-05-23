// src/components/ProtectedRoute.jsx
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { Loading } from '../Component/Loading/Loading';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (!user) {
            navigate('/auth/login', { replace: true });
        }
    }, [user, loading, navigate]);

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return null;
    }

    return children;
};

export default ProtectedRoute;