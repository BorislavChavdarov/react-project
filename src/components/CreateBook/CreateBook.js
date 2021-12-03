


const CreateBook = () => {
    return (
        <div className="w3-card-4 w3-display-middle w3-quarter ">
        <div className="w3-container w3-blue">
          <h2>Create Book</h2>
        </div>
        <form className="w3-container" action="/action_page.php">
          <p>      
          <label className="w3-text-blue"><b>Name</b></label>
          <input className="w3-input w3-border w3-white" name="name" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>year</b></label>
          <input className="w3-input w3-border w3-white" name="Year" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>image URL</b></label>
          <input className="w3-input w3-border w3-white" name="imgUrl" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>Description</b></label>
          <input className="w3-input w3-border w3-white" name="description" type="text" /></p>
          <p>       
          <label className="w3-text-blue"><b>Author</b></label>
          <input className="w3-input w3-border w3-white" name="author" type="text" /></p>
          <p>      
         
          <button className="w3-btn w3-blue">Create</button></p>
        </form>
        </div>
        )
}
export default CreateBook;