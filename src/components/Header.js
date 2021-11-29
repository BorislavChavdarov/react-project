//import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">HOME</a>
          <a href="#band" className="w3-bar-item w3-button w3-padding-large w3-hide-small">ALL BOOKS</a>
          <a href="#band" className="w3-bar-item w3-button w3-padding-large w3-hide-small">RECENT BOOKS</a>
          <a href="#band" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CREATE BOOK</a>
          <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT US</a>
          
          <a href="#tour" className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right">LOGOUT</a>
          <a href="#tour" className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right">LOGIN</a>
          <a href="#tour" className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right">REGISTER</a>
          
         
        </div>
      </div>
    );
};

export default Header;