import { Link, NavLink } from 'react-router-dom';
import "./BookCard.css"
const BookCard = ({
    book
}) => {
    return ( 
    <div className="w3-quarter w3-margin-bottom book-card">
      <div className="img-container">
    <img src={book.imgUrl} alt="book img" className="w3-hover-opacity" />
    </div>
    <div className="container w3-white white-div">
    
      <p className="w3-opacity">{book.title}</p>
      
      <Link to={`/details/${book._id}`} className="w3-button w3-black w3-margin-bottom details-button" >Details</Link>
    </div>
  </div>)
}
export default BookCard;