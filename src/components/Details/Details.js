import {React, useEffect, useState} from "react";
import { useParams } from "react-router";
import * as bookServices from "../../services/BookServices.js"

const Details = () => {
  const { bookId } = useParams();
  console.log(bookId)
  
  const [book, setBook] = useState({});
useEffect( async () => {
bookServices.getOne(bookId)
.then(result => {
  console.log(result)
  setBook(result)
})
}, [])
    return (
      <div>
        <div className="w3-row-padding ">
        
        <div className="w3-twothird w3-padding-64">
          <img src={book.imgUrl} style={{width:"50%"}} />
          <h2>Info</h2>
          <table className="w3-table w3-striped w3-bordered w3-border" style={{width:"50%"}}>
          <thead className="w3-blue"><th style={{width:"30%"}}></th><th></th></thead>
          <tr><td style={{width:"50%"}}>Year</td><td>{book.year}</td></tr>
          <tr><td>Author</td><td>{book.author}</td></tr>
          <tr><td>Language</td><td>{book.language}</td></tr>
          </table>
       
        </div>
        <div className="w3-third w3-display-topright w3-padding-64" style={{width:"50%"}}>
          <h1>Description:</h1>
          <p>{book.description}</p>
         
         </div>
         </div>
         </div>)
}
export default Details;