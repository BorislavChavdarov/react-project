import React from "react"


const Details = () => {
    return (
        <React.Fragment>
        <div className="w3-row-padding ">
        
        <div className="w3-twothird">
          <img src="https://wallpaperaccess.com/full/6875194.jpg" style={{width:"100%"}} />
          <h2>Info</h2>
          <table className="w3-table w3-striped w3-bordered w3-border">
          <thead className="w3-blue"><th style={{width:"30%"}}></th><th></th></thead>
          <tr><td style={{width:"30%"}}>Date of creation</td><td>01.01.2009</td></tr>
          <tr><td>Author</td><td>someone</td></tr>
          </table>
       
        </div>
        
        <div className="w3-third">
          <h1>Chardonnay</h1>
          <p>Chardonnay is the world's most popular wine grape.</p>
          <p>The taste of the Chardonnay grape is very neutral and easy to like.</p>
          <p>Many of the Chardonnay flavors are derived from terroir and oak-aging.</p>
          <p>The flavors varies from noticeable acidity (Cold Climates), to crisply and mineral (Chablis, France) 
          with flavors of green plum, apple and pear, to heavy oak and tropical fruit flavors (the New World). </p>
          <p>In cooler climates Chardonnay tends to be under-riped. </p>
          <p>In warmer climates the flavors tend to vary from lemon to peach and melon.</p>
          <p>In very warm climates Chardonnay tends to be over-riped.</p>
          <p>Oaked Chardonnay tends to have softer acidity and more fruit flavors with 
          added butter, cream and hazelnut notes.</p>
         </div>
         </div>
         </React.Fragment>)
}
export default Details;