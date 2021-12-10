import { useNavigate } from "react-router";
import * as bookService from "../../services/bookServices.js";
import { useAuthContext } from "../../contexts/authContext";
import { isAuth } from "../../hoc/isAuth.js";
import { Alert } from "react-bootstrap"
import { useState } from "react";
import "./CreateBook.css"
const CreateBook = () => {
  const {user} = useAuthContext();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({name: false})
 const submitHandler = (e) => {
   e.preventDefault();
   let { title, year, imgUrl, description, author, language } = Object.fromEntries(new FormData(e.currentTarget));
  bookService.create({title, year, imgUrl, description, author, language}, user.accessToken)
   .then(res => {
navigate("/all-books")
   })
   
 }
 const titleChangeHandler = (e) => {
  let title = e.target.value;
  
  if (title.length < 3) {
      setErrors(state => ({...state, name: 'Book name must be at least 3 characters long!'}))
  }  else {
      setErrors(state => ({...state, name: false}))
  }
};
const yearChangeHandler = (e) => {
  let year = e.target.value;
  if (!Number.isInteger(+year)) {
      setErrors(state => ({...state, name: 'Year must be a number!'}))
  }  else {
      setErrors(state => ({...state, name: false}))
  }
};
const imgUrlChangeHandler = (e) => {
  let imgUrl = e.target.value;
  if (!(/^https?:\/\//i).test(imgUrl)) {
      setErrors(state => ({...state, name: 'Invalid image URL!(must begin with https:// or http://'}))
  }   else {
    setErrors(state => ({...state, name: false}))
}
};
const descriptionChangeHandler = (e) => {
  let description = e.target.value;
  if (description.length < 6) {
      setErrors(state => ({...state, name: 'Description must be at least 6 characters long!'}))
  }  else {
      setErrors(state => ({...state, name: false}))
  }
};
const authorChangeHandler = (e) => {
  let author = e.target.value;
  if (author.length < 3) {
      setErrors(state => ({...state, name: 'Author name must be at least 3 characters long!'}))
  }  else {
      setErrors(state => ({...state, name: false}))
  }
};
const languageChangeHandler = (e) => {
  let language = e.target.value;
  if (language.length < 3) {
      setErrors(state => ({...state, name: 'language must be at least 3 characters long!'}))
  }  else {
      setErrors(state => ({...state, name: false}))
  }
};
    return (
        <div className="w3-card-4 w3-display-middle w3-quarter create-container">
        <div className="w3-container w3-blue">
          <h2>Create Book</h2>
        </div>
        <form className="w3-container" method="POST" onSubmit={submitHandler}>
        <Alert  variant="danger" show={errors.name}>{errors.name}</Alert>
          <p>      
          <label className="w3-text-blue"><b>Title</b></label>
          <input className="w3-input w3-border w3-white" name="title" type="text" onChange={titleChangeHandler} /></p>
          <p>       
          <label className="w3-text-blue"><b>year</b></label>
          <input className="w3-input w3-border w3-white" name="year" type="text" onChange={yearChangeHandler} /></p>
          <p>       
          <label className="w3-text-blue"><b>image URL</b></label>
          <input className="w3-input w3-border w3-white" name="imgUrl" type="text" onChange={imgUrlChangeHandler} /></p>
          <p>       
          <label className="w3-text-blue"><b>Description</b></label>
          <input className="w3-input w3-border w3-white" name="description" type="text" onChange={descriptionChangeHandler} /></p>
          <p>       
          <label className="w3-text-blue"><b>Author</b></label>
          <input className="w3-input w3-border w3-white" name="author" type="text" onChange={authorChangeHandler} /></p>
          <p>      
          <label className="w3-text-blue"><b>Language</b></label>
          <input className="w3-input w3-border w3-white" name="language" type="text" onChange={languageChangeHandler} /></p>
          <p>  
         
          <button className="w3-btn w3-blue">Create</button></p>
        </form>
        </div>
        )
}
export default isAuth(CreateBook);

