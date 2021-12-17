import {React, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext.js";
import * as bookServices from "../../services/bookService.js"
import * as likeService from "../../services/likeService.js"
import "./Details.css"
const Details = () => {
  const { bookId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);
  const [hasAlreadyLiked, setHasAlreadyLiked] = useState(false)
 
  

  const [book, setBook] = useState({});
useEffect( async () => {

bookServices.getOne(bookId)
.then(result => {
 setBook(result)
})

likeService.getLikes(bookId)
  .then(res => {
    console.log(user._id);
    console.log(res)
    if(res.includes(user._id)) {
      setHasAlreadyLiked(true)
    }
    setLikes(res.length)
  }) 

}, [])
const deleteHandler = (e) => {
  e.preventDefault();
 bookServices.deleteBook(bookId, user.accessToken)
 .then(() => {
navigate("/all-books")
 })
}


const likeHandler = async () => {
await  likeService.like(user._id, bookId, user.accessToken)
.then((res) => {
  setLikes(state => state+1)
  setHasAlreadyLiked(true)
})
}



    return (
      <div className="details-page">
        <div className="w3-row-padding ">
        
        <div className="w3-twothird w3-padding-64">
          <img src={book.imgUrl} style={{width:"50%"}} />
          
       
        </div>
        <div className="w3-third w3-display-topright w3-padding-64" style={{width:"50%"}}>
          <h1 >Description:</h1>
          <p>{book.description}</p>
          {user._id == book._ownerId
                   ?(<>
                    <Link to={`/edit/${book._id}`} className="w3-btn w3-green ">Edit</Link>
                    <a onClick={deleteHandler} className="w3-btn w3-red">Delete</a>
                    </>
                    )
                    : ( user._id == ""
                         ? (<p>login to like post</p>)
                         : ( hasAlreadyLiked == true
                           ? (<p>you have already liked this postt</p>)
                           : (<button className="w3-btn w3-blue" onClick={likeHandler}>Like</button>)
                           )
                    )
                        }
       
         
          
         <h1>Likes:{likes}</h1>
         <h2 className="info-header">Info</h2>
          <table className="w3-table w3-striped w3-bordered w3-border" style={{width:"100%"}}>
          <thead className="w3-blue"><th style={{width:"30%"}}></th><th></th></thead>
          <tr><td style={{width:"50%"}}>Year</td><td>{book.year}</td></tr>
          <tr><td>Author</td><td>{book.author}</td></tr>
          <tr><td>Language</td><td>{book.language}</td></tr>
          </table>
         </div>
         </div>
         </div>)
}
export default Details;