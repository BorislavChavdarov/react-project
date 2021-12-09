import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAuthContext } from "../../contexts/authContext.js";
import * as bookServices from "../../services/bookServices.js"

const Edit = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    const { user } = useAuthContext();
useEffect(() => {
    bookServices.getOne(bookId)
        .then(res => {
            setBook(res);
        })
}, [])
    
const submitHandler = (e) => {
    e.preventDefault();
    let { name, year, imgUrl, description, author, language } = Object.fromEntries(new FormData(e.currentTarget));
    console.log(name, year, imgUrl, description, author, language)
    bookServices.editBook(bookId, {name, year, imgUrl, description, author, language}, user.accessToken)
    .then(res => {
 navigate(`/details/${bookId}`)
    })
    
  }

    return (<div className="w3-card-4 w3-display-middle w3-quarter ">
        <div className="w3-container w3-blue">
            <h2>Edit Book</h2>
        </div>
        <form className="w3-container" method="POST" onSubmit={submitHandler} >
            <p>
                <label className="w3-text-blue"><b>Name</b></label>
                <input className="w3-input w3-border w3-white" name="name" type="text" defaultValue={book.name} /></p>
            <p>
                <label className="w3-text-blue"><b>year</b></label>
                <input className="w3-input w3-border w3-white" name="year" type="text" defaultValue={book.year}/></p>
            <p>
                <label className="w3-text-blue"><b>image URL</b></label>
                <input className="w3-input w3-border w3-white" name="imgUrl" type="text" defaultValue={book.imgUrl}/></p>
            <p>
                <label className="w3-text-blue"><b>Description</b></label>
                <input className="w3-input w3-border w3-white" name="description" type="text" defaultValue={book.description}/></p>
            <p>
                <label className="w3-text-blue"><b>Author</b></label>
                <input className="w3-input w3-border w3-white" name="author" type="text" defaultValue={book.author}/></p>
            <p>
                <label className="w3-text-blue"><b>Language</b></label>
                <input className="w3-input w3-border w3-white" name="language" type="text" defaultValue={book.language}/></p>
            <p>

                <button className="w3-btn w3-blue">Edit</button></p>
        </form>
    </div>)
}
export default Edit;