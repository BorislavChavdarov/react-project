import { useAuthContext } from '../contexts/authContext.js';
import { Navigate } from 'react-router-dom';

export const isAuth = (Component) => {

    const WrapperComponent = (props) => {
        const { user } = useAuthContext();
      
        return (Boolean(user.accessToken))
            ? <Component {...props} user={user} />
            : <Navigate to="/login" />
    }

    return WrapperComponent;
};
