import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService.js";

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext()
    useEffect(() => {
        console.log(user.accessToken)
        authService.logout(user.accessToken)
            .then(() => {
                logout()
                navigate("/")
            })
    }, [])


    return null;

}
export default Logout;