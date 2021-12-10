import { useState, useEffect } from "react"
import * as bookServices from "../../services/bookServices.js";
import BookCard from "../Common/BookCard.js";

const AllBooks =  () => {

  const [books, setBooks] = useState([]);
useEffect( async () => {
bookServices.getAll()
.then(result => {
  setBooks(result)
})
}, [])
    return ( 
        
  <div className="w3-black" id="tour">
    <div className="w3-container w3-content w3-padding-64" style={{"maxWidth":"800px"}}>
      <div className="w3-row-padding w3-padding-32" style={{margin:"0 -16px"}}>
        

      {
          books.length > 0
          ?books.map(x => <BookCard key={x._id} book={x} />)
          :<h1>No books to show</h1>
        }
       
      </div>
    </div>
  </div>
  
  )
}
export default AllBooks;