import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/authContext";
import * as authService from "../../services/authService";



const Login = () => {
  const navigate = useNavigate();
const {login} = useAuthContext();

  const submitHandler =  (e) => {
    e.preventDefault();
    let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    console.log(email, password)
    authService.login(email, password)
 .then(res => {
login(res);
navigate("/")
 })

  };
    return (
    <div className="w3-card-4 w3-display-middle w3-quarter ">
    <div className="w3-container w3-blue">
      <h2>Login</h2>
    </div>
    <form className="w3-container" method="POST" onSubmit={submitHandler}>
      <p>      
      <label className="w3-text-blue"><b>Email</b></label>
      <input className="w3-input w3-border w3-white" name="email" type="text" /></p>
      <p>      
      <label className="w3-text-blue"><b>Password</b></label>
      <input className="w3-input w3-border w3-white" name="password" type="text" /></p>
      <p>
      <button className="w3-btn w3-blue">Login</button></p>
    </form>
    </div>
    )
}
export default Login;