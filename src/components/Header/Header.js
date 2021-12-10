import { Link, NavLink } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';


const Header = () => {
  const { user }= useAuthContext();
    return (
        <div className="w3-top">
        <div className="w3-bar w3-black w3-card">
          <Link to="/" className="w3-bar-item w3-button w3-padding-large">HOME</Link>
          <Link to="/all-books" className="w3-bar-item w3-button w3-padding-large w3-hide-small">ALL BOOKS</Link>
          <Link to="/recent-books" className="w3-bar-item w3-button w3-padding-large w3-hide-small">RECENTLY ADDED BOOKS</Link>
          {Boolean(user.accessToken)
          ? <Link to="/create-book" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CREATE BOOK</Link>
          : <></>
        }
          
          <Link to="/contact-us" className="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT US</Link>
          
          {Boolean(user.accessToken)
          ? <Link to="/logout" className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right">LOGOUT</Link>
          : <><Link to="/login" className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right">LOGIN</Link>
          <Link to="/register" className="w3-bar-item w3-button w3-padding-large w3-hide-small w3-right">REGISTER</Link></>
        }
          
          
          
         
        </div>
      </div>
    );
};

export default Header;