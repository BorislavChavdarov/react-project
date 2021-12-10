import { useState, useEffect } from "react"
import * as bookServices from "../../services/bookServices.js";
import BookCard from "../Common/BookCard.js";

const RecentBooks =  () => {

  const [books, setBooks] = useState([]);
useEffect( async () => {
bookServices.getAllSortedByDate()
.then(result => {
  setBooks(result)
})
}, [])
    return ( 
        
  <div className="w3-black" id="tour">
    <div className="w3-container w3-content w3-padding-64" style={{"max-width":"800px"}}>
      <div className="w3-row-padding w3-padding-32" style={{margin:"0 -16px"}}>
        

          {books.map(x => <BookCard key={x._id} book={x} />)}

       
      </div>
    </div>
  </div>
  
  )
}
export default RecentBooks;