


const Register = () => {
    return (
    <div className="w3-card-4 w3-display-middle w3-quarter ">
    <div className="w3-container w3-blue">
      <h2>Register</h2>
    </div>
    <form className="w3-container" action="/action_page.php">
      <p>      
      <label className="w3-text-blue"><b>Usename</b></label>
      <input className="w3-input w3-border w3-white" name="username" type="text" /></p>
      <p>      
      <label className="w3-text-blue"><b>Password</b></label>
      <input className="w3-input w3-border w3-white" name="password" type="text" /></p>
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