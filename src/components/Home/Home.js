import { useEffect, useState } from "react";
import BookCard from "../Common/BookCard.js";
import * as bookServices from "../../services/bookServices.js"
import "./Home.css"
const Home = () => {


  const [books, setBooks] = useState([]);
useEffect( async () => {
bookServices.getAllSortedByDate()
.then(result => {
  setBooks(result.slice(0, 3))
})
}, [])


    return ( 
        <div className="app-home">
    <div className="mySlides w3-display-container w3-center">
    <img src="https://images.wallpaperscraft.com/image/single/books_library_shelves_collection_120472_2560x1024.jpg" style={{width:"100%"}} />
    
  </div>
  

  
  <div className="w3-container w3-content w3-center w3-padding-64" style={{"maxWidth":"800px"}} id="band">
    <h2 className="w3-wide">BOOKS</h2>
    
    <p className="w3-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At elementum eu facilisis sed odio morbi quis commodo. Porttitor massa id neque aliquam vestibulum. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Imperdiet massa tincidunt nunc pulvinar sapien et. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Eu facilisis sed odio morbi quis commodo odio aenean. Aliquam sem et tortor consequat id porta nibh venenatis. Mauris ultrices eros in cursus turpis massa tincidunt. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Vivamus arcu felis bibendum ut tristique et. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Odio pellentesque diam volutpat commodo sed egestas egestas. Lacus laoreet non curabitur gravida arcu ac tortor. Porttitor massa id neque aliquam. Porttitor eget dolor morbi non arcu risus quis.</p>
    <div className="w3-row w3-padding-32">
   
    </div>
  </div>
  
  <div className="w3-black" id="tour">
    <div className="w3-container w3-content w3-padding-64" style={{"maxWidth":"800px"}}>

    <div className="w3-row-padding w3-padding-32" style={{margin:"0 -16px"}}>
        
    {books.map(x => <BookCard key={x._id} book={x} />)}
      </div>
    </div>
  </div>
  </div>
  )
}
export default Home;