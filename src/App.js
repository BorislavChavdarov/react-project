import {Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
       <Route path="/login" element={<Login />}/>
       <Route path="/register" element={<Register />}/>
       <Route path="/contact-us" element={<ContactUs />}/>
     </Routes>
    </div>
  );
}

export default App;
