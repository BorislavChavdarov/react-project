


const BookCard = ({
    book
}) => {
    return ( <div className="w3-quarter w3-margin-bottom">
    <img src={book.imgUrl} alt="New York" style={{width:"100%"}} className="w3-hover-opacity" />
    <div className="w3-container w3-white">
      <p><b>{book.title}</b></p>
      <p className="w3-opacity">{book.year}</p>
      
      <button className="w3-button w3-black w3-margin-bottom" >Details</button>
    </div>
  </div>)
}
export default BookCard;