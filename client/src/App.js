import logo from "./logo.svg";
import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Import Routes

import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Ordersscreen from "./screens/Ordersscreen";
import AdminPage from "./admin/AdminPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          {" "}
          {/* Use Routes here */}
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/orders" element={<Ordersscreen />} />
          <Route path="/admin" element={<AdminPage />} />
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
