import { Link, NavLink } from 'react-router-dom';

const BookCard = ({
    book
}) => {
    return ( 
    <div className="w3-quarter w3-margin-bottom">
    <img src={book.imgUrl} alt="book img" style={{width:"100%"}} className="w3-hover-opacity" />
    <div className="w3-container w3-white">
      <p><b>{book.title}</b></p>
      <p className="w3-opacity">{book.year}</p>
      
      <Link to={`/details/${book._id}`} className="w3-button w3-black w3-margin-bottom" >Details</Link>
    </div>
  </div>)
}
export default BookCard;