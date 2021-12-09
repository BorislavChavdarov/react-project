import {Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import CreateBook from "./components/CreateBook/CreateBook";
import AllBooks from "./components/AllBooks/AllBooks";
import Details from "./components/Details/Details";
import RecentBooks from "./components/RecentBooks/RecentBooks";
import { AuthProvider } from "./contexts/authContext";
import Logout from "./components/Logout/Logout";
import Edit from "./components/Edit/Edit";
function App() {
  return (
    <AuthProvider>
    <div className="App">
     <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/contact-us" element={<ContactUs />} />
       <Route path="/create-book" element={<CreateBook />} />
       <Route path="/all-books" element={<AllBooks />} />
       <Route path="/recent-books" element={<RecentBooks />} />
       <Route path="/details/:bookId" element={<Details />} />
       <Route path="/edit/:bookId" element={<Edit />} />
       <Route path="/logout" element={<Logout />} />
     </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
