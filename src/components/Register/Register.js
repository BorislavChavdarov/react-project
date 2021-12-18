import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/authContext";
import { register } from "../../services/authService";
import { Alert } from "react-bootstrap";
import "./Register.css"
const Register = () => {
  const navigate = useNavigate()
  const {login} = useAuthContext()
  const [errors, setErrors] = useState({name: false})


  const submitHandler =  (e) => {
    e.preventDefault();
    let { email, password, rePassword } = Object.fromEntries(new FormData(e.currentTarget));
if (password == rePassword) {
   register(email, password)
  .then(res => {
    setErrors(state => ({...state, name: false}))
    login(res)
    navigate("/")
   
  })

} else {
  setErrors(state => ({...state, name: 'Passwords do not match!'}))
}
  
  };
  const emailChangeHandler = (e) => {
    let email = e.target.value;
    if (!(/^\S+@\S+\.\S+$/gim).test(email)) {
        setErrors(state => ({...state, name: 'Invalid email address!'}))
    }   else {
      setErrors(state => ({...state, name: false}))
  }
};
const passwordChangeHandler = (e) => {
  let password = e.target.value;
  if (password.length < 4) {
      setErrors(state => ({...state, name: 'Pasword must be at least 4 characters long!'}))
  }   else {
    setErrors(state => ({...state, name: false}))
}
};

  
    return (
    <div className="w3-card-4 w3-display-middle w3-quarter register-container ">
    <div className="w3-container w3-blue">
      <h2>Register</h2>
    </div>
    <form className="w3-container" method="POST" onSubmit={submitHandler}>
    <Alert  variant="danger" show={errors.name}>{errors.name}</Alert>
      <p>      
      <label className="w3-text-blue"><b>Email</b></label>
      <input className="w3-input w3-border w3-white"  name="email" type="text" onChange={emailChangeHandler} /></p>
      <p>      
      <label className="w3-text-blue"><b>Password</b></label>
      <input className="w3-input w3-border w3-white" name="password" type="text" onChange={passwordChangeHandler} /></p>
      <p>
      <label className="w3-text-blue"><b>Repeat Password</b></label>
      <input className="w3-input w3-border w3-white" name="rePassword" type="text" /></p>
      <p>
      <button className="w3-btn w3-blue">Register</button></p>
    </form>
    </div>
    )
}
export default Register;