import { useState, useEffect } from "react"
import { useAuthContext } from "../../contexts/authContext.js";
import * as bookServices from "../../services/bookServices.js";
import BookCard from "../Common/BookCard.js";

const MyBooks =  () => {
 const { user } = useAuthContext()
  const [books, setBooks] = useState([]);
useEffect( async () => {
bookServices.getMyBooks(user._id)
.then(result => {
  setBooks(result)
})
}, [])
    return ( 
        
 
    <div className="w3-container w3-content w3-padding-64" style={{"maxWidth":"800px"}}>
      <div className="w3-row-padding w3-padding-32 book-list" style={{margin:"0 -16px"}}>
        

          {
          books.length > 0
          ?books.map(x => <BookCard key={x._id} book={x} />)
          :<h1>No books to show</h1>
        }

       
      </div>
    </div>  
 
  
  )
}
export default MyBooks;