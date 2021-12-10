import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/authContext";
import { isAuth } from "../../hoc/isAuth";
import * as authService from "../../services/authService.js";

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext()
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout()
                navigate("/")
            })
    }, [])


    return null;

}
export default isAuth(Logout);