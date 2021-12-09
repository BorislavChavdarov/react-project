import { useNavigate } from "react-router";
import * as bookService from "../../services/bookServices.js";
import { useAuthContext } from "../../contexts/authContext";


const CreateBook = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate()
 const submitHandler = (e) => {
   e.preventDefault();
   let { name, year, imgUrl, description, author, language } = Object.fromEntries(new FormData(e.currentTarget));
  bookService.create({name, year, imgUrl, description, author, language}, user.accessToken)
   .then(res => {
navigate("/all-books")
   })
   
 }
    return (
        <div className="w3-card-4 w3-display-middle w3-quarter ">
        <div className="w3-container w3-blue">
          <h2>Create Book</h2>
        </div>
        <form className="w3-container" method="POST" onSubmit={submitHandler}>
          <p>      
          <label className="w3-text-blue"><b>Name</b></label>
          <input className="w3-input w3-border w3-white" name="name" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>year</b></label>
          <input className="w3-input w3-border w3-white" name="year" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>image URL</b></label>
          <input className="w3-input w3-border w3-white" name="imgUrl" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>Description</b></label>
          <input className="w3-input w3-border w3-white" name="description" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>Author</b></label>
          <input className="w3-input w3-border w3-white" name="author" type="text" /></p>
          <p>      
          <label className="w3-text-blue"><b>Language</b></label>
          <input className="w3-input w3-border w3-white" name="language" type="text" /></p>
          <p>  
         
          <button className="w3-btn w3-blue">Create</button></p>
        </form>
        </div>
        )
}
export default CreateBook;