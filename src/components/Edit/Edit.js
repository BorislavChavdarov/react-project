import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Alert } from "react-bootstrap"
import { useAuthContext } from "../../contexts/authContext.js";
import { isAuth } from "../../hoc/isAuth.js";
import * as bookServices from "../../services/bookServices.js"

const Edit = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [errors, setErrors] = useState({name: false})
useEffect(() => {
    bookServices.getOne(bookId)
        .then(res => {
            setBook(res);
        })
}, [])
    
const submitHandler = (e) => {
    e.preventDefault();
    let { name, year, imgUrl, description, author, language } = Object.fromEntries(new FormData(e.currentTarget));
   
    bookServices.editBook(bookId, {name, year, imgUrl, description, author, language}, user.accessToken)
    .then(res => {
 navigate(`/details/${bookId}`)
    })
    
  }
  const nameChangeHandler = (e) => {
    let currentName = e.target.value;
    
    if (currentName.length < 3) {
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
    return (<div className="w3-card-4 w3-display-middle w3-quarter ">
        <div className="w3-container w3-blue">
            <h2>Edit Book</h2>
        </div>
        <form className="w3-container" method="POST" onSubmit={submitHandler} >
        <Alert  variant="danger" show={errors.name}>{errors.name}</Alert>
            <p>
                <label className="w3-text-blue"><b>Name</b></label>
                <input className="w3-input w3-border w3-white" name="name" type="text" defaultValue={book.name} onChange={nameChangeHandler} /></p>
            <p>
                <label className="w3-text-blue"><b>year</b></label>
                <input className="w3-input w3-border w3-white" name="year" type="text" defaultValue={book.year} onChange={yearChangeHandler} /></p>
            <p>
                <label className="w3-text-blue"><b>image URL</b></label>
                <input className="w3-input w3-border w3-white" name="imgUrl" type="text" defaultValue={book.imgUrl} onChange={imgUrlChangeHandler} /></p>
            <p>
                <label className="w3-text-blue"><b>Description</b></label>
                <input className="w3-input w3-border w3-white" name="description" type="text" defaultValue={book.description} onChange={descriptionChangeHandler} /></p>
            <p>
                <label className="w3-text-blue"><b>Author</b></label>
                <input className="w3-input w3-border w3-white" name="author" type="text" defaultValue={book.author} onChange={authorChangeHandler} /></p>
            <p>
                <label className="w3-text-blue"><b>Language</b></label>
                <input className="w3-input w3-border w3-white" name="language" type="text" defaultValue={book.language} onChange={languageChangeHandler} /></p>
            <p>

                <button className="w3-btn w3-blue">Edit</button></p>
        </form>
    </div>)
}
export default isAuth(Edit);